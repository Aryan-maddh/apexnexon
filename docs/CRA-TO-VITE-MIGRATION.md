# CRA → Vite + SSG Migration

## Summary

- **Replaced:** Create React App (react-scripts) + Craco with **Vite** and **vite-plugin-prerender**.
- **Build:** `npm run build` runs `vite build` then prerenders all routes with Puppeteer.
- **Output:** `dist/` (Vite default). Prerender writes `dist/index.html`, `dist/about/index.html`, etc.

## 1. Vite build status

**Vite build succeeds.** Prerender runs and reports "All routes rendered successfully!".

## 2. First 50 lines of `dist/index.html` (after build)

```html
<!DOCTYPE html><html lang="en"><head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="theme-color" content="#000000">
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
        <meta name="description" content="ApexNexon is a technology and AI solutions company...">
        <meta property="og:site_name" content="ApexNexon">
        <meta property="og:title" content="ApexNexon | AI Automation &amp; Custom Software Development">
        ...
        <title>ApexNexon | AI Automation &amp; Custom Software Development</title>
      <script type="module" crossorigin="" src="/assets/index-....js"></script>
      <link rel="stylesheet" crossorigin="" href="/assets/index-....css">
    </head>
    <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>
    </body></html>
```

- **`grep -o 'ApexNexon' dist/index.html`** returns **7 matches** (all in `<head>` meta/title). Body `#root` may still be empty in some environments (see below).

## 3. Prerendered route files

- **dist/about/index.html** — exists
- **dist/faq/index.html** — exists  
- **dist/services/index.html** — exists
- **dist/services/1/index.html** … **dist/services/10/index.html** — exist
- **dist/solutions/index.html**, **dist/case-studies/index.html**, **dist/blog/index.html**, **dist/contact/index.html**, **dist/privacy/index.html**, **dist/terms/index.html** — exist

## 4. Craco config → Vite (manual migration)

From **craco.config.js** the following were **not** ported automatically; they need manual equivalents if you still want them:

| Craco feature | Vite equivalent |
|---------------|------------------|
| **Alias `@` → `src`** | ✅ Done in `vite.config.js` (`resolve.alias`) |
| **ESLint webpack config** | Use `eslint-plugin-react-hooks` in your ESLint config (e.g. `eslint.config.js` or `.eslintrc`); Vite does not run ESLint by default. |
| **Visual edits dev server** (`plugins/visual-edits/dev-server-setup.js`, `babel-metadata-plugin`) | Would require a custom Vite plugin that replicates the dev-server and Babel metadata behavior. |
| **Health check** (`ENABLE_HEALTH_CHECK`, `plugins/health-check/`) | Would require a custom Vite plugin or a separate small server for health endpoints. |
| **watchOptions.ignored** | Vite has its own watch behavior; adjust in `server.watch` if needed. |

So: **only the `@` alias was migrated.** Visual-edits and health-check are Craco/Webpack-specific and need new Vite plugins or other tooling if you want them back.

## 5. vercel.json

- **No SPA catch-all** was added. Prerender produces `dist/about/index.html`, etc. Letting Vercel serve static files by path (e.g. `/about` → `dist/about/index.html`) is correct. A rewrite like `"/((?!api/).*)" → "/index.html"` would force every route to `index.html` and break prerendered pages.
- Existing rewrites for `llms.txt`, `llms-full.txt`, `robots.txt`, `sitemap.xml`, and `/api/:path*` are unchanged.

## 6. If `#root` is still empty for crawlers

- Prerender uses Puppeteer; in some CI/headless environments the page may not finish rendering (lazy chunks, Spline, etc.), so `#root` can stay empty.
- **Options:** Increase `renderAfterTime` in `vite.config.js`, or use `renderAfterElementExists: 'some-selector'` when the main content is in the DOM. For maximum crawler visibility, consider **Next.js** (SSR/SSG) or a dedicated prerender service (e.g. prerender.io) that runs in a full browser.

## 7. Post-deploy validation

After deploying, run:

```bash
curl https://apexnexon.tech/ | grep "ApexNexon"
curl https://apexnexon.tech/faq | grep "FAQ"
curl https://apexnexon.tech/robots.txt
curl https://apexnexon.tech/llms.txt
curl https://apexnexon.tech/sitemap.xml
```

If the homepage HTML contains only `<div id="root"></div>`, prerender did not run or did not capture content in that environment; use the options in section 6 or a different hosting/prerender strategy.
