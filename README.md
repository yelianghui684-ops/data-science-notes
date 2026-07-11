# ✨ Data Science Second Brain / 数据科学第二大脑

An Obsidian-based knowledge network for data science: **one central hub → 9 domain MOCs → 50+ topic notes**, all interlinked via wikilinks into a star-shaped knowledge graph.

用 Obsidian 构建的数据科学知识网络:1 个中心首页 → 9 大领域枢纽(MOC)→ 50+ 主题笔记,双链互联形成星状知识图谱。

## 🪐 Knowledge Graph / 星状知识图谱

- **Online**: enable GitHub Pages (Settings → Pages → Deploy from branch → `main` `/docs`), then visit
  `https://yelianghui684-ops.github.io/data-science-notes/`
- **Local**: open [`docs/index.html`](docs/index.html) in a browser
- Controls: drag to pan · scroll to zoom · click to focus · **double-click a node to open the note in Obsidian** · filter by domain via the legend, or search

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
