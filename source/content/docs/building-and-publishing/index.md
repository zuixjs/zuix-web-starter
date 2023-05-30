---
layout: basic.liquid
options: highlight ext-links
tags: docs
group: docs
order: 10
coverPreview: ./images/cover-preview.webp
coverImage: ./images/cover.webp
coverUrl: https://artsandculture.google.com/asset/abstraction-marsden-hartley/7wGQVSmygTjslg
title: Building for production
description: Building for production and publishing online.
author: Gene
pubDate: 2022-04-05
keywords:
- zuix
- web starter
- building
- publishing
---

The build process will read the default configuration of the web application, from the file
[`./config/default.json`](https://github.com/zuixjs/zuix-web-starter/blob/master/config/default.json).  
This file contains, among the other options, the base url of the application that by default is `/`:

./config/**default.json**
```json
{
  "zuix": {
    ...
    ...
    "app": {
      "title": "My web application",
      "baseUrl": "/",
      ...
    }
  }
}
```

Depending on the hosting service where the application will be published, the base url might not be the root of the website,
like it happens for *GitHub* hosted pages, where the base url is the name of the project, unless custom domain is used:
```
https://<account_name>.github.io/<project_name>/
```
For this purpose, when building for production, a different configuration file is used with the proper base url set:

./config/**production.json**
```json
{
  "zuix": {
    ...
    ...
    "app": {
      "title": "My web application",
      "baseUrl": "/my-web-app/",
      ...
    }
  }
}
```

also, the `{% raw %}{{ app.baseUrl }}{% endraw %}` variable, if used in a template, will be replaced with the proper value depending on the selected
configuration.

So, to select the *production* configuration when building the web application, the environment variable `NODE_ENV` must be set to `production`:

```shell
NODE_ENV=production npx zuix build
```

it's also possible to simulate the production hosting when running the development server:

```shell
NODE_ENV=production npx zuix start
```

in which case, the application will be served at the url specified by `baseUrl` in the production configuration file.
