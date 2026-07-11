# 🌌 数据科学第二大脑 / Data Science Second Brain

一个用 Obsidian 构建的数据科学知识网络:**1 个中心首页 → 9 大领域枢纽(MOC)→ 50+ 主题笔记**,全部通过双链互联,形成星状知识图谱。

An Obsidian-based knowledge network for data science: one central hub → 9 domain MOCs → 50+ topic notes, all interlinked via wikilinks into a star-shaped knowledge graph.

## 🪐 三维星状图 / 3D Star Graph

- **在线查看**:启用 GitHub Pages(Settings → Pages → Deploy from branch → `main` `/docs`)后访问
  `https://yelianghui684-ops.github.io/data-science-notes/`
- **本地查看**:直接用浏览器打开 [`docs/index.html`](docs/index.html)
- 操作:拖动旋转 · 滚轮缩放 · 单击聚焦 · **双击节点直接在 Obsidian 中打开对应笔记** · 左侧图例筛选领域

新增笔记后运行 `python3 tools/build_graph.py` 重新生成图数据,推送即更新。

## 🏛️ 知识结构 / Structure

| 目录 | 领域 | 枢纽笔记 |
|------|------|----------|
| `00-首页/` | 中心枢纽 | 🌌 数据科学第二大脑 |
| `01-数学基础/` | 线代 · 微积分 · 概率 · 优化 · 信息论 | 数学基础 MOC |
| `02-统计学/` | 推断 · 回归 · 贝叶斯 · AB测试 | 统计学 MOC |
| `03-编程与工具/` | Python · NumPy · Pandas · Git | 编程与工具 MOC |
| `04-数据库与SQL/` | SQL · 建模 · NoSQL | 数据库与SQL MOC |
| `05-机器学习/` | 经典模型 · 特征工程 · 评估调参 | 机器学习 MOC |
| `06-深度学习/` | NN · CNN · Transformer · LLM | 深度学习 MOC |
| `07-数据可视化/` | 设计原则 · Matplotlib · 交互式 | 数据可视化 MOC |
| `08-数据工程/` | 清洗 · ETL · 大数据 · MLOps | 数据工程 MOC |
| `09-项目实战/` | 项目模板 · Kaggle · 作品集 | 项目实战 MOC |

## ✍️ 写作约定 / Conventions

1. 新笔记从 `模板/笔记模板.md` 创建,**必须**用 `[[双链]]` 挂到所属 MOC
2. 一篇笔记只讲一个概念(原子化);跨领域概念互相引用
3. 通过 obsidian-git 插件自动备份到本仓库
