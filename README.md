# bogdana.m. — AI Creator portfolio

Single-page, Ukrainian-first bilingual portfolio prepared as a GitHub Pages-ready static site. It uses no build step or framework. The portfolio areas contain replaceable media slots only; no stock, generated, or substituted portfolio artwork is included.

## Preview locally

Open `index.html` in a browser. For local video/image paths and browser restrictions, a simple local web server is recommended.

## Add the original media

The supplied Fashion Editorial files are connected in `mediaManifest` near the top of `script.js`. The first, very large PNG is preserved in the local source package; the repository uses a lightweight 1610 × 2400 full-frame JPEG derivative for the page. The other seven PNGs and the MP4 are included in `assets/fashion/`. Images use `object-fit: contain` so their full composition stays visible. The video uses the supplied first campaign image as a poster and starts only after the visitor presses play.

For future media, put files under `assets/` and add paths to `mediaManifest`. Use the exact keys below; image values can be paths, and video values may be `{ src: '...', poster: '...' }`.

Featured project keys:

- `fashion|HERO / Model + Outfit`
- `fashion|Architectural Walk`
- `fashion|Portrait`
- `fashion|Pool`
- `fashion|Fashion Detail`
- `fashion|Staircase`
- `fashion|Staircase / Open Space`
- `fashion|Storyboard`
- `fashion|Video`
- `jewelry|Photo 01`
- `jewelry|Photo 02`
- `jewelry|Video`
- `fragrance|HERO / The Fragrance`
- `fragrance|TOP NOTES / The Spark`
- `fragrance|HEART / The Bloom`
- `fragrance|TRANSITION / The Drop`
- `fragrance|BASE / The Trail`
- `fragrance|COMPLETE FRAGRANCE / FINAL HERO`
- `fragrance|VIDEO 01 — THE EVOLUTION`
- `fragrance|VIDEO 02 — THE SCENT IN MOTION`

Creative Explorations keys use `gallery:<category>|<work title>`:

- `gallery:beauty|DIOR ADDICT LIP GLOW OIL 104 BLACK CHERRY`
- `gallery:beauty|PINK LIQUID — CANDY POP BEAUTY`
- `gallery:beauty|CARAMEL BONBONS`
- `gallery:fashion|THE WIND DRESS`
- `gallery:fashion|GLITTER SKIN`
- `gallery:fashion|THE IMPOSSIBLE BAG — DIOR LADY D-LITE`
- `gallery:surreal|BABY DRAGON PIZZA CHEF`
- `gallery:surreal|GIANT STRAWBERRY CAKE`
- `gallery:surreal|LEMON HOTEL`
- `gallery:surreal|MANGO PASSION COCKTAIL`

Video slots accept video files only. Videos are user-started, preload metadata only when a source is added, and pause when their carousel slide becomes inactive. Images are lazy-loaded and keep their full aspect ratio in the project carousels.

## Contact address

No email address was provided. Replace the `mailto:` links and visible “email — add address” placeholders in `index.html` after choosing the public contact address. The optional Instagram link has been omitted because no real URL was supplied.

## Publish with GitHub Pages

1. Add the contents of this folder to the root of `MalyshenkoBogdana/bogdana-portfolio` (including `index.html`, `styles.css`, `media.css`, `compact.css`, `refinements.css`, `editorial.css`, `polish.css`, `palette.css`, and `script.js`).
2. Commit and push the files to the repository's `main` branch.
3. In GitHub, open **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. After GitHub Pages finishes its deployment, use the URL shown in **Settings → Pages**.

The site keeps the required section sequence: Header, Hero, Selected Projects, Creative Explorations, Contact, Footer. Project, carousel and gallery ordering is encoded in `script.js`.
