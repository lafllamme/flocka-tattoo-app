# Flocka Tattoo Homepage — Implementation Checklist

Reference: SURFACE homepage audit in [`motion.md`](./motion.md) and [`page-architecture.md`](./page-architecture.md).

Rule: complete one phase, verify it in the browser, then mark its items as done. No phase is considered complete from code inspection alone.

## 0. Baseline and guardrails

- [x] Audit live SURFACE page on desktop
- [x] Audit live SURFACE page on mobile
- [x] Record section geometry and motion behavior
- [x] Confirm Nuxt 4 `app/` structure
- [x] Confirm UnoCSS tokens and shortcuts
- [x] Confirm lint, typecheck, and build scripts
- [ ] Capture a clean baseline screenshot of the current Flocka page

## 1. Foundation

- [ ] Add shared page-shell and section primitives
- [ ] Add Flocka typography scale and responsive spacing tokens
- [ ] Add black/white/red surface, border, focus, and selection tokens
- [ ] Add global reduced-motion behavior
- [x] Add page-level grain/noise layer
- [ ] Add semantic anchor navigation and active section state

## 2. Header and hero

- [x] Build desktop header matching the audited spacing
- [x] Build mobile header and overlay menu
- [ ] Add focus management and body scroll lock to the overlay
- [x] Build sticky hero composition
- [x] Add transparent Flocka header logo
- [x] Add hero wordmark/typographic treatment
- [x] Add hero image plate and crop behavior
- [x] Implement hero entrance and reduced-motion fallback
- [x] Verify desktop and mobile screenshots

## 3. About

- [x] Split About into semantic text, metadata, CTA, and image components
- [x] Add Flocka artist/practice demo content
- [ ] Implement left/right scroll reveal pair
- [ ] Implement image reveal/crop behavior
- [ ] Verify section height, spacing, and mobile stacking

## 4. Work showcase

- [x] Define typed project data model
- [x] Build reusable project entry structure
- [x] Implement desktop sticky editorial relationship
- [x] Implement project image hover/focus treatment
- [x] Implement mobile stacked project cards
- [x] Add accessible project links and labels
- [x] Verify all three project states in the browser

## 5. Services and process

- [x] Build services intro and four service rows
- [x] Build process image and four numbered stages
- [ ] Implement row and stage reveals
- [ ] Verify desktop rhythm and mobile order

## 6. Testimonials

- [x] Define typed testimonial data model
- [x] Build image/quote state structure
- [x] Add accessible previous/next controls
- [x] Add restrained crossfade/slide motion
- [ ] Add keyboard and reduced-motion behavior
- [ ] Verify all testimonial states

## 7. FAQ

- [x] Define typed FAQ data model
- [x] Build semantic accordion rows
- [x] Add `aria-expanded`, `aria-controls`, and answer regions
- [x] Animate answer height and 45-degree plus state
- [x] Verify keyboard operation and mobile wrapping

## 8. Journal, contact, and footer

- [x] Define typed journal card data model
- [x] Build three journal cards
- [x] Build final booking/contact CTA
- [x] Build desktop footer navigation, contact, social, and legal areas
- [x] Build mobile footer ordering
- [x] Replace all SURFACE identity/content with Flocka content

## 9. Final polish and verification

- [ ] Verify all sections at desktop breakpoint
- [ ] Verify all sections at mobile breakpoint
- [ ] Verify tablet interpolation
- [ ] Verify reduced-motion mode
- [ ] Verify keyboard navigation and visible focus
- [ ] Verify image alt text and link labels
- [ ] Run `pnpm lint`
- [ ] Run `pnpm typecheck`
- [ ] Run `pnpm build`
- [ ] Update design-system documentation with final implementation decisions
- [ ] Review complete checklist before requesting the next commit

## Commit checkpoints

- [ ] Checkpoint 1: audited foundation and checklist
- [ ] Checkpoint 2: foundation, header, and hero
- [ ] Checkpoint 3: About and Work
- [ ] Checkpoint 4: Services, Process, and Testimonials
- [ ] Checkpoint 5: FAQ, Journal, Contact, and Footer
- [ ] Checkpoint 6: final verification and polish
