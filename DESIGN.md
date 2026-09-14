---
name: Jade Vaillant (skymme.com)
description: Ingénieure logicielle et Data Scientist, a vivid product-grade landing page where the product is the data scientist.
colors:
  ground: "#0f1112"
  ground-alt: "#151718"
  surface: "#1b1e20"
  surface-raised: "#25292b"
  hairline: "#2a2e31"
  hairline-strong: "#3b4044"
  ink: "#f4f6f5"
  ink-secondary: "#b4bbb9"
  ink-muted: "#8d9593"
  emerald: "#10d98a"
  emerald-hover: "#3be6a2"
  on-emerald: "#04140d"
  violet: "#a78bfa"
  magenta: "#f472b6"
  cyan: "#22d3ee"
  halo-emerald: "rgb(16 217 138 / 0.3)"
  halo-violet: "rgb(124 58 237 / 0.34)"
  halo-magenta: "rgb(224 64 155 / 0.3)"
  ground-light: "#f6f7f9"
  ground-alt-light: "#eceff3"
  surface-light: "#ffffff"
  surface-raised-light: "#f0f2f5"
  hairline-light: "#e1e5ea"
  hairline-strong-light: "#cdd3da"
  ink-light: "#0f1720"
  ink-secondary-light: "#4a5562"
  ink-muted-light: "#5d6874"
  emerald-light: "#047857"
  emerald-hover-light: "#065f46"
  on-emerald-light: "#ffffff"
  violet-light: "#7c3aed"
  magenta-light: "#db2777"
  cyan-light: "#0e7490"
  halo-emerald-light: "rgb(16 185 129 / 0.2)"
  halo-violet-light: "rgb(124 58 237 / 0.14)"
  halo-magenta-light: "rgb(219 39 119 / 0.12)"
typography:
  display:
    fontFamily: "Outfit Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 1.5rem + 4.2vw, 4.4rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Outfit Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.3rem + 2.6vw, 3.1rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  headline-sm:
    fontFamily: "Outfit Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.7rem, 1.3rem + 1.4vw, 2.3rem)"
    fontWeight: 700
    lineHeight: 1.15
  numeral:
    fontFamily: "Outfit Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 1.5rem + 1.2vw, 2.4rem)"
    fontWeight: 700
    lineHeight: 1.1
    fontFeature: "tnum"
  title:
    fontFamily: "Outfit Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
  title-sm:
    fontFamily: "Outfit Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "1.12rem"
    fontWeight: 700
    lineHeight: 1.3
  lead:
    fontFamily: "Rubik Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.05rem, 1rem + 0.3vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Rubik Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Rubik Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Outfit Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.2
  caption:
    fontFamily: "Rubik Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 400
    lineHeight: 1.5
  flag:
    fontFamily: "Outfit Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 700
    letterSpacing: "0.04em"
rounded:
  tile: "0.8rem"
  cover: "0.9rem"
  md: "1rem"
  card: "1.1rem"
  plan: "1.25rem"
  lg: "1.4rem"
  pill: "999px"
spacing:
  gutter: "clamp(1rem, 4vw, 2rem)"
  container: "78rem"
  section: "clamp(4.5rem, 9vw, 7rem)"
  grid-gap: "1.5rem"
  card-padding: "1.6rem"
  plan-padding: "2rem"
  cluster: "0.6rem"
components:
  button-accent:
    backgroundColor: "{colors.emerald}"
    textColor: "{colors.on-emerald}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.4rem"
  button-accent-hover:
    backgroundColor: "{colors.emerald-hover}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.4rem"
  button-lg:
    padding: "1rem 2rem"
  button-sm:
    padding: "0.6rem 1.15rem"
  icon-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.pill}"
    size: "2.6rem"
  nav:
    backgroundColor: "rgb(15 17 18 / 0.88)"
    height: "4.25rem"
  badge-status:
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 1rem"
  pill:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.55rem 1.1rem"
  pill-accent:
    textColor: "{colors.emerald}"
    rounded: "{rounded.pill}"
    padding: "0.15rem 0.65rem"
  tag:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.pill}"
    padding: "0.2rem 0.65rem"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-padding}"
  card-feature:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
  model-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.card-padding}"
    width: "28rem"
  plan:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.plan}"
    padding: "{spacing.plan-padding}"
  plan-flag:
    backgroundColor: "{colors.emerald}"
    textColor: "{colors.on-emerald}"
    typography: "{typography.flag}"
    rounded: "{rounded.pill}"
    padding: "0.3rem 0.95rem"
  timeline-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "1.3rem 1.4rem"
  float-badge:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0.45rem 0.95rem 0.45rem 0.45rem"
  icon-tile:
    rounded: "{rounded.tile}"
    size: "3rem"
