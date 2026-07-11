# ✨ Data Science Second Brain / 数据科学第二大脑

An Obsidian-based knowledge network: **one central hub → 14 domain MOCs → 80+ topic notes**, all interlinked via wikilinks into a star-shaped knowledge graph — covering the data science curriculum plus academics, finance & risk, Web3, TCM, and personal growth.

用 Obsidian 构建的知识网络:1 个中心首页 → 14 大领域枢纽(MOC)→ 80+ 主题笔记,双链互联形成星状知识图谱 — 覆盖数据科学课程体系,以及学业、金融风控、Web3、中医、个人成长。

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
| `10-Academics/` | Course map · MCM · Competitive programming · Career | Academics MOC |
| `11-Finance-Risk/` | Risk control · Quant · Internship · Investing classics | Finance and Risk MOC |
| `12-Web3/` | Blockchain · Solidity · DeFi & on-chain data | Web3 MOC |
| `13-TCM/` | TCM fundamentals · Acupuncture · Grading exam | TCM MOC |
| `14-Personal-Growth/` | 80/20 method · English · Recovery · Reading | Personal Growth MOC |

## ✍️ Conventions / 写作约定

1. Create new notes from `Templates/Note Template.md` and **always** link them to their domain MOC via `[[wikilinks]]`
2. One concept per note (atomic); cross-reference concepts across domains
3. Auto-backup to this repo via the obsidian-git plugin
