import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        bio: resolve(__dirname, 'bio/index.html'),
        events: resolve(__dirname, 'events/index.html'),
        media: resolve(__dirname, 'media/index.html'),
      },
    },
  },
})