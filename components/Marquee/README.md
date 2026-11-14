The log ticker: one line of mono items scrolling linearly.

**You provide:** `items`, an array of log lines. They are joined with the middle dot.

- `duration`: seconds for one full pass. 38 is the shipped default; slower reads calmer.
- `height`: 28 matches the topstrip.
- `tinted` adds a faint accent tint and an accent-mixed border; off gives a plain dashed strip.
- `gap` is the px gap between the two duplicated tracks.

Write items as status strings: `[INFO] core: bus connected`. One marquee per shell.
