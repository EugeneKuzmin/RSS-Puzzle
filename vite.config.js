import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base:"/rss-puzzle",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'src/app/login/login.ts'),
      },
    },
  },
});