import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { federation } from '@module-federation/vite'

export default defineConfig({
  base: 'http://localhost:5174',
  plugins: [
    tsconfigPaths(),
    react(),
    federation({
      name: 'main',
      filename: 'remoteEntry.js',
      exposes: {
        './router': './src/main.tsx',
      },
      shared: {
        react: {
          singleton: true,
        },
        'react-dom': {
          singleton: true,
        },
        '@tanstack/react-router': {
          singleton: true,
        },
      },
    }),
  ],
  server: { port: 5174, strictPort: true, cors: true },
  preview: { port: 5174 },
  build: { target: 'chrome89' },
})
