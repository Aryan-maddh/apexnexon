import { defineConfig, transformWithEsbuild } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** Treat .js files in src as JSX so they transform before vite:define */
function jsxInJs() {
  return {
    name: 'jsx-in-js',
    async transform(code, id) {
      if (!id.includes('/src/') || !id.endsWith('.js')) return null;
      return transformWithEsbuild(code, id, {
        loader: 'jsx',
        jsx: 'automatic',
      });
    },
  };
}

export default defineConfig(({ mode }) => ({
  plugins: [
    jsxInJs(),
    react({ include: /\.(js|jsx|ts|tsx)$/ }),
  ],
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') },
  },
  build:
    mode === 'ssr'
      ? {
          ssr: true,
          rollupOptions: {
            input: './src/entry-server.jsx',
            output: { entryFileNames: 'entry-server.js' },
          },
          outDir: 'dist/server',
          emptyOutDir: false,
        }
      : {
          outDir: 'dist/client',
          emptyOutDir: true,
        },
}));
