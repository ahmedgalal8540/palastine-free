import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' makes the production build work when hosted from any sub-path
// (GitHub Pages, Netlify, a shared folder on a server, etc.)
export default defineConfig({
  base: './',
  plugins: [react()],
  preview: {
    allowedHosts: ['.trycloudflare.com'],
  },
})
