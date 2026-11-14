// From CoreXChat AvatarView: a portrait, or a dashed monogram when no approved portrait exists.
const h = React.createElement;

export function Avatar({ name = "", src, size = 28 }) {
  const mono = Array.from(name).filter((c) => /\p{L}/u.test(c)).slice(0, 2).join("").toUpperCase();
  const box = { width: size, height: size, fontSize: Math.round(size * 0.36) };
  if (src) return h("span", { className: "cx-avatar cx-avatar--photo", style: box, role: "img", "aria-label": name + " portrait" }, h("img", { src, alt: "" }));
  return h("span", { className: "cx-avatar", style: box, role: "img", "aria-label": name + ", placeholder monogram (no approved portrait)" }, mono);
}

// From CoreXChat IdentityRow + HouseMark + StatusBadge: one identity in the sidebar.
export function IdentityRow({ name, src, head = false, roles, house, status, runtimeMode, chatAvailable = true, selected = false, onSelect }) {
  const sub = roles && roles.length > 1 ? roles.join(" · ") : (house || "—");
  const state = [status, runtimeMode].filter(Boolean).join(" · ");
  return h(onSelect ? "button" : "div", { className: "cx-idrow", type: onSelect ? "button" : undefined, onClick: onSelect, "aria-selected": selected ? "true" : undefined },
    h(Avatar, { name, src, size: 30 }),
    h("span", { className: "cx-idrow__body" },
      h("span", { className: "cx-idrow__name" }, name,
        head && h("span", { className: "cx-idrow__head" }, "HEAD"),
        !chatAvailable && h("span", { className: "cx-idrow__status", title: "No linked execution agent in the loaded agents registry" }, "no surface")),
      h("span", { className: "cx-idrow__sub" }, sub),
      state && h("span", { className: "cx-idrow__status", title: "Configured state in the registry; not a live health check" }, state)));
}
