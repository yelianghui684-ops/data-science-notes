# -*- coding: utf-8 -*-
"""扫描 Obsidian 库中的 [[双链]],生成 docs/graph-data.js 供三维星状图使用。

用法:python3 tools/build_graph.py
每次新增/修改笔记后重新运行,再 git push 即可更新在线星图。
"""
import json
import os
import re

VAULT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SKIP_DIRS = {".obsidian", ".git", "docs", "tools"}
LINK_RE = re.compile(r"\[\[([^\]|#]+)(?:#[^\]|]*)?(?:\|[^\]]*)?\]\]")

notes = {}  # 笔记名(无扩展名) -> {"group": 顶层文件夹, "path": 相对路径}
links = []

for root, dirs, files in os.walk(VAULT):
    dirs[:] = [d for d in dirs if d not in SKIP_DIRS]
    for fn in files:
        if not fn.endswith(".md"):
            continue
        full = os.path.join(root, fn)
        rel = os.path.relpath(full, VAULT)
        name = fn[:-3]
        if os.sep not in rel:
            continue  # 根目录的 README 等不是知识笔记,不进图谱
        top = rel.split(os.sep)[0]
        notes[name] = {"group": top, "path": rel}

for name, meta in notes.items():
    full = os.path.join(VAULT, meta["path"])
    with open(full, encoding="utf-8") as f:
        text = f.read()
    for m in LINK_RE.finditer(text):
        target = m.group(1).strip()
        if target and target != name and target in notes:
            links.append({"source": name, "target": target})

# 去重
seen = set()
uniq = []
for l in links:
    key = (l["source"], l["target"])
    if key not in seen and (key[1], key[0]) not in seen:
        seen.add(key)
        uniq.append(l)

degree = {}
for l in uniq:
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
    })

data = {"nodes": nodes, "links": uniq}
out = os.path.join(VAULT, "docs", "graph-data.js")
os.makedirs(os.path.dirname(out), exist_ok=True)
with open(out, "w", encoding="utf-8") as f:
    f.write("const graphData = ")
    json.dump(data, f, ensure_ascii=False, indent=1)
    f.write(";\n")

print(f"节点 {len(nodes)} 个,连线 {len(uniq)} 条 -> docs/graph-data.js")
