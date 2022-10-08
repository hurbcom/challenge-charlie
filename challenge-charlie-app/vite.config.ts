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
      "/data/2.5": {
        target: "https://api.openweathermap.org",
        changeOrigin: true,
        rewrite: (path) => path + "&appid=772920597e4ec8f00de8d376dfb3f094"
      },
      "/geo/1.0": {
        target: "https://api.openweathermap.org",
        changeOrigin: true,
        rewrite: (path) => path + "&appid=772920597e4ec8f00de8d376dfb3f094"
      },
      "/img/wn": {
        target: "http://openweathermap.org",
        changeOrigin: true,
        rewrite: (path) => path
      },
    }
  },
  plugins: [react()]
})
