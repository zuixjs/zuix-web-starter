# zUIx Web Starter

Starter project for component oriented web development.


## Featuring

- zUIx web components and app bundler
- Static Site
    * Front-Matter
    * Data Files
    * Helper
    * Collections
    * Templates
- LESS to CSS compiling
- ESLint .js code linting
- PWA (wip - resources pre-caching)


## Prerequisites

This project requires [Node.js/npm](https://www.npmjs.com/get-npm) to be installed.


## Usage

Download or clone this repository

     git clone https://github.com/genemars/zuix-web-starter.git
     cd zuix-web-starter.git

Install development dependencies

    npm install

Start local web server

    npm start

Start auto-rebuild script (watch file tree for changes and auto-rebuild)

    npm run watch

Manual building

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
      "less": true,
      "eslint": true
    },
    "app": {
      "title": "zUIx Web Starter application.",
      "resourcePath": "/app/",
      "libraryPath": "https://genielabs.github.io/zkit/lib",
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

Path where library (`lib://`) components are located. By default
points to [zKit](https://genielabs.github.io/zkit) components.


## Site Structure

The following are just guide-lines for app structuring.

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
│   └── ...              # Landing/Home and other entry pages,
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
are loaded using the `data-ui-load` and `data-ui-include`
attributes. See *zUIx* [Getting Started](https://genielabs.github.io/zuix/#/docs)
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
[zKit repository](https://github.com/genielabs/zkit/tree/master/source/lib/components).


## Resources and Docs

- **zUIx** http://zuix.it
- **Static Site** https://github.com/paulcpederson/static-site
- **LESS** http://lesscss.org/features/
- **ESLint** https://eslint.org/docs/user-guide/getting-started
- **Node-config** http://lorenwest.github.io/node-config/
