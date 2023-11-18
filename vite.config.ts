import { defineConfig } from 'vite'
import devServer from '@hono/vite-dev-server'
import pages from '@hono/vite-cloudflare-pages'
import commonjs from 'vite-plugin-commonjs'

import dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
  plugins: [
    commonjs({
      filter(id) {
        if (id.includes('node_modules/highlight.js')) {
          return true
        }
      }
    }),
    pages(),
    devServer({
      entry: 'src/index.tsx',
      cf: {
        kvNamespaces: ['KV_POST_FEEDBACK']
      }
    }),
  ]
})
