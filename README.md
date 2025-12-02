# ManuelMezoMyWebCV

Personal website / web CV for Manuel Mezo — a lightweight, static portfolio and résumé site built with simple HTML, CSS and a few images.

## Overview

This repository holds a single-file (self-contained) static website and a small set of static assets. The site serves as an online CV and project portfolio with sections for About, Experience, Projects, Interests, and Contact.

Key entry points:
- `index.html` — Primary website used for production (single-page, responsive, modern CSS features).
- `public/404.html` — Custom 404 page served by Firebase hosting.

There is an `old/` folder (archived site variants) that has been moved into `archive/` to keep history while preventing those files from being publicly served.

## Languages & Tools

- HTML — markup for the website.
- CSS — stylesheet is embedded inside `index.html` (no build step required); uses modern CSS variables and minor vendor prefixes for cross-browser text gradient support.
- JavaScript — small inline scripts at the bottom of `index.html` for interactive features (project scroller, interest photo toggles, dynamic year update).
- Firebase — the repo is configured to host the site via Firebase Hosting (see `firebase.json`). `firebase.json` currently uses `"public": "."` so by default everything in the repo root would be served — archived files are explicitly ignored.

## File structure (important files)

- `index.html` — main site (single page).
- `archive/` — archived and older site files (moved here to keep public site clean). These files are ignored by Firebase Hosting (`firebase.json`).
- `project-*.png/jpg` and `photo-*.jpg` — images used on the site.
- `.vscode/settings.json` — workspace setting (silences CSS unknown-property warnings locally).
- `firebase.json` — hosting config (archive/** added to `ignore` list so archived files are not served).

## How to run locally

1. Open `index.html` directly in a browser for a local preview — no server required. This site is static so a simple file-open will work.
2. Optional: run a static server (useful to test relative paths):

	For Node.js users:
	```bash
	npx serve .
	# or
	python -m http.server 8000
	```

## How it is hosted

This project is set up for Firebase Hosting. To deploy (if you have Firebase configured locally):

```bash
firebase deploy --only hosting
```

Note: `firebase.json` contains an `ignore` entry for `archive/**` so archived files are not served.