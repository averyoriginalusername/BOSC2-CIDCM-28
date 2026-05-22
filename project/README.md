# Sourced — Design System

> A two-sided digital marketplace that connects **customers** who want personalized styling with **professional personal shoppers / stylists**. New York-based, fashion-focused, mobile-first for customers and desktop-first for stylists.

This repository is the design system for the brand. It holds the color and type tokens, brand assets, voice & tone guidance, iconography rules, and high-fidelity UI kit recreations for both sides of the marketplace.

---

## The product, in one paragraph

Sourced is built on the observation that online shopping has reached a state of **decision fatigue** — customers have infinite choices and no curation — while simultaneously, the number of **independent fashion stylists** is growing faster than their ability to acquire clients. Sourced is the two-sided platform that resolves both. A customer (e.g. Olivia, 25, NYC marketing exec, $100–$400 dress budget) builds a style profile, gets matched to a stylist, chats them through a need ("black-tie summer wedding, princess silhouette"), receives a curated edit, completes a transaction, and leaves a review. A stylist (e.g. Sophia, 32, freelance ex-Bloomingdale's) manages clients, calendar, payments, and brand presence from a dedicated desktop workspace.

Sourced rewards repeat engagement through **SOURCED Collective**, a tiered loyalty program (Insider → Icon → Editorial) that compounds points across bookings, purchases, reviews, and referrals.

## Surfaces represented

| Surface | Audience | Primary device | Role |
|---|---|---|---|
| Marketing site (sourced.com) | Both | Desktop / responsive | Top-of-funnel, "Get the app" |
| Customer app | Buyer | Mobile (iOS-style) | Onboarding, matching, chat, review, rewards |
| Stylist workspace | Seller | Desktop browser | Client roster, calendar, payments, messaging, profile |

## Source of truth

The wireframes and brand direction in this system are derived from a single source document the user provided:

- `uploads/Sourced.pptx` — original 18-slide presentation containing business plan, personas, wireframes (mobile + desktop, both sides), the loyalty program spec, and curated brand inspiration imagery.
- `source_extract/` — raw media + slide text extracted from the .pptx. Kept for traceability; the canonical, curated copies live in `assets/`.

There is no Figma file, codebase, or external repo for this project — the .pptx is the only design artifact. Every interface in `ui_kits/` is a high-fidelity translation of those wireframes into branded, interactive HTML.

---

## Repository index

```
.
├── README.md                  ← you are here
├── SKILL.md                   ← Agent Skill entrypoint (Claude Code compatible)
├── colors_and_type.css        ← All design tokens (colors, type, space, radius, shadow, motion)
├── assets/
│   ├── logo-mark.svg          ← Hanger glyph (icon-only mark, 1.4-stroke hand-drawn)
│   ├── logo-wordmark.svg      ← Wordmark + hanger (Instrument Serif italic lock-up)
│   ├── photos/                ← Brand photography (editorial fashion, warm tones)
│   └── wireframes/            ← Source wireframes from the .pptx, for reference
├── preview/                   ← Design System tab cards (palette, type, components, etc)
├── ui_kits/
│   ├── customer/              ← Customer-side iOS-style mobile app — 20 screens, click-thru
│   │   ├── index.html
│   │   ├── ios-frame.jsx
│   │   ├── components.jsx
│   │   └── screens.jsx
│   ├── shopper/               ← Stylist-side desktop workspace — 7 tabs + login/signup
│   │   ├── index.html
│   │   ├── components.jsx
│   │   └── screens.jsx
│   ├── shopper-mobile/        ← Stylist-side iOS-style mobile app — 10 screens
│   │   ├── index.html
│   │   ├── ios-frame.jsx
│   │   ├── components.jsx
│   │   └── screens.jsx
│   └── marketing/             ← sourced.com landing page
│       └── index.html
└── source_extract/            ← Raw .pptx extracts (do not edit; reference only)
```

---

## Content fundamentals

**Tone.** Editorial and confident, never breathless. Sourced talks like a fashion magazine's front-of-book, not like a tech app. Sentences are short but considered; punctuation is full (proper em-dashes, curly quotes). Headlines are evocative ("A place where your fashion needs are met"), not feature-listy.

**Voice.** Second person, direct, never preachy. We address the user as "you" and refer to the platform as "Sourced" or "we." Customers and stylists each get a slightly different register:
- **Customer-facing:** warm, encouraging, slightly aspirational. "Hello, Olivia!" not "Welcome, User." Microcopy reassures ("less than 1 minute," "100% confidential").
- **Stylist-facing:** professional, peer-to-peer. The stylist is treated as an expert running a small business — language around "clients," "schedule," "finance tracker."

**Casing.**
- **Sentence case** for everything UI: button labels, page titles, form labels ("Sign in," "My orders," "Take a quiz," "Edit profile").
- **TitleCase** reserved for product nouns: **Sourced**, **SOURCED Collective**, **Insider**, **Icon**, **Editorial** (loyalty tier names — uppercase for the tier word itself is a brand affectation, like a magazine masthead).
- **ALL CAPS** is allowed only for tiny eyebrow labels above headlines (section labels like "ABOUT THE MARKET," "BUSINESS IDEA" in the source deck) with wide letter-spacing.

**Examples lifted directly from the source deck**

| Surface | Verbatim copy |
|---|---|
| Sign-in screen | "Sign In · Hi there! Nice to see you again." |
| Forgot-pw link | "Forgot Password?  · Sign Up" |
| Sign-up disclaimer | "I agree to the Terms of Services and Privacy Policy." |
| Role select | "Who are you?  · CLIENT  · STYLIST" |
| Profile setup | "Set up your profile" |
| Style quiz | "Words to describe your style" + chips like "Chic, Modern, Y2K, Cottage Core, Vintage, 80's, Summer, boho, Cyber punk" |
| Match screen | "Sophia – Wedding Stylist · Stylist Information · Style Profile · Message" |
| Chat opener (cust) | "Hello Sophia! I saw your profile and since my wedding is coming up I was hoping to get styled by you for it!" |
| Marketing hero | "A place where your fashion needs are met" |
| Marketing CTA | "GET STARTED · LOG IN" |
| Account home | "Hello, Olivia! · Personal Information · Login and security · Personalisation · Language · Display mode · My orders · Saved stylists · Saved shops · My watchlists · SOURCED Collective · My spending" |
| Post-session toast | "Tell us how we did! Your feedback helps us improve your matches and experience on SOURCED." |
| Survey CTA | "Finalise your account — Help us improve your SOURCED experience. This quick survey takes less than 1 minute and helps us better understand you as a customer! · Take a quiz" |
| Review screen | "Leave a Review · Overall Rating · Tap a star to rate · Style Match · Communication · Value for Money · Time Saved · Ease of Process" |
| Loyalty perks | "Birthday discount — 5% · Access to member-only style magazine online" |

**No emoji.** Sourced does not use emoji in product UI or marketing copy. Emoji on slide 17 ("Celebrate 🎉" in a to-do list) was a deck affordance, not the brand. Use Lucide icons for any iconographic role.

**The vibe**, in one sentence: *Vogue's online shopping concierge*, not Stitch Fix's quiz app.

---

## Visual foundations

**Color philosophy.** Two warm chromatic accents on a parchment-warm neutral. Coral is the customer side (CTAs, sign-in, active customer-nav). Lilac is the stylist side (message bubbles, stylist-information chrome, the connection between client and stylist). Neutrals are always **warm** — never cool gray. The base page is a soft `paper-2` (#FAF7F2), not pure white, to feel printed rather than screen-native.

**Typography.**
- **Outfit** carries every UI surface — buttons, body, navigation, tables, forms — across 300/400/500/600/700/800. It's geometric humanist, slightly fashion-forward, and pairs cleanly with serif accents.
- **Instrument Serif** is the editorial flourish: marketing hero headlines, oversized section openers, persona names, screen titles, tier names. Used **as the wordmark too** — set in italic, 400 weight — giving the brand a magazine-masthead feel.
- **JetBrains Mono** is reserved for numeric/data alignment (points totals, prices in tables, finance-tracker columns).
- The wordmark "Sourced" is set in **Instrument Serif italic** — never bold, never set lower — paired with a hand-drawn hanger glyph rotated 6° to echo the italic angle.

**Spacing.** A 4px-based scale (`--space-1` = 4 through `--space-11` = 120). The system favors generous vertical rhythm in editorial layouts (titles get `--space-8` of breathing room above) and tight, dense grouping for dashboard tables on the stylist workspace.

**Backgrounds.** Mostly flat color. Photography is used as **full-bleed hero imagery** (marketing, persona screens, post-session "thank you") and as small **stylist portfolio thumbnails** in grids. No gradients in product UI. No noise/grain. No repeating patterns. The hero photos are editorial fashion — black/white/cream wardrobes, warm skin tones, candid poses, brown-leather accessories — never stock-photo-y.

**Animation.** Restrained.
- **Easing:** `cubic-bezier(0.22, 0.61, 0.36, 1)` for almost everything ("ease-out").
- **Duration:** 140ms (micro), 220ms (default), 420ms (page transition).
- **Hover:** subtle. Buttons slightly darken (coral-500 → coral-600). Cards lift one shadow step.
- **Press:** opacity 0.85, no scale shrink (the brand reads as composed, not bouncy).
- **No bounces, no spring physics, no parallax.**

**Borders.** 1px hairlines in `--line` (#ECE7E0). Slightly stronger `--line-2` for form-field borders so inputs are legible. Borders are *always* drawn — Sourced does not use shadow alone to separate surfaces.

**Shadows.** Soft, low-contrast, single-direction (downward). Four steps from `--shadow-xs` (hairline lift) to `--shadow-l` (modals). Never colored shadows; always near-black with ~5% opacity.

**Corner radii.**
- `--radius-pill` (999px) for CTAs and chip buttons (sign-in pill on customer login, style-quiz chips).
- `--radius-l` (18px) for cards and image containers.
- `--radius-m` (12px) for form inputs and secondary cards.
- `--radius-s` (8px) for tiny chips, badges.

**Transparency & blur.** Used only for soft overlays on full-bleed photo headers (e.g. a 30% black scrim under a hero photo to lift white headlines). No frosted glass on product UI — keeps things printed-feeling.

**Imagery treatment.** All product photography is **untreated, warm, editorial.** No filters, no duotones, no grain. Composition leans candid: models with sunglasses, coffee, garment racks, mirror selfies. Color palette across photos: black, cream, beige, brown — these are the unspoken neutrals the brand sells against.

**Layout rules.**
- Page max-width 1280px for marketing.
- Customer mobile canvas is 390×844 (iPhone 14).
- Stylist desktop canvas is 1440×900 with a fixed left tab rail or top tab bar.
- **No fixed/sticky headers in product UI** — the design encourages scroll as a deliberate reading act, à la magazine.

**Cards.** White background, 1px `--line` border, `--radius-l` corners, `--shadow-s` resting shadow. On hover, the border deepens to `--line-2` and shadow steps to `--shadow-m`.

---

## Iconography

**Primary icon system: Lucide** (open source, MIT). Loaded via CDN. Lucide's stroke weight (2px) and rounded line-caps match the wireframes exactly — they're effectively the same family the deck author used.

Usage in UI:
- Bottom nav (customer mobile): `home`, `calendar`, `message-square`, `user`
- Stylist tabs: `pen-tool` (creation), `wallet` (payments), `calendar`, `user-round` (clients), `mail` (messages)
- Form actions: `eye` / `eye-off`, `arrow-left`, `arrow-right`, `x`, `plus`, `check`
- Loyalty: `trophy`, `crown`, `tag`, `gem`, `gift`, `star`

Loaded as:
```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<script>lucide.createIcons();</script>
```

**The hanger mark (`assets/logo-mark.svg`)** is the only custom glyph in the system. It is *not* part of the icon set — only the logo lock-up uses it.

**Emoji.** Not used. Anywhere.

**Unicode for typography only.** Curly quotes (" "), em dashes (—), real ellipsis (…). These belong in copy, not as iconographic stand-ins.

**SVGs vs PNG.** UI icons are SVG (via Lucide CDN). Brand photography is delivered as PNG/JPEG from `assets/photos/`. The Sourced wordmark is SVG so it scales for both 16px favicons and full-bleed marketing.

---

## Caveats and substitutions

- **Fonts.** The .pptx embeds 9 .fntdata files (PowerPoint-internal format, not usable as webfonts). After reviewing the wireframes I chose **Instrument Serif italic** as the brand wordmark direction — it gives Sourced a fashion-magazine masthead feel that matches the editorial photography and target audience. UI is **Outfit** (humanist geometric sans). Both are free on Google Fonts. If the brand acquires a licensed type pairing, swap the `@import` line and the `--font-display` / `--font-sans` vars in `colors_and_type.css`.
- **Icons.** Lucide via CDN — closest match to the line-icon style in the wireframes (especially the bottom-nav glyphs and the heart-pin on the matching screen). Stroke weight is 1.6–2px, never filled.
- **The hanger logo** is an original SVG drawn to match the editorial wordmark — hand-drawn quality with soft curves (1.4-stroke), tilted 6° to echo the italic. It is the only custom glyph in the system; everything else is Lucide.
- **Color values** are interpolated from the wireframe screenshots (which used pure-CSS approximations, not Pantone codes). The coral sits between #EE5A5A and #F26666; lilac between #6B5BD3 and #7B6BE5. Treat these as starting points the user should refine against final brand guidelines.
- **No slide deck template was given.** This system intentionally does not include `slides/` — building one without templates would be guessing.
