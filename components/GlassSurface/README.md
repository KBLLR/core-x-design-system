Liquid Glass: the floating layer for controls and navigation, and the one rounded layer in the system.

**You provide:** the content as children, and what sits behind it. Glass with nothing behind it is a grey panel: use `Panel`.

- `variant="regular"` for controls, sidebars, toolbars. `fg1` holds 4.5:1 on it over any colour of the theme's palette.
- `variant="clear"` only over media or a 3D scene, and only for large type or icons.
- `tint` suggests prominence. One tinted surface per view.
- `interactive` only on something that can be activated.

**Rules**
- Glass is for the layer that floats above content. Content itself (cards, bubbles, tables) stays on `mat-*` or `bg-surface`.
- Glass has no border. Its edge is the rim (`glass-rim`, `glass-shade`). Never add a dashed border to it.
- Never stack glass on glass. Put neighbouring controls in one `GlassGroup`.
- `shape="rounded"` (default) takes `radius-glass` (16px), for surfaces. `"capsule"` is for a single control. `"square"` only where the glass must sit flush in a square console layout.
- Only glass is rounded. What sits on or under it (rows, bubbles, panels, fields) stays square at `radius` (0).
- Nest concentrically: an inner shape's radius never exceeds its container's.
- Hover and press change the fill. Nothing scales.

**SwiftUI:** `.glassEffect(.regular, in: .rect(cornerRadius: 16))`, with `.tint(_:)` and `.interactive()`. With no shape, the system draws a capsule. macOS 26 and later; `swift/CoreXGlass.swift.txt` has the modifier and the macOS 14 fallback.

This is a web approximation: backdrop blur, saturation and a rim. Apple's material also refracts and adapts to what is behind it; the browser cannot.
