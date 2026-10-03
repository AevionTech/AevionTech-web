import { createHash } from "node:crypto";
import { NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";
import { z } from "zod";
import { getWaitlistDatabase } from "@/lib/firebase-admin";

export const runtime = "nodejs";

const signupSchema = z.object({
  email: z.string().trim().max(254).email().transform((email) => email.toLowerCase()),
  website: z.string().max(500).optional(),
});

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return NextResponse.json({ error: "Please join from the Mosy website." }, { status: 403 });
  }

  let body: unknown;
  try {
    const text = await request.text();
    if (text.length > 4096) {
      return NextResponse.json({ error: "Request is too large." }, { status: 413 });
    }
    body = JSON.parse(text);
  } catch {
    return NextResponse.json({ error: "Please submit a valid email address." }, { status: 400 });
  }
  const signup = signupSchema.safeParse(body);
  if (!signup.success || signup.data.website) {
    return NextResponse.json({ error: "Please submit a valid email address." }, { status: 400 });
  }

  try {
    const database = getWaitlistDatabase();
    const signupId = createHash("sha256")
      .update(`mosy:${signup.data.email}`)
      .digest("hex");
    const signupReference = database.collection("waitlist").doc(signupId);

    await database.runTransaction(async (transaction) => {
      const existingSignup = await transaction.get(signupReference);
      if (existingSignup.exists) return;

      transaction.create(signupReference, {
        email: signup.data.email,
        product: "mosy",
        source: "aeviontech-web",
        consent: "Mosy early access and launch emails",
        createdAt: FieldValue.serverTimestamp(),
      });
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof Error && error.message.includes("credentials are not configured")) {
      return NextResponse.json(
        { error: "Waitlist signup is temporarily unavailable. Please try again later or contact support@aeviontech.com." },
        { status: 503 },
      );
    }
    return NextResponse.json({ error: "We couldn’t save your signup. Please try again shortly." }, { status: 502 });
  }
}