---

# Design System: Jade Vaillant (skymme.com)

## Overview

**Creative North Star: "The Model Run"**

A dark, vivid, product-grade landing page in the idiom of a music-streaming product. Here the "product" is a data scientist, and the signature object is a model run instead of a player. A near-black ground carries soft, blurred emerald and violet/magenta halos. Rounded surfaces sit on it, separated by 1px hairlines. There is one action colour: emerald. Violet, magenta and cyan colour icons, illustrations and data encodings. They never become actions. Density is generous and screening-fast: big Outfit headings with one solid emerald keyword, short Rubik prose, pills everywhere a label needs a body.

Both themes are first-class. The light theme is not an inversion. It moves to a cool grey ground, white surfaces, a deeper emerald (to keep AA contrast), saturated violet and magenta, and the same halos at lower opacity. Components read only the theme variables, so every new surface inherits both themes for free.

Imagery comes from the content itself. Charts, matrices, puzzle tiles and snake grids are drawn in SVG with the token colours, and real screenshots are used where a project has a real interface. The user explicitly rejected two looks: a topographic contour-map direction, and the Meeply look (single electric-blue accent with blue-violet gradients).

**Key Characteristics:**
- Near-black ground with section-level blurred halos (emerald top-left, violet and magenta bottom-right).
- Emerald is the only action and emphasis colour; violet, magenta and cyan are data and icon colours.
- Pill buttons, pill badges, pill tags; cards rounded between 1rem and 1.4rem with 1px hairlines.
- Flat in-flow surfaces; only floating hero objects cast a shadow.
- Outfit for headings, numerals and labels; Rubik for prose.
- Ported Magic UI motion: pointer spotlight, border beam, marquee, number ticker, blur-fade entry, circular theme reveal, all removed under reduced motion.

## Colors

A near-black green-grey neutral base with one vivid emerald voice and a violet/magenta/cyan supporting cast that only ever encodes data or decorates icons.

### Primary
- **Signal Emerald** (dark `emerald`, light `emerald-light`): the single action colour. It fills primary buttons, the logo mark, the featured-plan flag, the active puzzle tile and small emerald icon discs. As a foreground it colours heading keywords, check marks, organisation names in the timeline, project links, step numbers, the chart's observed line, focus outlines (2px, 3px offset) and the active-nav underline. Hover shifts to `emerald-hover` (lighter on dark, deeper on light). Text on an emerald fill uses `on-emerald`.

### Secondary
- **Model Violet** (dark `violet`, light `violet-light`): the second data voice. Used for the forecast (dashed) line and its confidence band, negative residuals, ranking bars in the search-engine cover, the development timeline dot, violet icon tiles, and the second stop of every accent gradient.

### Tertiary
- **Signal Magenta** (dark `magenta`, light `magenta-light`): the third stop of the progress bar and pipeline thread, the "food" in the snake cover, magenta icon tiles, and the third halo.
- **Touch Cyan** (dark `cyan`, light `cyan-light`): reserved touch colour for icon tiles; defined in both themes, rarely used.

### Neutral
- **Ground** (`ground` / `ground-light`): page background; also the browser `theme-color`.
- **Ground Alt** (`ground-alt` / `ground-alt-light`): alternating section bands (Projets, Compétences).
- **Surface** (`surface` / `surface-light`): cards, plans, timeline cards, feature card, model card (at 92% over the halo).
- **Surface Raised** (`surface-raised` / `surface-raised-light`): pills, tags, floating badges, social buttons, illustrated cover panels.
- **Hairline** (`hairline` / `hairline-light`): default 1px card borders, section rules, nav bottom border, tracklist rows.
- **Hairline Strong** (`hairline-strong` / `hairline-strong-light`): outline buttons, icon buttons, pills, floating objects, hovered card borders, meta-row separators.
- **Ink** (`ink` / `ink-light`): headings and primary text.
- **Ink Secondary** (`ink-secondary` / `ink-secondary-light`): lead paragraphs, card prose, nav links at rest, bullet text.
- **Ink Muted** (`ink-muted` / `ink-muted-light`): dates, meta rows, captions, marquee words, legal line, the "other" timeline dot. Both values were checked to AA against surface.
- **Halos** (`halo-emerald`, `halo-violet`, `halo-magenta` and their `-light` variants): translucent radial glows painted behind the hero, the CTA and the experience spotlight.

