# zUIx Web Starter

Starter project for component oriented web development.


### Featuring

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


### Prerequisites

This project requires [Node.js/npm](https://www.npmjs.com/get-npm) to be installed.


### Usage

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

#### Configuration options

The default configuration is read from `config/default.json`

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
      "libraryPath": "//genielabs.github.io/zkit/lib",
      "googleSiteId": "UA-123-456"
    }
  }
}
```

to use a different configuration file (eg. `config/production.json`):

    export NODE_ENV=production
    npm run build # (or watch)

##### `zuix.build.input`

Input folder, where source files are located.

##### `zuix.build.output`

Output folder, where to copy/generate site files.

##### `copy`

List of folder and files to copy as-is, from input to output folder,
with no further processing.

##### `ignore`

List of folder and files to ignore.

##### `compile`

List of file types to parse and generate (comma separated list of
file extensions without the dot).

##### `less`

Set `true` to enable compile of `.less` files to `.css`.
Configuration is read from `.lessrc.json` file.

##### `eslint`

Set `true` to enable JavaScript error checking/reporting with *ESLint*.
Configuration is read from `.eslintrc.json` file.


### Site Structure

`// TODO: ... examples and folders structure clues`

```
├── /source/              #
│   ├── /_inc/            # Static-Site includes (eg. header.html, footer.html)
│   ├── /app/             #
│   ├────── /components/  # UI components
│   ├───*!* /content/     # Pages, articles, images and other resources.
│   ├────── /controllers/ # UI controllers
│   ├────── /templates/   # UI templates
│   ├── /images/          # Images (generic)
│   └── /...              # Landing/Home page, PWA service worker, SEO, etc.
```


##### Resources and Docs

- **zUIx** http://zuix.it
- **Static Site** https://github.com/paulcpederson/static-site
- **LESS** http://lesscss.org/features/
- **ESLint** https://eslint.org/docs/user-guide/getting-started
- **Node-config** http://lorenwest.github.io/node-config/
