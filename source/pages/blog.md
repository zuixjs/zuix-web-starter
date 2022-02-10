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
<label>Blog</label>

<div layout="rows center-spread">
{%- for post in collections.posts_blog -%}

{% zx 'card' post.data.title 'https://picsum.photos/256/256' 'Open' '#link-to-somewhere' 'image' %}
{{ post.data.description }}
{% endzx %}
    
{%- endfor -%}
</div>
```
{% endunpre %}
