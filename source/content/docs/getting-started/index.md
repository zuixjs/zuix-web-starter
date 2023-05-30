---
layout: basic.liquid
options: highlight ext-links
tags: docs
group: docs
order: 40
coverPreview: ./images/cover-preview.webp
coverImage: ./images/cover.webp
coverUrl: https://artsandculture.google.com/asset/the-dream-henri-rousseau/LwEt57AOdD6SGA
title: Getting started
description: Getting started with this template.
author: Gene
pubDate: 2022-04-05
keywords:
- zuix
- web starter
- liquid
- tags
- template
- shortcodes
- zx
- rawFile
- unpre
- layout
---

You can use this web-starter even with just basic knowledge about using the command-line shell and a text editor.
If you have already some experience in programming, of course, a better choice would be a code editor or IDE.

## Prerequisites

- [Install Node.js](https://nodejs.org/en/download/) version 14 or higher
- Install `zuix`, command-line tool:

```shell
npx zuix
```

<a name="creating_new_project"></a>
## Creating a new project

To create a new project enter the following command:

```shell
npx zuix new <project_name> [-t <template_name>]
```

Where `<project_name>` is the name of the new project and the optional parameter `-t` indicates the template to be used.

### Available templates

- **`zuix-web-starter`** <small>(default)</small>  
  <small>The base starter, coming with a basic template with light/dark modes, collapsible header and FAB menu. It's the
  one used for this page.</small>
    - [online demo](https://zuixjs.github.io/zuix-web-starter)
    - [source code](https://github.com/zuixjs/zuix-web-starter)
- **`news-blog`**  
  <small>A fully immersive template, suitable for publishing feeds of news or blog posts. With "Save for later" and share/print
  functionality, internal search engine and adaptive design that works very well on desktop screens too.</small>
    - [online demo](https://zuixjs.github.io/news-blog)
    - [source code](https://github.com/zuixjs/news-blog)
- **`web-app`**  
  <small>A typical mobile app layout, with side drawer, collapsible header, Material Design UI, internal search engine  
  and adaptive design that works very well on desktop screens too.</small>
    - [online demo](https://zuixjs.github.io/web-app)
    - [source code](https://github.com/zuixjs/web-app)

**Example**:

```shell
npx zuix new my-webapp -t news-blog
```

The above command will create the new project using the `news-blog` template. Files structure will be created in a folder
named *my-webapp*.

Change directory to the new project folder:

```shell
cd my-webapp
```

## Starting the development server

The development server will listen by default on port `8080` and serve files from the build folder `./docs`.
It will also watch for file changes in the `./source` folder, compile changed files as needed, and reload
the browser page automatically.

```shell
npx zuix start
```

Once the server started, you can open the web browser and load the website using the access URLs given in the console output.

```shell
[Browsersync] Access URLs:
 -----------------------------------
    Local: http://localhost:8080
 External: http://192.168.1.50:8080
 -----------------------------------
[Browsersync] Serving files from: docs
[Browsersync] Watching files...
```

The main project folder is the `./source` folder, where all website files are located. In particular, the `./source/content` folder,
contains all website content pages implemented as simple text files using [**Markdown**](https://www.markdownguide.org/getting-started/) syntax,
and that will contain just the main content of the page. All other structural and layout parts will be compiled
automatically by the development server.


## Managing content

Included with all web starters, you will also find example pages that can be removed by manually by *deleting* the
`./source/content` folder, or using the `zuix` CLI:

```shell
npx zuix wipe-content
```


### Adding a new page

Pages are organized into sections, and can be easily added with the following command:

```shell
npx zuix add -s <section_name> -n <page_name> [-fm "<field>: <value>"]
```

Where the `-s` option is used to specify the name of the section under which the new page will be grouped, while the `-n`
option is used to specify the name of the page. Both names must be *file-name* friendly, and the [kebab-case](https://en.wikipedia.org/wiki/Letter_case#Kebab_case) convention
is suggested, where names are only formed by lowercase letters and dashes to separate words.  
With the optional `-fm` option it's possible to specify [front matter data](../pages-layout) and it can be repeated to
allow adding multiple fields.

For example, the following command will add a new page in a section called "blog", and it will enable syntax highlighting
for preformatted code blocks:

```shell
npx zuix add -s blog -n my-first-blog-post -fm "options: highlight"
```

The new content page file will be `./source/content/blog/my-first-blog-post/index.md`, and the `blog` folder will be automatically
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
```

Global asset files and folders:
```
./source/css
./source/images
./source/js
./source/browserconfig.xml
./source/favico.ico
./source/humans.txt
./source/manifest.json
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

The main content folder is `./source/content`. It's a good practice to have each page implemented with its own folder and
a `index.md` file in it with the content of the page. In the same folder can then be placed other sub-folders for page-local
assets, such as images.

```
./source/content/travel/my-first-cruise/_inc/example.liquid
./source/content/travel/my-first-cruise/images/picture1.png
./source/content/travel/my-first-cruise/index.md
```

same applies also if a different format is used for the `index` file (`.liquid`, `.njk`, `.11ty.js`, `.html`, ...).  
Also the special sub-folder `_inc` can be used for page-local includes, that will be processed by the site generator
but not copied to the output folder.
