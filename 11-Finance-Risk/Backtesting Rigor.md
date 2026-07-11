---
tags: [finance, quant, backtest]
---
# Backtesting Rigor

## 一句话概括
回测最容易翻车也最拉开差距:一切结论先问"是不是过拟合"。

## 核心要点
- 三大坑:**未来函数、幸存者偏差、过拟合**(参数暴力搜索 = 自欺)
- 样本内 / 样本外划分,与 ML 的训练/测试集思想同源(→ [[Model Evaluation and Tuning]])
- 成本要真实:交易成本、滑点、冲击成本全部纳入
- 绩效与风险一起看:年化、夏普 / 索提诺、最大回撤、胜率、换手
- 过关标准:独立完成「数据 → 因子 → 回测 → 评估」全流程,并说清为什么不是过拟合

## 关联
- 所属领域:[[Finance and Risk MOC]]
- 相关笔记:[[Quantitative Investing]]、[[Risk Metrics]]
