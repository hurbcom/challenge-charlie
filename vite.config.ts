import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/HPImageArchive": "https://www.bing.com/"
    }
  },
  plugins: [react()]
})
