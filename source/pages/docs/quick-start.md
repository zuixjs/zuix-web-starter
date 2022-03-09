---
layout: side_drawer.liquid
tags: documentation
group: documentation
options: mdl highlight
theme: indigo-deep_purple
order: 1
title: QuickStart
description: Welcome to zuix.js web starter
icon: read_more
imageCover: https://picsum.photos/seed/docs!01/960/640
imagePreview: https://picsum.photos/seed/docs!01/640/560
imagePreviewMini: https://picsum.photos/seed/docs!01/256/256
pubDate: 2022-03-07 09:34:14
keywords:
- QuickStart
---

The only required knowledge to use this *web-starter*, is about basic use of the *Shell* and a simple text editor.
If you have already some experience in programming, of course, a better choice would be a *code editor* or *IDE*.


## Prerequisites

[Node.js](https://nodejs.org/en/download/) version 12 or higher is required to run this project.


## Installing

Install `zuix-cli` command-line tool:

```shell
npm install -g zuix-cli
```

Create a new web-starter project:

```shell
zx new my-webapp
```

the new project structure will be created in the folder *my-webapp*.

Change directory to the new project folder:  

```shell
cd my-webapp
```

## Starting development server

The development server will listen by default on port `8080` and serve files from the build folder (`./docs`).
It will also watch for file changes in the `./source` folder and build them as required automatically refreshing the browser
page.

```shell
zx start
```


## Folders structure in brief

The main project folder is the `./source` folder, where all website source files are located. In particular, the
`./source/pages` folder, contains all website pages.
For example, for this website we have:

```
pages/
  - docs/
      - index.liquid
      - material-deisgn-tags.md
      - pages-layout.md
      - quick-start.md (this very page)
```

Files with the `.md` extension, are text files that use [**Markdown**](https://www.markdownguide.org/getting-started/) syntax, a very simple way of writing content. 

// TODO: add brief descriptions of other folders


## Managing content

Included with this web starter you will also find these documentation pages that can be deleted by *erasing* content in the
`./source/pages` folder. This can be done also using the CLI with the following command:

```shell
zx wipe-content
```


### Adding a new page

Pages are organized in to sections. For example these documentation pages, are grouped under the "documentation" section,
as you can see on the left side drawer.

#### Using `zx` CLI

Using the `zx` tool is the quickest way to add new pages: 

```shell
zx add -s blog -n my-first-blog-post -fm "options: mdl highlight"
```

Where the `-s` option is used to specify the name of the section under with the new page will be grouped, while the `-n`
option is used to specify the name of the page. Both name must be *file-name* friendly, the [kebab-case](https://en.wikipedia.org/wiki/Letter_case#Kebab_case)
convention is adopted here.  
Optionally it's also possible to specify [front matter data](../pages-layout) using the `-fm` option.


#### Manually

Section and pages can also be added manually.
For example to add a "Blog" section with a post in it, follow these steps:

1. create a folder `./source/pages/blog`
2. create a `index.md` file in the `blog` folder.  
This file will contain the section data:
```yaml
---
layout: side_drawer.liquid
tags: sections
group: blog
order: 1
icon: newspaper
title: Blog
description: Blog section
keywords:
- Blog
---
```
3. create a `my-first-blog-post.md` file in the `blog` folder with the following content:
```yaml
---
layout: side_drawer.liquid
tags: blog
group: blog
options: mdl highlight
order: 1
icon: waving_hand
title: Hello World!
description: Just testing my first blog post
imagePreviewMini: https://picsum.photos/seed/random_img_01/256/256
keywords:
  - Blog
  - First post
  - Hello
---

This is my first blog post. =)
```


## Creating a component


// TODO: ...


## Compiling for production

// TODO: ... about `baseUrl` etc...


## About Sitemap and internal search

// TODO: ...
