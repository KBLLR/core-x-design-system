A dashed text input that goes solid on focus.

**You provide:** `value` and `onChange` (called with the string), plus `label`, `placeholder` and `hint` as needed.

- `label`: Chakra Petch uppercase, above the input.
- `mono` is the default (IDs, paths, commands); turn it off for prose input.
- `invalid` gives a solid red border and a red hint. `hint` doubles as the error message.
- `disabled`, `id` and `type` pass through.

Write errors lowercase with no period: "failed to build plan".
