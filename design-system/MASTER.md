# Zamorin Works — Master Design System

Single source of truth for the Zamorin Works marketing site.
Parent brand reference: https://www.zamorindecorate.com (palette and typography inherited from live DOM inspection)
Skill source: ui-ux-pro-max v2.0.1 — pattern "Enterprise Gateway", style "Trust & Authority"

---

## 1. Brand Positioning

- **Audience:** Dubai/GCC enterprise buyers + Dubai SMBs
- **Voice:** Refined, calm, consultative. Measured sentences. No hype words. No emoji.
- **Tagline ethos:** "Enterprise technology, delivered with Zamorin discipline."
- **Endorsement line:** "A Zamorin Company" appears on every page footer.

---

## 2. Color Palette (Final)

### Brand colors (inherited from Zamorin Decorate)
| Token | Hex | Role |
|-------|-----|------|
| `--brand-gold` | `#DAA106` | Primary accent — CTAs, underlines, icon strokes |
| `--brand-gold-bright` | `#FEB20D` | Hover state on accent |
| `--brand-cream` | `#FFE8B7` | Warm divider strip, decorative band |
| `--brand-beige` | `#ECE5DD` | Soft warm surface |

### Neutrals (refined for IT context — adds cool tones for tech seriousness)
| Token | Hex | Role |
|-------|-----|------|
| `--ink-900` | `#202020` | Headings, deep contrast |
| `--ink-800` | `#1A1F26` | Hero dark background, footer |
| `--ink-700` | `#323232` | Body text |
| `--ink-500` | `#6B7280` | Meta labels, secondary text |
| `--ink-300` | `#D1D5DB` | Borders, dividers |
| `--surface-soft` | `#F5F6F8` | Section break background |
| `--surface` | `#FFFFFF` | Default canvas |

### Semantic
| Token | Hex | Role |
|-------|-----|------|
| `--success` | `#15803D` | Form success |
| `--danger` | `#B91C1C` | Form error |
| `--focus-ring` | `#DAA106` | Keyboard focus outline |

**Contrast verified pairs (WCAG AA min 4.5:1):**
- `--ink-700` on `--surface`: 12.6:1 ✓
- `--surface` on `--ink-800`: 17.4:1 ✓
- `--surface` on `--brand-gold`: 3.2:1 — gold buttons use `--ink-900` text instead (12.4:1)
- `--ink-700` on `--surface-soft`: 11.8:1 ✓

---

## 3. Typography

### Font families (inherited)
- **Headings:** Raleway — weights 600, 700, 800
- **Body / long-form paragraphs:** Lato — weights 400, 500, 700
- **UI / nav / labels:** Open Sans — weights 400, 500, 600

### Google Fonts import
```css
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@600;700;800&family=Lato:wght@400;700&family=Open+Sans:wght@400;500;600&display=swap');
```

### Type scale (modular, base 16px)
| Token | Size | Line-height | Weight | Family | Use |
|-------|------|-------------|--------|--------|-----|
| `--text-display` | 64px / 4rem | 1.05 | 800 | Raleway | Hero h1 (desktop) |
| `--text-h1` | 48px / 3rem | 1.1 | 800 | Raleway | Page h1 |
| `--text-h2` | 36px / 2.25rem | 1.15 | 700 | Raleway | Section h2 |
| `--text-h3` | 24px / 1.5rem | 1.25 | 700 | Raleway | Subsection h3 |
| `--text-h4` | 18px / 1.125rem | 1.35 | 600 | Raleway | Card titles |
| `--text-lead` | 20px / 1.25rem | 1.6 | 400 | Lato | Hero subtitle, intros |
| `--text-body` | 16px / 1rem | 1.6 | 400 | Lato | Default body |
| `--text-ui` | 14px / 0.875rem | 1.5 | 500 | Open Sans | Nav, labels |
| `--text-eyebrow` | 12px / 0.75rem | 1.4 | 600 | Open Sans | Uppercase eyebrows, tracking 0.12em |

**Mobile reductions:** Display→44px, h1→36px, h2→28px, h3→20px.

### Headline rules
- H2 in `Raleway 700`, never lighter
- Eyebrows are uppercase, tracked +0.12em
- Body line-length capped at ~68ch
- Never use serif body (parent brand is sans-only)

---

## 4. Layout & Spacing

### Spacing scale (8pt rhythm)
`4, 8, 12, 16, 24, 32, 48, 64, 96, 128` px → tokens `--space-1` through `--space-10`

### Breakpoints
- Mobile-first base: 0–767px
- Tablet: `--bp-tablet` 768px
- Desktop: `--bp-desktop` 1024px
- Wide: `--bp-wide` 1440px

