// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        portfolio: resolve(__dirname, 'portfolio.html'),
        service1: resolve(__dirname, 'services_1.html'),
        services: resolve(__dirname, 'services.html'),
        test: resolve(__dirname, 'test.html'),
      },
    },
  },
})