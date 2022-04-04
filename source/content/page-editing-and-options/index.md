---
layout: basic.liquid
options: highlight ext-links
tags: docs
group: docs
order: 10
title: Page editing and options
description: Layout, front matter options and custom liquid tags.
keywords:
- zuix
- web starter
- markdown
- template
---

# Page editing

As described in the previous chapter, content pages are simple text files implemented using [Markdown](https://www.markdownguide.org/) syntax,
and that have front matter data where is possible to specify the page layout to be used, metadata and other options for
the current content.

**Example:** `index.md`

```yaml
---
layout: basic.liquid
tags: blog
group: blog
options: highlight ext-links
order: 2
title: My page title
description: My page description (used for page metadata)
pubDate: 2022-02-12 12:22
keywords:
- Blog
- Lifestyle
- Travel
---

# Hello World!

Welcome to my blog about...

```


## Front matter data

As shown in the example above, front matter data is enclosed in a block delimited by the sequence: `---`. Inside this
block data can be specified in the form `<field_name>: <value>`, more specifically using the [YAML syntax](https://docs.fileformat.com/programming/yaml/).

The following is a list of fields that can be used in the front matter.

### `layout`

Sets the page layout to be used for the current content. Different page layouts are available depending on the starter
template that is being used. The base `zuix-web-starter` includes only one kind of page layout:
- `basic.liquid` <small>(the one used for this page)</small>

To see layouts from other starter templates, referrer to the documentation included in the [online demos](/#creating_new_project)
of each template. 


#### Adding a custom layout

Layouts are located in the `./source/_inc/layouts` folder. A layout consists of a [`.liquid`](https://shopify.dev/api/liquid) file and, when required, also
a folder with the same base name of the layout file, and that eventually contains additional files required for the
implementation.

So, a new layout can be implemented by creating a `<layout_name>.liquid` file into the *layouts* folder. It can be then selected,
like the other layout templates, by specifying its name in the `layout` field of page's front matter.


The `./source/_inc` folder, is also used to place common page's bits that can be reused across different layout implementations:

- `head_open.liquid`  
  This file contains the initial part of the `HTML` document with `head` section and styles/scripts inclusion.
- `head_close.html`  
  This file just contains the `</head>` closing tag, any custom code can be added to the `head` section in the layout  
  template before this closing tag
- `footer.liquid`  
  The common footer placed at the end of the page's content.
- `body_end.liquid`  
  This file can be used to place any common content or script before the end of the `body`
- `html_close.html`  
  This file contains just the `</html>` closing tag.


**Example of a minimal layout template:**

`./source/_inc/layouts/my-new-layout.liquid`
```liquid
{% raw %}
{% include "head_open.liquid" %}
<style>
{% include "./my-new-layout/style.css" %}
</style>
{% include "head_close.html" %}
<body>

{{ content | safe }}

{% include "body_end.liquid" %}
</body>
{% include "html_close.html" %}
{% endraw %}
```

### `tags`

Tags are keywords used to create collections of pages that can then be enumerated using these tags.

### `group`

The group indicates to which content section the page belongs to. For example, pages under the *documentation*
section (like this one), will have `docs` value set both on the `group` and `tags` fields. While the `tags` field
can contain multiple values, the `group` field can only contain one value.
This value is used, for instance, to implement navigation between pages belonging to the same content section.

### `options`

In addition to the following options, other options might be available depending on the template that is being used. 

- **`highlight`**  
  enable code highlighting
- **`ext-links`**  
  open external links in a new window
- **`no-footer`**  
  do not include common footer


#### Adding custom options

Custom options can also be added to toggle content blocks, frameworks and utilities.

For example, a `bootstrap` option can be implemented by adding the following code to the `./source/_inc/head_open.liquid` file: {% raw %}

```liquid
{% if options contains 'bootstrap' %}
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
{% endif %}
```
{% endraw %}

The `bootstrap` option can then be used to select *Bootstrap CSS framework* for a page.

### `order`

Set the listing order of the page, that is mainly used for rendering navigation links and content listing menus, like
the one in the footer of this page.

### `title`

The page title.

### `description`

The page description that will also be added to the page's metadata.

### `pubDate`

The date to show as publishing date. This field has the precedence over `order` field when sorting page collections.

### `keywords`

A list of keywords that identify this page. Keywords are used by internal search and are also added to page's metadata
for search engines as some of them might still use meta keywords for indexing.


## For advanced users

Beside the default settings and configuration described in these pages, it is possible to take advantage of all advanced
features provided by the site generator behind these *web starters*, which is *Eleventy*, *&laquo;a simpler
static site generator&raquo;*.  
For further insights about the *11ty* site generator and component-based web development with *zuix.js*, see the **Links**
section in the footer.
