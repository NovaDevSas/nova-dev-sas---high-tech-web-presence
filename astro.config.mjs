import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react()
  ],
  output: 'static',
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      target: 'es2020',
      cssTarget: 'es2020',
      modulePreload: {
        polyfill: false
      }
    },
    define: {
      'process.env.API_KEY': JSON.stringify(process.env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(process.env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': new URL('.', import.meta.url).pathname,
      }
    }
  }
});