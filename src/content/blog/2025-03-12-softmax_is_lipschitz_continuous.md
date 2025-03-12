---
title: "softmax は L1 ノルムに関してリプシッツ連続"
description: "本記事では，逆温度λのsoftmax関数がL1ノルムに関して(λ/2)-リプシッツ連続であることを，ヤコビ行列の作用素ノルムを用いて証明します．"
pubDate: 2025-03-12
tags: [
    "Mathematics",
    "Machine Learning"
]
draft: false
---

## Softmax の定義

逆温度 $\lambda>0$ の $\text{softmax}:\mathbb R^d\to\mathbb R^d$ は次のように定義されます．

$$
\text{softmax}(\mathbf{x})
=
\frac{1}{\sum\limits_{i=1}^d\exp(\lambda x_i)}
\begin{bmatrix}
\exp(\lambda x_1) \\
\dots \\
\exp(\lambda x_d)
\end{bmatrix}
$$

## L1 ノルムに関するリプシッツ連続性の定義

写像 $f:\mathbb R^d\to\mathbb R^d$ が L1 ノルムに関してリプシッツ連続であるとは，ある定数 $K>0$ が存在して，任意の $\mathbf{x},\mathbf{y}\in\mathbb R^d$ に対して次の不等式が成り立つことを言います．[^1]

$$
\|f(\mathbf{x})-f(\mathbf{y})\|_1
\leq
K\|\mathbf{x}-\mathbf{y}\|_1
$$

この条件を満たす最小の $K$ をリプシッツ定数と呼び，$\text{Lip}_1(f)=K$ と表記します．
$f$ が全微分可能であるとき，ヤコビ行列の作用素ノルムを用いてリプシッツ定数 $K$ は次のように表されます．[^2]，[^3]

$$
K
= \text{Lip}_1(f)
= \sup_{\mathbf{x}\in\mathbb R^d} \|J_f(\mathbf{x})\|_1
= \underset{1\le j \le d}{\max} \sum\limits_{i=1}^d |J_f(x)_{ij} |
$$

## Softmax が L1 ノルムに関して $\frac{\lambda}2$-リプシッツ連続

> **Proposition 1.** <br>
> $\text{softmax}(\mathbf{x})$ は L1 ノルムに関して $\frac{\lambda}{2}$-リプシッツ連続である．

### 証明

$$
\begin{align*}
\|J_\sigma(x)\|_1
&= \underset{1\le j \le d}{\max} \sum\limits_{i=1}^d |J_\sigma(x)_{ij} | \\
&= \underset{1\le j \le d}{\max} \sum\limits_{i=1}^d |\lambda\sigma(x)_i(\delta_{ij}-\sigma(x)_j)| \\
&= \underset{1\le j \le d}{\max} \lambda \left(
 \sigma(x)_j(1-\sigma(x)_j)
 + \sigma(x)_j \sum\limits_{i=1, i\neq j}^d \sigma(x)_i
\right) \\
&= \underset{1\le j \le d}{\max} \lambda \left(
 \sigma(x)_j(1-\sigma(x)_j)
 + \sigma(x)_j (1-\sigma(x)_j)
\right) \\
&= \underset{1\le j \le d}{\max} 2\lambda \sigma(x)_j(1-\sigma(x)_j) \\
&\le \frac \lambda 2, \quad  (\because \max_x x(1-x) = \frac12 )
\end{align*}
$$

## References

- <https://en.wikipedia.org/wiki/Matrix_norm>
- <https://proceedings.mlr.press/v139/kim21i/kim21i.pdf>

---

[^1]: 詳細は [こちら](../2025-03-12-lipschitz-continuous) を参照．
[^2]: <https://en.wikipedia.org/wiki/Matrix_norm> Matrix norms induced by vector p-norms
[^3]: <https://proceedings.mlr.press/v139/kim21i/kim21i.pdf> Theorem 2.1
