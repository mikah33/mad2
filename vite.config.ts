import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  ],
  build: {
    sourcemap: false, // Disable source maps in production for smaller bundles
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['lucide-react'],
        },
      },
    },
  },
  server: {
    port: 4000,
    proxy: {
      '/.netlify/functions': {
        target: 'https://contractorai.app.n8n.cloud',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/.netlify\/functions\/submit-form/, '/webhook/3dd95dd5-4308-4ece-8495-9c72239e2e4b'),
      },
    },
  },
})
