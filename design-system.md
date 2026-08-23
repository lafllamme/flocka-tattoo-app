# Flocka Tattoo Design System

Version: 0.1 · dark-first foundation

## Direction

Flocka is a tattoo studio identity built around black structure, bone-white copy and a single earned signal red. The system should feel tactile, editorial and made for ink—not like a generic dark SaaS interface.

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

The initial demo uses VueUse `useSwipe` for touch navigation in the portfolio carousel. Any future motion must respect `prefers-reduced-motion` and should support keyboard focus and direct controls.

## Assets

- `/public/images/flocka-tattoo-logo-clean.png`: circular emblem
- `/public/images/flocka-tattoo-logo-header.png`: foreground header mark

## Routes

- `/`: Flocka demo landing page
- `/design-system`: token and typography reference
