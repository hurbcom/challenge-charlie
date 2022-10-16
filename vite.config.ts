import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  server: {
    host: true,
    proxy: {
      "/HPImageArchive": "https://www.bing.com",
    }
  },
  plugins: [react()]
})
