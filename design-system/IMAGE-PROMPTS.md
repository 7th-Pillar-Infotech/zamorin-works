# Zamorin Works — Image Generation Prompts

Structured JSON prompts you can paste directly into ChatGPT (with image generation enabled) to generate brand-consistent imagery.

**Shared brand parameters — keep these in every prompt:**

```json
{
  "brand": "Zamorin Works",
  "palette": {
    "primary_dark": "#1A1F26",
    "deep_ink": "#202020",
    "brand_gold": "#DAA106",
    "bright_gold": "#FEB20D",
    "warm_cream": "#FFE8B7",
    "soft_beige": "#ECE5DD",
    "surface": "#FFFFFF",
    "neutral_text": "#323232"
  },
  "typography_reference": "Raleway 800 headings, Lato body — premium consultancy",
  "style_keywords": [
    "refined", "consultative", "premium", "editorial",
    "minimal", "trustworthy", "GCC business culture",
    "Dubai aesthetic", "no clutter", "no AI gradients"
  ],
  "avoid": [
    "stock-photo cliches (handshakes, businesspeople in suits)",
    "AI purple/pink gradients",
    "glossy 3D illustrations",
    "emoji",
    "casino-gold (use refined gold, not bright yellow)",
    "tech-startup neon",
    "generic abstract waves"
  ]
}
```

---

## 1. Hero illustration (alternative to current SVG line-art)

If you want to replace the hero SVG with a generated illustration:

```json
{
  "task": "Create a hero illustration for an IT consultancy website",
  "subject": "An abstract architectural composition suggesting connection, structure, and discipline — could read as: a stylized network diagram, an abstract Arabic-geometric pattern, or a minimalist gold-line wireframe of an infrastructure schematic",
  "composition": {
    "aspect_ratio": "1:1",
    "background": "Deep slate #1A1F26",
    "primary_color": "Refined gold #DAA106 (thin lines, 1.5–2px stroke equivalent)",
    "accent_color": "Champagne #FFE8B7 (sparingly, for highlights)",
    "negative_space": "60% — let the composition breathe"
  },
  "style": [
    "Editorial line illustration, not 3D render",
    "Vector-feeling, crisp edges",
    "Refined, almost architectural blueprint quality",
    "Quiet, premium, restrained — like a Bain or Thoughtworks marketing visual"
  ],
  "avoid": [
    "Photographic realism",
    "AI-style gradients",
    "Generic 'network' clip-art",
    "Faces or human figures"
  ],
  "output": "PNG with transparent background, 1200×1200"
}
```

---

## 2. Founder portrait treatment guide

Use this when you have actual headshots of Vikram and Pallavi and want consistent editorial treatment:

```json
{
  "task": "Transform a provided headshot into a Zamorin Works editorial portrait",
  "input": "Original headshot photo (you'll attach)",
  "treatment": {
    "crop": "4:5 portrait, subject slightly off-center",
    "color_grading": "Warm-neutral, slight desaturation. Keep skin tones natural. Background tinted toward champagne (#FFE8B7) or soft beige (#ECE5DD).",
    "background": "Solid warm beige or champagne — never busy. Single soft directional light from upper-left.",
    "mood": "Confident, calm, consultative. Subject looking slightly off-camera (toward upper-right) — not corporate-headshot-direct."
  },
  "style_reference": "Think Harvard Business Review masthead portraits, not LinkedIn corporate headshots",
  "post_processing": [
    "Subtle film grain (very light)",
    "No vignette",
    "Add 1px gold rule along the bottom edge (#DAA106)"
  ],
  "output": "1200×1500 PNG"
}
```

---

## 3. Case study tile imagery

For the `/work` page tiles, when you have real case studies:

```json
{
  "task": "Create an editorial abstract image representing an IT consulting engagement",
  "subject_per_case_study": {
    "custom_software": "Abstract isometric representation of layered systems / modular architecture",
    "cloud_devops": "Stylized cloud-infrastructure diagram in line-art, deep slate background",
    "data_ai": "Sparse data visualization elements — a single clean chart line, a few highlighted data points",
    "cybersecurity": "Geometric pattern suggesting layered protection — concentric refined shapes",
    "strategy_advisory": "Architectural blueprint feel — measured lines, technical drawing aesthetic",
    "managed_it": "Quiet repeating pattern suggesting reliable rhythm — soft grid or wave"
  },
  "constraints": {
    "aspect_ratio": "16:10",
    "palette": "Deep slate #1A1F26 background, gold #DAA106 line accents, champagne #FFE8B7 highlights",
    "style": "Editorial illustration, not photo. Refined, abstract, no literal screenshots."
  },
  "avoid": ["Stock-photo 'business meeting' images", "Literal product screenshots", "AI generic abstractions"],
  "output": "1600×1000 PNG"
}
```

---

## 4. Section divider ornament

