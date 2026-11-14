A dashed, tone-coded pill for a short status or label.

**You provide:** the text as children, and `tone` (`neutral` · `up` · `warn` · `down` · `info`).

- `tone` colour-codes meaning: green ready, amber pending or full, red error, blue offline or debug. Never decorative.
- `mono` is the default (service IDs, values); turn it off for Chakra Petch uppercase labels.
- `dotted` is reserved for external or optional surfaces.
- `solid` inverts the fill. Use it for the single most important state on screen.
- `dot` adds a leading 5px status dot.

**Don't** use a badge for an action (use Button), or carry a status by colour alone: the text names it.
