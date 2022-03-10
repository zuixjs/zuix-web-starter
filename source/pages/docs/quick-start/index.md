---
layout: side_drawer.liquid
tags: documentation
group: documentation
options: mdl highlight
theme: indigo-deep_purple
order: 1
title: Quick Start
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

- [Install Node.js](https://nodejs.org/en/download/) version 12 or higher
- Install `zuix-cli`, command-line tool:  
```shell
npm install -g zuix-cli
```


## Creating a new project

To create a new web-starter project enter the following command:

```shell
zx new my-webapp
```

the new project structure will be created in the folder *my-webapp*.

Change directory to the new project folder:  

```shell
cd my-webapp
```

## Starting development server

The development server will listen by default on port `8080` and serve files from the build folder `./docs`.
It will also watch for file changes in the `./source` folder and build them as required, automatically refreshing the browser
page.

```shell
zx start
```

Once started you can open the web browser and load the website using the access URLs given in the console output.

```shell
[Browsersync] Access URLs:
 -----------------------------------
    Local: http://localhost:8080
 External: http://192.168.1.50:8080
 -----------------------------------
[Browsersync] Serving files from: docs
[Browsersync] Watching files...
```

The main project folder is the `./source` folder, where all website source files are located. In particular, the
`./source/pages` folder, contains all website pages that are implemented as text files that use [**Markdown**](https://www.markdownguide.org/getting-started/) syntax,
and that will contain just the main content of the page. All other structural and layout parts of the page will be compiled
automatically by the development server.


## Managing content

Included with this web starter you will also find these documentation pages that can be removed by *deleting* content in the
`./source/pages/docs` folder. This can be done also using the `zx` CLI:

```shell
zx wipe-docs
```

Anyway, the documentation is also available online on this web-starter [demo site](https://zuixjs.github.io/zuix-web-starter/).


### Adding a new page

Pages are organized into sections. For example these documentation pages, are grouped under the "Documentation" section,
as shown on the left side drawer.

![Side Drawer](./images/side_drawer.png)

Sections and pages can be easily added with the following command:

```shell
zx add -s <section_name> -n <page_name> -fm "<field>: <value>"
```

Where the `-s` option is used to specify the name of the section under with the new page will be grouped, while the `-n`
option is used to specify the name of the page.
Both name must be *file-name* friendly, the [kebab-case](https://en.wikipedia.org/wiki/Letter_case#Kebab_case)
convention is adopted here.
Optionally it's also possible to specify [front matter data](../pages-layout) using the `-fm` option.

For example, the following code will add a new page in a section called "blog":

```shell
zx add -s blog -n my-first-blog-post -fm "options: mdl highlight"
```

![Side Drawer](./images/side_drawer_section.png)

The new page file will be `./source/pages/blog/my-first-blog-post/index.md`, and the `blog` folder will be automatically created
if it doesn't exist. The `blog` folder will also have an `index.liquid` file that just contains front matter data of the section,
and that can be used to customize the title and the display order in the homepage.


## Components

// TODO: describe components used in this web-starter

See [zuix.js](https://zuixjs.org/pages/documentation/cli/) website for info about how to create and load components.


## Compiling for production

// TODO: ... about `baseUrl` etc...


## About Sitemap and internal search

// TODO: ...
