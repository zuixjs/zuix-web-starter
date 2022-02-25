---
layout: side_drawer.html
tags: templates
group: templates
options: pico-css highlight
icon: pages
order: 2
theme: dark
title: pico.css
description: My very first blog post description...
keywords:
- blog
- lifestyle
- template
- pico.css
---

## Title

Sint sit cillum pariatur eiusmod nulla pariatur ipsum. Sit laborum anim qui mollit tempor pariatur nisi minim dolor.
Aliquip et adipisicing sit sit fugiat commodo id sunt. 

### Another title

Nostrud enim ad commodo incididunt cupidatat in ullamco ullamco
Lorem cupidatat velit enim et Lorem. Ut laborum cillum laboris fugiat culpa sint irure do reprehenderit culpa occaecat.

Hello World! =)

> “Dorothy followed her through many of the beautiful rooms in her castle.
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.”


## <a name="Lists"></a>Lists

### Ordered List

1. Longan
2. Lychee
3. Excepteur ad cupidatat do elit laborum amet cillum reprehenderit consequat quis.
   Deserunt officia esse aliquip consectetur duis ut labore laborum commodo aliquip aliquip velit pariatur dolore.
4. Marionberry
5. Melon
    - Cantaloupe
    - Honeydew
    - Watermelon
6. Miracle fruit
7. Mulberry

### Unordered List

- Olive
- Orange
    - Blood orange
    - Clementine
- Papaya
- Ut aute ipsum occaecat nisi culpa Lorem id occaecat cupidatat id id magna laboris ad duis. Fugiat cillum dolore veniam nostrud proident sint consectetur eiusmod irure adipisicing.
- Passionfruit

## Code

```go
package main

import (
    "fmt"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hi there, I love %s!", r.URL.Path[1:])
}

func main() {
    http.HandleFunc("/", handler)
    http.ListenAndServe(":8080", nil)
}
```

## Media

[![Manny Pacquiao](https://img.youtube.com/vi/JfVOs4VSpmA/0.jpg)](https://youtu.be/JfVOs4VSpmA)

