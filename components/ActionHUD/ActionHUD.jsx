// From Haloform ActionHUD + RuntimeBadge + PrivacyBadge: what the assistant is doing, and the approval gate
// in front of any tool call. Presentational: pass it the session; Haloform's provider owns the state.
const h = React.createElement;
const RUNTIME = { idle: "Connected", streaming: "Streaming", processing: "Processing", offline: "Offline" };
const BUSY = ["streaming", "submitting", "collecting-context"];

export function ActionHUD({ title = "Haloform HUD", state = "idle", output, proposal, runtime, privacy, onApprove, onReject, onCancel, onClose }) {
  const Button = __ds_scope.Button;
  const rt = runtime || {}, pv = privacy || {};
  const rtStatus = rt.status || "idle";
  const rtLabel = RUNTIME[rtStatus] + (rt.hardware ? ` (${rt.hardware})` : "");
  const local = (pv.mode || "local-only") === "local-only";
  const dot = (c) => ({ "--badge-dot": c });
  return h("div", { className: "cx-hud", role: "dialog", "aria-label": title },
    h("div", { className: "cx-hud__header" }, h("span", null, title),
      h("button", { type: "button", className: "cx-hud__close", onClick: onClose, "aria-label": "Close and Reset" }, "close")),
    h("div", { className: "cx-hud__body" },
      h("div", { className: "cx-hud__badges" },
        h("span", { className: "cx-hud__badge", role: "status", "aria-label": "Runtime: " + rtLabel,
          style: dot(rtStatus === "offline" ? "var(--status-red)" : rtStatus === "idle" ? "var(--fg3)" : "var(--status-green)") },
          rtLabel, rt.model ? h("span", { style: { fontWeight: 400, color: "var(--fg2)" } }, rt.model) : null),
        h("span", { className: "cx-hud__badge", role: "status", "aria-label": "Privacy Mode: " + (local ? "Local Only" : "Remote Permitted") + (pv.redacted ? ", Sensitive fields redacted" : ""),
          style: dot(local ? "var(--status-blue)" : "var(--status-red)") },
          local ? "Local Only" : "Remote Permitted", pv.redacted ? h("span", { style: { fontWeight: 400 } }, "[Redacted]") : null)),
      h("div", { className: "cx-hud__section" },
        h("div", { className: "cx-hud__section-title" }, h("span", null, "Status"), h("span", { className: "cx-hud__state" }, state)),
        output ? h("div", { className: "cx-hud__output", "aria-live": "polite" }, output) : null),
      proposal ? h("div", { className: "cx-hud__proposal", role: "alert" },
        h("div", { className: "cx-hud__proposal-title" }, "PROPOSED ACTION: " + proposal.name),
        h("pre", { className: "cx-hud__args" }, JSON.stringify(proposal.arguments, null, 2)),
        h("div", { className: "cx-hud__actions" },
          h(Button, { variant: "primary", onClick: onApprove }, "Approve"),
          h(Button, { variant: "danger", onClick: onReject }, "Reject"))) : null,
      !proposal && BUSY.includes(state) ? h("div", { className: "cx-hud__actions", style: { marginTop: 0 } }, h(Button, { variant: "ghost", onClick: onCancel }, "Cancel Request")) : null));
}
