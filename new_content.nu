#!/usr/bin/env nu

def main [filename?: string] {
    if ($filename | is-empty) {
        print "ファイル名を指定してください"
        exit 1
    }

    let date = (date now | format date "%Y-%m-%d")
    let filename = $"src/content/blog/($date)-($filename | str replace ' ' '-' | str downcase).md"

    mkdir src/content/blog

$"---
title: ($filename)
description: \"\"
pubDate: ($date)
tags: []
draft: false
---

## References

---
" | save -f $filename

    print $"作成しました: ($filename)"
}
