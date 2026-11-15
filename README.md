# throwingdiscminecraft.com

Next.js static site for **Throwing Disc Minecraft** SEO coverage. Deploys to **Cloudflare Pages** via `output: "export"` → `out/`.

## Quick start

```bash
npm install
npm run dev
npm run build   # writes static files to out/
```

## Cloudflare Pages

| Setting | Value |
| --- | --- |
| Framework preset | Next.js (static) or None |
| Build command | `npm run build` |
| Build output directory | `out` |
| Node version | 20+ |

Connect the Git repo in the Cloudflare dashboard, or upload `out/` with Wrangler:

```bash
npx wrangler pages deploy out --project-name=throwingdiscminecraft
```

## Update content (ops)

No external CMS required for P0. Edit TypeScript data modules and redeploy:

| File | Purpose |
| --- | --- |
| `src/data/discs.ts` | Tiers, recipes, damage/durability |
| `src/data/faqs.ts` | FAQ copy (feeds JSON-LD) |
| `src/data/timeline.ts` | Update / snapshot timeline |
| `src/data/site.ts` | Site URL, lastUpdated, official links |

Set `SITE.lastUpdated` whenever you publish factual changes.

## Routes (P0)

English: `/` · `/crafting` · `/stats` · `/vs-trident` · `/tips` · `/bedrock-offhand` · `/update` · `/wiki` · `/disk` · `/chakram`

Chinese mirrors: `/zh` · `/zh/crafting` · … (same set). Header language switch preserves the current page.

Chinese copy: `src/data/zh-content.ts` · UI strings: `src/lib/i18n.ts`

## Notes

- Fan site — not affiliated with Mojang/Microsoft.
- Damage numbers are TBD until snapshots; placeholders are intentional.
- `hreflang` en/zh is set per page and in `sitemap.xml`.
