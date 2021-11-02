# zUIx Web Starter

Starter project for component oriented web development with [zuix.js](https://zuixjs.github.io/zuixjs.org) and [Eleventy](https://www.11ty.dev).

## Featuring

- zuix.js web components
- Eleventy static site generator
    * Multiple template languages
    * Templates
    * Front matter and external data files
- LESS to CSS compiling
- Minifier
- Progressive Web App (PWA)


## Prerequisites

This project requires [Node.js/npm](https://www.npmjs.com/get-npm) &gt;= v10 to be installed.


## Installation

Download or clone this repository

     git clone https://github.com/zuixjs/zuix-web-starter.git
     cd zuix-web-starter

Install development dependencies

    npm install

## Usage

Start local web server and watch for file changes

    npm start

website source files are located in the `./source` folder and are
generated in the `./build` folder.
This can also be done by issuing `Eleventy` command directly:
```
npx @11ty/eleventy --incremental --serve
```

See [Eleventy](https://11ty.dev) static site generator website for complete documentation.

### Configuration options

The default configuration is read from `config/default.json`:

```json
{
  "zuix": {
    "build": {
      "input": "./source",
      "output": "./build"
    },
    "copy": [
      "app",
      "css",
      "images",
      "js",
      ".nojekyll",
      "browserconfig.xml",
      "manifest.json",
      "humans.txt",
      "favicon.ico",
      "robots.txt"
    ],
    "includesFolder": "_inc",
    "app": {
      "title": "zUIx Web Starter application.",
      "resourcePath": "/app/",
      "libraryPath": {
        "@lib": "https://zuixjs.github.io/zkit/lib/",
        "@hgui": "https://genielabs.github.io/homegenie-web-ui/app/",
        "@cdnjs": "https://cdnjs.cloudflare.com/ajax/libs/"
      },
      "googleSiteId": "UA-123-456"
    }
  }
}
```

to use a different configuration file (eg. `config/production.json`):

    export NODE_ENV=production
    npm start

### zuix.build

The `build` configuration object implements the following fileds.

###### `input`

Input folder: where source files are located.

###### `output`

Output folder: where to copy/generate site files.

###### `copy`

List of folders and files to copy as-is, from input to output folder,
with no further processing.

###### `includesFolder`

Folder where to lookup for includes.

### zuix.app

The application settings object can also contain user-defined fields
that can be then recalled inside app pages using *double braces*
(eg. `{{app.title}}` will be replaced with `zuix.app.title` value).

###### `resourcePath`

Path where application resources are located (components, templates, etc..).

###### `libraryPath`

Path where components prefixed by (`@lib://`) are located. By default
the `@lib://` prefix will point to [zKit](https://zuixjs.github.io/zkit) library components.
The `libraryPath` property can also define more than one library source each of whose
having a different prefix starting with `@`.

**Example**

```
"libraryPath": {
  "@lib": "https://zuixjs.github.io/zkit/lib/",
  "@hgui": "https://genielabs.github.io/homegenie-web-ui/app/",
  "@cdnjs": "https://cdnjs.cloudflare.com/ajax/libs/"
}
```

## Site Structure

The following are just guide-lines for structuring a *zuixjs* web app.

```
├── source/              #
│   ├── _inc/            # Eleventy includes (eg. header.html, footer.html)
│   ├── app/             # zUIx app folder
│   ├────── components/  # - UI components
│   ├────── controllers/ # - UI controllers
│   ├────── templates/   # - UI templates
│   ├────── content/     # - Content fragments conveniently
│   │                    #   organized into subfolders
│   ├── images/          # Images (generic/shared)
│   └── ...              # Landing/Home and other main pages,
.   .                    #  PWA service worker, SEO, etc.
```

The **_inc** folder is reserved for **Eleventy** content fragments that are
reusable fragments of page that can be included by using the
`{% include "<file_to_include>" %}` command.

The following example shows how the main `source/index.html' file includes
common stuff that is usually put in the header and before the end of
the body of all pages:


```html
{% include "_inc/head_open.html" %}
    <link rel="stylesheet" href="index.css">
    <!-- put any custom content that goes inside `<head>` here -->
{% include "_inc/head_close.html" %}
<body>

    <header>
        ...
    </header>

    <main>
        ...
    </main>

    <footer>
        ...
    </footer>

    <script src="index.js"></script>
{% include "_inc/body_end.html" %}
</body>
{% include "_inc/html_close.html" %}
```

Find out all other *Eleventy* commands and functionality from its
[documentation page](https://11ty.dev/docs).

The **app** folder is reserved for **zUIx** components and templates that
are loaded using the `z-load` and `z-include` attributes.
See *zUIx* [Getting Started](https://zuixjs.github.io/zuix/#/docs)
guide for documentation about how to apply templates and how to create/use
components. The name of this folder (*app*) is defined by the
`zuix.app.resourcePath` configuration setting.

The **images** folder should be reserved for all graphic resources that
are shared and are usually referenced by more than a single page or component.

It is recommended to put component-local or content-local resources inside
a dedicated sub-folder.

For instance, a `app/components/login_dialog` component will consist
of the following files/folder:
```
├── source/
│   ├── app/
│   ├────── components/
│   ├────────── login_dialog.js     # Controller
│   ├────────── login_dialog.html   # View
│   ├────────── login_dialog.css    # Style
│   ├────────── login_dialog/       # Folder where to put
.   .                               #  component-local assets/resources
```

as an example see the *Media Browser* component structure in the
[zKit repository](https://github.com/zuixjs/zkit/tree/master/source/lib/components).


## Resources and Docs

- **zuix.js** https://zuixjs.org
- **Eleventy** https://11ty.dev
