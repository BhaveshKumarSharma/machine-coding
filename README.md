This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project Overview:

A curated collection of popular and frequently asked React.js/Next.js machine coding questions encountered during interviews. This project provides clean, working code and live demonstrations for each problem to help solidify understanding.

## Project Objective

The primary goal of this project is to serve as a personal knowledge base and preparation tool for frontend interviews. It contains a growing list of common coding challenges, allowing for quick revision of concepts and practical application. Each problem is presented with both its source code and a live, interactive demonstration.

### Features

- Problem Library: A collection of diverse machine coding questions.

- Live Demos: Interact with the working solution for each problem.

- Code Preview: Easily view the component-based source code directly in the browser.

- Responsive Design: Fully responsive layout for seamless viewing on any device.

- Dynamic Routing: Clean, SEO-friendly URLs for each coding problem.

### Tech Stack

This project is built with a modern, industry-standard tech stack:

- Framework: Next.js v14 (with App Router)

- Library: React v18

- Styling: Tailwind CSS

## Routing

Routes are generated dynamically based on the slug for each coding problem defined in the metadata. For example, a problem with the slug progress-bar will be accessible at the URL /progress-bar.

Next.js's generateStaticParams function is used to create these pages at build time, ensuring fast load times and good SEO.

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
