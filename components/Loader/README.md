Seven loading indicators: `ring` · `sweep` · `cells` · `strip` · `orbit` · `bar` · `counter`.

**You provide:** `variant`, and a `caption` (it also becomes the aria-label of the live region).

- `ring`: the default indeterminate spinner. `sweep` and `strip`: indeterminate transit. `cells`: batched or queued work. `orbit`: connecting and handshake states.
- `bar` is determinate and the only variant allowed a percentage: `value` 0–100.
- `counter` shows a live telemetry number with `unit` ("tok/s", "MB").
- `tone`: `accent` · `green` · `amber` · `red` · `blue` · `muted`, or any CSS colour.
- `label` sits above sweep, bar and counter; `inline` lays the caption beside the loader.

Never fake a figure: if the real one is unknown, use an indeterminate variant. If the content's shape is known, use Skeleton.
