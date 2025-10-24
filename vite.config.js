import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/React-app/',  // 👈 must match your GitHub repo name exactly (case-sensitive!)
})
