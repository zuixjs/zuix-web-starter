---
layout: basic.liquid
options: highlight ext-links
tags: docs
group: docs
order: 0
title: Getting started
description: About this web starter and how to get started with it.
keywords:
- zuix
- web starter
- home
---

# Hello world!

Welcome to `zuix-web-starter`, code base of a set of ready to use templates based on [zuix.js](https://zuixjs.org),
a library for creating components-based websites and applications.


# Getting started

You can use this web-starter even with just basic knowledge about using the command-line shell and a text editor. 
If you have already some experience in programming, of course, a better choice would be a code editor or IDE.

## Prerequisites

- [Install Node.js](https://nodejs.org/en/download/) version 14 or higher
- Install `zuix`, command-line tool:

```shell
npx zuix
```


## Creating a new project

To create a new web-starter project enter the following command:

```shell
npx zuix new <project_name> [-t <template_name>]
```

Where `<project_name>` is the name of the new project and the optional parameter `-t` indicates the template to be used.

### Available templates

- **`zuix-web-starter`**  
  <small>The base starter, coming with a basic template with light/dark modes, collapsible header and FAB menu. It's the
  one used for this page.</small>
  - [source code](https://github.com/zuixjs/zuix-web-starter)
- **`news-blog`**  
  <small>A fully immersive template, suitable for publishing feeds of news or blog posts. With "Save for later" and share/print
  functionality, internal search engine and adaptive design that works very well on desktop screens too.</small>
  - [live demo](https://zuixjs.github.io/news-blog)
  - [source code](https://github.com/zuixjs/news-blog)
- **`web-app`**  
  <small>A typical mobile app layout, with side drawer, collapsible header, Material Design UI, internal search engine  
  and adaptive design that works very well on desktop screens too.</small>
  - [live demo](https://zuixjs.github.io/web-app)
  - [source code](https://github.com/zuixjs/web-app)

**Example**:

```shell
npx zuix new my-webapp -t news-blog
```

the new project structure will be created in the folder *my-webapp*.

Change directory to the new project folder:

```shell
cd my-webapp
```

## Starting the development server

The development server will listen by default on port `8080` and serve files from the build folder `./docs`.
It will also watch for file changes in the `./source` folder and build them as required, automatically refreshing the browser
page.

```shell
npx zuix start
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

The main project folder is the `./source` folder, where all website files are located. In particular, the `./source/pages` folder,
contains all website pages' content that are implemented as text files using [**Markdown**](https://www.markdownguide.org/getting-started/) syntax,
and that will contain just the main content of the page. All other structural and layout parts will be compiled
automatically by the development server.  


## Managing content

Included with web starters you will also find also example pages that can be removed by manually *deleting* the
`./source/pages` folder, or using the `zuix` CLI:

```shell
npx zuix wipe-content
```


### Adding a new page

Pages are organized into sections, and can be easily added with the following command:

```shell
npx zuix add -s <section_name> -n <page_name> -fm "<field>: <value>"
```

Where the `-s` option is used to specify the name of the section under which the new page will be grouped, while the `-n`
option is used to specify the name of the page.
Both names must be *file-name* friendly, the [kebab-case](https://en.wikipedia.org/wiki/Letter_case#Kebab_case)
convention is adopted here.
Optionally it's also possible to specify [front matter data](../pages-layout) using the `-fm` option.

For example, the following command will add a new page in a section called "blog", and it will enable code highlighting
for preformatted code blocks:

```shell
npx zuix add -s blog -n my-first-blog-post -fm "options: highlight"
```

The new content page file will be `./source/pages/blog/my-first-blog-post/index.md`, and the `blog` folder will be automatically
created if it doesn't exist. The `blog` folder will also have an `index.liquid` file that just contains front matter data
of the section, and that can be used to customize the title and the display order in the homepage.


## Files structure in brief

Template engine folders:
```
./source/_data     # data folder
./source/_filters  # filters
./source/_inc      # includes and layouts
```

*zuix.js* components folders:
```
./source/app  # user-defined components
./source/lib  # copy of zKit components
```

Global asset files and folders:
```
./source/images
./source/js
./browserconfig.xml
./favico.ico
./humans.txt
./manifest.json
```

Site search index and SEO:
```
./source/search-index.json.njk  # search-index builder script
./source/robots.njk
./source/sitemap.njk            # sitemap generator script
```

Main page:
```
./source/index.md
```


### Content folders

The main content folder is `./source/pages`. It's a good practice to have each page implemented with its own
folder and a `index.md` file in it. In the same folder can be placed other sub-folders for page-local assets, such as images.

```
./source/pages/travel/my-first-cruise/_inc/example.liquid
./source/pages/travel/my-first-cruise/images/picture1.png
./source/pages/travel/my-first-cruise/index.md
```

same applies also if a different format is used for the `index` file (`.liquid`, `.njk`, `.11ty.js`, `.html`, ...).  
Also the special sub-folder `_inc` can be used for page-local includes, that will be processed by the site generator
but not copied to the output folder.
