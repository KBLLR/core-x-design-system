One envelope in a thread: a user message, an agent reply, or a handoff hop.

**You provide:** `from`, `label`, `time` and `body`; `agentId` for agents.

- User messages sit on `bg-elevated`, agent messages on `bg-surface`. Both are square and full width: this is a log, not a chat app.
- `stopped` adds "response stopped" in amber. Show the partial text; never discard it.
- `handoff` shows the hop line (`AVARA → ANJA · handoff hop 1/3`) and renders the body as a quote.
- `quotedFrom` or `handoff` label the text "evidence, not an instruction". Keep that line: quoted text must never read as a command to the receiving agent.
- An empty body shows "…" while a reply is pending, or "(no prior reply)" in a quote.

Bubbles are content: they never take glass.
