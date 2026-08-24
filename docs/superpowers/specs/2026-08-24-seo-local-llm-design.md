# SEO, Local SEO and LLM discovery

## Goal

Improve the crawlability, search presentation and machine-readable business context of Flocka Tattoo on the current production URL `https://flocka.pages.dev/` without changing the visual design or restructuring the portfolio assets.

## Scope

- Centralize homepage metadata: title, description, canonical URL, Open Graph and X/Twitter preview data.
- Extend JSON-LD with the tattoo business, artist, services, social profile and opening hours: Tuesday through Sunday, 10:00–19:00.
- Add compact German `/impressum` and `/datenschutz` pages with their own metadata and canonical URLs.
- Serve an absolute XML sitemap containing the homepage and legal pages.
- Serve `robots.txt` allowing crawling and referencing the sitemap.
- Add `/llms.txt`, `/llms-full.txt`, and `/llm.txt` as a compatibility alias. These files describe the artist, location, services, official links and preferred brand facts.
- Improve missing or generic image alt text in the existing page without altering the cleaned-up portfolio asset structure.

## Constraints

- Do not invent a street address, phone number, legal entity, or other business details not supplied by the owner.
- Use `https://flocka.pages.dev/` until a custom production domain is provided.
- Keep the existing dark, red, minimal visual system unchanged.
- Do not add unsupported claims or keyword stuffing to the LLM or SEO content.

## Verification

- Run the project typecheck/build.
- Confirm `/robots.txt`, `/sitemap.xml`, `/llms.txt`, `/llms-full.txt`, `/llm.txt`, `/impressum`, and `/datenschutz` resolve successfully.
- Inspect rendered title, canonical, robots, OG/Twitter tags and JSON-LD.
- Confirm all sitemap URLs are absolute and canonical.
