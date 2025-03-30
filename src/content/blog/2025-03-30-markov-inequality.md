---
title: "マルコフの不等式"
description: "マルコフの不等式、その証明、および確率論における応用の紹介。"
pubDate: 2025-03-30
tags: [
    "Mathematics",
    "Probability Theory",
    "Concentration Inequality",
]
draft: false
---

## マルコフの不等式

マルコフの不等式は、確率論における基本的な結果であり、非負の確率変数がある値を超える確率の上限を提供します。

非負の確率変数 $X$ とその期待値 $\mathbb{E}[X]$ に対して、任意の $a > 0$ について次が成り立ちます：

$$
P(X \geq a) \leq \frac{\mathbb{E}[X]}{a}.
$$

### 証明

期待値の定義より：
$$
\mathbb{E}[X] = \int_{0}^{\infty} x \, dP(x).
$$

積分を $[0, a)$ と $[a, \infty)$ に分ける：
$$
\begin{align*}
\mathbb{E}[X]
&= \int_{0}^{a} x \, dP(x) + \int_{a}^{\infty} x \, dP(x) \\
&\geq \int_{a}^{\infty} x \, dP(x).
\end{align*}
$$

$x \geq a$ であることから：
$$
\int_{a}^{\infty} x \, dP(x) \geq a \int_{a}^{\infty} dP(x) = a P(X \geq a).
$$

よって：
$$
\mathbb{E}[X] \geq a P(X \geq a).
$$

両辺を $a$ で割ると：
$$
P(X \geq a) \leq \frac{\mathbb{E}[X]}{a}.
$$

$\square$

## Reverse Markov's Inequality

最大値 $M$ を持つ確率変数 $X$ に対して、以下が成り立つ：

$$
P(X\le a) \le \frac{M-\mathbb E[X]}{M-a}
$$

### 証明

確率変数 $Y = M - X$ を考える。$Y$ は非負確率変数で、$\mathbb{E}[Y] = M - \mathbb{E}[X]$ である。

マルコフの不等式を $Y$ に適用すると、任意の $b > 0$ について：
$$
P(Y \geq b) \leq \frac{\mathbb{E}[Y]}{b} = \frac{M - \mathbb{E}[X]}{b}
$$

ここで $b = M - a$ とすると：
$$
\begin{align*}
P(Y \geq M - a) &\leq \frac{M - \mathbb{E}[X]}{M - a} \\
P(M - X \geq M - a) &\leq \frac{M - \mathbb{E}[X]}{M - a} \\
P(X \leq a) &\leq \frac{M - \mathbb{E}[X]}{M - a}
\end{align*}
$$

$\square$

## References

- [Introduction to Concentration Inequalities](https://arxiv.org/pdf/1910.02884)
