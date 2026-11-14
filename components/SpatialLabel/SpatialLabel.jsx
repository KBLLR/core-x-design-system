// From Smart Campus RoomLabel + Space.js Line: a label pinned to a point in a 3D scene by a 1px leader line.
const h = React.createElement;

export function SpatialLabel({ name, type, value, selected = false, anchor, entity, onSelect, children }) {
  const a = anchor || { dx: 0, dy: 0 };
  return h("div", { className: "cx-slabel", "data-selected": selected ? "true" : "false", "data-entity": entity, onClick: onSelect, style: onSelect ? { cursor: "pointer" } : undefined },
    h("div", { className: "cx-slabel__box" },
      h("span", { className: "cx-slabel__name" }, name),
      type && h("span", { className: "cx-slabel__type" }, type),
      value != null && h("span", { className: "cx-slabel__value" }, value),
      selected && children),
    (a.dx || a.dy) ? h("svg", { className: "cx-slabel__line", width: 1, height: 1, style: { top: "100%" }, "aria-hidden": "true" },
      h("line", { x1: 0, y1: 0, x2: a.dx, y2: a.dy }),
      h("circle", { cx: a.dx, cy: a.dy, r: 2, style: { fill: "var(--fg1)" } })) : null);
}
