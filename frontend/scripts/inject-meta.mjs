import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '../dist');

const pages = [
  {
    route: '/',
    title: 'ApexNexon | AI Automation & Custom Software Development',
    description: 'ApexNexon helps businesses automate processes, build custom software, and integrate AI into their operations.',
  },
  {
    route: '/about',
    title: 'About ApexNexon | Technology & AI Solutions Company',
    description: 'Learn about ApexNexon, a technology and AI solutions company based in India.',
  },
  {
    route: '/services',
    title: 'Our Services | ApexNexon - AI Automation & Workflow Solutions',
    description: 'Explore ApexNexon services: AI automation, workflow optimization, custom software development, and digital product engineering.',
  },
  {
    route: '/faq',
    title: 'FAQ | ApexNexon',
    description: 'Frequently asked questions about ApexNexon services and AI automation solutions.',
  },
  {
    route: '/contact',
    title: 'Contact ApexNexon | Get in Touch',
    description: 'Contact ApexNexon for AI automation and custom software development inquiries.',
  },
  {
    route: '/blog',
    title: 'Blog | ApexNexon - AI & Tech Insights',
    description: 'Read the latest insights on AI automation, software development, and digital transformation from ApexNexon.',
  },
  {
    route: '/solutions',
    title: 'Solutions | ApexNexon',
    description: 'ApexNexon solutions for business automation, AI integration, and digital transformation.',
  },
  {
    route: '/case-studies',
    title: 'Case Studies | ApexNexon',
    description: 'See how ApexNexon helped businesses reduce processing time by 95% with AI automation.',
  },
  { route: '/privacy', title: 'Privacy Policy | ApexNexon', description: 'ApexNexon privacy policy and data practices.' },
  { route: '/terms', title: 'Terms of Service | ApexNexon', description: 'Terms of service for using ApexNexon website and services.' },
];

const indexPath = path.join(distDir, 'index.html');
if (!fs.existsSync(indexPath)) {
  console.warn('scripts/inject-meta.mjs: dist/index.html not found, skipping.');
  process.exit(0);
}

const baseHTML = fs.readFileSync(indexPath, 'utf8');
// Skip overwriting if prerender already filled #root (preserve body content)
const rootEmpty = /<div id="root"><\/div>/.test(baseHTML) || /<div id="root">\s*<\/div>/.test(baseHTML);
if (!rootEmpty) {
  console.log('scripts/inject-meta.mjs: prerender produced body content, skipping meta overwrite.');
  process.exit(0);
}

pages.forEach(({ route, title, description }) => {
  let html = baseHTML;
  html = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);
  html = html.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${description.replace(/"/g, '&quot;')}"`
  );
  html = html.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${title.replace(/"/g, '&quot;')}"`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${description.replace(/"/g, '&quot;')}"`
  );

  const dir = path.join(distDir, route === '/' ? '' : route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  console.log(`✓ ${route || '/'}`);
});

console.log('Meta injection complete.');
