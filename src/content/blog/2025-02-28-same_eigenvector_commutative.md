---
title: "固有ベクトルを共有する対称行列の積は可換"
description: ""
pubDate: '2025-02-28'
tags: [
    "Mathematics",
    "Linear Algebra"
]
draft: false
---


以下の命題が成り立つことを利用することがあったので，その証明と具体例をまとめておく．

## 命題

> **Proposition 1**  <br>
> $A, B\in\mathbb R^{d\times d}$ を固有ベクトルが同じ対称行列とすると，$AB=BA$ が成り立つ．

## 証明

$A, B$ が対称行列かつ固有ベクトルが同じであることから，直交行列 $P$ と対角行列 $\Lambda, M$ を用いて以下のように対角化できる[^1]．

$$
\begin{align*}
A &= P\Lambda P^T, \\
B &= PMP^T.
\end{align*}
$$

このとき，積 $AB$ は次のように計算できる．

$$
\begin{align*}
AB &= P\Lambda P^T PMP^T \\
&= P\Lambda M P^T.
\end{align*}
$$

同様に $BA$ を計算すると，

$$
\begin{align*}
BA &= PMP^T P\Lambda P^T \\
&= PM \Lambda P^T.
\end{align*}
$$

ここで，対角行列同士の積は可換であるため，$\Lambda M = M \Lambda$ が成り立ち，したがって

$$
P\Lambda M P^T = PM \Lambda P^T
$$

となる．よって $AB = BA$ である．$\square$

---

## 具体例

$A\in\mathbb R^{d\times d}$ を対称行列とすると，以下の行列は $A$ と同じ固有ベクトルを持つ．

- 逆行列が存在すれば $A^{-1}$
- 対角成分に $\lambda\in\mathbb R$ を足した行列 $A+\lambda I$

それぞれについて証明する．

### **1. 逆行列 $A^{-1}$ の場合**

$A$ の固有値と固有ベクトルを $\{ (\lambda_i, x_i) \}_{i=1}^d$ とする．すると，

$$
A x_i = \lambda_i x_i
$$

が成り立つ．$A^{-1}$ が存在すると仮定すると，両辺に $A^{-1}$ を掛けて

$$
A^{-1} A x_i = A^{-1} \lambda_i x_i
$$

より，

$$
x_i = \lambda_i A^{-1} x_i.
$$

したがって，

$$
A^{-1} x_i = \frac{1}{\lambda_i} x_i.
$$

つまり，$A^{-1}$ の固有値と固有ベクトルは $\{ (1/\lambda_i, x_i) \}_{i=1}^d$ であり，$A$ と同じ固有ベクトルを持つ．

---

### **2. $A+\lambda I$ の場合**

同様に $A$ の固有値と固有ベクトルを $\{ (\lambda_i, x_i) \}_{i=1}^d$ とすると，

$$
A x_i = \lambda_i x_i.
$$

両辺に $\lambda I x_i$ を加えると，

$$
A x_i + \lambda I x_i = \lambda_i x_i + \lambda I x_i.
$$

ここで，$I x_i = x_i$ であるから，

$$
(A+\lambda I) x_i = (\lambda_i+\lambda) x_i.
$$

したがって，$A+\lambda I$ の固有値と固有ベクトルは $\{ (\lambda_i+\lambda, x_i) \}_{i=1}^d$ であり，$A$ と同じ固有ベクトルを持つ．$\square$

## まとめ

- 固有ベクトルが共通する対称行列同士は可換である．
- $A$ の逆行列 $A^{-1}$ や，$A$ にスカラー倍の単位行列を加えた $A+\lambda I$ は，$A$ と同じ固有ベクトルを持つ．

---

[^1]: 対称行列が直交行列で対角化できる理由は [対称行列の定義と性質4つとその証明 \| 数学の景色](https://mathlandscape.com/sym-matrix/) などを参照してください．
