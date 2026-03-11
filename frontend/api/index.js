import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load the built SSR module and client HTML once
const clientHtml = fs.readFileSync(
  path.join(__dirname, '../dist/client/index.html'),
  'utf-8'
);

export default async function handler(req, res) {
  try {
    const { render } = await import('../dist/server/entry-server.js');
    const url = req.url || '/';
    const { html: appHtml, helmet } = await render(url);

    const helmetStr = helmet
      ? `${helmet.title.toString()}${helmet.meta.toString()}${helmet.link.toString()}`
      : '';

    let finalHtml = clientHtml.replace('<!--helmet-->', helmetStr);
    if (clientHtml.includes('<!--ssr-outlet-->')) {
      finalHtml = finalHtml.replace('<!--ssr-outlet-->', appHtml);
    } else {
      finalHtml = finalHtml.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
    }

    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(finalHtml);
  } catch (e) {
    console.error('SSR error:', e);
    // Fallback: serve plain HTML without SSR
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(clientHtml);
  }
}
