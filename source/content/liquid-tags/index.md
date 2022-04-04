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

The `zx` shortcode is used to render HTML fragments or components based on dynamically loaded tag templates.
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

In this other example a media browser component is entirely configured using just simple text (YAML formatted configuration):

```liquid
{%- raw -%}
{% zx 'media-browser' %}

media:

- type: image
  title: Some title
  description: Description of this image
  preview: https://picsum.photos/seed/docs-4/533/300
  url: https://picsum.photos/seed/docs-4/1600/900
  interval: 8000

- type: image
  title: Another title
  description: Second image description
  preview: https://picsum.photos/seed/docs-3/533/300
  url: https://picsum.photos/seed/docs-3/1600/900

- type: video
  preview: https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg
  url: https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4
  interval: 15000

- type: image
  preview: https://picsum.photos/seed/docs-1/533/300
  url: https://picsum.photos/seed/docs-1/1600/900

- type: video-yt
  preview: https://img.youtube.com/vi/IdtM6OPdaio/2.jpg
  url: IdtM6OPdaio
  interval: 15000

- type: image
  title: Yet another title
  description: One more image description 😇
  preview: https://picsum.photos/seed/docs-2/533/300
  url: https://picsum.photos/seed/docs-2/1600/900

options:

- option: slide
  value: 5000

- option: inline
  value: true

{% endzx %}
{% endraw -%}
```

##

The above code will output the [zKit media-browser](https://zuixjs.github.io/zkit/pages/components/media-browser/) component
configured with the provided media list:

##

{% zx 'media-browser' %}
media:
- type: image
  title: Some title
  description: Description of this image
  preview: https://picsum.photos/seed/docs-4/533/300
  url: https://picsum.photos/seed/docs-4/1600/900
  interval: 8000
- type: image
  title: Another title
  description: Second image description
  preview: https://picsum.photos/seed/docs-3/533/300
  url: https://picsum.photos/seed/docs-3/1600/900
- type: video
  preview: https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg
  url: https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4
  interval: 15000
- type: image
  preview: https://picsum.photos/seed/docs-1/533/300
  url: https://picsum.photos/seed/docs-1/1600/900
- type: video-yt
  preview: https://img.youtube.com/vi/IdtM6OPdaio/2.jpg
  url: https://youtu.be/IdtM6OPdaio
  interval: 15000
- type: image
  title: Yet another title
  description: One more image description 😇
  preview: https://picsum.photos/seed/docs-2/533/300
  url: https://picsum.photos/seed/docs-2/1600/900
options:
- option: slide
  value: 5000
- option: inline
  value: true
{% endzx %}


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
        <h1 #title>{{ media.title }}</h1>
        <h2 #description>{{ media.description }}</h2>
        <img #preview src="{{ media.preview | safe }}">
        <a #url href="{{ media.url | safe }}">Open media</a>
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
