# Resume Glaze Glow

A personal developer portfolio and resume website built with React, TypeScript, Tailwind CSS, and shadcn-ui components.

## About

This project showcases the resume, experience, skills, projects, and GitHub statistics of Alok Kumar Singh. It is designed as a modern frontend portfolio with a clean layout and responsive design.

## Key features

- Hero section with profile summary and resume download
- Experience, skills, projects, achievements, and contact sections
- GitHub statistics cards for repo stats, top languages, streaks, and contributions
- Responsive design with Tailwind CSS and reusable shadcn-ui components
- Floating download CTA for quick resume access

## Tech stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn-ui / Radix UI
- Lucide icons
- React Router DOM

## Local setup

```sh
git clone <YOUR_GIT_URL>
cd resume-glaze-glow-main
npm install
npm run dev
```

Then open the local Vite URL shown in your terminal.

## Available scripts

- `npm run dev` — start the local development server
- `npm run build` — build the production bundle
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint across the source files

## Notes

- GitHub statistics are loaded from external image widgets. If the stats cards do not appear, the external service may be temporarily unavailable.
- The resume download button is available in the hero section and as a floating action button.

## Project structure

- `src/components` — reusable UI sections and page components
- `src/pages/Index.tsx` — main landing page composition
- `src/assets` — profile images and static assets
- `src/lib` — utility helpers

## Author

Alok Kumar Singh

## License

MIT
