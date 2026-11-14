One identity in the sidebar: avatar, name, affiliation, configured state.

**You provide:** `name`, and what the registry says: `house` or `roles`, `status`, `runtimeMode`.

- `head` adds the HEAD tag.
- More than one role replaces the house line with the roles.
- `status` is the configured state from the registry. It is not a live health check, and the row says so on hover.
- `chatAvailable={false}` shows "no surface": the identity has no linked execution agent.
- `selected` gives the elevated fill and a 2px accent bar. Pass `onSelect` to make the row a button.

Show what the registry holds. Never infer a status, and never hide an identity because it cannot chat.
