import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/new-surya-sweets-and-snacks-koramangala-website/',
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
});
