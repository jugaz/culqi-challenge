import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  base: '/',
 
  plugins: [
    vue(),
    VitePWA({
      manifest: {
        "name": "Mi Aplicación",
        "short_name": "App",
        "description": "Mi aplicación PWA con Vite y Vue",
        "start_url": "/",
        "display": "standalone",
        "background_color": "#ffffff",
        "theme_color": "#000000",
        "icons": [
          {
            "src": "./src/assets/images/logo.png",
            "sizes": "35x39",
            "type": "image/png"
          },
        ]
      },
    })
  ],

  optimizeDeps: {
    include: ["vue", "vue-router"],
  },

})
