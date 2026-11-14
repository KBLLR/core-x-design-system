---
name: core-x-native
description: Build Core-X interfaces for the native macOS app and its spatial and assistant overlays — the MACOS theme, Liquid Glass, the native shell, spatial HUD, assistant HUD and scene materials. Use when a task mentions macOS, SwiftUI, Liquid Glass, a 3D scene overlay, room labels, live graphs, or the Haloform HUD.
---

# Core-X native

Read `tokens.json` for values and each component's `README.md` before using it. This file is the rules.

## Theme

Set `data-theme="macos"` for the native app: `#111110` ground, `#e6e4df` text. A theme is a context: MACOS means "this is the macOS app". VECTRA stays the running machine and 3D scenes; KBLLR stays documents.

## Liquid Glass

1. Glass is the layer that floats above content: sidebar, toolbar, floating actions. Content (bubbles, cards, tables, panels) never takes glass.
2. Glass is the one rounded layer. Controls are capsules (`GlassButton`, `GlassGroup`: `radius-capsule`, the system `.buttonStyle(.glass)`); surfaces take `radius-glass` (16px). Content on or under glass stays square at `radius` (0). An inner radius never exceeds its container's.
3. No border on glass. Its edge is the rim. A dashed border and a rim never share a surface.
4. Never glass on glass. Neighbouring controls go in one `GlassGroup` (`GlassEffectContainer`).
5. `regular` for anything with text. `clear` only over media or a 3D scene, large type or icons only.
6. One tinted surface and one prominent `GlassButton` per view.
7. Hover and press change the fill. Nothing scales, bounces or shimmers.
8. Few glass surfaces on screen at once. Each one costs a backdrop pass.

SwiftUI reference: `swift/CoreXGlass.swift.txt` (`cxGlass()`, `CXGlassGroup`, `cxGlassButton()`). It is uncompiled reference code, gated on macOS 26 with a macOS 14 fallback. Say so when you hand it over.

## Native shell

`NativeShell` is the layout: glass sidebar of `IdentityRow`s, a `GlassGroup` for sidebar mode and thread actions, `ChatBubble`s on `bg`, one prominent Send. `Avatar` shows a dashed monogram unless an approved portrait exists; never generate a face. Status in a row is the registry's configured state, not a live check: keep that wording.

## Spatial HUD

`SpatialLabel` pins a label to a projected 3D point with a 1px leader line; selected, it goes solid and shows a `Graph`. `Graph` and `RadialGraph` colour a series by level through `--graph-range-1..4` (status scale by default). Always pass `range`. Overlays must let pointer events through to the scene.

## Assistant HUD

`ActionHUD` shows the session state verbatim and gates every tool call behind Approve / Reject with the full arguments visible. Always show the runtime and privacy badges. It is presentational: Haloform's provider owns the state.

## Materials

`HologramMaterial` (additive, dark grounds only) and `RoomNodeMaterial` (occupancy glow) are three.js sources kept beside their previews. Colour them with an entity accent only when the object belongs to that entity.

## Review

- No `border-radius` other than `var(--radius)` on content, `var(--radius-glass)` or `var(--radius-capsule)` on glass, or 50% on avatars and dots.
- No literal colours outside the two material sources.
- No glass behind body text blocks; no glass nested in glass.
- `prefers-reduced-transparency` and `prefers-reduced-motion` are respected (the stylesheet and previews already do).
