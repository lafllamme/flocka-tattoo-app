# Flocka Page Architecture

## Reference translation

The SURFACE homepage becomes one continuous Flocka landing page. The order and visual pacing remain equivalent while all labels, images and interactions become tattoo-specific.

## Sections

1. **Header** — `FLOCKA TATTOO` mark, compact navigation, red active state.
2. **Hero** — oversized `FLOCKA` wordmark, statement copy and a visual tattoo/studio field.
3. **About** — short studio position and `About the Artist` entry.
4. **Work** — three large selected tattoo projects with hover/click movement.
5. **Styles** — `BLACKWORK`, `ORNAMENTAL`, `FINE LINE`, `FLASH`.
6. **Process** — `IDEA`, `SKETCH`, `SESSION`, `HEALED`.
7. **Testimonials** — horizontally staged customer quotes.
8. **FAQ** — accordion for booking, pricing, preparation, healing and custom work.
9. **Journal** — three editorial cards for care, process and studio notes.
10. **Contact** — oversized `LET'S MAKE IT PERMANENT` CTA and booking entry.
11. **Footer** — `FLOCKA TATTOO`, Cologne placeholder, Instagram, contact and legal links.

## Shared component boundaries

- `SiteHeader`: fixed/absolute navigation and menu trigger.
- `SectionOverlayMenu`: full-screen navigation overlay with section links.
- `HeroWordmark`: oversized identity lockup and intro CTA.
- `WorkShowcase`: selected work rail, project metadata and media transition.
- `ServiceGrid`: style list with active/hover states.
- `ProcessRail`: ordered project process with compact step metadata.
- `TestimonialRail`: quote navigation and customer metadata.
- `FaqAccordion`: accessible disclosure behavior.
- `JournalGrid`: article cards with image and category metadata.
- `ContactPanel`: CTA and booking link/form entry.
- `SiteFooter`: final brand lockup and utility links.

## Responsive behavior

- Desktop: `>= 1200px`, full hero typography and multi-column rails.
- Tablet: `810px–1199px`, reduced display scale and compressed media offsets.
- Mobile: `< 810px`, stacked sections, menu overlay, horizontal touch rails and reduced motion distance.