### Named Rules
**The Single Action Colour Rule.** Only emerald fills an action. Violet, magenta and cyan never fill a button, a link or a flag; they encode data or tint an icon.

**The Meaningful Dot Rule.** Timeline dots carry meaning: emerald means data and analysis, violet means development, muted ink means other experience and studies. A visible legend always accompanies the dots, and a dot colour is never chosen for decoration.

**The Section Halo Rule.** Halos belong to whole sections (hero, CTA, spotlight) and to the single featured object (featured plan, feature cover panel, sectors card) as low-percentage radial tints. Ordinary cards stay plain surface.

## Typography

**Display Font:** Outfit Variable (with Segoe UI, system-ui, sans-serif)
**Body Font:** Rubik Variable (with Segoe UI, system-ui, sans-serif)

**Character:** Outfit is geometric and confident, and carries everything that must be read at a glance: headings, numerals, buttons, pills, logo and tile labels. Rubik is soft and rounded, and carries the explanation. It is the reference product's own pairing.

### Hierarchy
- **Display** (700, fluid 2.6 to 4.4rem, 1.08, -0.025em, balanced wrap): the single hero H1.
- **Headline** (700, fluid 2 to 3.1rem, 1.12, -0.02em, balanced wrap): section H2s, centred in a 46rem header with a 1.12rem Ink Secondary intro below.
- **Headline Small** (700, fluid 1.7 to 2.3rem, 1.15): the featured project title; the experience spotlight title uses a sibling fluid 2 to 2.8rem at 1.1.
- **Numeral** (700, fluid 1.9 to 2.4rem, 1.1, tabular figures): hero stats; units in a 0.55em Ink Secondary suffix.
- **Title** (700, 1.25rem, 1.3): card titles; plan titles step up to 1.45rem, column titles to 1.35rem.
- **Title Small** (700, 1.12rem, 1.25 to 1.3): timeline roles, model-card title.
- **Lead** (400, fluid 1.05 to 1.25rem, 1.6, max 36rem, pretty wrap): the hero sentence.
- **Body** (400, 1rem, 1.6): default prose; card text at 1.65.
- **Body Small** (400, 0.95rem, 1.55): timeline bullets, project descriptions, plan subtitles.
- **Label** (Outfit 600, 1rem; 0.92rem on small buttons, 0.95rem on floating badges): buttons, pills, floating badges, project links, language names, marquee words (1.2rem).
- **Caption** (Rubik 400, 0.78 to 0.92rem, Ink Muted): dates, meta rows, chart axis words, cover captions, tags, legal line.
- **Flag** (Outfit 700, 0.78rem, 0.04em, uppercase): only the featured-plan flag.

### Named Rules
**The Solid Keyword Rule.** Each H1 and H2 carries at most one keyword in solid emerald. Gradient text is never used.

**The Outfit Speaks, Rubik Explains Rule.** Anything that is scanned (heading, number, button, pill, tile label) is Outfit. Anything that is read (sentences, dates, meta) is Rubik.

## Layout

Single-column page inside a 78rem container with fluid gutters (1rem to 2rem). Sections breathe with fluid vertical padding (4.5rem to 7rem; the CTA uses 5rem to 8rem) and alternate between Ground and Ground Alt bands. The nav is sticky at 4.25rem with a 5rem scroll padding.

- **Hero:** stacks and centres below 1000px. From 1000px up it becomes a two-column grid (1.08fr copy, 0.92fr visual) with a min-height of min(100svh - 12rem, 44rem). A masked marquee of tools closes the hero under a hairline.
- **Grids:** 1.5rem gaps throughout. Three pipeline steps from 820px, joined in the gutters by a 2px emerald-violet-magenta thread. Projects run 1, then 2 columns (640px), then 4 (1100px) under a two-column feature card (900px). Background runs 1.45fr/1fr (1000px). Skill plans are 3 columns from 900px with the featured plan first on mobile. The footer is 1.6fr plus three columns (768px).
- **Section headers** are centred by default. When a section has a trailing link, the header becomes a left-aligned row with the link pushed right.
- **Small screens:** action buttons go full width below 520px, and the hero stats become a three-column grid. The nav links collapse below 900px, leaving the logo, theme toggle and CV button.

