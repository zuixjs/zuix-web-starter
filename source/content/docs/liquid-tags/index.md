---
layout: basic.liquid
options: highlight ext-links
tags: docs
group: docs
order: 30
coverPreview: /content/docs/liquid-tags/images/cover-preview.png
coverImage: ./images/cover.png
coverUrl: https://artsandculture.google.com/asset/the-starry-night-vincent-van-gogh/bgEuwDxel93-Pg
title: Liquid tags and short codes
description: About liquid template language and short codes
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

[Short codes](https://11ty.dev/docs/shortcodes/) are used to process rendered content or as a handy way to output reusable
content and even components, without having to deal with HTML nor JavaScript.  
They can be used in any template file: Markdown, Liquid, Nunjucks, JavaScript, Handlebars.

## Web starter short codes

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

The `zx` short code is used to render HTML fragments or components based on dynamically loaded tag templates.
Tag templates are loaded from the `./templates/tags` folder, and they consist of simple and small JavaScript code that
renders the requested tag.

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

Any custom tag can be implemented by just adding a `./templates/tags/<custom_tag_name>.js` file. For example, this is the
code of **./templates/tags/media-browser.js** used in the previous example:

```js
{% raw %}
const template = `
<div z-load="@lib/components/media-browser" class="visible-on-ready" z-lazy="true"
     {% for o in config['options'] -%}
     data-o-{{ o.option }}="{{ o.value }}"
     {%- endfor -%}>
    <div #media>
    {%- for media in config['media'] %}
      <article data-type="{{ media.type }}" slide-interval="{{ media.interval }}">
        <h1 #title>{{ media.title | striptags }}</h1>
        <h2 #description>{{ media.description | striptags }}</h2>
        <img #preview src="{{ media.preview }}"><br>
        <a #url href="{{ media.url }}">Open media</a>
      </article>
    {%- endfor %}
    </div>
</div>
`;
const YAML = require('yaml');
module.exports = (render, config) => {
  config = YAML.parse(config);
  return render(template, {config});
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

These two tags adds to a CSS style and HTML fragment, the required attributes so that the CSS style will be only applied
to the given HTML fragment (scoped CSS).
Can also be used together with the `include` shortcode to load the style and the HTML fragment from external files.

{% raw %}
```liquid
{% wrapDom '<fragment_id>' %}
... HTML fragment ...
{% endwrapDom %}
<style>
{% wrapCss '<fragment_id>' [<encapsulate>] %}
... CSS styles ...
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