If you want decorative section dividers (alternative to the CSS gold-thread-and-dot motif):

```json
{
  "task": "Create a horizontal section divider ornament",
  "composition": "Centered horizontal element, ~600px wide, ~40px tall",
  "design": "A single thin gold line (#DAA106) with a small geometric center motif — could be: a diamond, a dot, three dots, or a stylized 'Z' for Zamorin",
  "style": "Vector, sharp edges, minimal. Refined heraldic-style ornament — like a book chapter divider in a 1950s editorial design",
  "background": "Transparent",
  "color": "Pure #DAA106 (no gradient)",
  "output": "1200×80 PNG with transparency"
}
```

---

## 5. Open Graph / social share image

For Twitter/LinkedIn previews when the URL is shared:

```json
{
  "task": "Create an Open Graph share image for Zamorin Works",
  "composition": {
    "aspect_ratio": "1.91:1 (1200×630)",
    "background": "Deep slate #1A1F26 with subtle gold radial glow in upper-right (#DAA106 at 15% opacity)",
    "layout": "Left 60%: large headline in white. Right 40%: small abstract gold line-art (similar to network motif). Bottom-left: small wordmark 'Zamorin Works'."
  },
  "typography": {
    "headline": "Raleway 800, 64px, white, line-height 1.05. Text: 'Enterprise technology, delivered with Zamorin discipline.'",
    "wordmark": "Raleway 800, 22px, white with 'Works' in #DAA106"
  },
  "style": "Premium consultancy. Like a McKinsey or Bain branded asset.",
  "output": "1200×630 PNG"
}
```

---

## 6. Decorative Arabic-geometric pattern (optional brand depth)

For dramatic backgrounds or section accents — leans into the Dubai aesthetic:

```json
{
  "task": "Create a subtle Arabic-geometric pattern tile",
  "pattern_type": "Octagonal star tessellation OR interlocking hexagons OR mashrabiya-inspired lattice",
  "style": "Single-color line work. No fills. Refined and architectural, not ornate or floral.",
  "color": "Gold #DAA106 at 15–20% opacity on transparent",
  "tile_size": "400×400 (must tile seamlessly)",
  "use_case": "Section background overlay or footer decoration, used sparingly at low opacity",
  "output": "400×400 seamless tile PNG with transparency"
}
```

---

## 7. Office/location photography brief

If you commission or shoot real photography for the Dubai office:

```json
{
  "task": "Photography direction for Zamorin Works Dubai office shots",
  "subjects": [
    "Architectural details of the Dubai office (windows, materials, structural elements — not full rooms)",
    "Founders working (Vikram and Pallavi at desks, in conversation — candid, not posed)",
    "Workspace details (a hand on a notebook, a laptop screen blurred, an open architectural drawing)"
  ],
  "style_direction": {
    "color_grade": "Warm-neutral, slightly desaturated. Lean champagne and slate. Avoid Instagram-warm or cool-tech-blue.",
    "lighting": "Natural daylight, soft. Single window-light or directional artificial light. Never flat fluorescent.",
    "composition": "Editorial, magazine-style. Negative space. Single subject focus.",
    "reference": "Like a Monocle magazine office feature, not a corporate brochure"
  },
  "avoid": [
    "Wide-angle group shots of 'the team' lined up",
    "Cliched 'people around laptop' scenes",
    "Overly polished corporate stock-photo feel"
  ]
}
```

---

## How to use these prompts

1. Open ChatGPT (with image generation enabled — DALL-E 3 or GPT-Image)
2. Paste the relevant JSON prompt as a message
3. Add a short natural-language wrapper, e.g.:
   *"Generate an image using these specifications. Stay strictly within the brand parameters."*
4. Review output — if it strays from the brand (especially on gold tone or AI-style gradients), iterate by saying:
   *"More refined. Less saturation. The gold should read as warm and editorial, not casino-yellow."*
5. Save outputs to `assets/img/` and reference from HTML

## Naming convention for generated assets

```
assets/img/
├── hero-illustration.png        ← Hero alternative (if replacing SVG)
├── founder-vikram.jpg           ← Vikram portrait (4:5)
├── founder-pallavi.jpg          ← Pallavi portrait (4:5)
├── work-[slug].png              ← Case study tile, one per study
├── og-default.png               ← Open Graph share image (1200×630)
├── divider-ornament.png         ← Section divider (optional)
└── pattern-tile.png             ← Background pattern (optional)
```

## Tone reminder

The brand voice is **refined consultancy, not tech startup**. When generating images:
- "Premium" beats "vibrant"
- "Editorial" beats "energetic"
- "Restrained" beats "expressive"
- "Architectural" beats "organic"

If an image feels like it could be on a McKinsey, Bain, or Thoughtworks site — it's on-brand. If it could be on a Y Combinator startup site — it's off-brand.
