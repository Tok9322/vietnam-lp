# Saigon Breeze — Vietnamese Restaurant Landing Page

A modern, responsive landing page for a Vietnamese restaurant. Built with plain HTML/CSS/JS and local images.

## Structure
- `index.html` — markup for sections: Hero, Concept, Menu, Gallery, Access, Reserve, Footer
- `styles.css` — modern typography (Outfit), layout, hero overlay, gallery masonry
- `script.js` — mobile nav toggle, smooth scroll, back-to-top button
- `assets/images/` — local images (dishes, interior)
- `.nojekyll` — disable Jekyll on GitHub Pages

## Development
Open `index.html` in a browser or use a simple static server.

## Deploy (GitHub Pages: Deploy from a branch)
1. Repository Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main`, Folder: `/ (root)`
4. Wait a few minutes for publish. URL will appear on the Pages settings page.

If you need to manually trigger a rebuild, push any commit (e.g., update this README) or push an empty commit:
```bash
git commit --allow-empty -m "Trigger GitHub Pages rebuild"
git push origin main
```

## Image credits
Interior images under `assets/images/interior/` are from Unsplash (filenames include authors). Replace with your own assets if needed.
