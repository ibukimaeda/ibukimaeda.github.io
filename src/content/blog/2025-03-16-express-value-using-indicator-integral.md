---
title: "indicator と積分を用いて元の値を表現する"
description: "この記事では，indicator 関数と積分を用いて元の値を表現する方法について説明します．"
pubDate: 2025-03-16
tags: [
    "Mathematics",
    "Machine Learning",
    "Technique"
]
draft: false
---

例えば，ベクトル $\mathbf x\in\mathbb R^d$ のノルムの2乗 $\|\mathbf x\|_2^2$ は，次のように表現できます．

$$
\begin{align*}
\|\mathbf x\|_2^2
&= \int_0^{\|\mathbf x\|_2^2} 1  \: dr \\
&= \int_0^{\|\mathbf x\|_2^2} \mathbb I[\|\mathbf x\|_2^2 > r] \: dr \\
&= \int_0^\infty \mathbb I[\|\mathbf x\|_2^2 > r] \: dr \\
\end{align*}
$$

## 使用例

球の内側を除いた領域のノルムの期待値の上界を求めるときなどに使用できます．

$$
\begin{align*}
\mathbb E\left[\|\mathbf x\|_2^2 \mathbb I[ \|\mathbf x\|_2^2 > R] \right]
&= \int \|\mathbf x\|_2^2 \mathbb I[ \|\mathbf x\|_2^2 > R] p(\mathbf x) \: d\mathbf x \\
&= \int \int_0^\infty \mathbb I[\|\mathbf x\|_2^2 > r] \mathbb I[ \|\mathbf x\|_2^2 > R] p(\mathbf x) \: dr \: d\mathbf x \\
&= \int \int_0^\infty \mathbb I[ \|\mathbf x\|_2^2 > \max(r,R)] p(\mathbf x) \: dr \: d\mathbf x \\
&= \int \int_0^R \mathbb I[ \|\mathbf x\|_2^2 > R] p(\mathbf x) \: dr \: d\mathbf x
+ \int \int_R^\infty \mathbb I[ \|\mathbf x\|_2^2 > r] p(\mathbf x) \: dr \: d\mathbf x \\
&= R\int \mathbb I[ \|\mathbf x\|_2^2 > R] p(\mathbf x) \: d\mathbf x
+ \int_R^\infty \mathbb P[ \|\mathbf x\|_2^2 > r] \: dr \\
&= R\mathbb P[ \|\mathbf x\|_2^2 > R]
+ \int_R^\infty \mathbb P[ \|\mathbf x\|_2^2 > r] \: dr \\
\end{align*}
$$

これより，tail bound $\mathbb P[\|\mathbf x\|_2^2>r]$ が分かれば，期待値の上界を求めることができます．

## References

- [Particle Dual Averaging: Optimization of Mean Field Neural Network with Global Convergence Rate Analysis](https://arxiv.org/abs/2012.15477) lemma D

---
