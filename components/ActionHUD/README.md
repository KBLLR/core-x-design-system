What the assistant is doing, and the approval gate in front of any tool call.

**You provide:** the Haloform session: `state`, `output`, `proposal`, `runtime`, `privacy`, and the four handlers. The component holds no state.

- `state` is shown verbatim, in mono. Never paraphrase it.
- `proposal` opens the gate: the tool name, its full arguments, Approve and Reject. Nothing runs before a decision, and the arguments are never truncated or summarised.
- With no proposal, "Cancel Request" shows while collecting context, submitting or streaming.
- The runtime badge reads Connected, Streaming, Processing or Offline, with the hardware and model when known.
- The privacy badge reads Local Only or Remote Permitted, and "[Redacted]" when sensitive fields were excluded. Always show both badges.

This is the Core-X reading of Haloform's `ActionHUD`, `RuntimeBadge` and `PrivacyBadge`: square, dashed, on `mat-5`. To skin the real Haloform components instead, load `tokens/haloform-corex.css`.
