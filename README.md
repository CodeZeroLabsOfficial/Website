# Depesch — Landing

Three product landing pages built on one shared design system, inspired by the
visual language of premium SaaS/hospitality sites (dark charcoal canvas, Jost
display + Roboto body, large uppercase eyebrows, marquee trust strip, and
scroll-reveal motion).

## Pages

| Route        | Product             | Accent       |
| ------------ | ------------------- | ------------ |
| `/chauffeur` | Professional driver | Gold         |
| `/clinic`    | Medical / GP clinic | Teal         |
| `/gym`       | Gym / fitness       | Electric lime|
| `/`          | Product selector    | —            |

All three pages share components in `src/components/` and are driven by content
in `src/lib/content.ts`. Each route sets `data-theme` to swap the accent color
via CSS variables defined in `src/app/globals.css`.

## Tech stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 (CSS-based theme tokens)
- Framer Motion (scroll-reveal + entrance animations)
- `next/font` (self-hosted Jost + Roboto)

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Production build

```bash
npm run build
npm run start
```

## Deploy to Vercel

This is a standard Next.js app — Vercel detects it with zero configuration.

1. Push the repo to GitHub (already wired to `origin`).
2. In Vercel, **Add New → Project** and import `CodeZeroLabsOfficial/landing`.
3. Framework preset: **Next.js** (auto). Build command `next build`, output handled automatically.
4. Deploy.

Or via CLI:

```bash
npx vercel        # preview deploy
npx vercel --prod # production deploy
```

## Customizing the brand

- **Colors / accents:** `src/app/globals.css` (`:root` + `[data-theme="…"]`).
- **Copy:** `src/lib/content.ts` (one object per vertical).
- **Logo:** the `0` badge in `Nav.tsx` / `Footer.tsx` — swap for your SVG in `public/`.
- **Fonts:** `src/app/layout.tsx`.
