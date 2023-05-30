---
layout: basic.liquid
options: highlight ext-links
tags: docs
group: docs
order: 20
coverPreview: ./images/cover-preview.webp
coverImage: ./images/cover.webp
coverUrl: https://artsandculture.google.com/asset/the-starry-night-vincent-van-gogh/bgEuwDxel93-Pg
title: Liquid tags and shortcodes
description: About liquid template language and shortcodes
author: Gene
pubDate: 2022-04-05
keywords:
- zuix
- web starter
- liquid
- tags
- template
- shortcodes
- zx
- rawFile
- unpre
- layout
---

[Shortcodes](https://11ty.dev/docs/shortcodes/) can be used to process rendered content or as a handy way to output reusable
fragments of content, and even web components, without having to deal with HTML or JavaScript.  

## Web starter shortcodes

### layout

This tag outputs a `div` with the given [Flex Layout Attributes](https://progressivered.com/fla/).
It's mainly intended wrap and format `zx` shortcode output.

{% raw %}
```liquid
{% layout '<flex_layout_attributes>' ['<element_attr_1>' ... '<element_attr_n>'] %}
    (content)
{% endlayout %}
```
{% endraw %}

**Example:**
{% raw %}
```liquid
{% layout 'row center-center' 'style="gap: 12px"' %}
    {% zx 'button' '#test-link-1' %} Button 1 {% endzx %}
    {% zx 'button' '#test-link-2' %} Button 2 {% endzx %}
{% endlayout %}
```
{% endraw %}

##

{% layout 'row center-center' 'style="gap: 12px"' %}
{% zx 'button' '#test-link-1' %}Button 1{% endzx %}
{% zx 'button' '#test-link-2' %}Button 2{% endzx %}
{% endlayout %}


### zx

The `zx` shortcode is used to render HTML fragments or components based on user-defined tag templates.
Tag templates are loaded from the `./templates/tags` folder, and they consist of simple and small JavaScript
code that usually renders reusable bits.

{% raw %}
```liquid
{% zx '<tag_name>' ['<tag_option_1>' ... <tag_option_n>] %}
(optional content / configuration)
{% endzx %}
```
{% endraw %}

In the previous example the tag `button` is loaded from [`./templates/tags/button.js`](https://github.com/zuixjs/zuix-web-starter/blob/master/templates/tags/button.js). The first option for this button tag
is the anchor name or URL to be opened when the button is clicked (`#test-link-1` in this case).

For more `zx` tags examples see also:

- [zKit components tags](https://zuixjs.github.io/web-app/content/docs/zkit-components-tags/)
- [Material Design tags](https://zuixjs.github.io/web-app/content/docs/material-design-tags/)


#### Adding custom zx tags

A custom tag can be implemented by adding a `<custom_tag_name>.js` file to the `./templates/tags/` folder.  
For instance, the following code is the **./templates/tags/button.js** used in the previous example:

```js
{%- raw -%}
const template = `<a class="button" href="{{ linkUrl | safe }}">
  {{ content }}
</a>`;

module.exports = (render, content, linkUrl) => {
  return render(template, {content, linkUrl});
};
{% endraw %}
```


### rawFile

This tag can be used to include normalized `HTML` fragments inside `.md` files without further processing from Markdown engine.

{% raw %}
```liquid
{% rawFile "<file_path>" %}
```
{% endraw %}


### unpre

Sometimes can happen to use `HTML` code in a Markdown `.md` file, and this tag can be used to wrap the `HTML` code inside a preformatted block,
so that it will be actually recognized as HTML and the editor will highlight the code correctly. It's just an aesthetic hack to make your eyes happier
if the editor is not highlighting the HTML markup.

**Example:**
{% raw %}
```liquid
{% unpre %}
'''html
<div style="color: purple">Hello World!</div>
'''
{% endunpre %}
```
{% endraw %}


### wrapDom / wrapCss

These two tags will add to a CSS and HTML fragments, the required code so that the CSS will be only applied
to those HTML fragments defined inside `wrapDom` having the same `<fragment_id>` (scoped CSS).  
This can also be used with the `include` shortcode, to load the CSS and HTML fragments from external files.

**Syntax:**
{% raw %}
```liquid
{% wrapDom '<fragment_id>' %}
  <!-- HTML fragment -->
{% endwrapDom %}
<style>
{% wrapCss '<fragment_id>' [<encapsulate>] %}
  /* CSS fragment */
{% endwrapCss %}
</style>
```
{% endraw %}

**Example:**
{% raw %}
```liquid
<h3>Global scope H3</h3>

{% wrapDom 'test-fragment' %}
<div>
    <h3>Fragment scope H3</h3>
</div>
{% endwrapDom %}

<style>
{% wrapCss 'test-fragment' %}
:host {
    text-align: center;
}
h3 {
    color: deeppink;
}
{% endwrapCss %}
</style>
```
{% endraw %}
<h3>Global scope H3</h3>
{% wrapDom 'test-fragment' %}
<div>
    <h3>Fragment scope H3</h3>
</div>
{% endwrapDom %}
<style>
{% wrapCss 'test-fragment' %}
:host { text-align: center; }
h3 { color: deeppink }
{% endwrapCss %}
 </style>
