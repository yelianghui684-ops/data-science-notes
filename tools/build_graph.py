# -*- coding: utf-8 -*-
"""扫描 Obsidian 库中的 [[双链]],生成 docs/graph-data.js 供星云图谱使用。

用法:python3 tools/build_graph.py
每次新增/修改笔记后重新运行,再 git push 即可更新在线图谱。

输出字段:
  nodes: id / group(顶层文件夹) / degree / isHub / path / excerpt(一句话概括)
  links: source / target / weight(提及次数,1-3 封顶)
"""
import json
import os
import re

VAULT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SKIP_DIRS = {".obsidian", ".git", "docs", "tools"}
SKIP_ROOT_FILES = {"README", "LICENSE"}
LINK_RE = re.compile(r"\[\[([^\]|#]+)(?:#[^\]|]*)?(?:\|[^\]]*)?\]\]")


def extract_excerpt(text):
    """取「## 一句话概括」段落;缺失则取正文首个普通段落。"""
    m = re.search(r"##\s*一句话概括\s*\n+([^\n#]+)", text)
    if m:
        s = m.group(1).strip()
    else:
        body = re.sub(r"^---\n.*?\n---\n", "", text, flags=re.S)
        s = ""
        for line in body.splitlines():
            t = line.strip()
            if t.startswith(">"):
                s = t.lstrip("> ").strip()
                break
            if t and not t.startswith(("#", "-", "⬆", "|", "!", "1.", "2.", "3.", "4.")):
                s = t
                break
    s = re.sub(r"\[\[([^\]|#]+)(?:#[^\]|]*)?(?:\|([^\]]*))?\]\]",
               lambda m: m.group(2) or m.group(1), s)
    s = s.replace("**", "").replace("`", "")
    return s[:120]


notes = {}
for root, dirs, files in os.walk(VAULT):
    dirs[:] = [d for d in dirs if d not in SKIP_DIRS]
    for fn in files:
        if not fn.endswith(".md"):
            continue
        full = os.path.join(root, fn)
        rel = os.path.relpath(full, VAULT)
        name = fn[:-3]
        if os.sep not in rel and name in SKIP_ROOT_FILES:
            continue
        top = rel.split(os.sep)[0] if os.sep in rel else "根目录"
        notes[name] = {"group": top, "path": rel}

pair_count = {}
for name, meta in notes.items():
    full = os.path.join(VAULT, meta["path"])
    with open(full, encoding="utf-8") as f:
        text = f.read()
    meta["excerpt"] = extract_excerpt(text)
    for m in LINK_RE.finditer(text):
        target = m.group(1).strip()
        if target and target != name and target in notes:
            key = tuple(sorted((name, target)))
            pair_count[key] = pair_count.get(key, 0) + 1

links = [{"source": a, "target": b, "weight": min(c, 3)}
         for (a, b), c in sorted(pair_count.items())]

degree = {}
for l in links:
    degree[l["source"]] = degree.get(l["source"], 0) + 1
    degree[l["target"]] = degree.get(l["target"], 0) + 1

nodes = []
for name, meta in sorted(notes.items()):
    nodes.append({
        "id": name,
        "group": meta["group"],
        "degree": degree.get(name, 0),
        "isHub": "MOC" in name or "Second Brain" in name,
        "path": meta["path"],
        "excerpt": meta.get("excerpt", ""),
    })

data = {"nodes": nodes, "links": links}
out = os.path.join(VAULT, "docs", "graph-data.js")
os.makedirs(os.path.dirname(out), exist_ok=True)
with open(out, "w", encoding="utf-8") as f:
    f.write("const graphData = ")
    json.dump(data, f, ensure_ascii=False, indent=1)
    f.write(";\n")

print(f"节点 {len(nodes)} 个,连线 {len(links)} 条 -> docs/graph-data.js")
