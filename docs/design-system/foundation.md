# Flocka Foundation

## Purpose

Define the visual primitives for the SURFACE-inspired Flocka Tattoo site. The reference HTML is treated as a visual and interaction reference only; its Framer markup and generated class names are not copied into the application.

## Brand rule

Black is the stage. White is the voice. Red is the signal.

The page should feel like a contemporary tattoo studio with the discipline of an art-direction portfolio: sharp, editorial, confident and tactile.

## Token layers

### Raw palette

| Token | Value | Role |
| --- | --- | --- |
| `ink` | `#090909` | global stage |
| `black` | `#000000` | hard media and hero contrast |
| `white` | `#FFFFFF` | reference-white surface |
| `bone` | `#F2EFE8` | warm brand copy |
| `muted` | `#8D8982` | secondary copy |
| `signal` | `#FF1717` | primary red signal, reference-aligned |
| `signal-soft` | `#A80F13` | pressed and deep red |
| `blood` | `#3A0D12` | restrained dark red field |
| `line` | `rgba(9, 9, 9, 0.16)` | light-surface rules |
| `line-dark` | `rgba(242, 239, 232, 0.16)` | dark-surface rules |

### Semantic aliases

- `page-light`: white editorial sections
- `page-dark`: ink sections and footer
- `copy-primary`: ink on light, bone on dark
- `copy-muted`: muted editorial metadata
- `accent`: signal red
- `border-light`: line
- `border-dark`: line-dark

## Typography roles

- `display`: heavy condensed or grotesk display face; used for hero wordmark, project names and large CTA statements
- `body`: neutral sans; used for paragraphs and explanations
- `meta`: monospace or compact utility face; used for labels, indices, navigation hints and metadata

The final font files are intentionally deferred. The token names must remain stable when the font setup is added.

## Shape and spacing

- Sections use full-width fields with a centered content rail.
- Cards are mostly square or minimally rounded.
- Rules and alignment provide hierarchy instead of elevated shadows.
- Hero type is allowed to exceed the content rail and become an image-like object.
- Section spacing is generous; compact metadata creates rhythm between large forms.
