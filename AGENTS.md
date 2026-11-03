<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Depesch landing

Single-product marketing site. Routes compose; chrome is global; copy is data.

- `src/app/` — URLs and metadata
- `src/components/chrome/` — AppShell, Nav, Footer, PageTransition, Logo
- `src/components/demo/` — demo overlay
- `src/components/legal/LegalPage.tsx` — legal document template
- `src/components/sections/` — marketing blocks
- `src/components/ui/` — UI kit (Container, Button, Field, SectionHeader, Icon, Reveal)
- `src/content/` — all copy and site constants
- `src/lib/` — behavior only (motion, scroll lock)

Follow `.cursor/rules/` for structure, naming, and UI conventions.