Breakpoints are content-led rather than a strict scale (420, 520, 640, 768, 820, 900, 1000, 1100px).

## Elevation & Depth

The system is a hybrid, mostly flat. In-flow surfaces are separated by tone (Ground, Ground Alt, Surface, Surface Raised) and 1px hairlines, never by shadows. Atmospheric depth comes from the blurred radial halos behind sections. Real shadows are kept for the objects that float above the hero, and interaction depth comes from light (spotlight, beam), not lift.

### Shadow Vocabulary
- **Float** (`box-shadow: 0 24px 60px -18px rgb(0 0 0 / 0.7)` dark; `0 24px 50px -20px rgb(15 23 32 / 0.25)` light): the model card and its two floating badges.
- **Cover drop** (`box-shadow: 0 10px 24px -8px rgb(0 0 0 / 0.5)`): the gradient cover square inside the model card.
- **Dot ring** (`box-shadow: 0 0 0 4px` the dot colour at 22%): timeline and legend dots.

### Named Rules
**The Float Only Rule.** Only objects that visibly float over the hero (the model card and its badges) cast a shadow. Cards, plans and timeline entries stay flat, and hover changes only their border.

**The Light Not Lift Rule.** Interactive cards answer the pointer with an emerald spotlight and a gradient hairline that follow the cursor. They never translate or grow a shadow.

## Shapes

The form language is soft and rounded. Pills (999px) for every button, badge, tag, flag, icon button and social button. Rounded rectangles for containers, in a stepped scale by importance:
- 0.8rem: icon tiles and project cover frames.
- 0.9rem: the model-card cover.
- 1rem: timeline cards and floating badges.
- 1.1rem: standard cards.
- 1.25rem: plans.
- 1.4rem: the model card, the feature card and the spotlight.

Circles are used for dots, the logo mark and small icon discs. Every container has a 1px border. The pointer-spotlight and border-beam overlays inherit the container radius. SVG illustrations use 2 to 8 unit corner radii and round line caps.

## Components

### Buttons
Confident pills with a heading-face label and a leading line icon (1.1rem).
- **Shape:** full pill (999px), 1px border.
- **Accent:** emerald fill, on-emerald label, Outfit 600, 0.75rem 1.4rem padding; large 1rem 2rem at 1.05rem; small 0.6rem 1.15rem at 0.92rem.
- **Hover / Focus / Active:** accent shifts to emerald-hover; 180ms ease-out colour transitions; press scales to 0.98; focus is a 2px emerald outline at 3px offset.
- **Outline:** transparent with a Hairline Strong border and Ink label. On hover the border becomes Ink and the fill gets a 5% ink wash.
- **Icon button:** 2.6rem circle, Hairline Strong border, Ink Secondary icon brightening to Ink on hover (the theme toggle).
- **Text button:** inherits colour and underlines on hover (copy e-mail, CTA links).

### Chips
- **Status badge:** a pill with a Hairline border, 75% Surface fill, Ink Secondary text at 0.92rem and a leading emerald neural-network emblem. Used only for the hero availability line.
- **Pill:** Surface Raised fill, Hairline Strong border, Outfit 600, emerald leading icon (sectors).
- **Pill accent:** borderless, emerald text on a 16% emerald wash, 0.8rem (the TOEIC score).
- **Tag:** borderless Surface Raised pill, Ink Secondary 0.78rem (project technologies).

### Cards / Containers
- **Corner Style:** 1.1rem standard; 1.25rem plans; 1.4rem feature, spotlight and model card; 1rem timeline.
- **Background:** Surface; featured variants add 12 to 18% emerald and violet radial tints.
- **Shadow Strategy:** flat (see The Float Only Rule).
- **Border:** 1px Hairline, Hairline Strong on hover (200ms).
- **Internal Padding:** 1.6rem cards, 2rem plans (2.75rem block on featured), 1.3rem 1.4rem timeline, fluid 1.6 to 3rem spotlight.
- **Icon tile:** 3rem, 0.8rem radius, icon in the tile colour on a 16% wash of the same colour. The small variant is a 2.1rem solid disc.

