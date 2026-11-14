A capsule button on glass, for actions that float over content.

**You provide:** the label as children and `onClick`.

- `variant="glass"` is the default floating action.
- `variant="prominent"` is the accent fill with `accent-fg` text. One per view: the action the view exists for ("Send").
- Labels are operator imperatives in Chakra Petch uppercase, as on `Button`.
- `disabled` drops it to 40%.

Use `Button` for actions inside panels and forms; `GlassButton` only where the button sits over content with nothing else behind it.

**SwiftUI:** `.buttonStyle(.glass)` and `.buttonStyle(.glassProminent)`, the system styles as Apple draws them; `cxGlassButton()` in `swift/CoreXGlass.swift.txt` adds the macOS 14 fallback.
