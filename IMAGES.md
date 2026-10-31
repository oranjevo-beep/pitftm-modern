# Image provenance (verified)

## Product packshots (catalog) — ORIGINAL from `pitftm-web`
All `images/product-1.webp` … `product-16.webp` are **byte-identical** (SHA-256) to
`https://github.com/oranjevo-beep/pitftm-web` `images/`.

SKU mapping matches classic `products.json` / `products.html` (e.g. p01→product-2.webp).

Cards use these webps for both `image` and `canvasImage` / `fallbackImage`.

## Hero
- `opt_hero.jpg` — original file from the Tailwind upload zip (hash-matched). Not present in classic `pitftm-web`.
- `hero-glass-lg.webp` — original from classic `pitftm-web` (optional asset).

## NOT used as catalog packshots
- `images/upload-thumbs/p01.jpg`…`p14.jpg` — from the upload zip. These are **different artwork**
  (newer mockup-style labels), not the same files as the classic webp packshots.
- Previously regenerated root `p01.jpg`…`p14.jpg` (JPEG re-encodes of webps) were **removed**
  so they cannot be mistaken for originals.
