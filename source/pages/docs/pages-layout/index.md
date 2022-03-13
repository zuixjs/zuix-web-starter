---
layout: side_drawer.liquid
tags: documentation
group: documentation
options: mdl highlight
theme: indigo-deep_purple
order: 20
title: Page layout and options
description: Page front matter, layout and options
icon: dashboard
imageCover: https://picsum.photos/seed/docs!02/960/640
imagePreview: https://picsum.photos/seed/docs!02/640/560
imagePreviewMini: https://picsum.photos/seed/docs!02/256/256
keywords:
- Front
- Matter
- Options
- Layout
- Page
---

Every page file contains [front matter](https://www.11ty.dev/docs/data-frontmatter/) data that is used to select the page layout that will wrap the content,
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
a simple splash screen used for the main page (`./source/index.liquid`) and that redirects to the home page (`./source/home.liquid`). 
- **`side_drawer`**  
a page with a responsive *navigation drawer* layout, like the one used by this very page.

#### Adding a custom layout

Layouts are located in the `./source/_inc/layouts` folder. A layout consist of a `.liquid` file and, when required, also
a folder with the same base name of the layout file, eventually containing additional files required for the layout implementation.

A new layout can be implemented by adding a `<layout_name>.liquid` file into the *layouts* folder, it can be then selected, like the other
layout templates, by specifying its name in the `layout` field of page's front matter.  


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
section (like this one), will have `documentation` value set both on the `group` and `tags` field. While the `tags` field
can contain multiple values, the `group` field can only contain one value.
This value is used also to implement navigation between pages belonging to the same content section.

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

#### Adding custom options

Custom options can also be added to toggle other frameworks and utilities.

For example, a `bootstrap` option can be implemented by adding the following code to the `./source/_inc/head_open.liquid` file: {% raw %}

```liquid
{% if options contains 'bootstrap' %}
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
{% endif %}
```
{% endraw %}

The `bootstrap` options can then be used in place of `mdl` option to select *Bootstrap CSS framework* instead.

### `order`

Set the listing order of the page, that is mainly used for rendering navigation links and content listing menus, like the one in the
side drawer menu of this page.

### `icon`

Icon associated to the page. This icon is currently shown next to the page name in the side drawer's menu of the `side_drawer` layout.

### `imagePreviewMini`

A 256x256 preview image to be used in cards list, like the ones used in the [home page](../../../home).

### `title`

The page title.

### `description`

The page description that will also be added to the page's metadata.

### `pubDate`

The date to show as publishing date. This field has the precedence over `order` field when sorting page collections.

### `keywords`

A list of keywords that identify this page. Keywords are used by internal search and are also added to page's metadata
for search engines as some of them might still use meta keywords for indexing.
