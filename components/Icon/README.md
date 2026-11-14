One glyph from the 137-icon registry: 24×24 viewBox, stroke 1.5, no fill.

**You provide:** `name`, a registry key such as `mode-voice`, `render-3d` or `vault`. Names group by prefix: `mode-*`, `render-*`, `chart-*`, `file-*`. An unknown name warns and renders nothing.

- `size`: 14 inline, 16–18 in buttons, 20 in rails, 24 for feature icons.
- `stroke`: 1.5 is the system weight. Change it only for optical fixes at large sizes.
- `title` is the accessible label. Omit it for decorative icons; they get `aria-hidden`.

The registry is the single source of truth: never inline an icon at point of use. The geometry is Lucide-compatible in both directions. Outside React, `cxIconSvg(name, {size})` returns the markup string.
