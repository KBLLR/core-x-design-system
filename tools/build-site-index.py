#!/usr/bin/env python3
"""Generate site/components.json for the GitHub Pages site (index.html).

Reads each components/<Name>/preview.html (the @dsCard comment: group, size, subtitle)
and the first paragraph of components/<Name>/README.md. A static site cannot list a
directory, so this index is committed. Never edit site/components.json by hand.

Usage:
  tools/build-site-index.py [--check]
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "site" / "components.json"
GROUP_ORDER = ["Foundations", "Components", "Data", "Liquid Glass", "Native shell",
               "Spatial HUD", "Assistant HUD", "Materials", "Ecosystem", "Other"]


def card(preview: Path) -> dict:
    head = preview.read_text(encoding="utf-8").split("\n", 1)[0]
    attrs = {k: a or b for k, a, b in re.findall(r'(\w+)=(?:"([^"]*)"|(\S+))', head)}
    return {
        "group": attrs.get("group", "Other"),
        "width": int(attrs.get("width", 700)),
        "height": int(attrs.get("height", 300)),
        "subtitle": attrs.get("subtitle", ""),
    }


def summary(readme: Path) -> str:
    if not readme.exists():
        return ""
    for block in readme.read_text(encoding="utf-8").split("\n\n"):
        text = " ".join(block.split())
        if text and not text.startswith("#"):
            return text
    return ""


def build() -> str:
    items = []
    for preview in sorted(ROOT.glob("components/*/preview.html")):
        name = preview.parent.name
        items.append({"name": name, **card(preview), "summary": summary(preview.parent / "README.md")})
    items.sort(key=lambda i: (GROUP_ORDER.index(i["group"]) if i["group"] in GROUP_ORDER else len(GROUP_ORDER), i["name"]))
    return json.dumps({"groups": GROUP_ORDER, "components": items}, indent=2, ensure_ascii=False) + "\n"


def main() -> int:
    text = build()
    if "--check" in sys.argv[1:]:
        if not OUT.exists() or OUT.read_text(encoding="utf-8") != text:
            print(f"{OUT.relative_to(ROOT)} is out of date", file=sys.stderr)
            return 1
        print(f"{OUT.relative_to(ROOT)} is up to date")
        return 0
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(text, encoding="utf-8")
    print(f"wrote {OUT.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
