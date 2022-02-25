---
layout: basic.html
tags: templates
options: 
icon: pages
order: 2
theme: 
title: Basic template
description: My second blog post...
keywords:
- blog
- lifestyle
---

Basic template.

## This is just a test

The quick brown fox jumped over the lazy dog.

---

{% unpre %}
```html
<label>Docs</label>
<ul>
    {%- for post in collections.posts_docs -%}
    {% assign match = page.url | split:post.url %}
    <li {% if match[0] == blank %} aria-current="page"{% endif %}>
        <a href="{{ post.url | url }}">
            <div layout="row center-lett">
                <i class="material-icons">{{ post.data.icon }}</i>
                <span>{{ post.data.title }}</span>
            </div>
        </a>
    </li>
    {%- endfor -%}
</ul>
```
{% endunpre %}

---

{% unpre %}
```html
<label>Blog</label>
<ul>
    {%- for post in collections.posts_blog -%}
    {% assign match = page.url | split:post.url %}
    <li {% if match[0] == blank %} aria-current="page"{% endif %}>
        <a href="{{ post.url | url }}">
            <div layout="row center-lett">
                <i class="material-icons">{{ post.data.icon }}</i>
                <span>{{ post.data.title }}</span>
            </div>
        </a>
    </li>
    {%- endfor -%}
</ul>
```
{% endunpre %}
