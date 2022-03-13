---
layout: side_drawer.liquid
tags: documentation
group: documentation
options: mdl highlight
theme: indigo-deep_purple
order: 30
title: Short codes
description: Custom tags, short codes
icon: short_text
imageCover: https://picsum.photos/seed/docs!03c/960/640
imagePreview: https://picsum.photos/seed/docs!03c/640/560
imagePreviewMini: https://picsum.photos/seed/docs!03c/256/256
keywords:
- Shortcodes
- Liquid
- Tags
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
```html
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

// TODO: ...



### Adding more tags


// TODO: ...


{% layout 'column top-left' 'style="overflow-x:hidden"' %}
{% unpre %}
```html
<label ctrl z-load="@lib/controllers/mdl-checkbox">
    Hello world
    <input type="checkbox">
</label>
```
{% endunpre %}
{% endlayout %}

