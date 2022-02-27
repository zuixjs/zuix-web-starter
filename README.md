# `zuix.js` Web Starter

Starter project for component oriented web development with [zuix.js](https://zuixjs.github.io/zuixjs.org) and [Eleventy](https://www.11ty.dev).


## Featuring

- zuix.js web components
- Eleventy static site generator
    * Multiple template languages
    * Templates
    * Front matter and external data files
- LESS to CSS compiling
- Minifier
- Progressive Web App (PWA) scoring up to 99/100/100/100 in Lighthouse


## Prerequisites

This project requires [Node.js/npm](https://www.npmjs.com/get-npm) &gt;= v12 to be installed.


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
generated in the `./docs` folder.  
This can also be done by issuing `Eleventy` command directly:
```
npx @11ty/eleventy --serve
```

See [Eleventy](https://11ty.dev) static site generator website for complete documentation.


### Configuration options

The default configuration is read from `config/default.json`:

```json
{
  "zuix": {
    "build": {
      "input": "./source",
      "output": "./build",
      "copy": [
        "css",
        "images",
        ".nojekyll",
        "browserconfig.xml",
        "manifest.json",
        "humans.txt",
        "favicon.ico",
        "robots.txt"
      ],
      "ignore": [
        "_filters"
      ],
      "dataFolder": "_data",
      "includesFolder": "_inc",
      "componentsFolders": [ "app", "lib" ],
      "bundle": {
        "js": false,
        "css": false,
        "zuix": false
      },
      "serviceWorker": false,
      "minify": {
        "disable": true,
        "collapseWhitespace": true,
        "removeOptionalTags": true,
        "removeRedundantAttributes": true,
        "removeScriptTypeAttributes": true,
        "removeTagWhitespace": false,
        "useShortDoctype": false,
        "collapseBooleanAttributes": true,
        "removeAttributeQuotes": false,
        "removeEmptyAttributes": true,
        "minifyCSS": true,
        "minifyJS": true
      }
    },
    "app": {
      "title": "zUIx Web Starter application.",
      "subtitle": "Simple, yet powerful!",
      "baseUrl": "/",
      "resourcePath": "{{ app.baseUrl }}app/",
      "libraryPath": {
        "@lib": "https://zuixjs.github.io/zkit/lib/1.1/",
        "@hgui": "https://genielabs.github.io/homegenie-web-ui/app/",
        "@cdnjs": "https://cdnjs.cloudflare.com/ajax/libs/"
      },
      "siteMapUrl": "https://zuixjs.github.io/zuix-web-starter/",
      "googleSiteId": "UA-123-456"
    }
  }
}
```

to use a different configuration file (eg. `config/production.json`):

    export NODE_ENV=production
    npm start


### zuix.build

The `build` configuration object implements the following fields.

###### `input`

Input folder: where source files are located.

###### `output`

Output folder: where to copy/generate site files.

###### `copy`

List of folders and files to copy as-is, from input to output folder,
with no further processing.

###### `dataFolder`

Folder where to lookup for data files/script.

###### `includesFolder`

Folder where to lookup for template/layout includes.

###### `componentsFolder`

Folders where *zuix.js* components are located. These files cannot include any template language code, but just standard
*html*, *js* and *css* files should be placed here.

###### `bundle`

Whether to bundle scripts, styles and zuix.js components inside the generated page. External scripts and styles
will also be downloaded and embedded inside the generated page.

###### `serviceWorkder`

Whether to generate service worker for this project. This should only be enabled in *production* configuration. 

###### `minify`

To enable minification set `minify.enable` to `true`. See all available options from [html-minifier](https://github.com/kangax/html-minifier)
repository. This should be only enabled in *production* configuration.


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

The following are just guide-lines for structuring a *zuix.js* web app.

```
├── source/              #
│   ├── _data            # Eleventy data folder
│   ├── _filters         # Eleventy liquid filters
│   ├── _inc/            # Eleventy includes/layouts (eg. header.html, footer.html)
│   ├── app/             # zuix.js app folder
│   ├────── components/  # - UI components
│   ├────── controllers/ # - UI controllers
│   ├────── templates/   # - UI templates
│   ├── images/          # Images (generic/shared)
│   └── pages/           # Blog and other sections pages
|   .
|   index.html           # Landing page
.   .                    # PWA service worker, SEO, etc.
```

The **_inc** folder is reserved for **Eleventy** content fragments that are
reusable fragments of page that can be included by using the
`{% include "<file_to_include>" %}` command.

The following example shows how the main `source/index.html' file includes
common stuff that is usually put in the header and before the end of
the body of all pages:


```html
{% include "_inc/head_open.liquid" %}
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
{% include "_inc/body_end.liquid" %}
</body>
{% include "_inc/html_close.html" %}
```

Find out all other *Eleventy* commands and templates functionality from its [documentation page](https://11ty.dev/docs).

The **app** folder is reserved for **zuix.js** components and templates that
are loaded using the `z-load` attribute.
See *zuix.js* [Getting Started](https://zuixjs.github.io/zuix/#/docs)
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


## Resources and Docs

- **zuix.js** https://zuixjs.org
- **11ty** https://11ty.dev
- **zKit** https://zuixjs.github.io/zkit/
