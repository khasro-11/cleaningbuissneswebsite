/**
 * Pre-Rendering via React renderToString (no browser needed).
 * Runs after `vite build` and injects the server-rendered HTML into
 * dist/index.html so crawlers see content without executing JS.
 */

import { readFileSync, writeFileSync, rmSync } from 'fs'
import { build } from 'vite'
import { fileURLToPath } from 'url'
import { resolve, dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

console.log('▶ Pre-Rendering gestartet …')

// 1. Build a server-side bundle of the React app
await build({
  build: {
    ssr: 'src/entry-server.jsx',
    outDir: 'dist-ssr',
    rollupOptions: { output: { format: 'esm' } },
  },
  logLevel: 'warn',
})

// 2. Import the SSR bundle and render to string
const { render } = await import(
  new URL('./dist-ssr/entry-server.js', import.meta.url).href
)
const appHtml = render()

// 3. Inject rendered HTML into dist/index.html
const template = readFileSync('./dist/index.html', 'utf-8')
const rendered = template.replace('<!--ssr-outlet-->', appHtml)
writeFileSync('./dist/index.html', rendered)

// 4. Clean up the temporary SSR bundle
rmSync('./dist-ssr', { recursive: true, force: true })

console.log('✓ dist/index.html wurde mit Pre-Rendering-Inhalt befüllt.')
