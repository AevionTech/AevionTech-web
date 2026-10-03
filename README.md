This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Mosy waitlist

The homepage features Mosy and an email signup form. Intel routes are hidden by
`app/intel/layout.tsx`; the original articles remain in the repository.

The waitlist stores signups in the `waitlist` collection in Cloud Firestore. In
Firebase Console, enable Firestore and open **Project settings > Service accounts**.
Generate a private key and copy its `project_id`, `client_email`, and `private_key`
values into `.env.local` using the names in `.env.example`. Add the same three
server-side environment variables to the deployment. Never commit the downloaded
JSON key, paste it into chat, or prefix these variables with `NEXT_PUBLIC_`.

`POST /api/waitlist` validates and normalizes email addresses, checks the request
origin, and rejects submissions that fill the hidden spam field. It creates one
Firestore document per normalized email using a non-reversible SHA-256 document ID,
so repeat submissions succeed without creating duplicates. Each document contains
`email`, `product`, `source`, `consent`, and a server-generated `createdAt` timestamp.
The Admin SDK runs only in the server route; the browser receives no Firebase key or
direct database access. Configure rate limiting at the hosting layer before a large
public launch.

The repository includes `firestore.rules`, which denies all client-side access.
Deploy those rules with the Firebase CLI or paste them into **Firestore Database >
Rules** in Firebase Console and publish them. Server-side Admin SDK writes continue
to work because Admin credentials do not use client security rules.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
