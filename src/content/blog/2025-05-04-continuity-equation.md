---
title: "連続の式の導出"
description: "連続の式の導出を行います。"
pubDate: 2025-05-04
tags: [
    "Mathematics",
    "Probability Theory",
]
draft: false
---


## 連続の式

点 $x_t\in\mathbb R^d$ の運動が以下のように表されるとする：
$$
  \frac{d}{dt}X_t = v_t(X_t),\qquad X_0\sim P_0.
$$
ただし、$v_t:\mathbb R^d\to\mathbb R^d$ は滑らかなベクトル場であり、$P_0$ は初期分布を表す確率測度である。

$X_t$ の分布を $P_t$ とし、密度 $p_t$ が存在するとき、連続の式が成り立つ：
$$
  \partial_t p_t(x) = -\nabla\!\cdot\!\bigl(p_t(x)\,v_t(x)\bigr).
$$

## 導出

任意のテスト関数 $f:\mathbb{R}^d\to\mathbb{R}$ に対し，

$$
\int f(x)\,\partial_t p_t(x)\,dx
=\frac{d}{dt}\int f(x)\,p_t(x)\,dx
$$

一方，写像 $\phi_t:\mathbb R^d\to\mathbb R^d$ を

$$
\phi_t(x_0)
= x_0 + \int_0^t v_s\left(\phi_s(x_0)\right)\,ds,
\qquad
\frac{\partial}{\partial t}\phi_t(x_0)
= v_t\left(\phi_t(x_0)\right),
$$

と定義すると，

$$
\begin{align*}
\frac{d}{dt}\int f(x)\,p_t(x)\,dx
&= \frac{d}{dt} \int f(x) P_t(dx) \\
&= \frac{d}{dt} \int f(x) \, \phi_{t\#}P_0(dx) \\
&= \frac{d}{dt} \int f\left(\phi_t(x)\right) \, p_0(x) \, dx \\
&= \int \langle\nabla f\left(\phi_t(x)\right), \frac{d}{dt}\phi_t(x)\rangle \, P_0(dx) \\
&= \int \langle\nabla f\left(\phi_t(x)\right), v_t\left(\phi_t(x)\right)\rangle \, P_0(dx) \\
&= \int \langle \nabla f(x), v_t(x) \rangle \, \phi_{t\#}P_0(dx) \\
&= \int \langle \nabla f(x), v_t(x) \rangle \, p_t(x) \, dx \\
&= \int \langle \nabla f(x), p_t(x) v_t(x) \rangle \, dx \\
&\overset{\text{(a)}}{=} - \int f(x) \nabla\cdot\left(p_t(x) v_t(x)\right) \, dx \\
\end{align*}
$$

ここで、(a) は[後述](#部分積分公式)の部分積分公式を用いた。

よって

$$
\int f(x) \,\partial_t p_t(x)\,dx
= -\int f(x) \,\nabla\!\cdot\!\left(p_t(x)\,v_t(x)\right)\,dx
$$

$f$ の任意性より

$$
\partial_t p_t(x)
=-\nabla\!\cdot\!\left(p_t(x)\,v_t(x)\right).
$$

$\square$

## 部分積分公式

テスト関数 $f:\mathbb R^d\to\mathbb R$ と滑らかなベクトル場 $\psi:\mathbb R^d\to\mathbb R^d$ に対し、以下のような部分積分公式が成り立つ：

$$
\int \langle\nabla f(x), \psi(x)\rangle\,dx
=-\int f(x)\,\nabla\!\cdot\!\psi(x)\,dx.
$$

**証明**

$$
\begin{aligned}
\int \nabla f(x)^{\!T}\,\psi(x)\,dx
&=\sum_{i=1}^d\int \partial_i f(x)\,\psi_i(x)\,dx\\
&=\sum_{i=1}^d\left[f(x)\,\psi_i(x)\right]_{x_i=-\infty}^{x_i=+\infty}
\;-\;\sum_{i=1}^d\int f(x)\,\partial_i\psi_i(x)\,dx\\
&=-\int f(x)\,\underbrace{\sum_{i=1}^d\partial_i\psi_i(x)}_{=\nabla\cdot\psi(x)}\,dx\\
&=-\int f(x)\,\nabla\!\cdot\!\psi(x)\,dx.
\end{aligned}
$$
ここで、$f$ はコンパクトサポート関数より $x_i=-\infty$ および $x_i=+\infty$ のとき $f(x)=0$ であることを用いた。

$\square$

## References

---
