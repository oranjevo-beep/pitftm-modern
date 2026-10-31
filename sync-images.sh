#!/usr/bin/env bash
set -e
mkdir -p images
BASE_URL="https://raw.githubusercontent.com/oranjevo-beep/pitftm-web/main/images"
FILES=(
  "logo-slide.png"
  "logo-slide@2x.png"
  "product-1.webp" "product-2.webp" "product-3.webp" "product-4.webp"
  "product-5.webp" "product-6.webp" "product-7.webp" "product-8.webp"
  "product-9.webp" "product-10.webp" "product-11.webp" "product-12.webp"
  "product-13.webp" "product-14.webp" "product-15.webp" "product-16.webp"
  "871468391_w1280_h1280_dlya_vannyh_komnat.webp"
  "871472558_w1280_h1280_antizhir.webp"
  "pr-2.webp" "pr-3.webp" "pr-4.webp" "pr.webp" "prd.webp"
)
echo "Downloading original TM PIF photos into ./images/ ..."
for f in "${FILES[@]}"; do
  curl -sSL "$BASE_URL/$f" -o "images/$f" && echo "  OK images/$f"
done
if command -v python3 >/dev/null; then
  python3 - <<'PY'
from pathlib import Path
try:
  from PIL import Image
  src=Path('images/product-4.webp')
  dst=Path('images/855269609_w1280_h1280_img_8616_sredstvo_dlya_mitya_posudy_persik_1l.jpg')
  if src.exists():
    Image.open(src).convert('RGB').save(dst, 'JPEG', quality=90, optimize=True)
    print('  OK', dst)
except Exception as e:
  print('  skip peach alias:', e)
PY
fi
echo "Done."
