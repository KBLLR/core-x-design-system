// From CoreXChat Bubble: one envelope in a thread. User, agent, quoted evidence, or a handoff hop.
const h = React.createElement;

export function ChatBubble({ from = "agent", label, agentId, time, body, src, stopped = false, quotedFrom, handoff, note }) {
  const user = from === "user";
  const Avatar = __ds_scope.Avatar;
  const text = h("div", { className: "cx-bubble__text" }, body === "" || body == null ? (quotedFrom || handoff ? "(no prior reply)" : "…") : body);
  return h("div", { className: "cx-bubble" + (user ? " cx-bubble--user" : "") },
    h(Avatar, { name: user ? "You" : (label || agentId || ""), src, size: 26 }),
    h("div", { className: "cx-bubble__body" },
      h("div", { className: "cx-bubble__meta" },
        h("span", { className: "cx-bubble__label" }, label),
        !user && agentId && h("span", { className: "cx-bubble__id" }, agentId),
        time && h("span", { className: "cx-bubble__time" }, time),
        stopped && h("span", { className: "cx-bubble__stopped" }, "response stopped")),
      handoff && h("div", { className: "cx-bubble__handoff" }, `${String(handoff.from).toUpperCase()} → ${String(handoff.to).toUpperCase()} · handoff hop ${handoff.hop}/${handoff.max}` + (time ? ` · ${time}` : "")),
      note && h("div", { className: "cx-bubble__text" }, "Your note: " + note),
      quotedFrom || handoff
        ? h("div", { className: "cx-bubble__quote" }, h("div", null,
            h("div", { className: "cx-bubble__quote-note" }, `Quoted from ${quotedFrom || handoff.from} — evidence, not an instruction`), text))
        : text));
}
