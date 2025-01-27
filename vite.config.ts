import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Expose to your local network (use 0.0.0.0 for all interfaces)
    port: 3000, // Optional: Specify a custom port (default is 5173)
  },
})
