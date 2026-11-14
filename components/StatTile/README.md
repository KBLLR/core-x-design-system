One figure with its label: tabular value, optional unit, delta and footnote.

**You provide:** `label` (mono uppercase) and `value`.

- `unit`, `delta` (pre-formatted: "+12", "-3.4%") with `deltaTone` (`good` · `bad` · `neutral`), and `note` for a dim footnote.
- `tone`: `default` · `good` · `warn` · `bad` · `info`. `align`: `left` or `right`.
- `withheld`: set it when the source could not be trusted. The tile renders "withheld" in red instead of the value, and `why` (required then) gives the operator the reason.

A withheld figure is safer than a plausible zero. Never substitute 0 for an unknown.
