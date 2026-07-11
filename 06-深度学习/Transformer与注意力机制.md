---
tags: [深度学习, Transformer]
---
# Transformer与注意力机制

## 一句话概括
"Attention is All You Need"——并行处理序列,现代 AI 的统一架构。

## 核心要点
- 自注意力:Q·K 算相关性,加权 V;O(n²) 复杂度
- 多头注意力:多个子空间并行关注不同模式
- 位置编码:弥补无序性的信息
- 三大范式:Encoder(BERT)/ Decoder(GPT)/ Enc-Dec(T5)

## 关联
- 所属领域:[[深度学习 MOC]]
- 相关笔记:[[大语言模型LLM]]、[[循环网络与序列模型]]
