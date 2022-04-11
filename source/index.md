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

## How easy is using components with **zuix.js**?

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

- name: slide
  value: 5000

- name: inline
  value: true

{% endzx %}


The above component is loaded with the following code:


```yaml
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

- name: slide
  value: 5000

- name: inline
  value: true

{% endzx %}
{% endraw -%}
```

quite easy, isn't it? =)
