---
layout: side_drawer.liquid
tags: documentation
group: documentation
options: mdl highlight
theme: indigo-deep_purple
order: 20
title: Pages layout and options
description:
icon: mood
imageCover: https://picsum.photos/seed/docs!02/960/640
imagePreview: https://picsum.photos/seed/docs!02/640/560
imagePreviewMini: https://picsum.photos/seed/docs!02/256/256
keywords:
- Material
- Design
- Light
- MDL
---

As described in the previous chapter, pages content is placed in the `./source/pages` folder, and it's implemented as `.md` files, though any of
the [supported template language](https://www.11ty.dev/docs/languages/) can be used.  
In any case, the [front matter](https://www.11ty.dev/docs/data-frontmatter/) data is used to select the page layout that will wrap the content,
and other options as shown in the example below:

```yaml
---
layout: side_drawer.liquid
tags: blog
group: blog
options: mdl highlight
order: 2
icon: star_outline
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

### `layout`

The following page layouts are available at this time:
- **`landing_page`**  
a simple splash screen used for the main page (`./source/index.liquid`). 
- **`side_drawer`**  
a page with a responsive *Navigation Drawer* layout, like the one used by this very page.

#### Adding a custom layout

Layouts are located in the `./source/_inc/layouts` folder. A layout consist of an `.liquid` file and, when required, also
a folder with the same base name of the layout template file, containing any additional files required for the layout implementation.

To add a new layout, simple add a `<layout_name>.liquid` file to the *layouts* folder, it can be then selected like the other
layout templates, by specifying its name in the `layout` field of page's front matter.  


The `./source/_inc` folder, is instead used to place common page's bits that can be reused across different layout implementations:
 
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

// TODO: ...

### `group`

// TODO: ...

### `options`

- **`mdl`**  
  use [Material Design Light](https://getmdl.io/components/index.html) styles.
- **`highlight`**  
  include Prims code highlighter.
- **`no-title`**  
  do not include page title
- **`no-footer`**  
  do not include common footer

When using `mdl` style, also the **`theme`** variable can be added to the front matter for specifying the [material theme](https://getmdl.io/customize/index.html) to be used
(e.g. `indigo-pink`, `amber-green`, etc...).

These options are implemented in the include file `./source/_inc/head_open.liquid`, which hosts all stylesheets and scripts
required by the page.  
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

Set pages listing order, that is mainly used for rendering navigation links and content listing menus, like the one in the
side drawer menu of this page.

### `icon`

Icon associated to the page. This icon is currently shown next to the page name in the side drawer's menu of the `side_drawer` layout.

### `imagePreviewMini`

The 256x256 preview image to be used in cards list, like the ones used [here](../../../home).

### `title`

The page title.

### `description`

The page description that will also be added to the page's metadata.

### `pubDate`

The date to show as publishing date. This field has the precedence over `order` field when sorting pages collections.

### `keywords`

A list of keywords that identify this page. Keywords are used by internal search and are also added to page's metadata
for search engines as some of them might still use meta keywords for indexing.


## Custom `liquid` tags

About {% raw %}`{% unpre %}` / `{% endunpre %}`{% endraw %} tag.

Sometimes it will happen to use `HTML` code in a markdown `.md` file, in which case the liquid tags {% raw %}`{% unpre %}` / `{% endunpre %}`{% endraw %}
can be used to wrap the `HTML` code inside a preformatted block, so that it will be actually recognized as HTML and the
editor will highlight the code correctly.

About {% raw %}`{% layout %}`{% endraw %} tag for implementing flex containers.

// TODO: ...

