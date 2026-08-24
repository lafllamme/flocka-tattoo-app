# FAQ Accordion Design

## Goal

Bring the FAQ section closer to the reference layout while preserving the existing German content and accessibility behavior.

## Interaction

- Any number of FAQ items can be open at the same time.
- Clicking an item toggles only that item.
- Closed items use the black surface, bright text, and a plus icon.
- Open items use the bone surface, black text, and a rotated plus icon.
- Hovering a closed item applies a restrained horizontal motion that brings the question and icon toward the center.
- The answer area expands and collapses with a CSS grid-row transition.

## Implementation

- Replace the single `openFaq` index with a reactive `Set<number>`.
- Keep the existing `aria-expanded` and `aria-controls` relationship, updating it per item.
- Use a stable answer panel in the DOM so opening multiple items does not disturb the state of other items.
- Add scoped FAQ styles for compact row spacing, stronger type weight, hover transforms, open-state colors, and reduced-motion behavior.

## Validation

- Run `pnpm typecheck`.
- Run `git diff --check`.
- Do not alter unrelated local Motion or Header changes.
