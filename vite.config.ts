import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    const isProduction = mode === 'production';
    
    return {
      // Only use base path in production (for GitHub Pages)
      base: isProduction ? '/daittojex/' : '/',
      server: {
        port: 3000,
        host: '0.0.0.0',
        strictPort: false,
        hmr: {
          overlay: true,
          protocol: 'ws',
        },
        fs: {
          strict: false,
        },
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        outDir: 'dist',
        assetsDir: 'assets',
      },
      css: {
        devSourcemap: true,
        modules: {
          localsConvention: 'camelCase',
        },
      },
      optimizeDeps: {
        include: ['react', 'react-dom', 'lucide-react'],
      },
    };
});
