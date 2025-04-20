---
title: "多変量正規分布はリプシッツ連続"
description: "多変量正規分布の確率密度関数はリプシッツ連続であることを示す。"
pubDate: 2025-04-19
tags: [
    "Mathematics",
    "Probability Theory",
]
draft: false
---

## TL;DR

多変量正規分布の確率密度関数はリプシッツ連続であり、密度関数を
$$
f(x) = \frac{1}{(2\pi)^{d/2}|\Sigma|^{1/2}} \exp\left(-\frac{1}{2}(x-\mu)^T \Sigma^{-1}(x-\mu)\right)
$$
とするとリプシッツ定数は
$$
L = \frac{e^{-1/2}}{(2\pi)^{d/2}|\Sigma|^{1/2} \sqrt{\lambda_{\min}(\Sigma)}}
$$
となります。

## リプシッツ連続性

距離空間 $(X, d_X)$ と $(Y, d_Y)$ の間の写像 $f: X \to Y$ が**リプシッツ連続**であるとは、ある実数 $L$ が存在して

$$
d_Y(f(x), f(y)) \leq L\, d_X(x, y) \quad (\forall x, y \in X)
$$

が成り立つことを言います。この最大の $L$ を**リプシッツ定数**と呼びます。  
要するに「入力の変化量に対して、出力の変化量が一定の範囲内に収まる」滑らかさの指標です。
また、$f$ が微分可能な場合、リプシッツ連続性は勾配のノルムの上限がリプシッツ定数と一致します。

詳細は[こちら](../2025-03-12-lipschitz-continuous.md)を参照してください。

## 多変量正規分布の確率密度関数

$\mathbb R^d$ 上の多変量正規分布の確率密度関数は次のように定義されます。

$$
f(x) = \frac{1}{(2\pi)^{d/2}|\Sigma|^{1/2}} \exp\left(-\frac{1}{2}(x-\mu)^T \Sigma^{-1}(x-\mu)\right)
$$

ここで

- $\mu$：平均ベクトル
- $\Sigma$：分散共分散行列（正定値対称行列）

## 多変量正規分布の確率密度関数のリプシッツ連続性

$$
\nabla f(x) = f(x)\, \Sigma^{-1}(x-\mu)
$$
なので[^1]勾配のノルムは
$$
\|\nabla f(x)\|_2 = f(x)\, \|\Sigma^{-1}(x-\mu)\|_2
$$

### ノルムの最大値を求める

$y = x - \mu$ とおくと、
$$
f(x) = C \exp\left(-\frac{1}{2} y^\top \Sigma^{-1} y\right)
$$
ただし、$C = \frac{1}{(2\pi)^{d/2}|\Sigma|^{1/2}}.$

マラハラノビス距離を $r = \sqrt{y^\top \Sigma^{-1} y}$ とすると、
$$
\|\nabla f(x)\|_2 = C \exp\left(-\frac{r^2}{2}\right) \|\Sigma^{-1} y\|_2
$$
となります。

$\|\Sigma^{-1} y\|_2$ の上界について以下が[成り立ちます](#sigma-inverse-y-upper-bound)。
$$
\|\Sigma^{-1} y\|_2 \leq \frac{r}{\sqrt{\lambda_{\min}(\Sigma)}}
$$
ここで $\lambda_{\min}(\Sigma)$ は最小固有値。統合成立条件は $y$ が最小固有値に対応する固有ベクトルの集合が生成する線形空間の元。したがって、
$$
\|\nabla f(x)\|_2 \leq C \frac{r}{\sqrt{\lambda_{\min}(\Sigma)}} \exp\left(-\frac{r^2}{2}\right)
$$

この右辺は $r = 1$ で最大値をとり、その値は $e^{-1/2}$。

以上より、多変量正規分布の確率密度関数は**リプシッツ連続**であり、そのリプシッツ定数は

$$
L = \frac{e^{-1/2}}{(2\pi)^{d/2}|\Sigma|^{1/2} \sqrt{\lambda_{\min}(\Sigma)}}
$$

となります。

特に、等方的な場合（$\Sigma = \sigma^2 I$）は

$$
L = \frac{e^{-1/2}}{(2\pi)^{d/2} \sigma^{d+1}}
$$

とシンプルな形になります。

### $\|\Sigma^{-1}y\|_2$ の上界

<a id="sigma-inverse-y-upper-bound"></a>

$\Sigma$ は正定値対称行列より、正規直交行列 $Q$ が存在して
$$
\Sigma = Q \Lambda Q^T
$$
ここで $\Lambda$ は対角行列で、$\Sigma$ の固有値を $\lambda_i$ とすると $\Lambda = \text{diag}(\lambda_1, \lambda_2, \ldots, \lambda_d)$ となります。

$y$ を $Q$ の基底を用いて展開すると $\alpha$ を用いて $y = Q\alpha$ と書けます。

このとき、マラハラノビス距離は

$$
\begin{align*}
r^2 &= y^T \Sigma^{-1} y \\
&= y^T Q \Lambda^{-1} Q^T y \\
&= \alpha^T Q^T Q \Lambda^{-1} Q^T Q \alpha \\
&= \alpha^T \Lambda^{-1} \alpha \\
&= \sum_{i=1}^d \frac{\alpha_i^2}{\lambda_i}
\end{align*}
$$

同様に $\|\Sigma^{-1}y\|_2$ は
$$
\begin{align*}
\|\Sigma^{-1}y\|_2^2 &= y^T \Sigma^{-2} y \\
&= y^T Q \Lambda^{-2} Q^T y \\
&= \alpha^T Q^T Q \Lambda^{-2} Q^T Q \alpha \\
&= \alpha^T \Lambda^{-2} \alpha \\
&= \sum_{i=1}^d \frac{\alpha_i^2}{\lambda_i^2}
\end{align*}
$$

任意の $i$ について $\lambda_i \geq \lambda_{\min}(\Sigma)$ が成り立つから
$$
\|\Sigma^{-1}y\|_2^2 = \sum_{i=1}^d \frac{\alpha_i^2}{\lambda_i^2} \leq \frac{1}{\lambda_{\min}(\Sigma)}\sum_{i=1}^d \frac{\alpha_i^2}{\lambda_i}
= \frac{r^2}{\lambda_{\min}(\Sigma)}
$$

よって
$$
\|\Sigma^{-1}y\|_2 \leq \frac{r}{\sqrt{\lambda_{\min}(\Sigma)}}
$$

統合成立条件は $\lambda_i=\lambda_{\min}(\Sigma)$ となるような $i$ についてのみ $\alpha_i\neq 0$ であること。
つまり、$y$ が最小固有値に対応する固有ベクトルの集合が生成する線形空間の元であることです。

## References

---

[^1]: [正規分布の平均に関する微分](../2025-04-20-normal-mean-derivative)
