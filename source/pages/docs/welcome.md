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
a simple splash screen used for the main page (`./source/index.html`). 
- **`basic`**  
a basic page layout.
- **`side_drawer`**  
a page with a responsive *Navigation Drawer* layout, like the one used by this very page.

#### Adding a custom layout

Layouts are located in the `./source/_inc/layouts` folder. A layout consist of an `.html` file and, when required, also
a folder with the same base name of the template file, containing any additional files required for the layout implementation.

To add a new layout, simple add a `<layout_name>.html` file to the *layouts* folder, it can be then selected like the other
layout templates, by using the `<layout_name>` in the `layout` field in the front matter of you pages.  


The `./source/_inc` folder, also contains other bits that are usually included in an HTML document:
- `head_open.html`  
  This file contains the initial part of the `HTML` document with `head` section and styles/scripts inclusion. 
- `head_close.html`  
  This file just contains the `</head>` closing tag, any custom code can be added to the `head` section in the layout  
  template before this closing tag 
- `footer.html`  
  The common footer placed at the end of the page's content.
- `body_end.html`  
  This file can be used to place any common content or script before the end of the `body`  
- `html_close.html`  
  This file contains just the `</html>` closing tag.


**Example of a minimal layout template:**  
`./source/_inc/layouts/my-new-layout.html` 
```html
{% raw %}
{% include "head_open.html" %}
<style>
{% include "layouts/my-new-layout/style.css" %}
</style>
{% include "head_close.html" %}
<body>

{{ content | safe }}

{% include "body_end.html" %}
</body>
{% include "html_close.html" %}
{% endraw %}
```


### `options`

- **`mdl`**  
  use [Material Design Light](https://getmdl.io/components/index.html) styles.
- **`pico-css`**  
  use [Pico.css](https://picocss.com/) styles.
- **`highlight`**  
  include Prims code highlighter.
- **`no-title`**  
  do not include page title
- **`no-footer`**  
  do not include common footer

The styles `mdl` and `pico-css` are mutually exclusive.  
When using `mdl` style, also the **`theme`** variable can be added to the front matter for specifying the [material theme](https://getmdl.io/customize/index.html) to be used
(e.g. `indigo-pink`, `amber-green`, etc...).  
When using `pico-css` the **`theme`** variable can be either `dark` or `light`.  

These options are used in the include file `./source/_inc/head_open.html`, which hosts all stylesheets and scripts required by the page.
Custom options can also be implemented in this file to toggle other frameworks and utilities.

#### Adding custom options

For example, `bootstrap` option can be added with the following code: {% raw %}
```liquid
{% if options contains 'bootstrap' %}
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
{% endif %}
```
{% endraw %}

### `order`

Set pages listing order, that is mainly used for rendering navigation links and content listing menu. 

### `icon`

Icon associated to the page. This icon is currently shown next to the page name in the side drawer's menu of the `side_drawer` layout.

### `title`

The page title.

### `description`

The page description that will also be added to the page's metadata.

### `keywords`

A list of keywords that identify this page. Keywords are used by internal search and are also added to page's metadata
for search engines as some of them might still use meta keywords for indexing.


---
---

```html
// TODO: this documentation is a work in progress, to be completed soon.... stay tuned! =) 
```

---
---


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

Generic use and framework-agnostic components with examples.... (drawer, context-menu, gesture helper...)
// TODO: referencing components remotely (e.g. @lib) / creating a local copy


## Compiling for production

// TODO: ... about `baseUrl` etc...
