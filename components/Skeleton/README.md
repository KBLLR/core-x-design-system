A shimmer placeholder for content that is coming: `text` · `block` · `card` · `list` · `metric`.

**You provide:** `variant`, sized to the content it stands in for.

- `text`: staggered lines (`lines`). `block`: one solid well for media, canvas or charts (`height`). `card`: image well + title + meta. `list`: rows with a leading dot and a trailing value (`count`). `metric`: label + big number, for stat tiles.
- `width`, `height` and `gap` tune the box.

A skeleton is a promise. If the data may never arrive, use EmptyState instead: a broken promise reads as a hang. Shimmer is for skeletons only, never real content.
