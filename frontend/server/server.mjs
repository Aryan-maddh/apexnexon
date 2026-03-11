import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProd = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 3000;

async function createApp() {
  const app = express();

  let vite;
  if (!isProd) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, '../dist/client'), { index: false }));
  }

  app.use('*', async (req, res) => {
    const url = req.originalUrl;

    try {
      let template;
      let render;

      if (!isProd) {
        template = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule('/src/entry-server.jsx')).render;
      } else {
        template = fs.readFileSync(
          path.join(__dirname, '../dist/client/index.html'),
          'utf-8'
        );
        const entryServer = await import(new URL('../dist/server/entry-server.js', import.meta.url).href);
        render = entryServer.render;
      }

      const { html: appHtml, helmet } = await render(url);

      const helmetStr = helmet
        ? `${helmet.title.toString()}${helmet.meta.toString()}${helmet.link.toString()}`
        : '';
      const finalHtml = template
        .replace('<!--helmet-->', helmetStr)
        .replace('<!--ssr-outlet-->', appHtml);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(finalHtml);
    } catch (e) {
      if (!isProd) vite?.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).end(e.message);
    }
  });

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

createApp();
