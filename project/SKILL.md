---
name: sourced-design
description: Use this skill to generate well-branded interfaces and assets for Sourced, the personal-shopper marketplace — either for production work or throwaway prototypes, mocks, decks, and explorations. Contains essential design guidelines, colors, type, fonts, brand assets, and UI kit components.
user-invocable: true
---

# Sourced Design Skill

Read the `README.md` in this skill first — it has the full brand narrative, content fundamentals, visual foundations, and iconography guidance.

Then explore the other files:

- `colors_and_type.css` — all design tokens. Import this in every artifact (`<link rel="stylesheet" href="colors_and_type.css">`).
- `assets/logo-mark.svg`, `assets/logo-wordmark.svg` — primary brand mark and wordmark lock-up.
- `assets/photos/` — editorial brand photography. Use as full-bleed hero imagery, stylist portfolio thumbnails, or persona avatars.
- `preview/` — the visual reference cards. Quickly scan these to absorb the palette, type, components, and tone.
- `ui_kits/customer/` — high-fidelity React recreations of the customer-side mobile app (10 screens, click-thru).
- `ui_kits/shopper/` — the stylist-side desktop workspace (6 tabs: creation, payments, calendar, clients, messages, profile).
- `ui_kits/marketing/` — the marketing landing page (sourced.com).
- `source_extract/` — raw source material from the original .pptx, for traceability only.

## How to use this skill

**If creating visual artifacts** (slides, mocks, throwaway prototypes, marketing one-pagers, etc):
1. Copy `colors_and_type.css` and the assets you need into your output folder.
2. Build static HTML — Sourced is editorial-feeling, so prefer real photography over illustration, generous white space, Instrument Serif for display headlines, Outfit for everything else.
3. Reference `ui_kits/*` components when you need a building block (chat bubble, stylist card, loyalty tier badge, etc).

**If working on production code**:
- Lift `:root` variables from `colors_and_type.css` directly. The semantic roles (`--accent`, `--accent-alt`, `--bg`, `--fg`) are the stable contract — the raw scales (`--coral-*`, `--lilac-*`) may shift between releases.
- Icon set: Lucide (`https://unpkg.com/lucide@latest/dist/umd/lucide.min.js`). Stroke 1.6–2px, rounded caps, never filled.
- Two color worlds: coral (`--coral-500`) for customer-side actions, lilac (`--lilac-500`) for stylist-side actions. Pick the right one based on whose surface you're building.

## If invoked without specifics

Ask the user what they want to build (a deck? a feature mock? a launch page?), gather:
- Which side: customer or stylist?
- What surface: mobile, desktop, marketing?
- Photography or no?
- Editorial / display tone, or product-UI tone?

Then act as an expert designer and output HTML artifacts — never start designing before establishing context.

## Core rules

- **Never use emoji.** Sourced does not use emoji anywhere in product or marketing.
- **Never use cool greys.** All neutrals are warm (peach/parchment cast).
- **Never use gradients in product UI.** Marketing hero treatments can use soft gradients on dark backgrounds; product surfaces stay flat.
- **Capitalization:** sentence case for everything except product nouns ("Sourced," "SOURCED Collective," "Insider/Icon/Editorial" tier names).
- **Headlines are editorial, not feature-listy.** "A place where your fashion needs are met" — not "All-in-one styling platform."
- **No bounces, no spring physics, no parallax.** Animation is restrained; the brand reads as composed.
