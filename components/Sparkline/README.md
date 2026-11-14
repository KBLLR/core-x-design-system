The shape of a series in one small line: no axes, no scale.

**You provide:** `data`, an array of numbers.

- The series is scaled to its own min and max. It shows shape, not level: never put two on screen implying a shared scale.
- `tone` is any CSS colour; it defaults to the primary foreground.
- `fill` adds a faint area under the line; `showLast` puts a dot on the most recent point.
- `width`, `height` and `strokeWidth` size it.
