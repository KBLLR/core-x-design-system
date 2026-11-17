#!/usr/bin/env python3
"""Generate the README images in docs/readme/ from tokens.json.

  banner.svg  the repository header, in the layout of Core-X's house README template
              (core-x/templates/house-readme/banner.py)
  themes.svg  the four themes side by side
  shape.svg   the shape rule: square content, 16px glass surface, capsule glass control

Static SVG, no network fonts. Never edit the outputs by hand.

Usage:
  tools/build-readme-art.py [--check]
"""
import html
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "docs" / "readme"
TOKENS = json.loads((ROOT / "tokens.json").read_text(encoding="utf-8"))
THEMES = [t["id"] for t in TOKENS["color"]["themes"]]
COLORS = {t["name"]: t["value"] for t in TOKENS["color"]["tokens"]}
HEAD = "Chakra Petch,Arial,sans-serif"
MONO = "Fira Code,SF Mono,Menlo,monospace"
BODY = "Inter,Helvetica,Arial,sans-serif"


def c(name: str, theme: str = "kbllr") -> str:
    v = COLORS[name]
    if isinstance(v, dict):
        v = v.get(theme, v[THEMES[0]])
    m = re.fullmatch(r"\{(.+)\}", v.strip())
    return c(m.group(1), theme) if m else v


def esc(s: str) -> str:
    return html.escape(s, quote=True)


def svg(w: int, h: int, label: str, body: str) -> str:
    return (f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}" '
            f'role="img" aria-label="{esc(label)}">\n{body}</svg>\n')


def banner() -> str:
    bg, fg, line = c("bg"), c("fg1"), c("border")
    name, tagline = "Core-X Design System", "Tokens, themes, Liquid Glass and components for Core-X"
    swatches = "".join(
        f'<rect x="{1064 + i * 36}" y="64" width="24" height="24" fill="{c("accent" if t == "kbllr" else "bg", t)}" '
        f'stroke="{line}" stroke-dasharray="3 3"/>' for i, t in enumerate(THEMES))
    return svg(1280, 640, f"{name}: {tagline}", f'''<rect width="1280" height="640" fill="{bg}"/>
<rect x="32" y="32" width="1216" height="576" fill="none" stroke="{line}" stroke-dasharray="8 8"/>
<path d="M64 112H1216 M64 528H1216" fill="none" stroke="{line}" stroke-dasharray="8 8"/>
{swatches}
<g fill="{fg}" font-family="{HEAD}">
<text x="64" y="83" font-size="24" font-weight="700" letter-spacing="4">KBLLR / CORE-X</text>
<text x="64" y="290" font-size="64" font-weight="700" letter-spacing="4">{esc(name.upper())}</text>
<text x="64" y="355" font-size="26" font-family="{BODY}">{esc(tagline)}</text>
<text x="64" y="575" font-size="20" letter-spacing="3">INSTITUTION · DESIGN AGENCY · v0.1.0 · MIT</text>
</g>
''')


