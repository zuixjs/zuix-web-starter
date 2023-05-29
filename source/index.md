---
layout: basic.liquid
options: highlight ext-links no-title
order: 0
title: Home
description: About this web starter and how to get started with it.
keywords:
- zuix
- web starter
- home
---

# Hello world!

Welcome to *zuix-web-starter*, a basic starter template based on [11ty](https://www.11ty.dev/)
static site generator and [zuix.js](https://zuixjs.org) for component based web development.

**Features**

- Content sections and pages supporting *FrontMatter*, *Markdown* and *Liquid* syntax
- Customizable tags for rendering components using simple text <small>(no HTML, no JS code!)</small> - [example](https://zuixjs.github.io/web-app/content/docs/zkit-components-tags/#media_browser)
- Supports assets mirroring and resource bundling
- Live editing with embedded content editor
- Integrated page indexing and search engine <small>(client-side)</small>
- Customizable light/dark themes


## Content

<ul>
{% for section in collections.sections %}
    {%- if section.url != page.url -%}
    <li>
        <a href="{{ section.url | url }}">{{ section.data.title }}</a>
    </li>
    {%- endif %}
{% endfor %}
</ul>

## Other templates

{% include "fragments/starter-links.liquid" %}
{% include "fragments/zuix-funding.liquid" %}
