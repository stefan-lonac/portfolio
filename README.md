# Stefan Lončarić — Portfolio

A production-ready portfolio built with Next.js, React and strict TypeScript. The site is server-rendered and includes responsive layouts, dark mode, accessible animations, project filtering and complete SEO metadata.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

Portfolio content is intentionally separated from presentation:

- `data/projects.tsx` — projects and their technologies
- `data/skills.tsx` — skill groups
- `data/career.ts` — professional experience and education
- `data/site.ts` — identity, contact details, navigation and social links

Add or edit objects in these files; reusable components render them automatically.

## Quality checks

```bash
npm run check
```

This runs strict TypeScript checking, ESLint and a full production build.

## Before deployment

Update `siteConfig.url` in `data/site.ts` if the production domain changes. The canonical URL, Open Graph metadata, JSON-LD, sitemap and robots file derive from that value.

## GitHub Pages deployment

Pushes to `main` are automatically checked, statically exported and deployed by `.github/workflows/deploy-pages.yml`.

In the GitHub repository, open **Settings → Pages** and set **Source** to **GitHub Actions**. The production build uses `/portfolio` as its base path and publishes the generated `out` directory.