def themes() -> str:
    notes = {"kbllr": "documents · the default", "vectra": "the running machine",
             "ember": "faults and warnings only", "macos": "the native macOS app"}
    names = {t["id"]: t["name"] for t in TOKENS["color"]["themes"]}
    w, h, gap = 300, 220, 16
    parts = []
    for i, t in enumerate(THEMES):
        x = i * (w + gap)
        dots = "".join(
            f'<rect x="{x + 20 + j * 32}" y="120" width="24" height="24" fill="{c(n, t)}" '
            f'stroke="{c("border", t)}" stroke-dasharray="3 3"/>'
            for j, n in enumerate(["bg-elevated", "fg1", "fg2", "accent", "status-green", "status-amber", "status-red", "status-blue"]))
        parts.append(f'''<g>
<rect x="{x + .5}" y=".5" width="{w - 1}" height="{h - 1}" fill="{c("bg", t)}" stroke="{c("border", t)}" stroke-dasharray="6 6"/>
<text x="{x + 20}" y="44" fill="{c("fg1", t)}" font-family="{HEAD}" font-size="20" font-weight="600" letter-spacing="3">{esc(names[t])}</text>
<text x="{x + 20}" y="72" fill="{c("fg2", t)}" font-family="{MONO}" font-size="12">bg {esc(c("bg", t))} · accent {esc(c("accent", t))}</text>
<text x="{x + 20}" y="96" fill="{c("fg2", t)}" font-family="{BODY}" font-size="13">{esc(notes.get(t, ""))}</text>
{dots}
<rect x="{x + 20}" y="166" width="120" height="30" fill="{c("fg1", t)}"/>
<text x="{x + 80}" y="186" text-anchor="middle" fill="{c("bg", t)}" font-family="{HEAD}" font-size="11" font-weight="500" letter-spacing="2">PRIMARY</text>
<rect x="{x + 150.5}" y="166.5" width="119" height="29" fill="none" stroke="{c("border", t)}" stroke-dasharray="4 3"/>
<text x="{x + 210}" y="186" text-anchor="middle" fill="{c("fg1", t)}" font-family="{HEAD}" font-size="11" font-weight="500" letter-spacing="2">GHOST</text>
</g>''')
    total = len(THEMES) * w + (len(THEMES) - 1) * gap
    return svg(total, h, "The four Core-X themes", "\n".join(parts) + "\n")


def shape() -> str:
    t = "macos"
    bg, fg, fg2, line = c("bg", t), c("fg1", t), c("fg2", t), c("border", t)
    glass, rim = c("glass-regular", t), c("glass-rim", t)
    radius = {x["name"]: x["value"] for x in TOKENS["radius"]["tokens"]}
    rg = int(float(radius["radius-glass"].rstrip("px")))
    return svg(1264, 260, "The shape rule: content is square, glass is round", f'''<rect width="1264" height="260" fill="{bg}"/>
<rect x="0" y="0" width="420" height="260" fill="{c("accent", t)}" opacity=".85"/>
<rect x="420" y="0" width="420" height="160" fill="{c("status-green", t)}" opacity=".85"/>
<rect x="840" y="60" width="424" height="200" fill="{c("status-blue", t)}" opacity=".85"/>
<g font-family="{HEAD}" letter-spacing="2">
<rect x="40.5" y="50.5" width="320" height="140" fill="{c("bg-surface", t)}" stroke="{line}" stroke-dasharray="6 5"/>
<text x="64" y="94" fill="{fg}" font-size="16" font-weight="600">CONTENT</text>
<text x="64" y="122" fill="{fg2}" font-family="{MONO}" font-size="13" letter-spacing="0">radius · {esc(radius["radius"])} · dashed</text>
<rect x="470" y="50" width="320" height="140" rx="{rg}" fill="{glass}" stroke="{rim}"/>
<text x="494" y="94" fill="{fg}" font-size="16" font-weight="600">GLASS SURFACE</text>
<text x="494" y="122" fill="{fg2}" font-family="{MONO}" font-size="13" letter-spacing="0">radius-glass · {esc(radius["radius-glass"])} · rim</text>
<rect x="900" y="96" width="300" height="48" rx="24" fill="{glass}" stroke="{rim}"/>
<text x="1050" y="126" text-anchor="middle" fill="{fg}" font-size="15" font-weight="600">GLASS CONTROL</text>
<text x="900" y="180" fill="{fg}" font-family="{MONO}" font-size="13" letter-spacing="0">radius-capsule · {esc(radius["radius-capsule"])}</text>
</g>
''')


def main() -> int:
    files = {"banner.svg": banner(), "themes.svg": themes(), "shape.svg": shape()}
    stale = []
    for name, text in files.items():
        path = OUT / name
        if "--check" in sys.argv[1:]:
            if not path.exists() or path.read_text(encoding="utf-8") != text:
                stale.append(name)
            continue
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(text, encoding="utf-8")
        print(f"wrote {path.relative_to(ROOT)}")
    if stale:
        print("out of date: " + ", ".join(stale), file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
