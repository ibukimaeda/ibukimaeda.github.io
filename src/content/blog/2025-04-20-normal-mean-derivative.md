---
title: "正規分布の平均に関する微分"
description: "正規分布の平均に関する微分を計算します"
pubDate: 2025-04-20
tags: [
    "Mathematics",
    "Probability Theory",
]
draft: false
---

## 多変量正規分布の定義

$d$ 次元多変量正規分布の確率密度関数は次のように定義されます。
$$
f(x) = \frac{1}{(2\pi)^{d/2}|\Sigma|^{1/2}} \exp\left(-\frac{1}{2}(x-\mu)^T \Sigma^{-1}(x-\mu)\right)
$$
ここで

- $\mu$：平均ベクトル
- $\Sigma$：分散共分散行列（正定値対称行列）
- $|\Sigma|$：行列 $\Sigma$ の行列式

## 微分の計算

$$
\begin{align*}
\nabla_\mu f(x)
&= \frac{1}{(2\pi)^{d/2}|\Sigma|^{1/2}} \nabla_\mu \exp\left(-\frac{1}{2}(x-\mu)^T \Sigma^{-1}(x-\mu)\right) \\
&= \frac{1}{(2\pi)^{d/2}|\Sigma|^{1/2}} \exp\left(-\frac{1}{2}(x-\mu)^T \Sigma^{-1}(x-\mu)\right) \cdot \nabla_\mu \left(-\frac{1}{2}(x-\mu)^T \Sigma^{-1}(x-\mu)\right) \\
&= f(x) \left(-\frac{1}{2} \cdot \left(-2 \Sigma^{-1} (x-\mu) \right)\right) \\
&= f(x) \Sigma^{-1} (x-\mu)
\end{align*}
$$

よって
$$
\nabla_\mu f(x) = f(x) \Sigma^{-1} (x-\mu)
$$

## References

---
