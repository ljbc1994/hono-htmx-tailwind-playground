import { defineConfig } from 'vite'
import devServer from '@hono/vite-dev-server'
import pages from '@hono/vite-cloudflare-pages'

import dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
  plugins: [
    pages(),
    devServer({
      entry: 'src/index.tsx',
    }),
  ]
})
