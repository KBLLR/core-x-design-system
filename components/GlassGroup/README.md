One glass shape holding several controls: a segmented switch, a toolbar cluster, a zoom stack.

**You provide:** the segments as children (buttons or links) and a `label` naming the group.

- A horizontal group is a capsule; a vertical one takes `radius-glass`.
- Segments carry no glass of their own; a 1px shade divides them.
- `vertical` stacks them.
- Mark the active segment with `aria-pressed="true"` and the `bg-elevated` fill.

Use it wherever two glass controls would sit closer than `glass-spacing` (12px). Separate groups by at least that much.

**SwiftUI:** `GlassEffectContainer(spacing:)` around the controls, with `glassEffectUnion(id:namespace:)` on each so they render as one shape. A container also renders faster than separate effects.
