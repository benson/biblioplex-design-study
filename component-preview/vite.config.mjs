import path from 'node:path';
import { fileURLToPath } from 'node:url';

const source = process.env.BIBLIOPLEX_SOURCE;
if (!source) throw new Error('Set BIBLIOPLEX_SOURCE to an isolated Biblioplex worktree with npm ci completed.');
const root = fileURLToPath(new URL('./', import.meta.url));
const modules = path.join(source, 'node_modules');
export default {
  root,
  base: './',
  publicDir: false,
  resolve: {
    alias: [
      { find: '@app', replacement: path.join(source, 'apps/web/app') },
      { find: '@stories', replacement: path.join(source, 'storybook') },
      { find: '@preview-css', replacement: path.join(source, '.storybook/preview.css') },
      { find: '@vellum-css', replacement: path.join(modules, '@benson/vellum-ui/dist/vellum-ui.css') },
      { find: '@vellum-story-css', replacement: path.join(modules, '@benson/vellum-ui/src/stories/storybook.css') },
      { find: /^@benson\/vellum-ui$/, replacement: path.join(modules, '@benson/vellum-ui/src/js/index.js') },
    ],
  },
  esbuild: { jsx: 'automatic' },
  build: {
    target: 'esnext',
    outDir: path.join(source, '.study-build'),
    emptyOutDir: false,
    sourcemap: false,
    assetsInlineLimit: 0,
  },
  server: { host: '127.0.0.1', port: 4199, strictPort: true, fs: { allow: [root, source] } },
};
