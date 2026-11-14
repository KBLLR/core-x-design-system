The system's action control: a flat rectangle, Chakra Petch uppercase, no radius, no shadow.

**You provide:** the label as children, `variant` (`primary` · `ghost` · `danger`), `size` (`sm` · `md` · `lg`), and `onClick`.

- `primary` is the inverted fill. One per view.
- `ghost` is the dashed utility button; it goes solid on hover.
- `danger` is for destructive actions only.
- `icon` takes an inline SVG element, 14px, stroke 1.5, rendered before the label.
- `full` stretches to the container width.
- Write labels as operator imperatives: "Confirm & execute", "Build plan". Pending labels end in three ASCII dots: "Planning...".

**Don't** add hover transforms: hover changes colour and border, never scale.
