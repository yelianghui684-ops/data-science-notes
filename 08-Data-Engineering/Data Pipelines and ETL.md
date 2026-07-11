---
tags: [数据工程, ETL]
---
# Data Pipelines and ETL

## 一句话概括
Extract-Transform-Load:让数据定时、可靠、可监控地从源头流向仓库。

## 核心要点
- ETL vs ELT:现代数仓(BigQuery/Snowflake)更倾向 ELT
- 编排工具:Airflow(DAG 思想)、dbt(SQL 转换层)
- 幂等性:重跑不产生副作用是管道设计的底线
- 数据质量监控:schema 校验、行数、新鲜度

## 关联
- 所属领域:[[Data Engineering MOC]]
- 相关笔记:[[Advanced SQL]]、[[Database Design]]、[[Big Data Frameworks]]
