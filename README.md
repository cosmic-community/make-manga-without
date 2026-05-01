# Make Manga Without 📖

![App Preview](https://imgix.cosmicjs.com/8236a5c0-456c-11f1-a3ff-65bbafb72c6d-autopilot-photo-1519692933481-e162a57d6721-1777646776852.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautiful Next.js manga website inspired by Lord Krishna, telling the story of 5 children navigating adventures without weapons or magical powers. Built with Cosmic CMS to manage chapters, characters, and locations.

## Features

- 📚 **Chapter Reader** — Read chapters with synopsis, story content, cover art, and page-by-page artwork
- 👦 **Character Gallery** — Browse all characters with their portraits, roles, ages, and backstories
- 🌄 **Locations** — Explore the magical settings of the manga
- 🎨 **Krishna-inspired Design** — Deep blues, saffron, and gold palette with elegant typography
- 📱 **Fully Responsive** — Beautiful on every device
- ⚡ **Server Components** — Fast, SEO-friendly Next.js 16 App Router
- 🖼️ **Imgix Optimization** — Auto-optimized images for performance

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69f4bc50c27d356ff5002add&clone_repository=69f4bd77c27d356ff5002b1f)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for: Make a manga without any weapon or magical power of 5 kid
>
> The user is rebuilding an existing website and provided these design notes: Make a Manga on the basis of lord krishna. Factor these preferences into the content structure."

### Code Generation Prompt

> "Build a Next.js application for a website called 'Make manga without'. The content is managed in Cosmic CMS with the following object types: characters, locations, chapters. Create a beautiful, modern, responsive design with a homepage and pages for each content type. Make a manga without any weapon or magical power of 5 kid. Make a Manga on the basis of lord krishna."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Cosmic SDK](https://www.cosmicjs.com/docs)
- [Imgix](https://imgix.com) for image optimization

## Getting Started

### Prerequisites
- [Bun](https://bun.sh) installed
- A Cosmic account and bucket with the required content types

### Installation

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Cosmic SDK Examples

```typescript
// Fetch all chapters with related content
const { objects } = await cosmic.objects
  .find({ type: 'chapters' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

The app uses three content types: `characters`, `locations`, and `chapters`. Chapters reference featured characters and locations via object metafields, fetched with `depth(1)` for nested data access.

## Deployment Options

- **Vercel** (recommended): Push to GitHub and import in Vercel
- **Netlify**: Connect repo and set environment variables

Set these environment variables: `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, `COSMIC_WRITE_KEY`.

<!-- README_END -->