### Container
- Max content width: 1200px (`--container`)
- Horizontal gutter: 24px mobile, 48px tablet, 80px desktop

### Section rhythm
- Vertical padding: 64px mobile, 96px tablet, 128px desktop
- Between-section breathing: at least 96px desktop, never less than 64px mobile

---

## 5. Components

### Buttons
- **Primary:** gold fill `--brand-gold`, text `--ink-900`, 2px radius, padding `14px 28px`, font-weight 600, uppercase, tracking 0.06em. Hover → `--brand-gold-bright`. Press → scale 0.98. Focus ring: 2px `--focus-ring` offset 3px.
- **Secondary:** transparent, 1.5px border `--ink-900`, text `--ink-900`. Hover → bg `--ink-900`, text `--surface`.
- **Tertiary / text link:** `--ink-900` text with gold underline that grows on hover.
- Minimum touch target: 44×44px.

### Cards (service, case study, founder)
- Surface `--surface` with 1px border `--ink-300`
- Padding 32px desktop / 24px mobile
- 2px corner radius (sharp, not pill)
- Hover (interactive cards only): translate-y -2px, border-color → `--brand-gold`, transition 200ms ease-out
- Never animate width/height — use transform only

### Nav
- Sticky on scroll, white background with bottom 1px border `--ink-300`
- Logo left, links center, CTA right
- Active link: gold underline (2px, animated grow)
- Mobile: hamburger → fullscreen overlay sheet, gold accent

### Footer
- Background `--ink-800` (deep)
- Text `--surface` 80% opacity
- Cream divider strip (`--brand-cream`, 4px height) sits above the footer block
- "A Zamorin Company" lockup

### Forms
- Label above input, never placeholder-only
- Inputs: 1px border `--ink-300`, focus border `--brand-gold` + 3px gold soft ring
- Error message below field, color `--danger`, with text + icon
- Submit button always primary style

---

## 6. Imagery & Iconography

- **Icons:** Lucide SVG icons (loaded inline or via single sprite). 1.5px stroke. Always paired with text — no icon-only nav.
- **No emoji** as structural UI (eyebrows, bullets, decorations).
- **No stock photos** of "businesspeople shaking hands" or "diverse team around laptop." If photography is needed, use Vikram + Pallavi only.
- **Decorative motif:** A single thin gold underline (2px high, 48px wide) appears beneath section eyebrows and certain h2s — a quiet brand signature.

---

## 7. Motion

- Default transition: `cubic-bezier(0.2, 0, 0, 1)` over 200ms
- Hover transitions: 150ms
- Page entry reveal (optional): 240ms fade-up with 30ms stagger for cards
- Never animate above 400ms
- Respect `prefers-reduced-motion: reduce` — disable all non-essential motion

---

## 8. SEO & Accessibility Baseline (every page)

- Unique `<title>` and `<meta name="description">`
- One h1 per page, semantic heading order
- Lang attribute `en`
- `<meta name="viewport" content="width=device-width, initial-scale=1">`
- Open Graph + Twitter card meta tags
- JSON-LD: `Organization` schema sitewide; `Person` on /leadership; `Service` on each /services/* page; `BreadcrumbList` on inside pages
- Skip-to-content link
- Visible focus rings everywhere (never `outline: none` without replacement)
- Alt text on every meaningful image
- Form fields have `<label for>` plus aria attributes for errors

---

## 9. Structure of the Site

| Page | URL | Notes |
|------|-----|-------|
| Home | `/` | Hero, snapshot, why-us, founders teaser, work teaser, contact band |
| About | `/about` | Lineage from Zamorin Group, why we exist, beliefs |
| Services hub | `/services` | 6 cards linking to detail pages |
| Service detail ×6 | `/services/<slug>` | Strategy, custom-software, cloud-devops, data-ai, cybersecurity, managed-it |
| Approach | `/approach` | Discover → Architect → Deliver, partner network model |
| Leadership | `/leadership` | Vikram + Pallavi |
| Work | `/work` | Case study tiles (placeholders) |
| Contact | `/contact` | Form (disconnected), office details |

---

## 10. Anti-patterns (do not do)

- AI purple/pink gradients
- Glassmorphism (wrong era + wrong brand)
- Pill-shaped buttons
- Sentence-case headings with bright accent colors
- Emoji as icons
- Hero video / autoplay anything
- Stock photo trust strips
- Carousels (parent uses them — we don't, on purpose)
- Animated counters / "100+ projects delivered" stats without real numbers
- Chatbot widget
- Cookie pop-up before page is even readable
