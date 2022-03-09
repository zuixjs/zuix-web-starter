---
layout: side_drawer.liquid
tags: documentation
group: documentation
options: mdl highlight
theme: indigo-deep_purple
order: 30
title: Material Design tags
description: Material Design Light liquid tags
icon: auto_stories
imageCover: https://picsum.photos/seed/docs!03/960/640
imagePreview: https://picsum.photos/seed/docs!03/640/560
imagePreviewMini: https://picsum.photos/seed/docs!03/256/256
keywords:
- Material
- Design
- Light
- MDL
---

As an example, this web starter template includes [Material Design Lite](https://getmdl.io/components/) controls, implemented as
*zuix.js* [components](https://zuixjs.org/pages/documentation/component), that can be rendered using the following liquid [Liquid](https://shopify.dev/api/liquid) tags.   


## Liquid tags

<a name="Basic_button"></a>
### Basic button

{% zx 'button' '#test-link-1' %}
Basic
{% endzx %}

{% raw %}
```liquid
{% zx 'button' '#test-link-1' %}
Basic
{% endzx %}
```
{% endraw %}

<a name="Colored_button"></a>
### Colored button

{% zx 'button' '#test-link-1' 'raised' 'colored' %}
Colored
{% endzx %}

{% raw %}
```liquid
{% zx 'button' '#test-link-1' 'raised' 'colored' %}
Colored
{% endzx %}
```
{% endraw %}

<a name="Flat_button"></a>
### Flat button

{% zx 'button' '#test-link-2' 'flat' 'accent' %}
Click Me
{% endzx %}

{% raw %}
```liquid
{% zx 'button' '#test-link-2' 'flat' %}
Click Me
{% endzx %}
```
{% endraw %}

<a name="Floating_action_buttons"></a>
### Floating action buttons

{% zx 'button' '#test-link-3' 'fab' 'accent' %}
<i class="material-icons">mail</i>
{% endzx %}

{% raw %}
```liquid
{% zx 'button' '#test-link-3' 'fab' 'accent' %}
<i class="material-icons">mail</i>
{% endzx %}
```
{% endraw %}

{% zx 'button' '#test-link-3' 'fab' 'mini-fab primary' %}
<i class="material-icons">home</i>
{% endzx %}

{% raw %}
```liquid
{% zx 'button' '#test-link-3' 'fab' 'mini-fab primary' %}
<i class="material-icons">home</i>
{% endzx %}
```
{% endraw %}

<a name="Menu_button"></a>
### Menu button

{% zx 'menu' 'icon' 'accent' %}
- [Option 1](#test1)
- [Option 2](#test2)
- [Option 3](#test3)
{% endzx %}

{% raw %}
```liquid
{% zx 'menu' 'fab' 'accent' %}
- [Option 1](#test1)
- [Option 2](#test2)
- [Option 3](#test3)
{% endzx %}
```
{% endraw %}

<a name="Cards"></a>
### Cards


{% layout 'rows center-spread' 'style="overflow-x:hidden"' %}

  {% zx 'card' 'The bridge' 'https://picsum.photos/id/392/256/256' '' '#link-to-somewhere' 'image' %}
  {% endzx %}
    
  {% zx 'card' 'Sweet mornings' 'https://picsum.photos/id/110/320/176' 'Take me there' '#link-to-somewhere' 'square' %}
  A wonderful serenity has taken possession of my entire soul,
  like these sweet mornings of spring which I enjoy with my whole heart.
  {% endzx %}
  
  {% zx 'card' 'Blind texts' 'https://picsum.photos/id/33/420/172' 'Show me' '#link-to-somewhere' %}
  Far far away, behind the word mountains, far from the countries
  Vokalia and Consonantia, there live the blind texts.
  {% endzx %}

{% endlayout %}

{% raw %}
```liquid
{% layout 'rows center-spread' %}

  {% zx 'card' 'The bridge' 'https://picsum.photos/id/392/256/256' '' '#link-to-somewhere' 'image' %}
  {% endzx %}

  {% zx 'card' 'Sweet mornings' 'https://picsum.photos/id/110/320/176' 'Show me' '#link-to-somewhere' 'square' %}
  A wonderful serenity has taken possession of my entire soul,
  like these sweet mornings of spring which I enjoy with my whole heart.
  {% endzx %}
  
  {% zx 'card' 'Blind texts' 'https://picsum.photos/id/33/420/172' 'Show me' '#link-to-somewhere' %}
  Far far away, behind the word mountains, far from the countries
  Vokalia and Consonantia, there live the blind texts. 
  {% endzx %}

{% endlayout %}
```
{% endraw %}


### Menu overlay

{% zx 'menu-overlay' %}
- [Basic button](#Basic_button) home
- [Colored button](#Colored_button) wb_sunny 
- [Flat button](#Flat_button) add
- [Floating action buttons](#Floating_action_buttons) smart_button
{% endzx %}

{% raw %}
```liquid
{% zx 'menu-overlay' %}
- [Basic button](#Basic_button) home
- [Colored button](#Colored_button) wb_sunny 
- [Flat button](#Flat_button) add
- [Floating action buttons](#Floating_action_buttons) smart_button
{% endzx %}
```
{% endraw %}


## Adding more tags


// TODO: ...


{% layout 'column top-left' 'style="overflow-x:hidden"' %}
{% unpre %}
```html
<label ctrl z-load="@lib/controllers/mdl-checkbox">
    Hello world
    <input type="checkbox">
</label>
```
{% endunpre %}
{% endlayout %}
