import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';


// https://vitejs.dev/config/
export default defineConfig({
  server: {
      proxy: {
        '/HPImageArchive.aspx': {
          target: 'https://www.bing.com',
          changeOrigin: true,
        }
      },
      cors: true
  },
  plugins: [
    react(),
    svgr()
  ],
})
