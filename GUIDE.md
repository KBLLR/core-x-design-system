# KBLLR Core-X Design System

A design system for **KBLLR Core-X** — a local-first multimodal AI workbench. Brutalist, warm-beige, dashed borders everywhere. The aesthetic is borrowed from **penev.tech**: minimal, technical, material-focused, no rounded corners.

> "Warm beige, dashed borders, Chakra Petch + Inter. Minimal, brutalist, material-focused."
> — header comment in the source `core.css`


> **What this repository holds (checked 22 Nov 2026).** This guide describes the full system as designed. The repository publishes its source of truth for consumers: `tokens.json`, `tokens.css` (generated from it), `tokens/haloform-corex.css`, the component bundle and contracts in `components/` (`bundle.js`, `bundle.css`, `index.d.ts`, plus each component's `README.md` and preview), `swift/CoreXGlass.swift.txt`, the `core-x-native` skill, and the site (`index.html`, `site/`). Files the sections below name and that are not in that list (for example `styles.css`, `tokens/themes.css`, `playground.html`, `ui_kits/`, `assets/`) belong to the original design workspace and are not published here; their rules and values are carried by `tokens.json` and the bundle. The **File index** at the end lists what is actually here.

---

## What is Core-X?

Core-X is the orchestration shell that ties together a fleet of local services running on Apple Silicon — MLX language models, FLUX image generation, Whisper STT, Kokoro TTS, RAG, embeddings, vision, audio, a streaming event bus. The UI is the launchpad and the runtime for ~15 operational "modes": Board, Chat, Orchestrator, Canvas, Image, Voice, Dashboard, Research, Flow, Code, Assets, World, Graph, Disk, System.

**Personality**: it looks and feels like an operator's console for a one-person datacenter. Lots of telemetry. Lots of mono. Dashed dividers. Subtle marquee tickers. Tier badges. Status dots. Glass panels. A floating glass top bar. A draggable nav rail. A login screen with floating "popping" system terms.

It is unapologetically technical. It is not friendly. It assumes you know what `mlx::ministral-8b` means.

---

## Sources used to build this system

- **Codebase**: `ui/` (read via local FS mount) — a Vite + React 19 app at `ui/src/`. The 8300-line `ui/src/styles/core.css` is the canonical visual spec.
- **Fonts**: `ui/public/assets/fonts/` (Roboto, flowa, pirulen — extras for niche surfaces). The shipped UI loads **Chakra Petch**, **Inter**, **Fira Code** from Google Fonts.
- **Assets**: `ui/public/avatars/` (3D `.glb` head + texture maps for voice avatars), `ui/public/hdri/` (HDR environments for the 3D world). These are runtime art assets, not UI chrome — referenced for completeness; not used in 2D mockups.

The repo namespaces the product as **`core-x-ui`** in `package.json`, surfaces it as **`KBLLR — Core-X`** in `<title>`, and the login screen brands it **KBLLR / Core-X Ecosystem**.

---

## Products represented

There is one product, but it splits into two distinct surfaces:

| Surface | What it is | Key files |
|---|---|---|
| **Launcher** | Operational home screen. App grid, terminal, log marquee, service health. Lives at the URL root. | `ui/src/launcher/LauncherHome.tsx`, `LauncherAppGrid.tsx`, `LauncherTerminal.tsx` |
| **Runtime** | The active mode. Headerless full-bleed canvas with a floating glass topbar + draggable nav rail + session HUD. | `ui/src/runtime/RuntimeShell.tsx`, `ui/src/modes/*Mode.tsx` |

A third surface, **LoginGate**, sits in front of both — a GitHub-OAuth wall with a floating "popping terms" animation.

UI kits live in `ui_kits/`:
- `ui_kits/launcher/` — login + launcher home
- `ui_kits/runtime/` — runtime shell + a handful of representative modes (orchestrator, chat, board)

---

## Content fundamentals

The copy is **terse, technical, lowercase-or-uppercase, and never warm**. It addresses an operator, not a user. No exclamation points. No "let's", no "we'll". No emoji.

**Casing**
- **UPPERCASE + letter-spaced** for headings, brand, labels, badges, button text. Tracking is `0.06em` to `0.14em`.
- **lowercase** for telemetry, service IDs, mode names, log categories. (`gateway:8090`, `mode: orchestrator`, `polling`.)
- **Title Case** is rare — reserved for descriptive sentences in card descriptions and the few onboarding strings.

**Voice**
- Third-person system narration: *"Plan ready: 3 actions (text)."*, *"Disk context shared from anthology: disk.study · run_0042."*
- Operator-direct imperatives on buttons: *"Confirm & Execute"*, *"Build Plan"*, *"Open external"*, *"Activate + auto-start (2 svc)"*.
- Status as ID strings: `[INFO] core: bus connected` · `[WARN] mlx: queue saturated`.

**Pronouns**
- Mostly avoided. When unavoidable, "you" for instructions ("Drop a file or click to attach"). Never "we" or "I". The system has no persona in copy — its persona is in the geometry.

**Specific examples from the codebase**
- App grid description: *"Always-on Core-X lanes; launcher can auto-prepare models/services."*
- Empty state: *"Generate a plan to inspect proposed actions and confirm execution."*
- Field placeholder: *"Tell the orchestrator what to do with this input..."*
- Error: *"failed to build plan"* (lowercase, no period).
- Marquee item: *"[INFO] core: launcher initialized · [INFO] core: waiting for latest core-x actions"*.
- Login: *"KBLLR / Core-X Ecosystem / Continue with GitHub"*.

**Emoji**: never. Status is conveyed by **colored dots** (green / amber / red / blue / muted) and **dashed-border badges**.

**Punctuation**
- `·` (middle dot, U+00B7) is the canonical separator between meta tokens. `disk.study · run_0042 · /artifacts/foo.json`.
- `::` for namespaced identifiers. `sys::boot`, `mlx::ministral-8b`.
- Ellipsis as `...` (three dots, ASCII) on pending button labels: `"Planning..."`, `"Executing..."`.

---

## Visual foundations

### Color
A **warm-grey monochrome** core (`#d1d1d0` background, `#2d2824` text) with five **sober status hues**: green `#3d7a45`, amber `#b58106`, red `#8a3030`, blue `#3d6e96`, muted `#9a9a9a`. Never neon. Never gradient-as-fill. Color is used **sparingly** — almost exclusively on status dots, tier badges, and tier-coded legend chips.

The `--accent` is the same as `--text` (`#2d2824`); the "primary" button is just inverted (dark fill, beige text). There is no brand-color CTA.

### Type
Three families, used strictly:
- **Chakra Petch** — every heading, button, brand, badge, label. Always uppercase. Always letter-spaced.
- **Inter** — paragraphs and descriptive UI copy.
- **Fira Code** — every telemetry token, log line, ID, badge with a service name, value display.

### Borders — the signature
**1px dashed** is the dominant divider. Solid borders are reserved for **focus**, **selection** and **error** states. Cards, panels, badges, fields, tooltips — all dashed. The dashed line *is the brand*. `border-dotted` shows up only on external/optional surfaces (the "EXT" launcher card).

### Corner radius
**Zero.** Every surface is a hard rectangle except for status dots, the voice record button, and a 5–8px dot inside a badge. Even buttons are flat rectangles. The one exception is the Liquid Glass layer: glass controls are capsules and glass surfaces take `radius-glass`.

### Backgrounds
- A faint **100×100 grid** is drawn on the shell via `body::before` (`#9a9a9a22` lines, repeating). Subliminal blueprint texture.
- Cards and panels sit on a **translucent beige** (`rgba(209,209,208,0.42–0.85)`) with `backdrop-filter: blur(10–14px)` — glass over the grid.
- No full-bleed photography, no illustration, no hand-drawn marks. Imagery, when present, is **HDR studio environments** behind the 3D voice avatar (deep blues, browns, neutral studios — never warm).

### Animation
**Restrained.** Three primitives:
1. **Fade-in** (`loginFadeIn 0.4s ease-out`) for shell mounts.
2. **Pulse** (`pulse 1s infinite`) for active states — chat typing indicator, voice record button.
3. **Linear marquee** (38s, infinite) for the launcher log ticker.
4. The login screen has continuous **drift-and-fade** popping terms (random spawn every 700ms).

No bounce. No spring. No scale-on-hover. Hover states change color and border, **never** transform.

### Hover / press
- **Hover** = border tightens from dashed to solid (or `border-color: var(--accent)`), background goes from translucent to slightly more opaque. Sometimes a small color shift to `var(--text)` from `var(--text-muted)`.
- **Active** = `background: var(--accent)` (the dark inverse). On the primary "send" button, `background: var(--accent-hover)` (`#1a1714`).
- **Focus** = border switches from dashed to solid and gets the accent color.
- No shrink, no glow, no scale.

### Elevation
Three steps, all subtle:
- `--shadow-sm` `0 4px 8px rgba(16,18,16,0.08)` — rarely used.
- `--shadow-md` `0 12px 24px rgba(16,18,16,0.12)` — voice panels.
- `--shadow-lg` `0 22px 36px rgba(16,18,16,0.14)` — launcher terminal, the one piece allowed visible weight.

Inner shadows are not used.

### Transparency & blur
**Heavily used** on overlay chrome — the floating topbar, the nav rail, the voice panels, the launcher cards. Pattern is `rgba(209,209,208, 0.42→0.85)` + `backdrop-filter: blur(10–14px)`. The dashed border on a translucent surface is the canonical "glass" lookup.

### Layout
- Full viewport, no `max-width` containers on shells.
- **Floating chrome**: the topbar is `position: fixed`, centered, `width: fit-content`. The nav rail is `position: fixed; left: 12px; bottom: 12px`. Both are draggable.
- Dense gutters: **8–12px** between siblings is normal. Cards have **14px** padding. Topstrip is **28px** tall. Compact, operator UI.
- Grid templates are explicit columns, never `auto-fit` without `minmax`. Launcher app grid: `repeat(auto-fill, minmax(250px, 1fr))`.

### Cards
A card = `1px dashed var(--border-light)` + `background: rgba(209,209,208, 0.42–0.56)` + `backdrop-filter: blur(12px)` + `padding: 10–14px` + `gap: 8–12px` in a `flex-column`. No shadow on body cards. No rounded corners. Hover bumps opacity and replaces border color with `var(--accent)`.

### Pills, chips, badges
Always: `1px dashed`, mono, lowercase or uppercase, tiny (`9–10px`), padded `1px 5px` to `2px 6px`. Color encodes meaning — green = ready, amber = pending/full, blue = offline/debug, red = error, muted = external.

### Buttons
Two species:
1. **Primary** — solid dark fill, beige text, Chakra Petch uppercase, letter-spaced. `padding: 12px 20px`. No radius. No shadow.
2. **Ghost / utility** — transparent, 1px dashed border, mono or heading font, color = `--text-muted`, hovers to solid border + text color = `--text`.

Disabled state = `opacity: 0.4`, `cursor: not-allowed`.

### Fields
`background: rgba(255,255,255,0.35)` (subtle white tint over beige) + `1px dashed var(--border)` + mono font + 13px. On focus: border becomes solid, color = accent.

### Protection
No capsule chrome around text on imagery — the design avoids photo backgrounds entirely. The HDRI behind the 3D head uses a `radial-gradient` darken overlay (`rgba(255,255,255,0.18)` at center, `rgba(8,8,10,0.92)` at edges) instead of a per-element scrim.

---

## Iconography

The codebase **does not use an icon font** and **does not import an icon set from a CDN**. Every icon in the shipped UI is a **hand-rolled inline SVG** drawn at point of use — typically a 16–24px viewBox, `stroke="currentColor"`, `strokeWidth="1.5"`, no fill (or `fill="currentColor"` for brand glyphs like the GitHub mark).

Examples from the repo:
- **Nav rail home** — 24×24, single path, stroke-1.5 (`M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3...`).
- **Nav rail switch-app** — four 7×7 squares, stroke-1.5.
- **Nav rail settings** — the classic Material-style cog, stroke-1.5.
- **GitHub mark on login** — 16×16, `fill="currentColor"`, official Octicon path.
- **Orchestrator paperclip + send** — small 24×24 stroke icons inside the input bar.
- **Nav rail drag handle** — two short horizontal `<line>`s at `opacity: 0.4`.

**Substitution recommendation for new icons**: **Lucide** (`https://unpkg.com/lucide@latest/dist/umd/lucide.js`) is the closest cousin — same stroke weight, same line-cap, same minimal aesthetic. Use stroke `1.5px`, no fills, no rounded line caps (or `linecap="round"` if subtle). Prefer Lucide over Heroicons (which sometimes ship two-tone variants).

**Status as glyph**: a 5–6px filled circle (`border-radius: 50%`) with `box-shadow: 0 0 4px <statuscolor>` when active. This is the canonical "live indicator". Never a check / cross / spinner.

**Emoji**: not used.

**Unicode as icon**: `·` (middle dot) for separators, `!` (plain) for missing-service warnings inside a dashed-border square. Nothing else.

**Logos**
- There is **no graphical logo file** in the repo. The brand is rendered as **`KBLLR`** (large, Chakra Petch, letter-spaced) and **`CORE-X`** (smaller, mono or heading-cased, letter-spaced). The wordmark *is* the type.
- An `assets/logos/` directory has been added for design use — it contains the canonical wordmark rendered as text-SVG, since no raster logo was provided. Replace with a real raster/SVG if/when one is supplied.

---

## Components

Exported on `window.<Namespace>` via `_ds_bundle.js`. Each lives in `components/<Name>/` with a `.d.ts` contract and a preview card.

**Primitives** — **Button** (primary / ghost / danger), **Badge** (tone-coded dashed pill), **StatusDot** (the canonical live indicator), **ServiceChip** (`dot + name:port + note`), **Field** (dashed input, solid on focus), **Dropdown** (click-to-open menu: pill / field / ghost, multi-select, status dots or identity swatches), **Icon** (137-glyph registry).

**Surfaces** — **Panel** (glass card with a three-column header), **Card** (action / stat / media / dense × 4 material tiers), **Rail** (icon-first nav, collapsed 64px or expanded 188px).

**Feedback** — **Loader** (7 variants), **EntityLoader** (per-entity motion metaphor), **Skeleton** (5 shapes), **EmptyState** (6 kinds), **Marquee** (the log ticker).

**Data** — **StatTile**, **FunnelBar**, **ProvenanceChip**, **Sparkline**.

**Native layer** — **GlassSurface**, **GlassGroup**, **GlassButton** · **Avatar**, **IdentityRow**, **ChatBubble**, **NativeShell** · **SpatialLabel**, **Graph**, **RadialGraph** · **ActionHUD** · **HologramMaterial**, **RoomNodeMaterial**. Sections below.

### Icons

137 glyphs in `assets/icons/icons.js`, keyed by name, grouped `mode-*` / `render-*` / `chart-*` / `file-*`. Every one is a path fragment for a 24×24 viewBox, `stroke-width: 1.5`, no fill, round caps — **Lucide-compatible in both directions**. The registry is the single source of truth; never inline an icon at point of use.

```jsx
<Icon name="mode-voice" size={20} />          // React
cxIconSvg('mode-voice', { size: 20 })          // vanilla → markup string
```

---

## Materials & elevation

Six glass tiers, six shadow steps, tokenised z-layers, in `tokens/materials.css`.

**Tier is chosen by how high a surface floats, never by how important it is.** A flush card and a floating card differ in tier; a primary and a secondary card do not.

| Tier | Fill | Blur | Elevation | Use |
|---|---|---|---|---|
| `mat-1` | transparent | — | `shadow-0` | flush, in-flow content |
| `mat-2` | 42% | 12px | `shadow-1` | cards, body panels |
| `mat-3` | 62% | 12px | `shadow-2` + lip | floating chrome, rails, topbars |
| `mat-4` | 82% | 16px | `shadow-3` + edges | popovers, menus, dropdowns |
| `mat-5` | 94% | 24px | `shadow-4` | modals |
| `mat-6` | 98% | 24px | `shadow-5` | blocking dialogs |

Shadows are **warm-black, never coloured**, and only **one step per nesting level**. Edge treatments (`--edge-lip`, `--edge-base`) are what make glass read as glass — apply them *with* a shadow, never instead of one. `.mat-well` is the sunken inverse, for code blocks and tracks.

**Dark tier**: set `[data-surface="dark"]` on any subtree. Same six steps inverted, status hues lifted for dark ground. The runtime (glass over an HDRI) is dark; the launcher is beige.

**Z-layers** are the only legal `z-index` values: `--z-base` 0 · `--z-raised` 10 · `--z-sticky` 40 · `--z-rail` 90 · `--z-chrome` 100 · `--z-overlay` 200 · `--z-modal` 300 · `--z-toast` 400 · `--z-tooltip` 500.

---

## Motion

Tokens and twelve named primitives in `tokens/motion.css`.

### The four rules

1. **Motion reports state, it never decorates.** If nothing changed, nothing moves.
2. **Distance is small** — 2 to 8px. The system nudges; it does not travel.
3. **One primitive per element per event.** Never fade *and* slide *and* scale.
4. **Everything respects `prefers-reduced-motion`.** No exceptions.

**Durations**: `instant` 80ms · `fast` 150 · `base` 220 · `slow` 320 · `slower` 480 · `marquee` 38s.

**Easings**: `--ease-out` (`.25,1,.5,1`) for entrances and the default · `--ease-in` exits only · `--ease-in-out` movement between two on-screen positions · `--ease-spring` (`.22,1.4,.36,1`) layout shifts only, never opacity · `linear` for anything continuous.

**Primitives**: `.kx-fade-in` · `.kx-rise-in` (fade + 6px + de-blur — the one primitive allowed to combine properties, because they resolve into a single "coming into focus" read) · `.kx-slide-{r,l,u,d}` · `.kx-pulse` · `.kx-breathe` (the only primitive permitted to scale, and only by 4%) · `.kx-marquee` · `.kx-spin` (linear always — a spinner that eases is a lie) · `.kx-sweep` · `.kx-shimmer` (skeletons only, never real content) · `.kx-dash` · `.kx-blink` (step timing, no fade) · `.kx-raise` (the *only* transform-on-hover the system allows, and only on cards that are themselves links) · `.kx-press`.

Stagger with `.kx-stagger` on the parent and `--i` on each child.

---

## Text layout

`tokens/text.css`. Three voices that **never blend inside one block**: Chakra Petch is the machine labelling itself, Inter is prose addressed to the operator, Fira Code is anything the machine measured or named.

- **Measure** — `.measure-tight` 46ch · `.measure` 66ch · `.measure-wide` 84ch. Prose is unreadable past ~75ch.
- **Flow** — `.flow`, `.flow-tight`, `.flow-loose` put space *between* siblings via the owl selector, so a block never fights its container's padding.
- **`.prose`** — a whole article's defaults in one class, including `text-wrap: pretty` and hanging punctuation.
- **Labels** — `.eyebrow` `.kicker` `.overline` `.caption` `.footnote` `.section-head`.
- **Numerals** — `.tnum` and `.metric{-xl,-lg,-md}`. All tabular: telemetry must never jitter as it counts.
- **Structure** — `.kv-list` definition grids, `.table` (numerics right-aligned and tabular), `.cols-{2,3,auto}` for reference text only — never for anything read top-to-bottom in order.
- **Truncation** — `.truncate`, `.clamp-2/3`, and `.path` for mid-truncating a long path so the filename survives.

---

## Data honesty

A rule the data primitives enforce, borrowed from the rigging portal's ops dashboard:

**A withheld figure is safer than a plausible zero.** If a source failed, `StatTile` renders `withheld` in red plus the reason — it never substitutes 0. If an artifact is missing entirely, omit the block rather than fill it.

**Every aggregate carries a `ProvenanceChip`.** Never silent, never a percentage. `fresh` · `stale` (with age) · `partial` · `failed` · `missing`.

`FunnelBar` hatches outstanding work so "waiting" can never read as "done" at a glance. `Sparkline` shows shape, not level — never put two on screen implying a shared scale. `Loader`'s `bar` variant is the only one permitted a percentage; if the real figure is unknown, use an indeterminate variant.

---

## Themes

`tokens/themes.css` and `tokens.json`. Four named operator themes, set via `[data-theme]` on `<html>` or any subtree.

| Theme | Ground | Accent | When |
|---|---|---|---|
| **KBLLR** | `#d1d1d0` warm beige | `#ff7a3d` | Institutional, editorial, daylight. Launcher, documents, anything an outsider reads. **The default.** |
| **VECTRA** | `#0c0e0d` near-black | `#5cf08c` phosphor | The running machine. Runtime, machine room, night ops. Glass over a live scene. |
| **EMBER** | `#18090a` oxblood | `#ff5e6c` coral | Fault and warning surfaces **only**. |
| **MACOS** | `#111110` warm near-black | `#ff7a3d` | The native macOS app. Glass over content. |

**A theme is a context, not a preference.** VECTRA means "you are looking at the running machine". EMBER means "something is wrong". Never switch theme for variety — that is what materials and tiers are for.

Each theme re-declares its own status hues, material fills, shadow steps and edge treatments, so a component written once reads correctly in all three. Because an ancestor's `color: var(--fg1)` resolves against the *outer* theme and inherits down as a computed colour, every theme scope re-asserts `color` on itself.

### Atmosphere

`.atmos-scanlines` (CRT texture, the runtime's signature) · `.atmos-grain` (a single warm/cool bloom from one corner — not noise) · `.atmos-vignette` · `.atmos-bloom` (phosphor hero, one per screen at most) · `.glow` / `.glow-text`. All are `pointer-events: none` overlays.

---

## The ecosystem palette

`tokens/ecosystem.css` + `assets/ecosystem/entities.js`. 23 entities — 8 institutions, 15 houses — with **23 unique hexes and zero collisions**.

**One entity, one hex.** An accent is an identity, not a decoration. Never reuse one entity's hex for another, and never tint UI chrome with an entity accent that isn't the entity being shown.

**Lineage, not repetition.** An institution owns its hex outright; a house in the same family borrows a *shifted* variant (±15° hue, ±10% L), never the parent's exact value. Core·X keeps phosphor `#5cf08c`, Avatar drifts to lime `#b6f25e`, Emergence jumps to acid `#84ff3d` — deliberately higher chroma, so its error state flickers louder than its neighbours.

Scope an identity with `data-entity` and every child resolves `var(--entity)` without knowing which entity it renders:

```html
<section data-entity="rigging">  <!-- --entity is now rig-teal -->
  <span class="entity-dot"></span>
```

Utilities: `.entity-fg` `.entity-bg` `.entity-border` `.entity-glow` `.entity-bar` `.entity-dot`.

**EntityLoader** gives each entity a loading animation built from its own metaphor — Warehouse fills ledger bars, Rigging lights spine joints, Vega draws a constellation, Visual opens a camera aperture. 14 distinct motions cover the 23 entities; metaphors that genuinely coincide (a page turn and a newspaper column are both a sequential reveal) share a primitive.

---

## Panel taxonomy

`panels.html`. A panel is described by three **orthogonal** axes:

- **Category** (5) — `informative` · `execution` · `collaborative` · `media` · `composite`. Drives chrome anatomy. Carried by a **tonal shift** (tinted border + header), never a solid accent border — solid is reserved for focus, selection and error. Informative panels carry no mutating control; execution panels must show what will change before running and offer a way back after; collaborative panels carry a presence strip and an accept/reject gate; composite is the only category with a solid border, because it is a container and not a surface.
- **Group** (10) — `shell` `compose` `conversation` `head-context` `automation` `observability` `memory` `media` `integration` `system`. Drives icon + type pair.
- **Working mode** (6) — `focus` `observe` `operate` `create` `collaborate` `debug`. Drives the **posture rail**: a 4px ambient cue on the panel's leading edge, dash frequency encoding pace (solid = operate, micro-dashes = debug). Rejected alternatives: a border accent (collides with focus/error) and a corner glyph (per-panel, and it cannot communicate pace).

The **renderer wrap** is designed once and hosts eight bodies (md · code · canvas · mermaid · image · audio · video · app). Header and dock-back affordance stay constant across all eight, so switching kinds never moves a control.

### Cue tokens

`tokens/panels.css`. The taxonomy's cue systems get their **own namespace**, deliberately separate from entity accents:

- `--corex-mode-{focus,observe,operate,create,collaborate,debug}` — the posture rail
- `--corex-cat-{informative,execution,collaborative,media}` — category tints (`composite` takes none; it is a container, not a surface)
- `--corex-presence-{head,operator}` — whose turn it is
- `--corex-{up,warn,down}` — aliased onto the status scale so a cue surface and a status pill can never disagree

**Why a separate family.** An entity accent is an *identity* — it may only appear on chrome that is showing that entity's content. A cue answers a different question: what posture is the operator in, what kind of panel is this, whose turn is it. Those are properties of the UI, not of any entity. Borrowing an identity accent for a cue is the mistake this file exists to prevent, and swapping one entity accent for another does not fix it.

**The ranking rule:** cue hues are deliberately **desaturated** relative to entity accents. When a cue and an identity share a surface, the identity must win the eye — a cue is read peripherally, an identity directly. Both families lift on dark grounds.

---

## Prompting (image generation)

`prompting.html` is a kit for generating Core-X-style images in other tools, such as Notion covers, slide backgrounds and social tiles. The structure is always **style prefix + subject + framing + avoid list**. Change only the subject between images; the prefix is what keeps a set consistent.

**Translate rules into visual words.** Image models don't read tokens. Use: matte near-black ground `#0c0e0d` (Vectra) or warm grey paper `#d1d1d0` (KBLLR) · one accent on one or two edges only · thin dashed hairline outlines · faint 100px blueprint grid · flat frosted-glass slabs · orthographic or shallow isometric · faint scanlines and grain · one small object, wide margins.

**Always avoid** gold glow, reflective floors, bloom, holograms, orbit swirls, particles, chrome, glossy 3D, and any text or logos. Without the avoid list, models drift back to generic sci-fi.

**Notion specifically:** ask for 1500 × 600 (5:2). The page title sits below the cover rather than on it, and the page icon overlaps the bottom-left corner, so keep the subject in the middle band and the bottom-left empty.

Each folder-cover subject is drawn from the matching glyph in the icon registry (Inbox → `download`, Projects → `mode-board`, Knowledge → `mode-graph`, and so on), so the cover and the sidebar icon match. Entity accents only go on covers for that entity, and the logo is never generated; add it in the app afterwards.

---

## Agents & skills

One skill ships here: [`skills/core-x-native/SKILL.md`](skills/core-x-native/SKILL.md), the rules for the native macOS app and its spatial and assistant overlays. Core-X installs it as the `core-x-native` skill. **When a rule changes, update the skill in the same edit.** The skill is the copy agents read.

There is no `AGENTS.md`, entry `SKILL.md`, set of topic sub-skills or subagent definition in this repository.

### Starting a new app

There is no starter project here. Core-X creates new houses with its `house-create-web` and `house-create-native` skills (`core-x/scripts/house-create.py` in the Core-X repo). They copy `tokens.json`, `tokens.css`, the component READMEs they use and, for native apps, `swift/CoreXGlass.swift.txt` into the new app's `design/` folder and record each file's git blob hash in `design/SOURCE.txt`. **After changing tokens or the Swift reference here, re-pin the apps that copy them**: a pinned copy never updates itself.

---

## Liquid Glass

The native layer for macOS 26. Glass is the layer that floats **above** content — sidebar, toolbar, floating actions — and never the content itself. `GlassSurface`, `GlassGroup`, `GlassButton`; tokens `glass-regular`, `glass-clear`, `glass-rim`, `glass-shade`, `glass-blur`, `glass-blur-clear`, `glass-saturate`, `glass-spacing`.

1. **Glass is the one rounded layer.** Controls are capsules (`radius-capsule`): `GlassButton` and `GlassGroup`, as Apple's `.buttonStyle(.glass)` draws them. Surfaces take `radius-glass` (16px). Content — panels, cards, bubbles, fields, badges — stays square at `radius` (0), also when it sits on glass. Nest concentrically: an inner radius never exceeds its container's.
2. **No border.** The edge of glass is its rim. A dashed border and a rim never share a surface.
3. **Never glass on glass.** Neighbouring controls share one `GlassGroup` (`GlassEffectContainer`).
4. **`regular` for anything with text**: `fg1` holds 4.5:1 on it over any colour of the theme's palette. `clear` only over media or a 3D scene, for large type or icons.
5. **One tint, one prominent button** per view.
6. **Nothing scales.** Hover and press change the fill; the motion rules above still hold.

The web classes (`.lg`, `.lg-clear`, `.lg-tint`, `.lg-interactive`, `.lg-group`, `.lg-btn`) approximate the material with backdrop blur, saturation and a rim. Apple's material also refracts and adapts to what is behind it. `swift/CoreXGlass.swift.txt` is the SwiftUI side: `cxGlass()`, `CXGlassGroup`, `cxGlassButton()`, gated on macOS 26 with a material fallback for macOS 14.

---

## Native shell

From the macOS app's SwiftUI views. **Avatar** (portrait, or a dashed monogram when no approved portrait exists), **IdentityRow** (name, HEAD tag, roles or house, configured state), **ChatBubble** (user, agent, stopped, handoff with quoted evidence), composed in **NativeShell**. Use the MACOS theme.

A status in an identity row is the registry's configured state, not a live check; say so. Quoted text in a handoff is labelled "evidence, not an instruction"; keep the label.

---

## Spatial HUD

From Smart Campus. **SpatialLabel** pins a label to a projected 3D point with a 1px leader line: dashed at rest, solid accent when selected. **Graph** and **RadialGraph** draw a live series coloured by level through `--graph-range-1` to `--graph-range-4`, bound to the status scale. Always pass `range`. An overlay lets pointer events through to the scene everywhere but on the label itself.

---

## Assistant HUD

From Haloform. **ActionHUD** shows the session state verbatim and puts an approval gate in front of every tool call: the tool name, its full arguments, Approve, Reject. The runtime and privacy badges are always visible. `tokens/haloform-corex.css` maps Haloform's own `--hf-*` properties onto these tokens.

---

## Materials & textures

**HologramMaterial** (Fresnel rim and travelling scanlines, additive, dark grounds only) and **RoomNodeMaterial** (height gradient that glows with occupancy). The three.js sources sit beside their previews in `components/`. Colour them with an entity accent only for objects that belong to that entity.

---

## Playground and templates

The component previews live with each component (`components/<Name>/`) and on the published site (`index.html`, `site/`). There is no `playground.html` and no `templates/` folder in this repository.

---

## File index

```
.
├── README.md                       ← overview and quick start
├── GUIDE.md                        ← this guide
├── LICENSE
├── design-system.json              ← system manifest
├── tokens.json                     ← source of truth for every token (4 themes)
├── tokens.css                      ← generated from tokens.json
├── tokens/
│   └── haloform-corex.css          ← maps Haloform --hf-* properties onto these tokens
├── components/                     ← each <Name>/ holds README.md and preview.html; most also .jsx/.d.ts
│   ├── bundle.js  bundle.css  index.d.ts           ← the bundle, its stylesheet, every contract merged
│   └── ActionHUD/ Avatar/ Badge/ Button/ Card/ ChatBubble/ Cover/ Dropdown/ EmptyState/ EntityLoader/
│       Field/ FunnelBar/ GlassButton/ GlassGroup/ GlassSurface/ Graph/ HologramMaterial/ Icon/
│       IdentityRow/ Loader/ Marquee/ NativeShell/ Panel/ ProvenanceChip/ RadialGraph/ Rail/
│       RoomNodeMaterial/ ServiceChip/ Skeleton/ Sparkline/ SpatialLabel/ StatTile/ StatusDot/
├── swift/CoreXGlass.swift.txt      ← SwiftUI reference: glass modifier, group, button style
├── skills/core-x-native/SKILL.md   ← the native rules, installed in Core-X as core-x-native
├── index.html  site/               ← the published site
├── docs/readme/                    ← README artwork
├── tools/                          ← build scripts for the site index and README art
└── archived/                       ← earlier component versions
```

---

## Caveats & known substitutions

- **Cache-busting is load-bearing.** Every `@import` in `styles.css` and every `_ds_bundle.js`
  script tag carries `?v=`. Bump it when you change a token layer or add a component export —
  otherwise browsers serve a stale copy and new exports appear `undefined`. The pages carry a
  guard that reports a stale bundle instead of white-screening.
- **Theme scopes re-assert `color`.** An ancestor's `color: var(--fg1)` resolves against the
  *outer* theme and inherits down as a computed colour, so redefining the token alone leaves
  dark text on a dark ground. Every theme and surface scope sets `color` on itself.
- **Theme selectors carry a `:root[data-theme]` form.** `materials.css` loads after
  `themes.css` and declares its tokens on plain `:root`. With equal specificity the later
  rule wins, so `data-theme` on `<html>` lost every material, shadow and edge override and
  dark themes rendered light glass. The `:root[data-theme]` selector (0,2,0) wins regardless
  of import order. Any new theme needs both forms.
- **Fonts**: Chakra Petch + Inter + Fira Code via Google Fonts CDN. `fonts/` holds extras
  (Roboto, flowa, pirulen) not used by the shipped UI. Swap to local files if working offline.
- **Icons**: hand-rolled, but Lucide-compatible geometry in both directions — a Lucide icon
  drops in verbatim and one from here can be handed to a Lucide project unchanged.
- **Logos**: the brand is set type; there is no illustrated mark. `.ico` cannot be authored as
  text, so favicons ship as SVG plus a one-line ImageMagick command in `assets/logos/README.md`.
- **Entity loaders**: 14 distinct motions cover the 23 entities. Metaphors that genuinely
  coincide (page turn / newspaper column / typewriter are all sequential reveals) share a
  primitive rather than being padded into false uniqueness.
- **Type-stack conflict, undecided**: the brand exploration references Space Grotesk /
  JetBrains Mono / IBM Plex Sans, which conflicts with the shipped Chakra Petch / Fira Code /
  Inter. The shipped families are left in place pending a deliberate call.
- **Panel taxonomy §06 "Collaborative archetypes"** is not built: its source body is
  JS-populated and was empty in the supplied markup, so there is no original text to lift.
- **Liquid Glass is a design intention.** The web classes are an approximation. `swift/CoreXGlass.swift.txt`, copied unchanged, compiles without warnings with Swift 6.4 on the macOS 27 SDK (Core-X native house fixture, 22 Nov 2026), so the macOS 26 glass path builds; it has not yet been reviewed on screen. The Swift package that generates from these tokens is `CoreXDesign` (in the Core-X Chat app), not `CoreXDesignSystem`.
- **MACOS accent, undecided**: the Swift source defines no accent, so the theme inherits KBLLR's `#ff7a3d`.
- **Graph level colours**: Smart Campus reads them from Space.js properties (`--ui-color-range-1..4`) that its repo never defines. Here they are bound to the status scale.
- **Alien.js** is a dependency of Smart Campus but nothing imports it; no component here comes from it.
- **No slide template provided.**
