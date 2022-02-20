---
layout: side_drawer.html
options: mdl highlight
theme: indigo-pink
order: 20
icon: auto_stories
title: MDL Examples
description: Material Design Light examples
keywords:
- Material
- Design
- Light
- MDL
---

## Liquid tags


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



---
---

```html
// TODO: this documentation is a work in progress, to be completed soon.... stay tuned! =) 
```

---
---



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

