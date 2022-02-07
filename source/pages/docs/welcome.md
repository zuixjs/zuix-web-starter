---
layout: side_drawer.html
options: mdl highlight
theme: indigo-pink
order: 10
icon: mood
title: Welcome!
description: Welcome to zuix.js web starter
keywords:
- Material
- Design
- Light
- MDL
---

This [web starter](https://zuixjs.github.io/zuix-web-starter/) is based on [zuix.js](https://zuixjs.org), a library for component-based web development, and [Eleventy](https://11ty.dev),
static site generator.


## Pages and Layouts

All pages are placed in the `./source/pages` folder. Pages can be implemented either as `.html` or `.md` files.
In both cases the [front matter](https://www.11ty.dev/docs/data-frontmatter/) data is used to select the page layout and other options.

```yaml
---
layout: side_drawer
options: mdl highlight
order: 2
icon: star_outline
title: My page title
description: My page description (used for page metadata)
keywords:
- Blog
- Lifestyle
- Travel
---

# Hello World!

Welcome to my blog about...

```

### `layout`

The following page layouts are available at this time:
- **`landing_page`**  
a simple splash screen used for the main page (`./source/index.md`). 
- **`basic`**  
a basic page layout.
- **`side_drawer`**  
a page with a responsive *Navigation Drawer* layout, like the one used by this very page.

### `options`

- **`mdl`**  
use [Material Design Light](https://getmdl.io/components/index.html) styles.
- **`pico-css`**  
use [Pico.css](https://picocss.com/) styles.
- **`highlight`**  
include Prims code highlighter.

The styles `mdl` and `pico-css` are mutually exclusive.
When using `mdl` style, also the **`theme`** variable can be added to the front matter for specifying the [material theme](https://getmdl.io/customize/index.html) to be used
(e.g. `indigo-pink`, `amber-green`, etc...).  
When using `pico-css` the **`theme`** variable can be either `dark` or `light`.

### `order`

// TODO: ...

### `icon`

// TODO: ...

### `title`

// TODO: ...

### `description`

// TODO: ...

### `keywords`

// TODO: ...



## Adding a new page

- manually
- using `zx` CLI

// TODO: ...


## Creating a component

- manually
- using `zx` CLI

// TODO: ...


## Custom `liquid` tags

About {% raw %}`{% unpre %}` / `{% endunpre %}`{% endraw %} tags.

Sometimes it will happen to use `HTML` code in a markdown `.md` file, in which case the liquid tags {% raw %}`{% unpre %}` / `{% endunpre %}`{% endraw %}
can be used to wrap the `HTML` code inside a preformatted block, so that it will be actually recognized as HTML and the
editor will highlight the code correctly.

// TODO: ...


## Components

Generic use and framework-agnostic components with examples.... (drawer, context_menu, gesture helper...)
// TODO: referencing components remotely (e.g. @lib) / creating a local copy


## Compiling for production

// TODO: ... about `baseUrl` etc...
