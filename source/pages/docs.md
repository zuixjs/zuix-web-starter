---
layout: side_drawer.html
options: mdl
theme: indigo-pink
order: 1
icon: home
title: Blog section
description: Example blog section
keywords:
- Blog
---

{% unpre %}
```html
<label>Docs</label>

<div layout="rows center-spread">
{%- for post in collections.posts_docs -%}

{% assign imageUrl = 'https://picsum.photos/seed/docs-' | append: forloop.index0 | append: '/256/256' %}

{% zx 'card' post.data.title imageUrl 'Open' '#link-to-somewhere' 'image' %}
{{ post.data.description }}
{% endzx %}

{%- endfor -%}
</div>
```
{% endunpre %}

