The live indicator: a small filled circle in a status colour.

**You provide:** `tone` (`up` · `warn` · `down` · `info` · `idle`).

- `size`: 5–6 for inline meta, 8–9 for HUD indicators.
- `label` renders mono text to the right of the dot. `title` is the tooltip; it defaults to the tone name.
- `glow` is on by default; turn it off in dense lists.
- `pulse` is reserved for "attention needed".

Status is a dot, never a check, cross or spinner. Give it a `label` or put it beside a name: colour alone does not carry the state.
