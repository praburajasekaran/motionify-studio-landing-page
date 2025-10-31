# Source of Truth

Canonical source for the landing page is the static HTML/CSS under `src/components/*.html` and `landing-page.html` with shared styles in `src/styles/`.

If Next.js (`motionify-app/`) is used, mirror changes from the static components into React components after edits land here.

Sync rules:
- Style tokens and utilities live in `src/styles/tokens.css` and `src/styles/main.css`.
- Prefer `.btn-*`, `.focus-ring`, `.font-headline`, `.font-body`, and form utilities in all environments.
- When adding a new component, create `src/components/<Name>.html` first, then port to `motionify-app/src/components/<Name>.tsx` if needed.


