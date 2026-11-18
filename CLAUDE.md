# tbragaf.github.io

Personal site, two pages built by one Vite build: `/` (home) and `/cv/` (curriculum vitae). Plain Vite + React +
TypeScript with plain CSS. The look is the old CV look (Source Sans Pro, teal, centred uppercase titles, alternating
section backgrounds, timeline, hero image), light only, with a hamburger menu on mobile.

- `index.html` and `cv/index.html` are the two entries; `src/home` and `src/cv` hold each page, `src/shared` the header, footer, layout and `styles.css`.
- Paths come from the `Route` enum, external URLs from `ExternalLink`; never a path string in a link.
- The header logo reads "tbragaf".
- Navigation is a menu only (no cards). English only. No "Built with" line in the footer.
- CV content is a draft in the owner's voice: reword together before publishing.
- Deploy (not set up yet): GitHub Actions to GitHub Pages from the `tbragaf.github.io` repo. The old `cv` repo is archived after.
- Commands: `npm start` (dev), `npm run build` (typecheck + build), `npx prettier --write src`.
