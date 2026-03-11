# SEO & AEO Implementation — Deliverables

**Site:** apexnexon.tech  
**Tech stack:** React (CRA + Craco), react-router-dom, react-helmet  
**Date:** 2025-02-24  

---

## 1. List of All Changes Made

### Task 1: Bot / crawler blocking
- **robots.txt** updated with explicit `Allow: /` for: `*`, Googlebot, Bingbot, GPTBot, ClaudeBot, anthropic-ai, PerplexityBot. Sitemap URL kept.
- **Note:** No Cloudflare, nginx, or .htaccess config exists in the repo. If you use Cloudflare: disable “Bot Fight Mode” or whitelist the above bots. Ensure the server returns 200 for public pages and does not 403 crawlers.

### Task 2: SEO
- **sitemap.xml** fixed: removed malformed first line (`https://www.apexnexon.tech/<?xml...`). Valid XML with `urlset`. Added: `/faq`, `/privacy`, `/terms`, and all `/services/1`–`/services/10`. Updated `lastmod` to 2025-02-24.
- **PageMeta.jsx** enhanced: canonical, meta description (capped 160 chars), **meta robots** `index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1`, **Open Graph** (og:title, og:description, og:image, og:url, og:type), **Twitter Card** (twitter:card, title, description, image). Default OG/Twitter image: `https://apexnexon.tech/logo.png`.
- **index.html** default: meta robots added; default title shortened to “ApexNexon | AI & Automation Solutions” (≤60 chars); og:image and twitter:image set to `/logo.png`.
- **PageMeta added** to: Solutions, CaseStudies, Privacy, Terms, BlogNew (all have title + description).
- **SchemaOrg.jsx** added: **WebSiteSchema** (with SearchAction pointing to `/contact?q=`), **BreadcrumbListSchema** (items: name + url), **SpeakableSchema** (cssSelector for voice/speakable content).
- **Home.jsx:** WebSiteSchema and SpeakableSchema added; hero paragraph updated with explicit value proposition and company name in first ~100 words (`#hero-value-prop`), SpeakableSchema uses `#hero-value-prop`.
- **BreadcrumbListSchema** added on: ServiceDetail (Home > Services > [service]), Solutions (Home > Solutions), CaseStudies (Home > Case Studies), About (Home > About Us), Faq (Home > FAQ).
- **ServiceDetail.jsx:** ServiceSchema `url` set to canonical `https://apexnexon.tech/services/:id`; Briefcase icon added for Zoho service; **FAQ section** added (What is [service]?, How does it work?, Who needs it?) for AEO.

### Task 3 & 4: AEO and AI visibility
- **llms.txt** created at `public/llms.txt`: one-line description, Services list with brief descriptions, About (2 paragraphs), Contact (website, email, location).
- **llms-full.txt** created at `public/llms-full.txt`: full company overview, mission, target customers, industries, problems solved, why choose, and detailed service descriptions.
- **About page** already had canonical sentence, mission, who we serve, what we’re not, FAQ; no structural change.
- **Service pages** now include FAQ block (What is X, How does X work, Who needs X).
- **Homepage** first 100 words now state company name, what ApexNexon does, and who it serves.

### Task 5: Technical
- **404 page:** `NotFound.jsx` created; route `path="*"` added in `App.js`. Page has title “Page Not Found | ApexNexon” and `noindex, follow`.
- **Security headers** added in `frontend/vercel.json`: X-Content-Type-Options: nosniff, X-Frame-Options: DENY, X-XSS-Protection: 1; mode=block, Referrer-Policy: strict-origin-when-cross-origin.
- **Images:** Existing alt text verified on CaseStudyCard, Blog, Footer, Navbar, TestimonialCard.

---

## 2. robots.txt (generated)

```text
User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

# Sitemaps
Sitemap: https://apexnexon.tech/sitemap.xml
```

---

## 3. sitemap.xml (generated)

