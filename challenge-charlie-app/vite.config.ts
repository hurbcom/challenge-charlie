import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    cors: {
      origin: 'https://www.bing.com',
      methods: ['GET', 'PUT', 'POST']
    },
    proxy: {
      "/HPImageArchive.aspx": "https://www.bing.com",
      "/th": "https://www.bing.com",
      "/data/2.5": "https://api.openweathermap.org",
      "/geo/1.0": "https://api.openweathermap.org",
    }
  },
  plugins: [react()]
})
