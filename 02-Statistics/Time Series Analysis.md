---
tags: [统计, 时间序列]
---
# Time Series Analysis

## 一句话概括
带时间箭头的数据自成一派:平稳性是前提,防泄漏是纪律。

## 核心要点
- 分解:趋势 + 季节性 + 残差;自相关(ACF/PACF)读周期
- **平稳性**:均值方差不随时间漂移;ADF 检验;差分变平稳
- 经典模型:AR / MA / ARIMA;金融收益率的波动聚集 → GARCH
- 与 ML 的衔接:滞后特征、滑动窗口(→ [[Feature Engineering]]);验证必须用时序切分(→ [[Model Evaluation and Tuning]])
- 深度学习路线:RNN/LSTM → [[RNNs and Sequence Models]]
- 量化的地基:行情数据全是时间序列

## 关联
- 所属领域:[[Statistics MOC]]
- 相关笔记:[[Regression Analysis]]