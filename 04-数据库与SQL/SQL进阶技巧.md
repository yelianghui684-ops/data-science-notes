---
tags: [SQL, 进阶]
---
# SQL进阶技巧

## 一句话概括
窗口函数和 CTE 是分析型 SQL 的分水岭。

## 核心要点
- 窗口函数:`ROW_NUMBER` / `RANK` / `LAG` / 移动平均 `OVER (PARTITION BY … ORDER BY …)`
- CTE(`WITH`):把复杂查询拆成可读的步骤
- 子查询 vs JOIN 的取舍;EXISTS 的妙用
- 性能:索引原理、EXPLAIN 看执行计划

## 关联
- 所属领域:[[数据库与SQL MOC]]
- 相关笔记:[[SQL核心语法]]、[[数据管道ETL]]
