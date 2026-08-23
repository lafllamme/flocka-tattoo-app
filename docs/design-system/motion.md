# Flocka Motion System

## Principle

Motion should make the page feel like a sequence of printed sheets, studio doors and image plates being revealed. It should not feel like a generic animation library demo.

## Reference behaviors to reproduce

### Entry

- Load with a short red/black stage reveal.
- Introduce the fixed header before the hero wordmark.
- Reveal the hero wordmark by opacity plus vertical clipping.

### Scroll

- Section labels enter first.
- Large headings follow with a slight vertical offset.
- Media fields reveal through clipping and scale down into place.
- Large project titles can move laterally while their image remains anchored.

### Navigation

- Menu opens as a full-viewport overlay.
- Primary links stagger in vertically.
- Close action reverses the same sequence.
- Body scroll is locked while the overlay is open.

### Work and testimonials

- Work rail moves horizontally through direct controls and touch swipe.
- Hover can change crop/scale, not content meaning.
- Testimonials use a restrained crossfade or slide with visible previous/next controls.

### FAQ

- Accordion height transitions open one answer at a time.
- The active row gets the signal-red rule or icon state.

## Timing tokens

| Token | Value | Use |
| --- | --- | --- |
| `motion-fast` | `180ms` | hover and icon state |
| `motion-base` | `420ms` | accordion and local transition |
| `motion-slow` | `720ms` | section reveal and media entrance |
| `motion-stage` | `1100ms` | hero and overlay choreography |

## Accessibility

- Use `prefers-reduced-motion` to remove transforms and shorten transitions.
- Every carousel has buttons and labels, not swipe-only navigation.
- Every accordion exposes `aria-expanded` and controls an identified panel.
- Focus remains visible on the red signal color.
