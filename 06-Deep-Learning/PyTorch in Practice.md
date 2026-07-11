---
tags: [深度学习, PyTorch]
---
# PyTorch in Practice

## 一句话概括
研究界事实标准的深度学习框架:动态图,像写 Python 一样写网络。

## 核心要点
- 核心三件套:`Tensor`(自动求导)、`nn.Module`(模型)、`DataLoader`(数据)
- 训练循环骨架:forward → loss → `backward()` → `optimizer.step()` → `zero_grad()`
- GPU:`tensor.to(device)`;Mac 上用 `mps` 后端
- 生态:torchvision、Hugging Face transformers

## 关联
- 所属领域:[[Deep Learning MOC]]
- 相关笔记:[[Neural Network Basics]]、[[NumPy]]
