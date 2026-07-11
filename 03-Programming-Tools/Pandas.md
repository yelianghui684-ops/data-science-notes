---
tags: [编程, Python, Pandas]
---
# Pandas

## 一句话概括
表格数据的瑞士军刀:读取、清洗、变换、聚合一条龙。

## 核心要点
- DataFrame / Series;`loc`(标签)vs `iloc`(位置)
- 数据清洗:缺失值(`fillna`/`dropna`)、去重、类型转换
- 分组聚合:`groupby` + `agg`;透视表 `pivot_table`
- 合并:`merge`(SQL 式 join)/ `concat`
- 性能:能向量化就不用 `apply`;超大数据考虑 Polars

## 关联
- 所属领域:[[Programming and Tools MOC]]
- 相关笔记:[[NumPy]]、[[SQL Fundamentals]]、[[Data Cleaning]]
