---
layout: side_drawer.html
options: mdl
theme: green-pink
order: 0
icon: home
title: Home
description: zuix.js web starter home page
keywords:
- zuix
- web starter
- home
---

{% unpre %}
```html
<h2 class="mdl-color-text--primary">Docs</h2>
<div layout="rows center-center">
{%- for post in collections.posts_docs -%}

    {% assign imageUrl = 'https://picsum.photos/seed/docs-' | append: forloop.index0 | append: '/256/256' %}
    {% assign postUrl = post.url | url %}

    {% zx 'card' post.data.title imageUrl 'Open' postUrl 'image' %}
    {{ post.data.description }}
    {% endzx %}

{%- endfor -%}
</div>
```
{% endunpre %}


{% unpre %}
```html
<h2 class="mdl-color-text--primary">Blog</h2>
<div layout="rows center-center">
{%- for post in collections.posts_blog -%}

    {% assign imageUrl = 'https://picsum.photos/seed/blog-' | append: forloop.index0 | append: '/256/256' %}
    {% assign postUrl = post.url | url %}

    {% zx 'card' post.data.title imageUrl 'Open' postUrl 'square' %}
    {{ post.data.description }}
    {% endzx %}
    
{%- endfor -%}
</div>
```
{% endunpre %}
