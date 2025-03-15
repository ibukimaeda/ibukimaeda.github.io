---
title: "Softmax は L1 ノルムに関してリプシッツ連続"
description: ""
pubDate: 2025-03-15
tags: [
    "Mathematics",
    "Machine Learning",
]
draft: false
---

## 事前知識

- Softmax については，[この記事](../2025-03-15-softmax)などを参照してください．
- リプシッツ連続については，[この記事](../2025-03-12-lipschitz-continuous)などを参照してください．

## 命題

> **Proposition 1.** <br>
> $\text{softmax}(\mathbf{x})$ は L1 ノルムに関して $\frac{\lambda}{2}$-リプシッツ連続である．

## 証明

$\text{Lip}_1(\text{softmax}) = \underset{x\in\mathbb R^n}{\sup}\|J_{\text{softmax}}(\mathbf x)\|_1 = \frac\lambda 2$ を示せればいい．

$J_{\text{softmax}}(\mathbf x) = \lambda(\text{diag}(\text{softmax}(\mathbf x)) - \text{softmax}(\mathbf x)\text{softmax}(\mathbf x)^T)$ なので，

$$
\begin{align*}
\|J_{\text{softmax}}(\mathbf x)\|_1
&= \underset{1\le j \le d}{\max} \sum\limits_{i=1}^d |J_{\text{softmax}}(\mathbf x)_{ij} | \\
&= \underset{1\le j \le d}{\max} \sum\limits_{i=1}^d |\lambda\text{softmax}(\mathbf x)_i(\delta_{ij}-\text{softmax}(\mathbf x)_j)| \\
&= \underset{1\le j \le d}{\max} \lambda \left(
    \text{softmax}(\mathbf x)_j (1-\text{softmax}(\mathbf x)_j)
    + \text{softmax}(\mathbf x)_j  \sum\limits_{i\ne j} \text{softmax}(\mathbf x)_i \right) \\
&= \underset{1\le j \le d}{\max} 2\lambda \left(
 \text{softmax}(\mathbf x)_j(1-\text{softmax}(\mathbf x)_j)
\right) \\
&= 2\lambda\left(
 \underset{1\le j \le d}{\max} \text{softmax}(\mathbf x)_j(1-\text{softmax}(\mathbf x)_j)
\right)
\end{align*}
$$

任意の $j$ で $0<\text{softmax}(\mathbf x)_j<1$ が成り立つので，関数 $f(x)=x(1-x),\:x\in(0,1)$ を考えると，$x=\frac12$ で最大値 $\frac14$ を取る．
$\underset{1\le j\le d}{\max} \text{softmax}(\mathbf x)_j = \frac12$ となるような $\mathbf x$ が存在するので，以下が成り立つ．

$$
\|J_{\text{softmax}}(\mathbf x)\|_1 = 2\lambda\left(
 \underset{1\le j \le d}{\max} \text{softmax}(\mathbf x)_j(1-\text{softmax}(\mathbf x)_j)
\right) = 2\lambda\cdot \frac14 = \frac\lambda2
$$

$\square$

## References

---
