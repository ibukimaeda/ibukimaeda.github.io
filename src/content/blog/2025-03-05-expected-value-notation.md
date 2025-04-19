---
title: "期待値の表記"
description: "期待値の表記方法をまとめました。確率変数Xと関数fに対する期待値の異なる表記を解説し、分布Pに基づく期待値の計算方法を示します。"
pubDate: 2025-03-05
tags: [
    "Mathematics",
    "Probability Theory",
    "Machine Learning",
]
draft: false
---

期待値の表記が複数あるので忘れたときのためにメモ。

分布 $P$ に従う確率変数 $X:\Omega\to\mathbb R$ と関数 $f:\mathbb R\to\mathbb R$ に対して、$f(X)$ の期待値は以下のように表記される。

$$
\mathbb E[f(X)]
= \mathbb E_{X\sim P}[f(X)]
= \int f(x) P(dx)
= \int f(x) dP(x)
= \int f dP
= P(f)
$$

また、$X:\Omega\to[0,\infty]$ のとき

$$
\mathbb E[X] = \int_0^\infty P(X\geq x) dx
$$

---
