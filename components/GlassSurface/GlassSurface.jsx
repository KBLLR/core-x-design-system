// Liquid Glass surface. Web approximation of SwiftUI `.glassEffect(_:in:)`.
// Glass is the one rounded layer in Core-X: surfaces take `radius-glass`, controls are capsules.
const h = React.createElement;
const cx = (...a) => a.filter(Boolean).join(" ");

export function GlassSurface({ variant = "regular", shape = "rounded", tint, interactive = false, as = "div", pad = 12, className, style, children, ...rest }) {
  const tinted = tint !== undefined && tint !== false;
  return h(as, {
    className: cx("lg", shape === "capsule" && "lg-capsule", shape === "square" && "lg-square", variant === "clear" && "lg-clear", tinted && "lg-tint", interactive && "lg-interactive", className),
    style: { padding: pad, ...(typeof tint === "string" ? { "--lg-tint": tint } : null), ...style },
    tabIndex: interactive && as === "div" ? 0 : undefined,
    ...rest
  }, children);
}

// One glass shape holding several controls: GlassEffectContainer + glassEffectUnion.
export function GlassGroup({ vertical = false, label, className, style, children }) {
  return h("div", { className: cx("lg", "lg-group", vertical && "lg-group--v", className), role: "group", "aria-label": label, style }, children);
}

// `.buttonStyle(.glass)` and `.buttonStyle(.glassProminent)`: capsules, as the system draws them.
export function GlassButton({ variant = "glass", icon, disabled = false, onClick, type = "button", title, children }) {
  return h("button", {
    type, disabled, onClick, title,
    className: cx("lg", "lg-interactive", "lg-btn", variant === "prominent" && "lg-btn--prominent")
  }, icon, children);
}
