---
title: latex で制約を2行に分ける
description: ""
pubDate: 2025-03-10
tags: [
    "tex"
]
draft: false
---

$$
\underset{\substack{f,g \\ f(x)-g(y)\le\|x-y\|_2\:\forall x,y}}{\sup}
$$

のように制約を2行に分けたい場合は，`\substack` を使う．

```latex
\underset{\substack{制約1 \\ 制約2}}{\sup}

\underset{\substack{f,g \\ f(x)-g(y)\le\|x-y\|_2\:\forall x,y}}{\sup}
```

$$
\sum_{\substack{i=1 \\ i\neq j}}^{n} a_{ij}
$$

のように `\sum` などでも使える．

```latex
\sum_{\substack{i=1 \\ i\neq j}}^{n} a_{ij}
```

## References

- <https://medemanabu.net/latex/substack/>

---
