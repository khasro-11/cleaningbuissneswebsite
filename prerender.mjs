/**
 * Pre-Rendering via Playwright.
 * Läuft nach `vite build` und speichert den vollständig gerenderten HTML-Stand
 * zurück in dist/index.html, damit Google den Inhalt ohne JS-Ausführung sieht.
 *
 * Verwendung: node prerender.mjs
 * Im Build-Prozess: "build": "vite build && node prerender.mjs"
 */

import { chromium } from 'playwright'
import { preview } from 'vite'
import { writeFileSync, readFileSync } from 'fs'

async function main() {
  console.log('▶ Pre-Rendering gestartet …')

  const server = await preview({ server: { port: 5998 }, logLevel: 'silent' })

  const browser = await chromium.launch()
  const page = await browser.newPage()

  await page.goto('http://localhost:5998', { waitUntil: 'networkidle' })

  // Warte bis React gemountet hat (root sollte Kinder haben)
  await page.waitForSelector('#root > *', { timeout: 15000 })
  // Kurz warten, damit Framer-Motion-Animationen nicht im Zwischenzustand gespeichert werden
  await page.waitForTimeout(800)

  // Nur den Inhalt des #root-Elements extrahieren (ohne Script-Tags, die hydration stören)
  const rootInnerHTML = await page.evaluate(() => {
    return document.getElementById('root').innerHTML
  })

  await browser.close()
  server.httpServer.close()

  // Built index.html lesen und #root befüllen
  const built = readFileSync('./dist/index.html', 'utf-8')
  const prerendered = built.replace(
    /<div id="root">[\s\S]*?<\/div>/,
    `<div id="root">${rootInnerHTML}</div>`
  )

  writeFileSync('./dist/index.html', prerendered)
  console.log('✓ dist/index.html wurde mit Pre-Rendering-Inhalt befüllt.')
}

main().catch((err) => {
  console.error('✗ Pre-Rendering fehlgeschlagen:', err)
  process.exit(1)
})