Valid XML at `frontend/public/sitemap.xml` with:
- `/` (priority 1.0, weekly)
- `/services` (0.9, monthly)
- `/services/1` … `/services/10` (0.8, monthly)
- `/solutions`, `/case-studies`, `/about`, `/faq`, `/blog`, `/contact` (monthly/weekly as appropriate)
- `/privacy`, `/terms` (0.4, yearly)

All `<loc>` use `https://apexnexon.tech`. `<lastmod>2025-02-24</lastmod>`.

---

## 4. llms.txt (generated)

Content at `frontend/public/llms.txt`:

- **# ApexNexon** and one-line description (canonical sentence).
- **## Services** — 10 services with one-line descriptions.
- **## About** — two paragraphs (mission + who we serve).
- **## Contact** — Website, Email, Location (Serving clients globally).

---

## 5. JSON-LD Schema Blocks Added / Used

| Schema            | Where used | Notes |
|-------------------|------------|--------|
| **Organization**  | Home       | name, url, logo, description, slogan, knowsAbout, contactPoint, sameAs |
| **WebSite**       | Home       | name, url, description, publisher; potentialAction SearchAction → /contact?q={search_term_string} |
| **Speakable**     | Home       | WebPage with speakable.cssSelector = ["#hero-value-prop"] |
| **Service**       | ServiceDetail | serviceType, provider (Organization), description, url (canonical) |
| **BreadcrumbList**| ServiceDetail, Solutions, CaseStudies, About, Faq | itemListElement with position, name, item (url) |
| **FAQPage**       | About, Faq | mainEntity from brandFaq (question + acceptedAnswer.text) |
| **BlogPosting**   | Blog (per post) | headline, image, author, publisher, datePublished, description |

---

## 6. Issues That Need Manual Fixing

1. **Cloudflare / server:** If the site is behind Cloudflare or another proxy:
   - Turn off “Bot Fight Mode” or whitelist Googlebot, Bingbot, GPTBot, ClaudeBot, anthropic-ai, PerplexityBot so they get 200 OK.
   - Ensure no firewall or WAF rule blocks these user-agents for public paths.

2. **HTTPS / SSL:** Confirm SSL is valid on apexnexon.tech (no mixed content, valid certificate). Not editable in repo.

3. **Hosting other than Vercel:** Security headers were added in `vercel.json`. For Netlify, add `_headers` or configure in dashboard; for nginx/Apache, add equivalent headers in server config.

4. **Blog post URLs:** Dynamic blog post URLs (e.g. `/blog/123`) are not in the static sitemap. If you have a backend that lists posts, consider generating sitemap entries for them (e.g. server-side or build-time).

5. **Image compression:** Build already minifies JS/CSS. Compress images (e.g. logo.png, any large assets) with tools like ImageOptim or Squoosh and replace in `public/` if needed.

6. **hreflang:** Not added (single language). If you add multiple languages later, add hreflang tags and alternate URLs.

---

**Files touched (summary):**

- `frontend/public/robots.txt`
- `frontend/public/sitemap.xml`
- `frontend/public/llms.txt` (new)
- `frontend/public/llms-full.txt` (new)
- `frontend/public/index.html`
- `frontend/src/components/SEO/PageMeta.jsx`
- `frontend/src/components/SEO/SchemaOrg.jsx`
- `frontend/src/components/HeroSection.jsx`
- `frontend/src/pages/Home.jsx`
- `frontend/src/pages/ServiceDetail.jsx`
- `frontend/src/pages/Solutions.jsx`
- `frontend/src/pages/CaseStudies.jsx`
- `frontend/src/pages/About.jsx`
- `frontend/src/pages/Faq.jsx`
- `frontend/src/pages/Privacy.jsx`
- `frontend/src/pages/Terms.jsx`
- `frontend/src/pages/BlogNew.jsx`
- `frontend/src/pages/NotFound.jsx` (new)
- `frontend/src/App.js`
- `frontend/vercel.json`
