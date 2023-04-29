import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 3001;

const vite = await createViteServer({
  server: { middlewareMode: true },
  appType: 'custom',
});

app.use(vite.middlewares);

app.use('*', async (req, res, next) => {
  const url = req.originalUrl;

  try {
    let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');

    template = await vite.transformIndexHtml(url, template);

    const { render } = await vite.ssrLoadModule('./src/serverApp.tsx');

    const html = template.split(`<!--ssr-outlet-->`);

    res.write(html[0]);
    const stream = await render(url, {
      onShellReady() {
        stream.pipe(res);
      },
      onAllReady() {
        res.write(html[1]);
        res.end();
      },
    });
  } catch (e) {
    vite.ssrFixStacktrace(e as Error);
    next(e);
  }
});

console.log(`listening on http://localhost:${PORT}`);
app.listen(PORT);
