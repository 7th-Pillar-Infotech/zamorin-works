# Claude Design Brief — Zamorin Works

Paste this directly into Claude Design (claude.ai/new with the design context, or claude.ai/design). Adjust the "Deliverables Requested" section to focus on what you want generated each session.

---

## 1. Project context

**Project:** Marketing website for **Zamorin Works**, a new IT consultancy launching in Dubai.

**Parent company:** The Zamorin Group, a 20-year-old Dubai- and Kochi-rooted business with two established sub-brands:
- **Zamorin Decorate** (premium home interiors, PMI-certified delivery) — https://zamorindecorate.com
- **Zamorin Projects** (project management for MSMEs) — https://zamorinprojects.com

**Founders:** Vikram Maheshwar and Pallavi Vikram.

**Positioning:** Zamorin Works applies twenty years of Zamorin Group operating discipline to enterprise IT. It is based in Dubai for relationship and accountability, and delivers through a trusted partner network of leading software firms in India (Kochi, Bangalore, Hyderabad, Chennai, Mumbai, Pune).

**Tagline ethos:** *"Enterprise technology, delivered with Zamorin discipline."*

**Endorsement line:** *"A Zamorin Company"* appears on every page.

---

## 2. Brand identity

### Palette (exact hex codes — use these only)

| Token | Hex | Role |
|-------|-----|------|
| Brand gold | `#DAA106` | Primary accent, CTAs, highlights, the brand thread |
| Bright gold | `#FEB20D` | Hover state, secondary highlight |
| Warm cream | `#FFE8B7` | Warm divider strip, soft accent surface |
| Soft beige | `#ECE5DD` | Refined warm neutral surface |
| Deep ink | `#1A1F26` | Hero background, footer — deep cool slate |
| Ink-900 | `#202020` | Headings |
| Ink-700 | `#323232` | Body text |
| Ink-500 | `#6B7280` | Muted labels, secondary text |
| Surface soft | `#F5F6F8` | Section break background — cool light gray |
| Surface | `#FFFFFF` | Default canvas |

**Color discipline:** Gold is restrained and intentional — small accents only. Never gold gradients. Never bright yellow / casino-gold. Never AI purple/pink gradients.

### Typography (Google Fonts)

- **Headings:** Raleway — weights 700 and 800
- **Body / long-form:** Lato — weights 400 and 700
- **UI / labels:** Open Sans — weights 400, 500, 600

Type scale (modular, base 16px): 64 / 48 / 36 / 24 / 18 / 16 / 14 / 12 px. Headings get tracking -0.01em to -0.02em. Eyebrows are uppercase with 0.12em tracking.

### Wordmark structure (must match family pattern)

```
Zamorin  [small gold icon]  Works
   ↑               ↑              ↑
black bold     network motif    gold accent
```

This mirrors how Zamorin Decorate and Zamorin Projects construct their wordmarks. The icon between the words is a simple gold network motif: three nodes connected by thin lines, suggesting connection / IT / consulting.

### Voice and tone

- **Refined, calm, consultative.** Never hype.
- Examples that fit: *"We treat unscheduled overtime as a planning failure, not a virtue."*
- Examples that do NOT fit: *"Supercharge your business with cutting-edge AI solutions."*
- Reads like Bain, Thoughtworks, or McKinsey marketing — not like a Y Combinator pitch.

---

## 3. Target audience

Primary: **Mid-to-large enterprises in Dubai and the GCC** evaluating an IT consulting partner. They want clarity, discipline, predictable delivery, and a single accountable point of contact.

Secondary: **SMBs in Dubai** needing IT services with a more approachable but still professional tone.

NOT the audience: tech startups, individual developers, hobbyists.

---

## 4. Pages required

| Page | URL | Purpose |
|------|-----|---------|
| Home | `/` | Hero, stats band, partner marquee, services snapshot, why-us, pull-quote, founders teaser |
| About | `/about` | Lineage from Zamorin Group, why we exist, four tenets, pull-quote |
| Services hub | `/services` | 6-service grid linking to detail pages |
| Service detail × 6 | `/services/[slug]` | Strategy & Advisory, Custom Software, Cloud & DevOps, Data & AI, Cybersecurity, Managed IT — each its own page |
| Approach | `/approach` | Discover → Architect → Deliver methodology |
| Leadership | `/leadership` | Founder bios (Vikram, Pallavi) |
| Work | `/work` | Selected case studies (placeholders, details under NDA) |
| Contact | `/contact` | Inquiry form + direct contact info |

---

## 5. Design principles

