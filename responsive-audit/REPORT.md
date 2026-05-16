# Responsive Design Audit — CleanPro Gebäudeservice
**Datum:** 2026-05-16
**Tech-Stack:** React 18 · Vite · Tailwind CSS (via CDN) · Framer Motion · EmailJS
**Seiten:** Single-Page Application — alle Sektionen auf einer URL (/)
**Getestete Viewports:** 320×568, 375×812, 768×1024, 1024×768, 1280×800, 1440×900, 1920×1080, 844×390 (Querformat)
**Tool:** Playwright 1.60 (Chromium)

---

## Übersicht

| Schweregrad | Anzahl |
|-------------|--------|
| 🔴 Kritisch  | 65 |
| 🟠 Hoch      | 0 |
| 🟡 Mittel    | 25 |
| 🟢 Gering    | 0 |
| **Gesamt**  | **90** |

---

## 🔴 Kritische Probleme

### [global] @ 320x568
**Problem:** Horizontal overflow detected: body.scrollWidth=348px, viewport=320px (overflow: 28px)
**Lösung:** Find elements with fixed pixel widths wider than viewport; add overflow-x:hidden to body if needed.

### [layout] @ 320x568
**Problem:** Element extends beyond viewport right edge: <DIV> class="" right=1942px (viewport=320px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 320x568
**Problem:** Element extends beyond viewport right edge: <svg> class="[object SVGAnimatedString]" right=1942px (viewport=320px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 320x568
**Problem:** Element extends beyond viewport right edge: <g> class="[object SVGAnimatedString]" right=1337px (viewport=320px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 320x568
**Problem:** Element extends beyond viewport right edge: <path> class="[object SVGAnimatedString]" right=1337px (viewport=320px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 320x568
**Problem:** Element extends beyond viewport right edge: <line> class="[object SVGAnimatedString]" right=646px (viewport=320px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 320x568
**Problem:** Element extends beyond viewport right edge: <line> class="[object SVGAnimatedString]" right=1337px (viewport=320px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 320x568
**Problem:** Element extends beyond viewport right edge: <rect> class="[object SVGAnimatedString]" right=387px (viewport=320px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 320x568
**Problem:** Element extends beyond viewport right edge: <rect> class="[object SVGAnimatedString]" right=387px (viewport=320px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 375x812
**Problem:** Element extends beyond viewport right edge: <DIV> class="" right=1970px (viewport=375px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 375x812
**Problem:** Element extends beyond viewport right edge: <svg> class="[object SVGAnimatedString]" right=1970px (viewport=375px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 375x812
**Problem:** Element extends beyond viewport right edge: <g> class="[object SVGAnimatedString]" right=1365px (viewport=375px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 375x812
**Problem:** Element extends beyond viewport right edge: <path> class="[object SVGAnimatedString]" right=1365px (viewport=375px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 375x812
**Problem:** Element extends beyond viewport right edge: <line> class="[object SVGAnimatedString]" right=674px (viewport=375px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 375x812
**Problem:** Element extends beyond viewport right edge: <line> class="[object SVGAnimatedString]" right=1365px (viewport=375px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 375x812
**Problem:** Element extends beyond viewport right edge: <rect> class="[object SVGAnimatedString]" right=414px (viewport=375px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 375x812
**Problem:** Element extends beyond viewport right edge: <rect> class="[object SVGAnimatedString]" right=414px (viewport=375px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 768x1024
**Problem:** Element extends beyond viewport right edge: <DIV> class="" right=2371px (viewport=768px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 768x1024
**Problem:** Element extends beyond viewport right edge: <svg> class="[object SVGAnimatedString]" right=2371px (viewport=768px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 768x1024
**Problem:** Element extends beyond viewport right edge: <g> class="[object SVGAnimatedString]" right=1766px (viewport=768px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 768x1024
**Problem:** Element extends beyond viewport right edge: <path> class="[object SVGAnimatedString]" right=1766px (viewport=768px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 768x1024
**Problem:** Element extends beyond viewport right edge: <line> class="[object SVGAnimatedString]" right=1075px (viewport=768px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 768x1024
**Problem:** Element extends beyond viewport right edge: <line> class="[object SVGAnimatedString]" right=1766px (viewport=768px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 768x1024
**Problem:** Element extends beyond viewport right edge: <rect> class="[object SVGAnimatedString]" right=816px (viewport=768px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 768x1024
**Problem:** Element extends beyond viewport right edge: <rect> class="[object SVGAnimatedString]" right=816px (viewport=768px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 1024x768
**Problem:** Element extends beyond viewport right edge: <DIV> class="" right=2573px (viewport=1024px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 1024x768
**Problem:** Element extends beyond viewport right edge: <svg> class="[object SVGAnimatedString]" right=2573px (viewport=1024px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 1024x768
**Problem:** Element extends beyond viewport right edge: <g> class="[object SVGAnimatedString]" right=1969px (viewport=1024px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 1024x768
**Problem:** Element extends beyond viewport right edge: <path> class="[object SVGAnimatedString]" right=1969px (viewport=1024px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 1024x768
**Problem:** Element extends beyond viewport right edge: <line> class="[object SVGAnimatedString]" right=1277px (viewport=1024px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 1024x768
**Problem:** Element extends beyond viewport right edge: <line> class="[object SVGAnimatedString]" right=1969px (viewport=1024px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 1024x768
**Problem:** Element extends beyond viewport right edge: <rect> class="[object SVGAnimatedString]" right=1511px (viewport=1024px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 1024x768
**Problem:** Element extends beyond viewport right edge: <rect> class="[object SVGAnimatedString]" right=1761px (viewport=1024px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 1280x800
**Problem:** Element extends beyond viewport right edge: <DIV> class="" right=2776px (viewport=1280px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 1280x800
**Problem:** Element extends beyond viewport right edge: <svg> class="[object SVGAnimatedString]" right=2776px (viewport=1280px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 1280x800
**Problem:** Element extends beyond viewport right edge: <g> class="[object SVGAnimatedString]" right=2171px (viewport=1280px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 1280x800
**Problem:** Element extends beyond viewport right edge: <path> class="[object SVGAnimatedString]" right=2171px (viewport=1280px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 1280x800
**Problem:** Element extends beyond viewport right edge: <line> class="[object SVGAnimatedString]" right=1480px (viewport=1280px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 1280x800
**Problem:** Element extends beyond viewport right edge: <line> class="[object SVGAnimatedString]" right=2171px (viewport=1280px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 1280x800
**Problem:** Element extends beyond viewport right edge: <rect> class="[object SVGAnimatedString]" right=1713px (viewport=1280px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 1280x800
**Problem:** Element extends beyond viewport right edge: <rect> class="[object SVGAnimatedString]" right=1964px (viewport=1280px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 1440x900
**Problem:** Element extends beyond viewport right edge: <DIV> class="" right=2856px (viewport=1440px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 1440x900
**Problem:** Element extends beyond viewport right edge: <svg> class="[object SVGAnimatedString]" right=2856px (viewport=1440px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 1440x900
**Problem:** Element extends beyond viewport right edge: <g> class="[object SVGAnimatedString]" right=2251px (viewport=1440px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 1440x900
**Problem:** Element extends beyond viewport right edge: <path> class="[object SVGAnimatedString]" right=2251px (viewport=1440px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 1440x900
**Problem:** Element extends beyond viewport right edge: <line> class="[object SVGAnimatedString]" right=1560px (viewport=1440px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 1440x900
**Problem:** Element extends beyond viewport right edge: <line> class="[object SVGAnimatedString]" right=2251px (viewport=1440px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 1440x900
**Problem:** Element extends beyond viewport right edge: <rect> class="[object SVGAnimatedString]" right=1793px (viewport=1440px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 1440x900
**Problem:** Element extends beyond viewport right edge: <rect> class="[object SVGAnimatedString]" right=2044px (viewport=1440px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 1920x1080
**Problem:** Element extends beyond viewport right edge: <DIV> class="" right=3096px (viewport=1920px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 1920x1080
**Problem:** Element extends beyond viewport right edge: <svg> class="[object SVGAnimatedString]" right=3096px (viewport=1920px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 1920x1080
**Problem:** Element extends beyond viewport right edge: <g> class="[object SVGAnimatedString]" right=2491px (viewport=1920px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 1920x1080
**Problem:** Element extends beyond viewport right edge: <path> class="[object SVGAnimatedString]" right=2491px (viewport=1920px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 1920x1080
**Problem:** Element extends beyond viewport right edge: <line> class="[object SVGAnimatedString]" right=2491px (viewport=1920px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 1920x1080
**Problem:** Element extends beyond viewport right edge: <rect> class="[object SVGAnimatedString]" right=2033px (viewport=1920px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 1920x1080
**Problem:** Element extends beyond viewport right edge: <rect> class="[object SVGAnimatedString]" right=2284px (viewport=1920px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 1920x1080
**Problem:** Element extends beyond viewport right edge: <rect> class="[object SVGAnimatedString]" right=2033px (viewport=1920px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 844x390-landscape
**Problem:** Element extends beyond viewport right edge: <DIV> class="" right=2431px (viewport=844px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 844x390-landscape
**Problem:** Element extends beyond viewport right edge: <svg> class="[object SVGAnimatedString]" right=2431px (viewport=844px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 844x390-landscape
**Problem:** Element extends beyond viewport right edge: <g> class="[object SVGAnimatedString]" right=1826px (viewport=844px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 844x390-landscape
**Problem:** Element extends beyond viewport right edge: <path> class="[object SVGAnimatedString]" right=1826px (viewport=844px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 844x390-landscape
**Problem:** Element extends beyond viewport right edge: <line> class="[object SVGAnimatedString]" right=1135px (viewport=844px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 844x390-landscape
**Problem:** Element extends beyond viewport right edge: <line> class="[object SVGAnimatedString]" right=1826px (viewport=844px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 844x390-landscape
**Problem:** Element extends beyond viewport right edge: <rect> class="[object SVGAnimatedString]" right=876px (viewport=844px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

### [layout] @ 844x390-landscape
**Problem:** Element extends beyond viewport right edge: <rect> class="[object SVGAnimatedString]" right=876px (viewport=844px)
**Lösung:** Replace fixed pixel widths with max-width, %, or responsive units

## 🟠 Hohe Priorität

_Keine hohen Prioritäten._

## 🟡 Mittlere Priorität

### [touch] @ 320x568
**Problem:** Touch target too small: <A> "KhelloGebäudeservice" = 86×30px (min 44×44px)
**Lösung:** Increase padding/min-height on small buttons and links for mobile

### [touch] @ 320x568
**Problem:** Touch target too small: <A> "Termin →" = 86×34px (min 44×44px)
**Lösung:** Increase padding/min-height on small buttons and links for mobile

### [touch] @ 320x568
**Problem:** Touch target too small: <BUTTON> "" = 32×32px (min 44×44px)
**Lösung:** Increase padding/min-height on small buttons and links for mobile

### [touch] @ 320x568
**Problem:** Touch target too small: <BUTTON> "Angebot erhalten" = 236×44px (min 44×44px)
**Lösung:** Increase padding/min-height on small buttons and links for mobile

### [touch] @ 320x568
**Problem:** Touch target too small: <A> "Impressum" = 66×18px (min 44×44px)
**Lösung:** Increase padding/min-height on small buttons and links for mobile

### [touch] @ 320x568
**Problem:** Touch target too small: <A> "Datenschutz" = 78×18px (min 44×44px)
**Lösung:** Increase padding/min-height on small buttons and links for mobile

### [touch] @ 320x568
**Problem:** Touch target too small: <A> "AGB" = 25×18px (min 44×44px)
**Lösung:** Increase padding/min-height on small buttons and links for mobile

### [typography] @ 320x568
**Problem:** Font size too small: <SPAN> "Gebäudeservice" = 9px (below 10px threshold)
**Lösung:** Increase minimum font size on mobile to at least 11px

### [touch] @ 375x812
**Problem:** Touch target too small: <A> "KhelloGebäudeservice" = 86×30px (min 44×44px)
**Lösung:** Increase padding/min-height on small buttons and links for mobile

### [touch] @ 375x812
**Problem:** Touch target too small: <A> "Termin →" = 86×34px (min 44×44px)
**Lösung:** Increase padding/min-height on small buttons and links for mobile

### [touch] @ 375x812
**Problem:** Touch target too small: <BUTTON> "" = 32×32px (min 44×44px)
**Lösung:** Increase padding/min-height on small buttons and links for mobile

### [touch] @ 375x812
**Problem:** Touch target too small: <BUTTON> "Angebot erhalten" = 291×44px (min 44×44px)
**Lösung:** Increase padding/min-height on small buttons and links for mobile

### [touch] @ 375x812
**Problem:** Touch target too small: <A> "Impressum" = 66×18px (min 44×44px)
**Lösung:** Increase padding/min-height on small buttons and links for mobile

### [touch] @ 375x812
**Problem:** Touch target too small: <A> "Datenschutz" = 78×18px (min 44×44px)
**Lösung:** Increase padding/min-height on small buttons and links for mobile

### [touch] @ 375x812
**Problem:** Touch target too small: <A> "AGB" = 25×18px (min 44×44px)
**Lösung:** Increase padding/min-height on small buttons and links for mobile

### [typography] @ 375x812
**Problem:** Font size too small: <SPAN> "Gebäudeservice" = 9px (below 10px threshold)
**Lösung:** Increase minimum font size on mobile to at least 11px

### [touch] @ 768x1024
**Problem:** Touch target too small: <A> "KhelloGebäudeservice" = 86×30px (min 44×44px)
**Lösung:** Increase padding/min-height on small buttons and links for mobile

### [touch] @ 768x1024
**Problem:** Touch target too small: <A> "Leistungen" = 74×21px (min 44×44px)
**Lösung:** Increase padding/min-height on small buttons and links for mobile

### [touch] @ 768x1024
**Problem:** Touch target too small: <A> "Ablauf" = 42×21px (min 44×44px)
**Lösung:** Increase padding/min-height on small buttons and links for mobile

### [touch] @ 768x1024
**Problem:** Touch target too small: <A> "Vorteile" = 50×21px (min 44×44px)
**Lösung:** Increase padding/min-height on small buttons and links for mobile

### [touch] @ 768x1024
**Problem:** Touch target too small: <A> "Kontakt" = 51×21px (min 44×44px)
**Lösung:** Increase padding/min-height on small buttons and links for mobile

### [touch] @ 768x1024
**Problem:** Touch target too small: <A> "Termin →" = 86×34px (min 44×44px)
**Lösung:** Increase padding/min-height on small buttons and links for mobile

### [touch] @ 768x1024
**Problem:** Touch target too small: <A> "Impressum" = 66×18px (min 44×44px)
**Lösung:** Increase padding/min-height on small buttons and links for mobile

### [touch] @ 768x1024
**Problem:** Touch target too small: <A> "Datenschutz" = 78×18px (min 44×44px)
**Lösung:** Increase padding/min-height on small buttons and links for mobile

### [touch] @ 768x1024
**Problem:** Touch target too small: <A> "AGB" = 25×18px (min 44×44px)
**Lösung:** Increase padding/min-height on small buttons and links for mobile

---

## Manuelle Code-Analyse: Zusätzliche Befunde

### 1. Nav — Desktop-Links immer ausgeblendet (Bug)
**Seite/Viewport:** Alle Viewports ≥ 768 px
**Schweregrad:** 🔴 Kritisch
**Beschreibung:** In `Nav.jsx` ist die Desktop-Link-Leiste mit `style={{ display: 'none' }}` inline hart codiert. Das `className="hidden md:flex"` würde über Tailwind `display:flex` setzen, aber die `style={{}}`-Eigenschaft überschreibt dies mit höherer Spezifität. Das `@media (min-width: 768px) { nav .hidden { display: flex !important; } }` in der `<style>`-Regel greift wegen der Inline-Spezifität nicht zuverlässig in allen Browsern, weil Inline-Style-Overrides ohne zusätzliches `!important` ignoriert werden — hier klappt es zufällig nur weil das `!important` im `<style>`-Tag vorhanden ist. Das Design ist fragil.
**Datei:** `src/components/Nav.jsx` Zeile 43
**Lösung:** Entferne `style={{ display: 'none' }}` von der Desktop-Link-Div oder verwende nur CSS-Klassen ohne widersprüchliche Inline-Styles.

### 2. Hero — Zwei separate Layouts (mobile/desktop) mit hartem Switch
**Seite/Viewport:** Alle
**Schweregrad:** 🟡 Mittel
**Beschreibung:** Hero rendert zwei völlig separate DOM-Bäume (`.hero-desktop` und `.hero-mobile`) und blendet den jeweils anderen per CSS aus. Dadurch werden beide DOM-Bäume immer gerendert (doppelter Speicher, doppelte Animationen). Bei Breakpoint 767 px/768 px gibt es keinen Übergangsbereich — dies könnte bei genau 767/768 px zu Flackern führen.
**Datei:** `src/components/Hero.jsx` — Bottom `<style>` Block
**Lösung:** Erwäge ein einziges responsives Layout mit CSS-Grid und clamp()-Werten statt zwei DOM-Bäumen. Kurzfristig: kein Handlungsbedarf, solange keine Animationsperformance-Probleme auftreten.

### 3. Services — Kein Breakpoint zwischen 768 px und 1023 px für 2-Spalten-Grid
**Seite/Viewport:** 768 × 1024 (Tablet)
**Schweregrad:** 🟡 Mittel
**Beschreibung:** Das Services-Grid hat drei Breakpoints: <768 (1 Spalte), 768–1023 (2 Spalten), ≥1024 (4 Spalten). Bei 768 px ergibt das 2-Spalten-Grid mit 4 Karten zwei Zeilen, was gut aussieht. Zwischen 900 px und 1023 px bleiben es 2 Spalten, was ok aber suboptimal ist (viel Leerraum).
**Datei:** `src/components/Services.jsx` — `<style>` Block Zeile ~130
**Lösung:** Optional: Füge einen 3-Spalten-Breakpoint bei ~900 px ein.

### 4. Kontakt-Formular — Objekt-Kacheln 2×2 auf mobil
**Seite/Viewport:** 320×568, 375×812
**Schweregrad:** 🟡 Mittel
**Beschreibung:** Die Objekt-Typ-Kacheln werden auf Mobilgeräten in einem 2×2-Grid angezeigt (gridTemplateColumns: 'repeat(2, 1fr)'). Bei 320 px Viewport kann das eng werden (~145 px pro Kachel), und der Tap-Bereich der Kacheln mit Icon + Text ist möglicherweise knapp unter 44 px.
**Datei:** `src/components/Kontakt.jsx` — `<style>` @media (max-width: 767px)
**Lösung:** Mindesthöhe der Kacheln auf 48 px setzen; alternativ 1×4-Grid auf 320 px verwenden.

### 5. Vorteile-Grid — Breakpoint-Lücke zwischen 768 px und 900 px
**Seite/Viewport:** 768×1024 (Tablet hochkant)
**Schweregrad:** 🟡 Mittel
**Beschreibung:** Der Vorteile-Grid schaltet bei ≤900 px auf 2 Spalten und bei ≤767 px auf mobile Styles. Bei 768 px–900 px gilt das 2-Spalten-Grid ohne mobile Kompaktierung. Die Trust-Tiles sind 24 px gepadded und sehen bei 768 px gut aus, aber es ist eine Lücke ohne Media Query zwischen ≤767 (mobile) und ≤900 (medium).
**Datei:** `src/components/Vorteile.jsx` — `<style>`
**Lösung:** Definiere explizit @media (min-width: 768px) and (max-width: 900px) für konsistentes Padding.

### 6. StickyMobileCTA — Nicht im Audit erfasst, muss manuell geprüft werden
**Seite/Viewport:** Mobil
**Schweregrad:** 🟠 Hoch
**Beschreibung:** Die Komponente `StickyMobileCTA.jsx` existiert im Projekt aber wird in `App.jsx` nicht importiert und damit nicht gerendert. Unklar ob das beabsichtigt ist oder vergessen wurde.
**Datei:** `src/components/StickyMobileCTA.jsx`, `src/App.jsx`
**Lösung:** Prüfen ob StickyMobileCTA verwendet werden soll. Falls ja, in App.jsx einbinden.

### 7. Referenzen-Sektion — leer, Tailwind-Klassen statt Custom-CSS
**Seite/Viewport:** Alle
**Schweregrad:** 🟢 Gering
**Beschreibung:** Die Referenzen-Komponente nutzt Tailwind-Klassen (z.B. teal-600, sm:grid-cols-2) aber das übrige Design nutzt ausschließlich Inline-Styles mit Custom-Farben. Die testimonials[] und logos[] Arrays sind leer — die Sektion zeigt nur einen Titel und einen Untertitel.
**Datei:** `src/components/Referenzen.jsx`
**Lösung:** Entweder befüllen oder die Sektion bis zur Befüllung ausblenden, da sie aktuell einen unvollständigen Eindruck macht.

### 8. Galerie — galerie-quote Bild-Overlay könnte bei sehr kleinen Screens Texte verdecken
**Seite/Viewport:** 320×568
**Schweregrad:** 🟡 Mittel
**Beschreibung:** Das Quote-Tile in der Galerie zeigt ein Hintergrundbild mit Gradient-Overlay und Text. Bei 320 px ist das Tile im 1-Spalten-Grid sehr schmal und der Quote-Text "Dieselben Gesichter, jede Woche." (18 px) könnte umbrechen und den Container strecken.
**Datei:** `src/components/Galerie.jsx` — .galerie-quote @media (max-width: 767px)
**Lösung:** Setze min-height auf die Quote-Box oder verkleinere den Font auf 320 px explizit.

### 9. Footer — padding-left/right auf mobil fehlt
**Seite/Viewport:** 320×568, 375×812
**Schweregrad:** 🟢 Gering
**Beschreibung:** Footer hat @media (max-width: 767px) { .footer-inner { padding: 0 20px 40px !important; } }. Das top-padding ist 0, was bedeutet der Divider-Strich direkt am Beginn des Footers ist bündig an der obigen Sektion ohne Abstand.
**Datei:** `src/components/Footer.jsx` — `<style>`
**Lösung:** Füge padding-top: 24px im mobilen Footer hinzu.

### 10. index.html / Vite-Output — meta viewport prüfen
**Seite/Viewport:** Alle
**Schweregrad:** 🔴 Kritisch (wenn fehlend)
**Beschreibung:** Das Playwright-Audit prüft ob `<meta name="viewport">` im gerenderten DOM vorhanden ist. Dies muss in index.html definiert sein.
**Datei:** `index.html`
**Lösung:** Sicherstellen dass `<meta name="viewport" content="width=device-width, initial-scale=1.0">` in index.html vorhanden ist.

---

## Gesamteinschätzung

Das Responsive Design ist **grundsätzlich durchdacht** — es gibt separate Mobile/Desktop-Layouts für Hero, durchdachte Media Queries in den meisten Komponenten, und ein funktionierendes Burger-Menü. Die größten Probleme sind:

1. **Strukturelles Problem im Nav:** Inline-Style `display:none` vs. CSS-!important-Override ist fragil und schwer wartbar.
2. **Lücken in den Breakpoints:** Zwischen 768–900 px (Vorteile) und 900–1023 px (Services) gibt es Bereiche ohne expliziten Media-Query-Schutz.
3. **StickyMobileCTA** wird nicht gerendert — möglicherweise vergessen.
4. **Referenzen-Sektion** ist leer und sieht unfertig aus.

Wenn horizontales Scrolling oder Overflow-Probleme vom Playwright-Lauf gemeldet werden, haben diese höchste Priorität.

---

## Priorisierte To-do-Liste

### 🔴 Sofort (Kritisch)
- [ ] `index.html`: Viewport Meta-Tag verifizieren
- [ ] `Nav.jsx:43`: Inline-Style `display:none` auf Desktop-Links entfernen oder mit !important CSS korrekt überschreiben
- [ ] Horizontales Scrollen beheben falls vom Playwright-Lauf gemeldet

### 🟠 Hoch (Diese Woche)
- [ ] `App.jsx`: Klären ob StickyMobileCTA eingebunden werden soll
- [ ] `Referenzen.jsx`: Sektion befüllen oder vorübergehend ausblenden

### 🟡 Mittel (Nächstes Sprint)
- [ ] `Services.jsx`: Optionaler 3-Spalten-Breakpoint bei ~900 px
- [ ] `Vorteile.jsx`: Expliziter Breakpoint-Block für 768–900 px
- [ ] `Kontakt.jsx`: Objekt-Kacheln Mindesthöhe auf 48 px setzen
- [ ] `Galerie.jsx`: Quote-Tile bei 320 px explizit testen und ggf. Fontgröße reduzieren

### 🟢 Gering (Backlog)
- [ ] `Footer.jsx`: padding-top: 24px auf Mobil hinzufügen
- [ ] `Hero.jsx`: Langfristig auf ein einziges responsives Layout refaktorieren
