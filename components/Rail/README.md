Icon-first navigation: collapsed at 64px (icon + 3-letter code) or expanded at 188px (full names).

**You provide:** `items`, each `{id, code, name, icon, status?, href?}`, the `active` id, and `onSelect`.

- `code` is the 3-letter mono code under the icon; a Card for the same module shares it.
- `status`: `new` is a filled accent dot, `tool` a hollow ring, `warn` and `down` amber and red dots. `active` shows no flag.
- `brand`: `{tag, sub?}` for the accent square at the top.
- `footer`: utility items pinned to the bottom, above the service readout. `svc` is that readout's string; pass `null` to hide it.
- `tier`: `raised` · `floating` (default for a rail over content) · `overlay`. `position="fixed"` pins it to the viewport's left edge at `--z-rail`.
