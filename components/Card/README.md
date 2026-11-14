A dashed glass surface in four variants (`action` · `stat` · `media` · `dense`) and four material tiers.

**You provide:** `variant`, `tier`, a `title`, and the fields the variant reads:

- `action`: `icon` (registry name), `code` (3-letter mono code, shared with the Rail), `desc`, optional `tag` + `tagTone`.
- `stat`: `title` as the label, `value`, optional `unit` and `meta`. The value is tabular, so a live number never jitters.
- `media`: `media` (an `<img>`, a label or a placeholder string), `title`, `code`, `meta`.
- `dense`: one row, `icon` + `title` + trailing `code`. For long lists.

`tier` (`flush` · `raised` · `floating` · `overlay`) is chosen by how high the card floats, never by how important it is. `external` gives the dotted border that marks a surface outside the system.

A card with `href` or `onClick` is interactive and gets the hover raise; no other card moves on hover.
