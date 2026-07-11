---
tags: [finance, risk, metrics]
---
# Risk Metrics

## 一句话概括
看一段净值,秒报三个数:波动率、最大回撤、夏普比率。

## 核心要点
- **波动率**:收益率标准差(→ [[Descriptive Statistics]]),年化要乘 √252
- **最大回撤**:净值从峰到谷的最大跌幅,衡量最坏体验
- **夏普比率**:(年化收益 − 无风险利率)/ 年化波动率,风险调整后收益
- 进阶:索提诺比率(只罚下行波动)、胜率、换手率
- 行动项:用 [[Pandas]] 把三指标写成可复用函数模板

## 关联
- 所属领域:[[Finance and Risk MOC]]
- 相关笔记:[[Backtesting Rigor]]、[[Descriptive Statistics]]
