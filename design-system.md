# Flocka Tattoo Design System

Version: 0.2 · SURFACE-inspired Flocka foundation

## Concept index

- [Foundation](docs/design-system/foundation.md)
- [Page architecture](docs/design-system/page-architecture.md)
- [Motion system](docs/design-system/motion.md)
- [Content model](docs/design-system/content.md)
- [Implementation contract](docs/design-system/implementation.md)

## Direction

Flocka follows the visual grammar of the SURFACE reference: a high-contrast editorial page, oversized display type, compact fixed navigation, full-bleed section moments, overlay menus and carefully staged scroll transitions. SURFACE is the layout and motion reference; Flocka owns the content, imagery, logo and tattoo vocabulary.

The current color direction stays black, white and red. Red is the single brand signal and replaces SURFACE's bright red without introducing additional accent colors.

## Color tokens

| Token | Value | Use |
| --- | --- | --- |
| `ink` | `#090909` | page background and stage |
| `black` | `#000000` | hard contrast and media frames |
| `bone` | `#F2EFE8` | primary copy and light surfaces |
| `muted` | `#A9A39A` | secondary copy |
| `signal` | `#C92C2C` | CTA, active state, important emphasis |
| `signal-soft` | `#7F1D1D` | deeper red surface |
| `blood` | `#3A0D12` | atmospheric dark red |
| `surface` | `#151313` | panels and form modules |
| `line` | `rgba(242, 239, 232, 0.16)` | dividers and borders |

## Typography

Fonts are intentionally not bundled yet. The current proof uses fallbacks:

- `display`: Impact / Arial Narrow fallback for condensed tattoo-poster headlines
- `body`: Arial / Helvetica fallback for readable editorial copy
- `mono`: Courier New fallback for metadata, labels and system notes

Font files can be introduced later without changing component contracts.

## Layout principles

- Use wide, deliberate whitespace around major sections.
- Use borders and alignment as structural devices.
- Reserve signal red for actions, active states and one meaningful emphasis per region.
- Prefer sharp corners and restrained surfaces over rounded SaaS cards.
- Let photography and the logo carry texture; keep UI decoration quiet.

## Motion and interaction

The page uses staged entry, section reveals, media scale/parallax, overlay navigation transitions, hover image changes, accordion expansion and horizontal project movement. The interaction contract is documented in [motion.md](docs/design-system/motion.md). All motion must respect `prefers-reduced-motion` and support keyboard focus and direct controls.

## Assets

- `/public/images/flocka_logo.png`: transparent Flocka Tattoo master logo for header and brand moments

## Routes

- `/`: Flocka demo landing page
- `/design-system`: token and typography reference

## Content status

The page concepts use polished demo content for Flocka Tattoo. Studio address, email, booking availability, social handles and final artist biography remain replaceable content inputs until real details are provided.
