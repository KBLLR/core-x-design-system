What a panel shows when it has nothing to show: `empty` · `loading` · `error` · `denied` · `offline` · `missing`.

**You provide:** `kind`, a `title`, and usually `detail` and `hint`.

- `title`: Chakra Petch uppercase. State what happened, terse.
- `detail`: one sentence of prose. What the system tried. Never an apology.
- `hint`: the command or path that resolves it, shown as mono in a dashed box. An `error` must name the fix here.
- `action`: usually a Button. Optional; an empty state need not be actionable.
- `compact` for inline use inside a small panel; `icon` overrides the kind's default icon.

For `loading`, prefer a Skeleton when the shape of the content is known.
