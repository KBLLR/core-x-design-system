A live series as one line, coloured by level, with an optional ghost and marker.

**You provide:** `value` (oldest first) and `range`, the value at full height.

- Level is colour: the stroke runs from `--graph-range-1` at the base to `--graph-range-4` at the top. They are bound to `status-blue`, `status-green`, `status-amber`, `status-red`; override the four properties on a parent to rebind them.
- `ghost` draws a second series at 35% for comparison.
- The marker sits on the latest point and prints its value with `suffix` or `format`. `marker` moves it; `noMarker` hides it.
- `noGradient` draws one ink. Use it when level has no good or bad direction.
- 300 × 60 by default. Line 1.5px, base line 1px, area at 7%.

Always pass `range`. Without it the graph scales to its own maximum and shows shape only, as `Sparkline` does. Never substitute zeros for missing readings: shorten the series.
