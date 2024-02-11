import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001,
    host: '0.0.0.0'
  },
  mode: 'development',
  plugins: [vue()],
})
