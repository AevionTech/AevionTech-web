"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function WaitlistForm() {
  const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "pending") return;
    const data = new FormData(event.currentTarget);
    setStatus("pending");
    setError("");
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.get("email"), website: data.get("website") }),
      });
      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Unable to join right now. Please try again.");
      }
      setStatus("success");
    } catch (error) {
      setError(error instanceof Error ? error.message : "Please check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <div aria-live="polite">
      {status === "success" ? (
        <div role="status" className="space-y-3 py-4">
          <CheckCircle2 className="h-8 w-8 text-accent" aria-hidden="true" />
          <p className="text-xl font-semibold">You’re on the list.</p>
          <p className="text-sm text-muted-foreground">Thanks for your interest in Mosy. We’ll email you when early access opens.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4" aria-busy={status === "pending"}>
          <div className="space-y-2">
            <label htmlFor="waitlist-email" className="text-sm font-medium">Email address</label>
            <Input id="waitlist-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} disabled={status === "pending"} aria-invalid={status === "error"} aria-describedby={error ? "waitlist-error waitlist-notice" : "waitlist-notice"} className="h-12" />
          </div>
          <div className="hidden" aria-hidden="true">
            <label htmlFor="waitlist-website">Website</label>
            <input id="waitlist-website" name="website" tabIndex={-1} autoComplete="off" />
          </div>
          {error && <p id="waitlist-error" role="alert" className="text-sm text-red-400">{error}</p>}
          <Button type="submit" variant="primary" size="lg" className="w-full" disabled={status === "pending"}>
            {status === "pending" ? <>Joining… <Loader2 className="animate-spin" aria-hidden="true" /></> : <>Join the waitlist <ArrowRight aria-hidden="true" /></>}
          </Button>
          <p id="waitlist-notice" className="text-xs text-muted-foreground leading-relaxed">
            By joining, you agree to receive emails from Aevion Technology about Mosy’s early access and launch.
          </p>
        </form>
      )}
    </div>
  );
}
