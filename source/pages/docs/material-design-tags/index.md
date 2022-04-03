---
layout: side_drawer.liquid
options: mdl highlight ext-links
theme: indigo-deep_purple
tags: documentation
group: documentation
order: 40
title: Material Design components
description: MDL short codes
icon: smart_button
imagePreviewMini: https://picsum.photos/seed/docs=74/256/256
keywords:
- Material
- Design
- Light
- MDL
- Short
- Codes
- Liquid
- Tags
---

This web starter template includes [Material Design Lite](https://getmdl.io/components/) components, implemented using
*zuix.js*, and that can be rendered using the following short codes.   


## Short codes

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
mail
{% endzx %}

{% raw %}
```liquid
{% zx 'button' '#test-link-3' 'fab' 'accent' %}
mail
{% endzx %}
```
{% endraw %}

{% zx 'button' '#test-link-3' 'fab' 'mini-fab primary' %}
home
{% endzx %}

{% raw %}
```liquid
{% zx 'button' '#test-link-3' 'fab' 'mini-fab primary' %}
home
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

<a name="Menu_overlay"></a>
### Menu overlay

This tag allows creating a Floating Button menu visible on the right lower corner of the page and that automatically
shows/hides when the page is scrolled. It's not an MDL component and it will work even without loading MDL library.

{% zx 'menu-overlay' %}
- [Basic button](#Basic_button) smart_button
- [Colored button](#Colored_button) smart_button 
- [Flat button](#Flat_button) smart_button
- [Floating action buttons](#Floating_action_buttons) add_circle_outline
- [Menu button](#Menu_button) menu
- [Cards](#Cards) dashboard
- [Menu Overlay](#Menu_overlay) list
{% endzx %}

{% raw %}
```liquid
{% zx 'menu-overlay' %}
- [Basic button](#Basic_button) smart_button
- [Colored button](#Colored_button) smart_button 
- [Flat button](#Flat_button) smart_button
- [Floating action buttons](#Floating_action_buttons) add_circle_outline
- [Menu button](#Menu_button) menu
- [Cards](#Cards) dashboard
- [Menu Overlay](#Menu_overlay) list
{% endzx %}
```
{% endraw %}
