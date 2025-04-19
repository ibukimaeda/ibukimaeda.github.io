---
title: "リプシッツ連続"
description: "リプシッツ連続の定義と性質を解説。距離空間におけるリプシッツ連続性、具体的な例、合成関数の性質について詳しく説明します。"
pubDate: 2025-03-12
tags: [
    "Mathematics",
]
draft: false
---


## 定義

距離空間 $(\mathcal{X}, d_X)$ と $(\mathcal{Y}, d_Y)$ の間の写像 $f: \mathcal{X} \to \mathcal{Y}$ が**リプシッツ連続**であるとは、ある実数 $K \geq 0$ が存在し、すべての $x, x' \in \mathcal{X}$ に対して以下が成り立つことを指します：
$$
d_Y(f(x), f(x')) \leq K \cdot d_X(x, x')
$$
この条件を満たす最小の $K$ を**リプシッツ定数**と呼び、$\text{Lip}(f) = K$ と表記します。リプシッツ定数は、関数の「変化率の最大値」を数学的に定式化したものです。

## $f:\mathbb{R}\to\mathbb{R}$ の場合のリプシッツ連続性

$f: \mathbb{R} \to \mathbb{R}$ がリプシッツ連続であるためには、ある $K \geq 0$ が存在し、任意の $x, x' \in \mathbb{R}$ に対して以下が成り立つ必要があります：
$$
|f(x) - f(x')| \leq K \cdot |x - x'|
$$
$f$ が微分可能な場合、$x' = x+h\:(h\neq0)$ とすると
$$
\left| \frac{f(x+h) - f(x)}{h} \right| \leq K
$$
が成り立ち、$h \to 0$ とすることで導関数が $K$ 以下であることがわかります。
$$
f'(x) \leq K
$$

## ユークリッド空間における具体表現

$\mathcal{X} = \mathbb{R}^n$ かつ $\mathcal{Y} = \mathbb{R}^m$ の場合、$p$-ノルムを用いたリプシッツ定数は以下のように表現されます：
$$
\text{Lip}_p(f) = \sup_{x \neq x'} \frac{\|f(x) - f(x')\|_p}{\|x - x'\|_p}
$$
この式は、関数の出力変化量と入力変化量の比の上限を捉えています。特に $p=2$（ユークリッドノルム）の場合、幾何学的には勾配の最大傾きに対応します。

## 微分可能性とヤコビ行列

$f: \mathbb{R}^n \to \mathbb{R}^m$ が微分可能な場合、リプシッツ定数はヤコビ行列 $J_f(x)$ の作用素ノルムで特徴付けられます：
$$
\text{Lip}_p(f) = \sup_{x \in \mathbb{R}^n} \|J_f(x)\|_p = \sup_{x \in \mathbb{R}^n} \left( \sup_{\|y\|_p=1} \|J_f(x) y\|_p \right)
$$
ここで $\| J_f(x) \|_p$ は行列の誘導ノルムを表します。

## 合成関数の性質

リプシッツ連続関数 $f$ と $g$ の合成 $f \circ g$ について、以下の不等式が成立します：
$$
\text{Lip}(f \circ g) \leq \text{Lip}(f) \cdot \text{Lip}(g)
$$
これは、合成後の関数の変化率が元の関数の変化率の積で抑えられることを意味します。

## 具体例

1. **定数関数**：$\text{Lip}(f) = 0$  
2. **恒等関数**：$\text{Lip}(f) = 1$  
3. **$f(x) = \sin x$**：$\text{Lip}(f) = 1$（導関数の最大値）  
4. **$f(x) = x^2$ の区間 $(0,4)$**：$\text{Lip}(f) = 8$（端点での導関数の最大値）

## References

- [The Lipschitz Constant of Self-Attention](https://proceedings.mlr.press/v139/kim21i/kim21i.pdf)

---
