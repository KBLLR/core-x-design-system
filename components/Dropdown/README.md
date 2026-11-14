A click-to-open menu: `pill`, `field` or `ghost` trigger, single or multi-select.

**You provide:** `options` (strings, numbers, or `{value, label, meta?, hint?, dot?, swatch?, disabled?}`), `value` (an array when `multi`), and `onChange`.

- `trigger`: `pill` for a compact toolbar control, `field` for a full-width form input, `ghost` for borderless.
- `label` sets the Chakra Petch uppercase label above the trigger; `icon` takes a registry name.
- An option's `dot` is a status colour (a glowing round dot); `swatch` is an identity colour (a hard square, for entity accents). Don't mix the two meanings.
- `multi` keeps the menu open and toggles rows.
- `tier` is `overlay` or `modal`; `footer` pins a mono note under the list.

It opens on click, never hover: an operator menu must not fire on a passing cursor. Escape and outside-click close it; arrow keys move, Enter commits.
