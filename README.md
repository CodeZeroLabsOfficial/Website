# Depesch — Landing

Marketing site for Depesch, a dispatch platform for professional chauffeurs.

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/features` | Features |
| `/support` | Support |
| `/legal/privacy-policy` | Privacy Policy |
| `/legal/terms-of-service` | Terms of Service |

Copy lives in `src/content/`. Chrome (nav, footer, demo overlay) is global via `AppShell`. Legal documents are data rendered by `LegalPage`.

## Tech stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion
- Geist + Inter via `next/font`

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```
