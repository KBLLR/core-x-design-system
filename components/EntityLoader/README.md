A loading animation built from an ecosystem entity's own motion metaphor, in its own accent.

**You provide:** `id` (looked up in the entity registry) or an `entity` object.

- `size`: box size in px. Legible from 32; 64 is the gallery default.
- `caption`: `true` prints the entity name; a string prints that instead.
- `color` overrides the accent. Avoid it: an entity's loader carries its own hex.

Fourteen motions cover the 23 entities; metaphors that coincide share one. Use it only on chrome that is showing that entity. For generic loading use Loader.
