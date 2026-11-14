A room block: a vertical gradient that glows with occupancy.

**You provide:** `occupancy` from 0 to 1, and optionally `accentColor`, `baseBottom`, `baseTop`, `gradientHeight`.

- Defaults: `#13172b` at the floor to `#311649` at `gradientHeight` 260, accent `#2dd4bf`, opacity 0.95, roughness 0.55, metalness 0.35.
- Occupancy adds the accent: 18% into the base colour and 115% as emission, eased with a smoothstep.
- `material.userData.roomShader` has `setOccupancy`, `setGradientHeight` and `setAccent` for live updates.
- Drive `occupancy` from real sensor data. An unknown reading is 0 with a `ProvenanceChip` on the label, never a guessed value.

`RoomNodeMaterial.ts` beside this file is the three.js TSL source, unchanged; it needs `three/webgpu`. The preview shows the colour maths in 2D, not the lighting.
