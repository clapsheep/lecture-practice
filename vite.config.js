import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // default: 5173
    open: true, // default: false
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  css: {
    devSourcemap: true,
    modules: {
      // generateScopedName: '[name]__[local]--[hash:base64:12]',
    },
  },
});
