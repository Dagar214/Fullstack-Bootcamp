import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: repo name = Fullstack-Bootcamp
export default defineConfig({
  plugins: [react()],
  base: '/Fullstack-Bootcamp/',
})