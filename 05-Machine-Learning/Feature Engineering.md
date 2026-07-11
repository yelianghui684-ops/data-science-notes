---
tags: [机器学习, 特征工程]
---
# Feature Engineering

## 一句话概括
"数据和特征决定上限,模型只是逼近这个上限。"

## 核心要点
- 数值特征:标准化 / 归一化 / 分箱 / 对数变换
- 类别特征:One-Hot、目标编码(小心泄漏)、Embedding
- 时间特征:周期性编码(sin/cos)、滞后特征
- 特征选择:过滤法(互信息 → [[Information Theory]])、包裹法、嵌入法(L1)
- ⚠️ 数据泄漏:任何用到未来信息或标签信息的特征都是毒药

## 关联
- 所属领域:[[Machine Learning MOC]]
- 相关笔记:[[Data Cleaning]]、[[Pandas]]、[[Model Evaluation and Tuning]]
