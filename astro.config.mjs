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
    inlineStylesheets: 'never',
    assets: '_astro',
    split: true
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
          manualChunks: (id) => {
            // Vendor chunks
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom')) {
                return 'react-vendor';
              }
              if (id.includes('three')) {
                return 'three-vendor';
              }
              if (id.includes('framer-motion')) {
                return 'framer-vendor';
              }
              return 'vendor';
            }
            // Component chunks
            if (id.includes('/components/')) {
              if (id.includes('Blog') || id.includes('Modal')) {
                return 'blog-components';
              }
              if (id.includes('Hero') || id.includes('Header') || id.includes('Footer')) {
                return 'layout-components';
              }
              return 'components';
            }
          },
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]'
        }
      },
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.info'],
          passes: 2
        },
        mangle: {
          safari10: true
        }
      },
      cssCodeSplit: true,
      reportCompressedSize: false,
      chunkSizeWarningLimit: 1000
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