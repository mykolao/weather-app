import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import envPlugin from 'vite-plugin-environment';
import eslint from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    eslint({ cache: true }),
    envPlugin('all'),
  ],
});
