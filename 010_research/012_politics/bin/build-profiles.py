#!/usr/bin/env python3
"""Merge the PM source files into the browser-readable profile bundle."""
import json
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def load(name):
    with (ROOT / name).open(encoding="utf-8") as fh:
        return json.load(fh)


def main():
    pm = load("data/pm.json")
    profiles = load("data/pm_profiles.json")
    terms = load("data/pm_terms.json")
    credits = load("img/pm/_credits.json")
    names = [row["name"] for row in pm]
    problems = []
    for name in names:
        if name not in profiles:
            problems.append(f"profile missing: {name}")
        if name not in terms:
            problems.append(f"term missing: {name}")
    for name in profiles:
        if name not in names:
            problems.append(f"profile name mismatch: {name}")
    for name in terms:
        if name not in names:
            problems.append(f"term name mismatch: {name}")
    for index, name in enumerate(names):
        image = f"pm{index:02d}.jpg"
        if image not in credits:
            problems.append(f"credit missing: {image} ({name})")
        elif credits[image].get("name") != name:
            problems.append(f"credit name mismatch: {image} ({credits[image].get('name')}) != {name}")
    if problems:
        for problem in problems:
            print(problem, file=sys.stderr)
        return 1

    merged = {}
    for index, row in enumerate(pm):
        name = row["name"]
        merged[name] = {
            "pm": row,
            "profile": profiles[name],
            "term": terms[name],
            "image": f"img/pm/pm{index:02d}.jpg",
            "credit": credits[f"pm{index:02d}.jpg"],
        }
    output = ROOT / "data/pm_profiles.js"
    payload = json.dumps(merged, ensure_ascii=False, indent=2)
    output.write_text("// 自動生成。編集は pm_profiles.json\nwindow.PM_PROFILES = " + payload + ";\n", encoding="utf-8")
    print(f"wrote {output} ({len(merged)} profiles)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