### Navigation
Sticky bar on 88% (dark) or 90% (light) Ground with a saturate(1.4) blur(12px) backdrop and a Hairline bottom border. Logo: an emerald circular mark with a rising line, plus the name in Outfit 700 1.3rem. Links are Rubik 1rem in Ink Secondary, Ink on hover. The active section (tracked by scroll spy) gets Ink plus a 2px emerald underline offset 0.5em. On the right sit the theme icon button and a small accent CV button. A 3px emerald-violet-magenta scroll-progress bar sits above everything.

### Model Run Card (signature)
The hero's floating object. A 28rem-max Surface card (92% over the halo) with a Hairline Strong border, a 1.4rem radius, the Float shadow, a pointer spotlight and a 7s border beam. Header: a gradient cover square with a chart icon, plus a title and an "Illustration · données synthétiques" subtitle. Body: an SVG forecast with a dashed hairline grid, a solid emerald observed line, a dashed violet forecast with a 20% violet band and a hollow emerald join dot, the axis words "observé / prévu", and a residual strip (emerald above, violet below the baseline). It carries no playback controls and no metrics. Two floating badges (Surface Raised, 1rem radius, small icon disc and Outfit label) bob 6px on a 6s loop, offset by half a cycle.

### Featured Plan
The middle skills plan is the featured one: emerald-tinted border (55% emerald), emerald and violet corner tints, taller padding, a border beam, and an uppercase Outfit flag centred on its top edge.

### Timeline Card
A two-column grid: a 0.8rem meaningful dot (see The Meaningful Dot Rule) beside the Caption date, the Title Small role, the organisation in emerald Rubik 500 and small-dot bullets.

### Project Covers
A 16:10 frame with a 0.8rem radius and a Hairline border. Real projects with an interface show a top-anchored screenshot. Others show an SVG drawn from the project's own mechanism (15-puzzle tiles with one emerald tile, a snake on a dot grid, a TF-IDF matrix with violet ranking bars) on the cover panel: Surface Raised with emerald and violet corner tints. An illustrative cover carries a Caption naming what it depicts.

### Motion
State transitions take 180ms ease-out (200ms for cards, 300ms for the spotlight fade). Hero copy and the model card enter with a 900ms blur-fade on cubic-bezier(0.16, 1, 0.3, 1), staggered 80ms. The theme toggle reveals the new theme as a circle growing from the button (560ms, same curve). Stats tick up over 1.4s. The marquee takes 38s per loop and pauses on hover. Under reduced motion, every loop, beam, entry and transition is removed and the duplicate marquee track is hidden.

## Do's and Don'ts

### Do:
- **Do** read colours only through the theme variables so both themes follow; add any new colour to both the dark and the light blocks.
- **Do** keep emerald as the only fill for actions and use `on-emerald` for text on it.
- **Do** give each H1 or H2 at most one solid emerald keyword.
- **Do** separate in-flow surfaces with tone and 1px hairlines, keeping the Float shadow for floating hero objects.
- **Do** draw illustrations from the content itself in token colours, label synthetic or illustrative visuals as such, and use real screenshots for real interfaces.
- **Do** keep timeline dots semantic (emerald data, violet development, muted other) with a visible legend.
- **Do** use pills (999px) for buttons, badges, tags and flags, and 1rem to 1.4rem radii for containers.
- **Do** remove loops, beams and entry animations under `prefers-reduced-motion`.

### Don't:
- **Don't** use gradient text; keywords are solid emerald.
- **Don't** fill a button, link or flag with violet, magenta or cyan.
- **Don't** return to the topographic contour-map direction or to Meeply's single electric-blue accent with blue-violet gradients.
- **Don't** add eyebrow or kicker labels above section headings; the uppercase flag exists only on the featured plan.
- **Don't** put frosted glass on badges or cards; the backdrop blur belongs to the sticky nav alone.
- **Don't** give in-flow cards a shadow or a hover lift.
- **Don't** add playback controls, invented metrics or unlabelled fake data to the model card or any illustration.
- **Don't** hard-code hex colours in components; they break the light theme.
