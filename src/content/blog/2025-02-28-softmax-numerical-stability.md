---
title: "softmax の数値安定性について"
description: "softmax関数の定義と数値安定性について解説。オーバーフロー問題を避けるための工夫として、最大値を引く手法を紹介。"
pubDate: 2025-02-28
tags: [
    "Mathematics",
    "Machine Learning"
]
draft: false
---


## Softmax の定義

$\text{softmax}:\mathbb R^d\to\mathbb R^d$ は次のように定義される。

$$
\text{softmax}(\mathbf{x})
= \frac{1}{\sum\limits_{i=1}^d\exp(x_i)}
\begin{bmatrix}
\exp(x_1) \\
\dots \\
\exp(x_d)
\end{bmatrix}
$$

この写像は、入力値を正のベクトルに変換し、全ての成分の合計が 1 になるように正規化する。
つまり、任意のベクトルを確率ベクトルへ移す写像。

## 数値的な問題

Softmax を計算する際、$\exp(x)$ を計算する必要があるため、$x$ の値が大きいとオーバーフローが発生しやすくなる。
例えば、以下のように softmax 関数を定義すると、$x$ の値が大きいときにオーバーフローが発生する。

```python
import numpy as np

def softmax(x):
    return np.exp(x) / np.sum(np.exp(x))

print(f"{softmax(np.array([0.5, 0.1, 0.2]))}")
>>> [0.41474187 0.27800979 0.30724834]

# オーバーフローが発生
print(f"{softmax(np.array([1000.0, 0.1, 0.2]))}")
>>> [nan  0.  0.]
```

## 数値安定性のための工夫

Softmax の数値安定性のために、任意の $C\in\mathbb R$ に対して以下が成り立つことを利用する。

$$
\begin{align*}
\text{softmax}(\mathbf{x})_j
&= \frac{\exp(x_j)}{\sum\limits_{i=1}^d\exp(x_i)} \\
&= \frac{\exp(-C)\exp(x_j)}{\exp(-C)\sum\limits_{i=1}^d\exp(x_i)} \\
&= \frac{\exp(x_j - C)}{\sum\limits_{i=1}^d\exp(x_i - C)} \\
\end{align*}
$$

ここで、$C = \max\limits_{i=1} x_i$ とすると任意の $j$ に対して $\exp(x_j - C)\le 1$ となり、オーバーフローを防ぐことができる。

```python
import numpy as np

def softmax_stab(x):
    C = np.max(x)
    return np.exp(x - C) / np.sum(np.exp(x - C))

print(f"{softmax_stab(np.array([0.5, 0.1, 0.2]))}")
>>> [0.41474187 0.27800979 0.30724834]

# オーバーフローが発生しない
print(f"{softmax_stab(np.array([1000.0, 0.1, 0.2]))}")
>>> [1. 0. 0.]
```
