The macOS app shell composed from the native layer: a glass sidebar over content, a glass toolbar group, a thread of bubbles, a composer.

Use it as the starting layout for a native Core-X window, in the MACOS theme.

- The sidebar is the only large glass surface, rounded at `radius-glass`. Content extends beneath it and stays square.
- Sidebar mode is a `GlassGroup`; identities are `IdentityRow`s.
- The thread is content: `ChatBubble`s on `bg`, no glass.
- One prominent `GlassButton` per window: Send.

**SwiftUI:** `NavigationSplitView` gives the sidebar its glass on macOS 26 without any modifier. Do not paint a background over it.
