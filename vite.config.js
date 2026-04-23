import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ViteImageOptimizer({
      // Compress PNG screenshots aggressively (some are 6 MB+)
      png: {
        quality: 80,
        compressionLevel: 9,
      },
      // Compress JPEGs with mozjpeg for best size/quality ratio
      jpeg: {
        quality: 80,
        mozjpeg: true,
      },
      jpg: {
        quality: 80,
        mozjpeg: true,
      },
      // WebP: near-lossless for great quality at small size
      webp: {
        quality: 82,
        lossless: false,
        nearLossless: false,
        smartSubsample: true,
      },
      avif: {
        quality: 65,
        lossless: false,
      },
      // Log compression stats in terminal during build
      logStats: true,
      // Cache results so repeat builds are instant
      cache: true,
      cacheLocation: './node_modules/.cache/image-optimizer',
    }),
  ],
})
