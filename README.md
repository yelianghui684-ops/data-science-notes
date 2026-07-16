# ✨ Data Science Second Brain / 数据科学第二大脑

An Obsidian-based knowledge network for data science: **one central hub → 9 domain MOCs → 50+ topic notes**, all interlinked via wikilinks into a star-shaped knowledge graph.

用 Obsidian 构建的数据科学知识网络:1 个中心首页 → 9 大领域枢纽(MOC)→ 50+ 主题笔记,双链互联形成星状知识图谱。

## 🚀 Quick Access / 快速入口

| 入口 | 方式 |
|------|------|
| 🖥 一键打开(图谱 + Obsidian) | 双击桌面 `Second Brain.command` |
| 🟣 打开 Obsidian 库 | [obsidian://open?vault=data-science-notes](obsidian://open?vault=data-science-notes) |
| 🌐 在线图谱 | 图谱页右上角工具栏可直达 Obsidian / GitHub |
| ✏️ 编辑任意笔记 | 图谱中**单击节点** → 弹出卡片选「Obsidian 编辑 / GitHub 编辑 / GitHub 查看」 |

## 🪐 Knowledge Graph / 星状知识图谱

- **Online**: enable GitHub Pages (Settings → Pages → Deploy from branch → `main` `/docs`), then visit
  `https://yelianghui684-ops.github.io/data-science-notes/`
- **Local**: open [`docs/index.html`](docs/index.html) in a browser
- **「知识星云」深空渲染**(Three.js + Shader + d3-force,零构建):莫兰迪低饱和星体、克制辉光、三层宇宙微尘视差、贝塞尔引力线(粗细=关联权重)、枢纽轨道圈
- **信息降噪**:缩放三级 LOD(远景星团 / 中景主干 / 近景全标签)· 悬停视觉隧道(无关星体变暗)· 单击 Fly-to + 右侧详情抽屉(摘要 / 相连星体 / 编辑入口)· 右下小地图 · 底部浏览航线
- Controls: drag to pan · scroll to zoom · hover to focus · click for drawer · **double-click to open in Obsidian**

After adding notes, run `python3 tools/build_graph.py` to regenerate the graph data, then push.

## 🏛️ Structure / 知识结构

| Directory | Domain | Hub note |
|-----------|--------|----------|
| `00-Home/` | Central hub | 🌌 Data Science Second Brain |
| `01-Mathematics/` | Linear algebra · Calculus · Probability · Optimization · Information theory | Mathematics MOC |
| `02-Statistics/` | Inference · Regression · Bayesian · AB testing | Statistics MOC |
| `03-Programming-Tools/` | Python · NumPy · Pandas · Git | Programming and Tools MOC |
| `04-Databases-SQL/` | SQL · Data modeling · NoSQL | Databases and SQL MOC |
| `05-Machine-Learning/` | Classic models · Feature engineering · Evaluation | Machine Learning MOC |
| `06-Deep-Learning/` | NN · CNN · Transformer · LLM | Deep Learning MOC |
| `07-Data-Visualization/` | Design principles · Matplotlib · Interactive | Data Visualization MOC |
| `08-Data-Engineering/` | Cleaning · ETL · Big data · MLOps | Data Engineering MOC |
| `09-Projects/` | Project template · Kaggle · Portfolio | Projects MOC |

## ✍️ Conventions / 写作约定

1. Create new notes from `Templates/Note Template.md` and **always** link them to their domain MOC via `[[wikilinks]]`
2. One concept per note (atomic); cross-reference concepts across domains
3. Auto-backup to this repo via the obsidian-git plugin
