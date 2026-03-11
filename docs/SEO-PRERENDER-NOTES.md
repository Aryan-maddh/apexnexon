# SEO / Prerender Notes

## react-snap (Option A)

- **postbuild** runs `react-snap` after `craco build`.
- **index.js** uses `hydrateRoot` when `#root` has child nodes (pre-rendered HTML), otherwise `createRoot` + `render`.
- **Caveat:** react-snap has known compatibility issues with React 18+ and may fail in CI (Puppeteer/Chrome crash). The `postbuild` script is written to allow the build to succeed even if react-snap fails (`react-snap || echo ...`). If `react-snap` fails (e.g. no Chrome in environment), you can:
  - Remove the `postbuild` script temporarily and rely on client-side rendering, or
  - Use **Option B:** prerender.io / Vercel prerender, or
  - Use **Option C:** migrate to Next.js for SSR/SSG so crawlers receive full HTML.

## Sitemap and service URLs

- The app uses **numeric IDs** for service detail pages: `/services/1`, `/services/2`, … `/services/10` (see `frontend/src/data/mock.js` and route `/services/:id`). There are no slug-based URLs (e.g. `/services/ai-automation`) in the codebase.
- **Blog:** Only the listing route exists (`/blog`). There is no `/blog/:id` or `/blog/:slug` for individual posts, so the sitemap does not include per-post URLs.
- **Case studies:** Only the listing route (`/case-studies`); no individual case study detail route.

To add SEO-friendly slugs later, you would: add a `slug` field to services (and blog/case studies), change the route to `/services/:slug`, and update the sitemap (or generate it from data).

## Static files on Vercel

- **vercel.json** includes explicit rewrites for `/llms.txt`, `/llms-full.txt`, `/robots.txt`, and `/sitemap.xml` so they are served from the build output even if a catch-all exists.
