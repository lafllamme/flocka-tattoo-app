# Flocka Implementation Contract

## Stack

- Nuxt 4 app directory structure
- Vue 3 Composition API
- UnoCSS theme tokens and shortcuts
- VueUse for swipe, scroll and interaction primitives where appropriate
- Nuxt Icon for interface icons
- `@nuxt/a11y` for accessibility feedback

## Token ownership

- `uno.config.ts` owns utility-facing raw and semantic tokens.
- `app/assets/css/main.css` owns reset, base element behavior and reduced-motion fallback.
- `design-system.md` and this folder document intent and usage.
- Components must not introduce ad-hoc brand colors when a token exists.

## Asset ownership

- `public/images/flocka_logo.png`: transparent master logo for header and brand moments.
- New photography belongs in `public/images/work/` with descriptive filenames and alt text.

## Build sequence

1. Split the current landing page into the component boundaries in [page-architecture.md](page-architecture.md).
2. Rebuild the SURFACE section order and layout rhythm with Flocka content.
3. Add the motion tokens and implement one section at a time.
4. Verify desktop, tablet and mobile against the reference breakpoints.
5. Run `pnpm lint`, `pnpm typecheck` and `pnpm build`.
6. Review the result in-browser and adjust only documented tokens or component contracts.
