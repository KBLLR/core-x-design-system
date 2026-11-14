Stages of a pipeline as bars: done in solid green, outstanding work hatched.

**You provide:** `stages`, each `{label, done, waiting, optional?}`.

- `waiting` renders as diagonal hatch so it never reads as done at a glance.
- `optional` marks a stage not every item must pass through.
- `max` is the scale denominator. It defaults to the largest stage total, which keeps the funnel's shape readable; pass an explicit `max` to compare across charts.
- `labelWidth` and `showTotals` tune the layout.

**Don't** substitute a zero for an unknown count: omit the stage, or mark the block with a ProvenanceChip.
