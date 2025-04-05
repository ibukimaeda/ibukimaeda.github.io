---
title: "ランダム行列のトレースと期待値の可換性"
description: "ランダム行列のトレースと期待値が可換であることを解説します。"
pubDate: 2025-04-05
tags: [
    "Linear Algebra",
    "Probability Theory",
]
draft: false
---

ランダム行列のトレースの期待値は、行列のトレースを取った後に期待値を計算することと、期待値を取った後にトレースを計算することが等しいという性質を持っています。
$$
\mathbb{E}[\text{Tr}(A)] = \text{Tr}(\mathbb{E}[A]).
$$
この性質は、トレースと期待値がともに線形演算であることに基づいています。

## トレースと期待値の定義

トレース (Trace) は行列の対角成分の総和として定義されます。具体的には、$n \times n$ 行列 $A = [a_{ij}]$ のトレースは次のように表されます：
$$
\text{Tr}(A) = \sum_{i=1}^{n} a_{ii}.
$$

期待値 (Expectation) は確率変数の平均値を表します。確率変数 $X$ の期待値は次のように定義されます：
$$
\mathbb{E}[X] = \sum_{x} x P(X = x),
$$

ここで $P(X = x)$ は $X$ が値 $x$ を取る確率です。
ランダム行列 $A$ の期待値は、各要素の期待値を取ることで計算されます：
$$
\mathbb{E}[A] = \begin{bmatrix}
\mathbb{E}[a_{11}] & \mathbb{E}[a_{12}] & \cdots & \mathbb{E}[a_{1n}] \\
\mathbb{E}[a_{21}] & \mathbb{E}[a_{22}] & \cdots & \mathbb{E}[a_{2n}] \\
\vdots & \vdots & \ddots & \vdots \\
\mathbb{E}[a_{n1}] & \mathbb{E}[a_{n2}] & \cdots & \mathbb{E}[a_{nn}]
\end{bmatrix}.
$$

## 証明

トレースと期待値の可換性を示すために、まずトレースの線形性を考えます。行列 $A$ のトレースは次のように表されます：
$$
\text{Tr}(A) = \sum_{i=1}^{n} a_{ii}.
$$
期待値を取ると：
$$
\mathbb{E}[\text{Tr}(A)] = \mathbb{E}\left[\sum_{i=1}^{n} a_{ii}\right] = \sum_{i=1}^{n} \mathbb{E}[a_{ii}].
$$
ここで、期待値の線形性を利用して、トレースの期待値は各対角成分の期待値の和になります。
次に、期待値を先に計算してからトレースを取ります。行列 $A$ の期待値は次のように表されます：
$$
\mathbb{E}[A] = \begin{bmatrix}
\mathbb{E}[a_{11}] & \mathbb{E}[a_{12}] & \cdots & \mathbb{E}[a_{1n}] \\
\mathbb{E}[a_{21}] & \mathbb{E}[a_{22}] & \cdots & \mathbb{E}[a_{2n}] \\
\vdots & \vdots & \ddots & \vdots \\
\mathbb{E}[a_{n1}] & \mathbb{E}[a_{n2}] & \cdots & \mathbb{E}[a_{nn}]
\end{bmatrix}.
$$
トレースを取ると：
$$
\text{Tr}(\mathbb{E}[A]) = \sum_{i=1}^{n} \mathbb{E}[a_{ii}].
$$
このように、トレースと期待値の順序を入れ替えても結果は同じになります。したがって、次の等式が成り立ちます：
$$
\mathbb{E}[\text{Tr}(A)] = \text{Tr}(\mathbb{E}[A]).
$$

$\square$
