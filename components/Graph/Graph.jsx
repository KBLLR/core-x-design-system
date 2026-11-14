// From Smart Campus Graph / RadialGraph (ports of the Space.js graphs): a live series, coloured by level.
// Line 1.5px, base line 1px, area at 7%, ghost at 35% — the source's own figures.
const h = React.createElement;
let __gid = 0;
const useGid = () => React.useMemo(() => "cxg" + (++__gid), []);
const stops = () => [0, 1 / 3, 2 / 3, 1].map((o, i) => h("stop", { key: i, offset: o, style: { stopColor: `var(--graph-range-${i + 1})` } }));
const fmt = (v, suffix, format) => (format ? format(v) : `${v}${suffix || ""}`);

export function Graph({ value = [], ghost, width = 300, height = 60, range, suffix = "", format, marker, noMarker = false, noGradient = false, label }) {
  const id = useGid();
  const n = value.length;
  if (!n) return null;
  const max = range || Math.max(1, ...value, ...(ghost || []));
  const rh = (height - 5) / max;
  const X = (i, len) => (len < 2 ? 0 : (i / (len - 1)) * width);
  const Y = (v) => height - 1 - Math.max(0, Math.min(max, v)) * rh;
  const path = (arr) => arr.map((v, i) => `${i ? "L" : "M"}${X(i, arr.length).toFixed(1)} ${Y(v).toFixed(1)}`).join("");
  const d = path(value);
  const m = noMarker ? null : (marker == null ? n - 1 : Math.max(0, Math.min(n - 1, marker)));
  const stroke = noGradient ? "currentColor" : `url(#${id})`;
  return h("div", { className: "cx-graph", role: "img", "aria-label": label || `Graph, latest ${fmt(value[n - 1], suffix, format)}` },
    h("svg", { width, height: height + 14, viewBox: `0 -14 ${width} ${height + 14}` },
      h("defs", null, h("linearGradient", { id, gradientUnits: "userSpaceOnUse", x1: 0, y1: height, x2: 0, y2: 0 }, stops())),
      h("path", { className: "cx-graph__area", d: `${d}L${width} ${height}L0 ${height}Z`, style: { fill: stroke } }),
      h("line", { className: "cx-graph__base", x1: 0, y1: height - 0.5, x2: width, y2: height - 0.5 }),
      ghost && ghost.length ? h("path", { className: "cx-graph__ghost", d: path(ghost) }) : null,
      h("path", { className: "cx-graph__line", d, style: { stroke } }),
      m != null && h("g", null,
        h("line", { className: "cx-graph__handle", x1: X(m, n), y1: Y(value[m]), x2: X(m, n), y2: height }),
        h("circle", { className: "cx-graph__dot", cx: X(m, n), cy: Y(value[m]), r: 2.5 }),
        h("text", { className: "cx-graph__info", x: X(m, n), y: -4, textAnchor: X(m, n) > width - 40 ? "end" : X(m, n) < 40 ? "start" : "middle" }, fmt(value[m], suffix, format)))));
}

export function RadialGraph({ value = [], ghost, width = 300, graphHeight = 60, start = 0, range, suffix = "", format, noGradient = false, label }) {
  const id = useGid();
  const n = value.length;
  if (!n) return null;
  const mid = width / 2, radius = mid - graphHeight;
  const max = range || Math.max(1, ...value, ...(ghost || []));
  const rh = (graphHeight - 5) / max;
  const pt = (v, i, len) => {
    const a = (start * Math.PI) / 180 + (i / len) * Math.PI * 2 - Math.PI / 2;
    const r = radius + 1 + Math.max(0, Math.min(max, v)) * rh;
    return `${(mid + Math.cos(a) * r).toFixed(1)} ${(mid + Math.sin(a) * r).toFixed(1)}`;
  };
  const path = (arr) => arr.map((v, i) => `${i ? "L" : "M"}${pt(v, i, arr.length)}`).join("") + "Z";
  const stroke = noGradient ? "currentColor" : `url(#${id})`;
  const d = path(value);
  return h("div", { className: "cx-graph", role: "img", "aria-label": label || `Radial graph, latest ${fmt(value[n - 1], suffix, format)}` },
    h("svg", { width, height: width, viewBox: `0 0 ${width} ${width}` },
      h("defs", null, h("radialGradient", { id, gradientUnits: "userSpaceOnUse", cx: mid, cy: mid, r: mid, fx: mid, fy: mid },
        [0, 1 / 3, 2 / 3, 1].map((o, i) => h("stop", { key: i, offset: (radius + o * graphHeight) / mid, style: { stopColor: `var(--graph-range-${i + 1})` } })))),
      h("path", { className: "cx-graph__area", d: `${d}M${mid + radius} ${mid}A${radius} ${radius} 0 1 0 ${mid - radius} ${mid}A${radius} ${radius} 0 1 0 ${mid + radius} ${mid}Z`, fillRule: "evenodd", style: { fill: stroke } }),
      h("circle", { className: "cx-graph__base", cx: mid, cy: mid, r: radius }),
      ghost && ghost.length ? h("path", { className: "cx-graph__ghost", d: path(ghost) }) : null,
      h("path", { className: "cx-graph__line", d, style: { stroke } }),
      h("text", { className: "cx-graph__info", x: mid, y: mid + 4, textAnchor: "middle" }, fmt(value[n - 1], suffix, format))));
}
