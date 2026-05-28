# Portfolio Website

A personal portfolio website built with React, Vite, Tailwind CSS, and modern UI animation.

## Overview

This project is a responsive portfolio site showcasing projects, skills, experience, certificates, and a contact form. It uses a clean design system with card layouts, motion transitions, and consistent dark/light theming.

## Features

- React + Vite frontend application
- Responsive portfolio pages
- Animated page transitions with `framer-motion`
- Contact form with inline success/error feedback
- Custom UI components: buttons, cards, badges, theme toggle
- Clean Tailwind-based styling and utility-first layout

## Tech Stack

- React 19
- Vite 6
- Tailwind CSS 4
- Framer Motion
- Lucide icons
- React Router DOM
- ESLint for linting

## Getting Started

### Prerequisites

- Node.js 20+ installed
- Git installed

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open the local Vite URL shown in the terminal to view the site.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Project Structure

- `src/` - application source code
  - `components/` - reusable UI components
  - `layout/` - layout and page transition components
  - `pages/` - individual page views
  - `context/` - theme context provider
  - `styles/` - global styles
- `public/` - static assets, including `favicon.svg`
- `server/` - backend or API-related files

## Favicon / Site Icon

The browser tab icon is defined in `index.html`:

```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```

That means the app uses `public/favicon.svg` as the site icon. For a general portfolio icon, use:

- a simple logo or monogram (initials like `N` or `NV`)
- a clean geometric mark or glyph
- a single-color SVG that is easy to recognize at small sizes

If you want a fallback for older browsers, you can also add a `.ico` version and additional `<link>` tags.

## Notes

- Keep environment files out of Git by using `.gitignore`
- The contact form now shows inline approvals and errors directly in the page

---

Made for a clean, professional portfolio presentation with easy local development and build steps.