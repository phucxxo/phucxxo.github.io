# Intelligence Designed To Evolve — landing page

Single-viewport, full-bleed video landing page. Static HTML + CSS + vanilla JS,
no framework and no build step.

```
index.html
styles.css
main.js
assets/logo.webp
fonts/GeistPixel-Circle.woff2
```

## Run locally

Any static server works; the page only needs the files served over HTTP so the
local font and the logo resolve.

```bash
python3 -m http.server 8080
# then open http://127.0.0.1:8080/
```

## Notes

- Background video is streamed from CloudFront; the first paint is black until
  it buffers.
- Display type is **BubbledotICG-FinePos** (OnlineWebFonts CDN), with
  **Geist Pixel Circle** bundled locally as the fallback.
- Icons are Font Awesome 6.5.2 brand glyphs from cdnjs.
- Stats count up once, when the footer scrolls into view.
- Mobile breakpoint is 720px: the nav collapses into a burger + sheet menu.
- Honours `prefers-reduced-motion`.
