#!/usr/bin/env nu

let TARGET_DIR = "src/content/blog"

# ファイル処理
def main [] {
    let md_files = glob $"($TARGET_DIR)/**/*.md"
    
    $md_files | each { |file|
        let content = open $file 
        | str replace -a '，' '、' 
        | str replace -a '．' '。'
        
        $content | save -f $file
        echo $"処理完了: ($file)"
    }
}

