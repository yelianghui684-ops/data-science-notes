---
tags: [统计, EDA]
---
# Exploratory Data Analysis

## 一句话概括
建模前先"看"数据:EDA 是假设的产生器,不是走过场。

## 核心要点
- 三步走:单变量分布(→ [[Descriptive Statistics]])→ 变量间关系(相关矩阵 / 散点)→ 分组对比
- 必查清单:缺失模式、离群点、类别不平衡、重复行、时间范围
- 工具:[[Pandas]] `describe()/value_counts()` + [[Matplotlib and Seaborn]] `pairplot/heatmap`
- 心法:每张图回答一个具体问题;发现的异常回流到 [[Data Cleaning]]
- 在项目流程中的位置 → [[Project Template]] 第 2 步

## 关联
- 所属领域:[[Statistics MOC]]
- 相关笔记:[[Visualization Design Principles]]
