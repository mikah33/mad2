import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true, // Generate source maps for better debugging
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
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
