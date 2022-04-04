---
layout: basic.liquid
options: highlight ext-links
tags: docs
group: docs
order: 20
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

[Short codes](https://www.11ty.dev/docs/shortcodes/) are custom tags that can be used in JavaScript, Liquid, Nunjucks, Handlebars and also Markdown  templates,
since Liquid tags are also enabled in `.md` files.


## rawFile

This tag can be used to include normalized `HTML` fragments inside `.md` files without further processing from Markdown engine.

{% raw %}
```liquid
{% rawFile "<file_path>" %}
```
{% endraw %}


## unpre

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


## layout

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
{% layout 'row center-center' 'style="gap: 12px"' %}
{% zx 'button' '#test-link-1' %}Button 1{% endzx %}
{% zx 'button' '#test-link-2' %}Button 2{% endzx %}
{% endlayout %}


## zx

The `zx` shortcode is used to render HTML fragments or components based on dynamically loaded tag templates.
Tag templates are loaded from the `./templates/tags` folder, and they consist of simple and small JavaScript code that
renders the requested tag.

{% raw %}
```liquid
{% zx '<tag_name>' ['<tag_option_1>' ... <tag_option_n>] %}
(optional content)
{% endzx %}
```
{% endraw %}

In the previous example the tag `button` is loaded from `./templates/tags/button.js`. The first option for this button tag
is the anchor name / URL link to be opened when the button is clicked (`#test-link-1` in this case).

### Adding custom zx tags

Any custom tag can be implemented by just adding a `./templates/tags/<custom_tag_name>.js` file. For example, this is the
code of **./templates/tags/button.js** used in the previous example:

```js
{% raw %}
const template = `
<a class="button" href="{{ linkUrl | safe }}">{{ content | safe }}</a>`;

module.exports = (render, content, linkUrl) => {
  return render(template, {content, linkUrl});
};
{% endraw %}
```


## wrapDom / wrapCss

These two tags adds to a CSS style and HTML fragment, the required attributes so that the CSS style will be only applied
to the given HTML fragment only (scoped CSS).
Can also be used together with the `include` shortcode to load the style and the HTML fragment from external files.

{% raw %}
```liquid
{% wrapDom '<fragment_id>' %}
... HTML fragment ...
{% endwrapDom %}
{% wrapCss '<fragment_id>' <encapsulate> %}
... CSS styles ...
{% endwrapCss %}
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