import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    proxy: {
      '/api/cf': {
        target: 'https://codeforces.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/cf/, '/api'),
      },
    },
  },
})
