---
layout: basic.liquid
options: highlight ext-links no-title
tags: sections
group: home
order: 0
title: Home
description: About this web starter and how to get started with it.
keywords:
- zuix
- web starter
- home
---

# Hello world!

Welcome to `zuix-web-starter`, code base of a set of ready to use templates powered by [zuix.js](https://zuixjs.org),
a lightweight library for creating components-based websites and applications.

## Contents

{% for section in collections.sections %}
    {%- if section.url != page.url -%}
        <h2>- <a href="{{ section.url | url }}">{{ section.data.title }}</a></h2>
    {%- endif %}
{% endfor %}


## Live editing component!

When browsing the site in development mode (`NODE_ENV !== 'production'`), the `zuix-editor` button will be always
visible in the lower right corner of every page.

Tap it to popup editing options, to add new pages and sections, edit or delete existing ones, directly in the browser. 


### Try `zuix-web-starter` on &gt;&gt; [StackBlitz](https://stackblitz.com/github/zuixjs/zuix-web-starter/?view=preview) &lt;&lt;