1. **Editorial > Decorative.** Magazine-style typography hierarchy. Generous whitespace. Big bold headlines.
2. **Asymmetric > Centered.** Hero is 60/40 split (text left, abstract visual right). Avoid centered hero-on-dark layouts.
3. **Restrained color use.** White + slate dominate. Gold is the singular accent, used sparingly.
4. **One primary CTA per screen.** Secondary actions visually subordinate.
5. **Motion has meaning.** Subtle staggered reveals, mouse-aware card spotlights, animated stat counters. Never decorative-only animation. Always respects `prefers-reduced-motion`.
6. **Modern but timeless.** Soft 10px radius on cards (not pill, not sharp 2px), glass nav with backdrop blur, dotted-grid background textures.
7. **No clutter.** Never trust strips with stock-photo client logos until real ones exist. Never carousels. Never auto-play video.

---

## 6. Key components to design

- **Hero with line-art network illustration** — asymmetric 60/40, deep slate background, gold radial glow, bold Raleway 800 headline with one gold-emphasized word, pulsing pill badge eyebrow
- **Stats band** — 4 large gold numbers (Raleway 800), each with uppercase label and short detail line, vertical dividers between
- **Partner marquee** — continuous horizontal scroll of partner locations, centered pill label, fade edges
- **Numbered service cards** — 01–06 editorial indices in corner, icon in cream-colored containment box, mouse-aware gold spotlight on hover, soft 10px radius
- **Editorial pull-quote** — bold Raleway 700 (not italic serif), oversized champagne quote glyph behind, attribution with gold rule
- **Founder cards** — 4:5 aspect ratio photo treatment with gradient overlay, role + name overlay at bottom in gold + white
- **Floating CTA pill** — sticky bottom-right, dark with pulsing gold dot, appears after scrolling past hero
- **Glass nav** — translucent white with strong backdrop blur, gold underline on active link
- **Section divider motif** — thin gold horizontal line with small dot in center (optional decorative element)

---

## 7. Reference brands (in spirit, not visual copy)

- **Thoughtworks** — for thoughtful enterprise consulting tone
- **Stripe** — for typography clarity and restraint
- **Linear** — for soft modern radius and mouse-aware micro-interactions
- **Vercel** — for editorial bold headlines and modern dark hero
- **Monocle magazine** — for refined editorial photography and warm-neutral palette
- **Bain & Company** — for the gravitas signal

---

## 8. Anti-patterns (do NOT include)

- AI purple/pink/blue gradients
- Glassmorphism on cards (only on nav)
- Pill-shaped buttons (use 6px radius)
- Sentence-case headings with bright accent colors mixed in
- Emoji as icons (always SVG)
- Hero video / autoplay
- Stock photos of "businesspeople shaking hands" or "diverse team around laptop"
- Carousels
- Animated counters without real numbers
- Chatbot widget
- Cookie pop-up blocking content
- "Trusted by" logo bar with fake placeholder logos
- Heavy decorative ornaments
- Center-aligned hero text on a black background (the dated 2018 SaaS pattern)
- Sans-serif italic body copy
- Glowing AI orbs / neural network clip-art

---

## 9. Deliverables requested

*Edit this section to focus each Claude Design session.*

**For the current session, generate:**

- [ ] Home page mockup (1440px desktop) — hero, stats band, marquee, services grid, pull-quote, founders teaser
- [ ] Service detail page mockup using "Custom Software" as the example
- [ ] Mobile home page mockup (375px) showing how hero, stats, and services adapt
- [ ] Component sheet showing: button states, card states, founder card, pull-quote, stat block
- [ ] Open Graph share image (1200×630) for the home page
- [ ] Alternative hero illustration variants — three directions for the right-side line-art:
  1. Network nodes + concentric circles (current direction)
  2. Architectural blueprint feel — measured lines, technical drawing
  3. Arabic-geometric tessellation echoing Dubai aesthetic

---

## 10. Output format

- All mockups should use the exact palette and typography above
- Show real placeholder copy where useful (not lorem ipsum — match the actual voice)
- Annotate any deviation from this brief with a brief note on why
- Provide a downloadable Figma-equivalent or design-token export if possible

---

## Quick prompt-only variant

If you don't want to paste the full brief, here's a one-paragraph version:

> Design a marketing website for **Zamorin Works**, a Dubai-based IT consultancy. Use palette: gold #DAA106 accent, deep slate #1A1F26, white canvas, ink #202020. Typography: Raleway 700/800 headings, Lato body. Voice: refined, consultative, calm — like Thoughtworks or Bain, not a tech startup. Layout: editorial, asymmetric, magazine-style. Modern in the manner of Linear and Vercel — soft 10px radius, glass nav, mouse-aware card spotlights, animated stat counters, scrolling partner marquee. Brand signal: a small gold network-motif icon sits between "Zamorin" (black bold) and "Works" (gold) in the wordmark, matching sibling brands Zamorin Decorate and Zamorin Projects. No emoji. No stock photos. No purple/pink gradients. No carousels. The site has 14 pages: home, about, services hub, six service detail pages, approach, leadership, work, contact, and 404.
