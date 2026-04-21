import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'
import { ngrok } from 'vite-plugin-ngrok'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      tailwind(),
      command === 'serve' && ngrok({
        authtoken: env.NGROK_AUTH_TOKEN
      })
    ],
    server: {
      allowedHosts: ["*.ngrok-free.dev"]
    }
  }
})