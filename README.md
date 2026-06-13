# DAM Result Card

A small Next.js app that renders a DAM-style trust verification result card for a suspicious claim. It simulates a short loading state and then shows the verdict, risk signals, recommended next steps, and evidence summary.

## What It Shows

- Verdict badge with a risk level and label
- Risk signs with short explanations
- Recommended next steps
- Evidence section with source, confidence, and supporting text
- Footer metadata for the check time and analysis duration

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the app at `http://localhost:3000`.

## Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Project Structure

- `src/app` - App router entry points and global styles
- `src/components` - Result card UI pieces
- `src/lib/mockData.ts` - Sample result used on the home page
- `src/types` - Shared TypeScript types

## Notes

The home page currently renders a mocked DAM result so the layout can be previewed without a backend.