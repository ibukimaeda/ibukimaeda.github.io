---
title: "固有ベクトルを共有する対称行列の積は可換"
description: ""
pubDate: '2025-02-28'
tags: [
    "Linear Algebra"
]
draft: true
---

以下の命題が成り立つことを利用することがあったのでメモしておく．

> **Proposition 1**
> $A, B\in\mathbb R^{d\times d}$ を固有ベクトルが同じ対称行列とすると $AB=BA$ が成り立つ．

**証明**
$A, B$ が対称行列かつ固有ベクトルが同じであるから直交行列 $P$ と対角行列 $\Lambda,M$ を用いて以下のように対角化できる[^1]．

$$
\begin{align*}
A &= P\Lambda P^T \\
B &= PMP^T
\end{align*}
$$

よって，

$$
\begin{align*}
AB &= P\Lambda P^T PMP^T \\
&= P\Lambda M P^T \\
&= PM \Lambda P^T \\
&= PMP^TP\Lambda P^T \\
&= BA
\end{align*}
$$
$\square$

## 具体例

$A\in\mathbb R^{d\times d}$ を対称行列とすると以下は同じ固有ベクトルを持つ．

- 逆行列が存在すれば $A^{-1}$
- 対角成分に $\lambda\in\mathbb R$ を足した $A+\lambda I$

**証明**
$A$ の固有値と固有ベクトルを $\{ (\lambda_i, x_i) \}_{i=1}^d$ とする．

$A^{-1}$ について

$$
\begin{align*}
A x_i &= \lambda_i x_i \\
A^{-1} A x_i &= A^{-1} \lambda_i x_i \\
x_i &= \lambda_i A^{-1} x_i \\
A^{-1} x_i &= \frac{1}{\lambda_i} x_i
\end{align*}
$$

よって $A^{-1}$ の固有値と固有ベクトルは $\{ (1/\lambda_i, x_i) \}_{i=1}^d$ であり，$A$ と同じ固有ベクトルを持つ．

$A+\lambda I$ について

$$
\begin{align*}
A x_i &= \lambda_i x_i \\
A x_i + \lambda I x_i &= \lambda_i x_i + \lambda I x_i \\
(A+\lambda I) x_i &= (\lambda_i+\lambda) x_i
\end{align*}
$$

よって $A+\lambda I$ の固有値と固有ベクトルは $\{ (\lambda_i+\lambda, x_i) \}_{i=1}^d$ であり，$A$ と同じ固有ベクトルを持つ．

$\square$

---

[^1]: 対称行列が直交行列で対角化できる理由は [対称行列の定義と性質4つとその証明 \| 数学の景色](https://mathlandscape.com/sym-matrix/) などを見てください．
