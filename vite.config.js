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
        service2: resolve(__dirname, 'services_2.html'),
        service3: resolve(__dirname, 'services_3.html'),
        service4: resolve(__dirname, 'services_4.html'),
        service5: resolve(__dirname, 'services_5.html'),
        service6: resolve(__dirname, 'services_6.html'),
        service7: resolve(__dirname, 'services_7.html'),
        service8: resolve(__dirname, 'services_8.html'),
        service9: resolve(__dirname, 'services_9.html'),
        services: resolve(__dirname, 'services.html'),
        test: resolve(__dirname, 'test.html'),
      },
    },
  },
})