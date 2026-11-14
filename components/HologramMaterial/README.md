A Fresnel rim with travelling scanlines, drawn additively. For rooms, volumes and avatars that are present but not solid.

**You provide:** `color`, and optionally `opacity`, `rimColor`, `rimPower`, `scanlineScale`, `scanlineIntensity`. Advance the `time` uniform each frame.

- Defaults: colour `#00d1ff`, rim white, `rimPower` 2, `scanlineScale` 50, `scanlineIntensity` 0.5.
- Pass an entity accent as `color` when the object belongs to an entity. Otherwise the theme accent.
- It is transparent, double-sided, additive and writes no depth: it only reads on a dark ground. Never on KBLLR.
- Freeze `time` under `prefers-reduced-motion`.

`HologramMaterial.ts` beside this file is the three.js source, unchanged. The preview runs the same fragment maths on a sphere impostor, with no 3D library.
