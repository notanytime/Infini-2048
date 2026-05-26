import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/Infini-2048/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
