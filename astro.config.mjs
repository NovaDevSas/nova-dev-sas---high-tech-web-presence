import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://novadev.com.co',
  integrations: [
    react()
  ],
  output: 'static',
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  build: {
    inlineStylesheets: 'auto',
    assets: '_astro'
  },
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
    build: {
      target: 'es2020',
      cssTarget: 'es2020',
      modulePreload: {
        polyfill: false
      },
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['react', 'react-dom'],
            'three': ['three'],
            'framer': ['framer-motion']
          }
        }
      },
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
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