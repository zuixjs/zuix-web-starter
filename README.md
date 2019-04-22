# zUIx Web Starter

zuix web starter is a web bundler and progressive web app (PWA) generator
with static-site features and component oriented development based on [zuix.js](https://zuixjs.github.io/zuixjs.org).


## Featuring

- zuix.js web components and app bundler
- Static Site
    * Front-Matter
    * Data Files
    * Helpers
    * Collections
    * Templates
- LESS to CSS compiling
- ESLint .js code linting
- Minifier
- Progressive Web App generator (PWA)


## zuix web starter examples

- https://genielabs.github.io/homegenie-web-ui
- https://zuixjs.org
- https://zuixjs.github.io/zkit
- https://zuixjs.github.io/zuix-web-book

## Other zuix web app examples

The following examples are not based on `zuix-web-starter` and do not require
any build tool (just a browser) but can be integrated into `zuix-web-starter`
just by copying files from `source` folder.

- https://zuixjs.github.io/zuix-html-pwa
- https://zuixjs.github.io/zuix-net-flix


## Prerequisites

This project requires [Node.js/npm](https://www.npmjs.com/get-npm) to be installed.


## Installation

Download or clone this repository

     git clone https://github.com/zuixjs/zuix-web-starter.git
     cd zuix-web-starter

Install development dependencies and run initial build

    npm install && npm run build

## Usage

Start local web server

    npm start

Start auto-build script (watch file tree for changes and auto-rebuild)

    npm run build && npm run watch

Or manual building

    npm run build

website source files are located in the `./source` folder and are
generated in the `./docs` folder.
This setting can be changed by modifying the `./config/default.json` file.

### Configuration options

The default configuration is read from `config/default.json`:

```json
{
  "zuix": {
    "build": {
      "input": "./source",
      "output": "./docs",
      "copy": [
        "app",
        "css",
        "images",
        "js",
        ".nojekyll",
        "manifest.json",
        "manifest.webapp",
        "humans.txt",
        "favicon.ico",
        "robots.txt"
      ],
      "ignore": [
        "_inc"
      ],
      "compile": [
        "html",
        "less",
        "css",
        "js",
        "md",
        "svg"
      ],
      "prettyUrl": false,
      "less": true,
      "eslint": true,
      "bundle": {
        "js": false,
        "css": false,
        "zuix": false
      },
      "minify": {
        "disable": true,
        "collapseWhitespace": true,
        "removeOptionalTags": true,
        "removeRedundantAttributes": true,
        "removeScriptTypeAttributes": true,
        "removeTagWhitespace": true,
        "useShortDoctype": true,
        "collapseBooleanAttributes": true,
        "removeAttributeQuotes": true,
        "removeEmptyAttributes": true,
        "minifyCSS": true,
        "minifyJS": true
      }
    },
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
    npm run build # (or watch)

### zuix.build

The `build` configuration object implements the following fileds.

###### `input`

Input folder: where source files are located.

###### `output`

Output folder: where to copy/generate site files.

###### `copy`

List of folders and files to copy as-is, from input to output folder,
with no further processing.

###### `ignore`

List of folder and files to ignore.

###### `compile`

List of file types to parse and generate (comma separated list of
file extensions without the dot).

###### `prettyUrl`

Enable pretty urls. For example, if you have a file called
`about.html` it will be built to `about/index.html`,
so that it can be linked just as `/about`.

###### `bundle`

Compile external resources as inline and pack them into the application bundle.

- `js` (true/false) bundle scripts (`<script .. />`)
- `css` (true/false) bundle styles (`<link rel="stylesheet"  .. />`)
- `zuix` (true/false) bundle zUIx components and contents loaded via `data-ui-include` or `data-ui-load` attributes.
Add the attribute `data-o-markdown="true"` to post-process loaded content with [MarkDown](http://demo.showdownjs.com/) parser.

###### `minify`

To enable minification set `minify.enable` to `true`. See all available options
from [html-minifier](https://github.com/kangax/html-minifier) repository.

###### `less`

Set `true` to enable compile of `.less` files to `.css`.
Configuration is read from `.lessrc.json` file.

###### `eslint`

Set `true` to enable JavaScript error checking/reporting with *ESLint*.
Configuration is read from `.eslintrc.json` file.

### zuix.app

The application settings object can also contain user-defined fields
that can be then recalled inside app pages using *double angulars*
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
│   ├── _inc/            # Static-Site includes (eg. header.html, footer.html)
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

The **_inc** folder is reserved for **static-site** content fragments that are
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

Find out all other *static-site* commands and functionality from its
[documentation page](https://github.com/paulcpederson/static-site#how).

The **app** folder is reserverd for **zUIx** components and templates that
are loaded using the `data-ui-load` and `data-ui-include` attributes.
See *zuix* [Getting Started](https://zuixjs.github.io/zuix/#/docs)
guide for documentation about how to apply templates and how to create/use
components. The name of this folder (*app*) is defined by the
`zuix.app.resourcePath` configuration setting.

The **images** folder should be reserved for all graphic resources that
are shared and are usually referenced by more than a single page or component.

It is recommended to put component-local or content-local resources inside
a dedicated subfolder.

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
- **Static Site** https://github.com/paulcpederson/static-site
- **LESS** http://lesscss.org/features/
- **ESLint** https://eslint.org/docs/user-guide/getting-started
- **HTML-minifier** https://github.com/kangax/html-minifier
- **Node-config** http://lorenwest.github.io/node-config/
