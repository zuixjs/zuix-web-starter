---
layout: side_drawer.html
title: MDL Examples
description: Material Design Light examples
keywords:
- Material
- Design
- Light
- MDL
---

## Liquid tags

{% raw %}
```liquid
{% zx 'button' '#test-link-1' %}
Test Button
{% endzx %}
```
{% endraw %}

{% zx 'button' '#test-link-1' %}
Test Button
{% endzx %}

{% raw %}
```liquid
{% zx 'button' '#test-link-1' 'raised' 'colored' %}
Test Button
{% endzx %}
```
{% endraw %}

{% zx 'button' '#test-link-1' 'raised' 'colored' %}
Test Button
{% endzx %}

{% raw %}
```liquid
{% zx 'button' '#test-link-2' 'flat' %}
Click Me
{% endzx %}
```
{% endraw %}

{% zx 'button' '#test-link-2' 'flat' 'accent' %}
Click Me
{% endzx %}

{% raw %}
```liquid
{% zx 'button' '#test-link-3' 'fab' 'accent' %}
<i class="material-icons">mail</i>
{% endzx %}
```
{% endraw %}

{% zx 'button' '#test-link-3' 'fab' 'accent' %}
<i class="material-icons">mail</i>
{% endzx %}

{% raw %}
```liquid
{% zx 'button' '#test-link-3' 'fab' 'mini-fab primary' %}
<i class="material-icons">home</i>
{% endzx %}
```
{% endraw %}

{% zx 'button' '#test-link-3' 'fab' 'mini-fab primary' %}
<i class="material-icons">home</i>
{% endzx %}

{% raw %}
```liquid
{% zx 'card' 'MDL card' 'https://picsum.photos/id/110/460/176' 'Show me' '#link-to-somewhere' %}
A wonderful serenity has taken possession of my entire soul,
like these sweet mornings of spring which I enjoy with my whole heart.
{% endzx %}
```
{% endraw %}


{% layout 'rows center-spread' %}
    
  {% zx 'card' 'MDL card' 'https://picsum.photos/id/110/460/176' 'Show me' '#link-to-somewhere' %}
  A wonderful serenity has taken possession of my entire soul,
  like these sweet mornings of spring which I enjoy with my whole heart.
  {% endzx %}
  
  {% zx 'card' 'MDL card' 'https://picsum.photos/id/33/460/176' 'Show me' '#link-to-somewhere' %}
  A wonderful serenity has taken possession of my entire soul,
  like these sweet mornings of spring which I enjoy with my whole heart.
  {% endzx %}

{% endlayout %}


---

.

.

.

{% zx 'menu' %}
- [Option 1](#test1)
- [Option 2](#test2)
- [Option 3](#test3)
{% endzx %}

.

.

.


{% unpre %}
```html

<label ctrl z-load="controllers/mdl_checkbox">
    Hello world
    <input type="checkbox">
</label>

```
{% endunpre %}

### 3

#### 4

##### 5

###### 6

Hello!
