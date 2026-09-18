# Flocka Tattoo

Website for the Flocka Tattoo studio in Köln, built on Nuxt 4. A dark, motion-led single-page presentation with a gallery carousel, scroll-driven reveals, and the legally required pages.

Live at [flocka.pages.dev](https://flocka.pages.dev).

> Work in progress. The design system is documented and implemented, but content and page structure are still being extended.

## What it includes

- A hero section with a colour-reveal treatment on the artwork.
- A gallery carousel driven by a dedicated composable.
- Scroll-triggered reveal animations and a film-grain noise layer.
- Smooth scrolling through Lenis.
- Imprint and privacy pages.
- A living design-system page rendered from the implemented tokens.
- Server-generated `robots.txt` and `sitemap.xml`, plus `llms.txt` files for AI crawlers.

## Tech stack

- Nuxt 4 and Vue 3
- TypeScript
- UnoCSS with the Wind4 and icon presets
- Lenis for smooth scrolling
- VueUse
- Nuxt A11y and Nuxt Icon

## Getting started

### Requirements

- Node.js with Corepack enabled
- pnpm 10

### Installation

```bash
corepack enable
pnpm install
```

### Configuration

Copy [`.env.example`](.env.example) to `.env`:

| Variable | Purpose |
| --- | --- |
| `NUXT_PUBLIC_SITE_URL` | Canonical production origin for canonical URLs, Open Graph and sitemap links |

### Development

```bash
pnpm dev
```

The development server runs at `http://localhost:3000`.

## Useful commands

```bash
pnpm build      # Build for production
pnpm generate   # Build a static output
pnpm preview    # Preview the production build
pnpm lint       # Run ESLint
pnpm typecheck  # Run Nuxt type checking
pnpm check      # Run lint and typecheck together
```

## Project structure

```text
app/
├── components/flocka/   # Hero, carousel, reveal, noise layer, header
├── composables/         # Carousel and colour-reveal logic
├── pages/               # Home, design system, imprint, privacy
└── assets/css/          # Style entry point

server/routes/           # robots.txt and sitemap.xml
plugins/                 # Lenis client plugin
docs/design-system/      # Foundation, motion, page architecture
public/                  # Icons, manifest, llms.txt files
```

## Design direction

The visual system is documented in [`docs/design-system/`](docs/design-system/): [foundation](docs/design-system/foundation.md) for tokens, [motion](docs/design-system/motion.md) for animation rules, and [page architecture](docs/design-system/page-architecture.md) for section composition. The `/design-system` route renders those decisions live, so the documentation and the implementation stay comparable.

## Status

Under active development. Expect content placeholders and a `test` route while sections are being built out.

## License

No open-source license has been declared yet. Until a license is added, reuse and redistribution are not granted by default.

Made with love by [Laflamme](https://github.com/lafllamme).
