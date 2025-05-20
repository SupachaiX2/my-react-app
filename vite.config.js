import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/my-react-app/', // แทนที่ด้วยชื่อ repository ของตัวเอง
  plugins: [react()],
})
