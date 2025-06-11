---
title: "平均と分散が既知の最大のエントロピーを持つ分布は正規分布"
description: ""
pubDate: 2025-06-11
tags: [
    "Probability Theory",
    "Mathematics"
]
draft: false
---

## 命題

平均 $\mu\in\mathbb R^d$、分散共分散行列 $\Sigma\in\mathbb R^{d\times d}$ が既知の確率密度 $p(x)$ の中で最大のエントロピーを持つものは正規分布 $\mathcal N(x|\mu,\Sigma)$ の密度である。

## 記号

確率密度 $p(x):\mathbb R^d\to \mathbb R$ に対して微分エントロピーは次のように定義される。
$$
h(p) = -\int_{\mathbb R^d} p(x) \log p(x) dx
$$

確率密度 $p$ と $q$ の間の KL ダイバージェンスは次のように定義される。
$$
\text{KL}(p\|q) = \int_{\mathbb R^d} p(x) \log \frac{p(x)}{q(x)} dx
$$
KL ダイバージェンスは以下の性質を持つ。
$$
\text{KL}(p\|q) \geq 0, \quad \forall p,q
$$
$$
\text{KL}(p\|q) = 0 \iff p = q
$$

KL ダイバージェンスと微分エントロピーの関係は次のようになる。
$$
\text{KL}(p\|q) = -h(p) - \int_{\mathbb R^d} p(x) \log q(x) dx
$$

## 証明

正規分布 $\mathcal N(x|\mu,\Sigma)$ の密度を $q(x)$ としたとき、エントロピー $h(q)$ は
$$
h(q) = -\int_{\mathbb R^d} q(x) \log q(x) dx = \frac{1}{2} \log \det(2\pi e \Sigma).
$$
平均 $\mu$ と分散共分散行列 $\Sigma$ を持つ確率密度 $p(x)$ と $q(x)$ の間の KL ダイバージェンスを考えると、
$$
\text{KL}(p\|q) = -h(p) - \int_{\mathbb R^d} p(x) \log q(x) dx \geq 0.
$$
ここで、
$$
\int_{\mathbb R^d} p(x) \log q(x) dx
= -\frac{d}{2}\log(2\pi) -\frac{1}{2}\log\det \Sigma - \frac{1}{2}\mathbb E_{x\sim p}[(x-\mu)^T \Sigma^{-1} (x-\mu)]
$$
第3項について $x^T A y = \text{Tr}[A^T xy^T]$ が成り立つから
$$
\begin{align}
\mathbb E_{x\sim p}[(x-\mu)^T \Sigma^{-1} (x-\mu)]
&= \mathbb E_{x\sim p}[\text{Tr}[\Sigma^{-1} (x-\mu) (x-\mu)^T]] \\
&= \text{Tr}[\Sigma^{-1} \mathbb E_{x\sim p}[(x-\mu) (x-\mu)^T]] \\
&= \text{Tr}[\Sigma^{-1} \Sigma] \\
&= \text{Tr}[I_d] \\
&= d.
\end{align}
$$
ここで、[トレースと期待値が可換](../2025-04-05-trace-expectation-commutativity)であることを利用した。
したがって、
$$
\begin{align}
\text{KL}(p\|q)
&= -h(p) + \frac{d}{2}\log(2\pi) + \frac{1}{2}\log\det \Sigma + \frac{1}{2}d \\
&= -h(p) + \frac{1}{2} \log \det(2\pi e \Sigma) \\
&= -h(p) + h(q) \\
&\geq 0.
\end{align}
$$
よって $h(p) \leq h(q)$ が成り立つ。
これは、平均 $\mu$、分散共分散行列 $\Sigma$ が既知の確率密度 $p(x)$ の中で最大のエントロピーを持つものは正規分布 $\mathcal N(x|\mu,\Sigma)$ の密度 $q(x)$ であることを示している。
また、$h(p)=h(q)$ が成り立つとき、KL ダイバージェンスが $0$ となるので、KL ダイバージェンスの性質から $p=q$ となり、最大のエントロピーを達成するのは正規分布 $\mathcal N(x|\mu,\Sigma)$ の密度 $q(x)$ のみである。

$\square$

## References

- <https://en.wikipedia.org/wiki/Differential_entropy>
- <https://en.wikipedia.org/wiki/Multivariate_normal_distribution>
- <https://en.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence>

---
