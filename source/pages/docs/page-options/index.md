---
layout: side_drawer.liquid
options: mdl highlight ext-links
theme: indigo-deep_purple
tags: documentation
group: documentation
order: 1
title: Page options
description: Front matter data, layout and other page options.
icon: tune
imagePreviewMini: https://picsum.photos/seed/docs=03/256/256
pubDate: 2022-03-07 09:34:14
keywords:
- Quick
- Start
- Getting started
- zuix
- CLI
- Install
- Server
- Build
- Publish
- Production
- Default
---

In addition to the `zuix-web-starer` base [options](https://zuixjs.github.io/zuix-web-starter/page-editing-and-options/), the following options are available. 

## Front matter data

### `layout`

Available layouts:
- **`landing_page`**  
  a simple splash screen used for the main page (`./source/index.liquid`) and that redirects to the home page (`./source/home.liquid`).
- **`side_drawer`**  
  a page with a responsive *navigation drawer* layout, like the one used by this very page.

### `options`

- **`mdl`**  
  use [Material Design Light](https://getmdl.io/components/index.html) styles.
- **`highlight`**  
  include Prims code highlighter.
- **`ext-links`**  
  open external links in a new window
- **`no-title`**  
  do not include page title
- **`no-footer`**  
  do not include common footer

When using `mdl` style, also the **`theme`** variable can be added to the front matter for specifying the [material theme](https://getmdl.io/customize/index.html) to be used
(e.g. `indigo-pink`, `amber-green`, etc...).

### `icon`

Icon associated to the page. This icon is currently shown next to the page name in the side drawer's menu of the `side_drawer` layout.

### `imagePreviewMini`

A 256x256 preview image to be used in cards list, like the ones used in the [home page](../../../home).


## Components

This `web-app` template is a component based application that takes advantages of [zuix.js](https://zuixjs.org) library, a very versatile and 
fast library for creating components.

The following components are used:
- **Side Drawer** with adaptive layout, that works both on mobile and desktop devices, supporting touch gestures
- **Auto-hiding header**, to allow a full immersive experience while reading pages on small screens
- **Menu overlay**, that can be used to quickly navigate within a page content, and that auto hides when the page is scrolled
- **Scroll helper**, used in some of the above components to handle page scroll events, and that can eventually  
be used to "watch" elements position and trigger events as they become visible on screen
- **Gesture detector**, used in various components to detect gestures 
- **Material Design** buttons, menu and cards, that can be also rendered using [liquid tags](../material-design-tags)

All the above components are part of [zKit](https://zuixjs.github.io/zkit/) library, a library of components built with *zuix.js*.  
To learn more about how to create and load components, see [zuix.js](https://zuixjs.org) website.


## Files structure in brief

Template engine folders:
```
./source/_data     # data folder
./source/_filters  # filters
./source/_inc      # includes and layouts
```

*zuix.js* components folders:
```
./source/app  # user-defined components
./source/lib  # copy of zKit components
```

Global asset files and folders:
```
./source/images
./source/js
./browserconfig.xml
./favico.ico
./humans.txt
./manifest.json
```

Site search index and SEO:
```
./source/search-index.json.njk  # search-index builder script
./source/robots.njk
./source/sitemap.njk            # sitemap generator script
```

Main pages:
```
./source/home.liquid   # home page
./source/index.liquid  # landing page
```

Content pages:
```
./source/pages
```
