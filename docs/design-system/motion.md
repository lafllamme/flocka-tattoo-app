# Flocka Motion System

## Audit status

This document records the browser audit of the live [SURFACE reference](https://surface-art-direction.framer.website/), not only the exported HTML. The desktop pass was measured at `1280 × 633`; the responsive pass at `390 × 844`. The live desktop document is approximately `9,329px` high and the mobile document approximately `9,846px` high.

The reference is built with Framer runtime layout and motion. The generated Framer class names are not implementation targets. We reproduce the observable behavior through semantic Vue components, CSS/UnoCSS, and VueUse state where useful.

## Reference page sequence

### Desktop geometry

| Area | Start | Height | Observable behavior |
| --- | ---: | ---: | --- |
| Hero | `0` | `633` | Sticky, full viewport, oversized wordmark and image plate |
| About | `633` | `1083` | Two-column editorial intro with image and reveal pairs |
| Work | `1716` | `2311` | Three stacked project plates, sticky description relationship |
| Services | `4027` | `812` | Intro followed by four service rows |
| Process | `4839` | `836` | Image plus four numbered process steps |
| Testimonials | `5676` | `859` | Image sequence, quote and author |
| FAQ | `6534` | `823` | Six accordion rows |
| Blog | `7358` | `869` | Intro plus three editorial cards |
| Contact/footer | `8227` | `553` | CTA first, footer navigation and contact details |

### Mobile geometry

| Area | Start | Height | Observable behavior |
| --- | ---: | ---: | --- |
| Hero | `0` | `844` | Full viewport, compact header, oversized wordmark remains dominant |
| About | `844` | `1087` | Stacked text/image composition |
| Work | `1931` | `1965` | Three projects become vertical cards |
| Services | `3896` | `774` | Four rows remain stacked with smaller type |
| Process | `4670` | `1220` | Image followed by four vertically separated steps |
| Testimonials | `5890` | `976` | Image sequence and quote stack vertically |
| FAQ | `6865` | `775` | Six full-width rows |
| Blog | `7640` | `1412` | Three cards stack vertically |
| Contact | `9052` | `304` | CTA is a separate closing section |
| Footer | Hero-adjacent mobile region | `489` | Mobile footer is structurally distinct from desktop footer |

## Motion findings from the browser

### Hero and page shell

- The hero occupies the viewport and remains `position: sticky` on desktop while the following sections travel past it.
- The desktop header is approximately `57px` high. Its navigation sits inside a roughly `25.6px` horizontal page inset.
- The mobile header is approximately `66px` high and uses a compact close/menu control instead of the desktop navigation row.
- The hero wordmark is extremely large on both breakpoints. In the observed runtime it resolves to roughly `248px` computed font size; the mobile layout keeps the same oversized typographic character and controls the visible crop through layout.
- A grain/noise layer is present as a low-opacity overlay. It is visual texture, not a content image.

### Section reveal pattern

The recurring section entrance is a paired horizontal reveal:

- left-side section headings start around `translateX(-150px)` with opacity near `0`;
- right-side descriptions and controls start around `translateX(150px)` with opacity near `0`;
- both settle at `translateX(0)` and opacity `1` as the section enters the viewport;
- the same relationship is used again for lower image/text groups as they enter and leave their active scroll range.

The reveal is scroll-progress-driven by Framer rather than a simple one-shot CSS keyframe. The visual result should therefore be implemented with a bounded progress value, not only an `IntersectionObserver` boolean. A practical Flocka mapping is:

```text
progress 0 → 1
leftX     -150px → 0
rightX     150px → 0
opacity    0 → 1
```

At the end of a section, the same properties can be allowed to reverse subtly as the content leaves the active range. The reversal should remain restrained; the reference never reads as a spring or a bouncing interface.

### Work section

- Work is not a conventional carousel in the reference. It is a vertical sequence of three project entries.
- Each desktop project plate is approximately `448px` high.
- The project description/title relationship behaves as a sticky editorial anchor while the media plates progress through the section.
- On mobile, the same three entries become normal stacked cards with their title, metadata, CTA, and image kept together.
- The project image is a clickable group. Hover/press behavior is image-led and should affect crop/scale or visual emphasis without changing the project content.

### Services and process

- Services uses a section intro reveal followed by four rows: `ART DIRECTION`, `VISUAL CONCEPTS`, `IMAGE SYSTEMS`, and `CREATIVE DIRECTION`.
- Process uses one image and four numbered stages: `01 RESEARCH`, `02 CONCEPT`, `03 DIRECTION`, `04 DELIVERY`.
- The process steps are content rows, not a progress wizard. Their numbers remain visible and the active state is communicated through scroll position and spacing rather than a heavy progress indicator.

### Testimonials

- The testimonial section contains a sequence of six image plates and one visible quote/author state.
- The image group is interactive and the active quote is paired with the image state. The interaction should be treated as a restrained crossfade/slide, not a fast rotating slider.
- Controls are present in the DOM as an interactive control without a visually heavy control bar; Flocka should preserve keyboard access and make the current state understandable to assistive technology.

### FAQ

- Six full-width question rows are visible in the page structure.
- Clicking a row changes its runtime state to an open/close variant. The plus icon rotates by approximately `45deg` in the open state.
- The row height and answer panel are animated by the runtime. The open state must use `aria-expanded`, an identified answer panel, and a height transition that does not clip focusable content.
- The reference uses a minimal monochrome rule system. Flocka may use the signal red token for the active rule/icon, but should not introduce card shadows or unrelated decoration.

### Blog cards

- Blog contains three cards with image, title, and summary.
- Cards are links and use the same editorial image treatment as Work.
- Mobile stacks the cards and increases vertical separation instead of shrinking the desktop grid into unreadable columns.

### Contact and footer

- The closing sequence is a dedicated Contact area followed by the footer.
- The main CTA is large, uppercase, and visually acts as the final page statement.
- Desktop footer contains contact copy, social links, navigation, and legal links.
- Mobile places footer content in a separate compact region associated with the hero/page shell. This must be deliberately composed in the Flocka mobile layout rather than inferred from desktop ordering.

## Motion implementation contract for Flocka

### Component responsibilities

- `SiteHeader`: desktop navigation, mobile menu trigger, active section state.
- `SectionOverlayMenu`: full-viewport mobile/overlay navigation, staggered links, scroll lock.
- `HeroWordmark`: sticky hero, oversized Flocka wordmark/logo, grain layer, image plate.
- `RevealPair`: reusable left/right progress-driven heading and copy reveal.
- `WorkShowcase`: data-driven project stack; sticky desktop relationship, stacked mobile cards.
- `ServiceRows`: four service rows with restrained row reveal.
- `ProcessRail`: image plus numbered stages.
- `TestimonialRail`: image states, quote state, accessible controls.
- `FaqAccordion`: one or more open panels, animated height, ARIA state.
- `JournalGrid`: linked editorial cards.
- `ContactPanel`: final CTA.
- `SiteFooter`: contact, social, navigation, legal, and Flocka identity.

### Preferred primitives

- Use CSS custom properties for reveal progress and translate/opacity values so UnoCSS remains the token layer while the runtime can update progress efficiently.
- Use `position: sticky` for the desktop hero and the Work editorial anchor.
- Use VueUse visibility/scroll helpers where they simplify state, but keep the actual reveal interpolation deterministic and component-local.
- Animate `transform` and `opacity`; avoid layout animation except for the FAQ answer height.
- Use `clip-path` or overflow clipping for image/wordmark entrances only where it matches the reference composition.
- Use a single motion source per component. Do not combine unrelated CSS keyframes, watchers, and transition groups for the same property.

## Flocka adaptation rules

- Preserve the reference hierarchy, section rhythm, oversized typography, black/white base, and editorial spacing.
- Replace SURFACE copy with tattoo-studio content: artist statement, selected tattoos, styles, process, testimonials, FAQ, journal, booking CTA, and studio contact.
- Replace the reference’s monochrome image world with the Flocka tattoo image system and the existing transparent/header logo asset.
- Introduce signal red only as a controlled accent: active rules, small metadata, selected controls, and booking emphasis.
- Keep the motion choreography recognizable, but do not copy generated Framer implementation details or inaccessible interaction patterns.

## Timing tokens

| Token | Value | Use |
| --- | --- | --- |
| `motion-fast` | `180ms` | hover, focus, icon state |
| `motion-base` | `420ms` | accordion and local transitions |
| `motion-slow` | `720ms` | section reveal and media entrance |
| `motion-stage` | `1100ms` | hero and overlay choreography |

These are starting tokens for the Flocka implementation. Exact easing and progress ranges must be tuned against browser screenshots during implementation.

## Accessibility and reduced motion

- Respect `prefers-reduced-motion`: remove horizontal travel, disable image scale/crop animation, and reduce transitions to a short opacity change.
- Every carousel/testimonial control has a label and keyboard operation; swipe is an enhancement only.
- Every accordion exposes `aria-expanded`, `aria-controls`, and an identifiable answer region.
- Focus remains visible against the black/white/red palette.
- Sticky and overlay behavior must not trap keyboard focus outside the active region.

## Remaining implementation verification

The reference behavior is now documented at the page-architecture and motion level. During Flocka implementation, visual verification still needs to tune exact easing curves, image crop values, and breakpoint-specific spacing against side-by-side browser screenshots. Those are implementation calibration tasks, not missing page sections.
