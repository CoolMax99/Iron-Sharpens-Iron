import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Iron-Sharpens-Iron/',
  build: {
    outDir: 'docs'
  },
  plugins: [react()],
  server: {
    port: 5173,
    host: true
  }
})