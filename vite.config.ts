import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '~react-slick': path.resolve(__dirname, 'node_modules/react-slick'),
    },
  },
  server: {
    port: 8080,
  }
  
})
