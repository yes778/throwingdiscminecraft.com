# Content ops

P0 uses typed modules under `src/data/` so builds stay static and fast on Cloudflare Pages.

1. Edit EN facts in `src/data/discs.ts`, `faqs.ts`, `timeline.ts`, or `site.ts`
2. Edit ZH facts in `src/data/zh-content.ts` (and UI chrome in `src/lib/i18n.ts`)
3. Bump `SITE.lastUpdated`
4. `npm run build` → deploy `out/`

Optional: keep research notes / snapshot changelogs as Markdown in this folder (not rendered automatically yet).
