## Quick reference

### Including content

###### Method #1

Using `data-ui-include` attribute on the container element:

```html
<div data-ui-include="path/to/content"></div>
```

The `path/to/content` is relative to the `./source/app` folder
(that can be configured in `./config/default.json` file)
or an absolute URL path.


```html
<div data-ui-include="https://genielabs.github.io/zuix/app/templates/mdl_card"></div>
```
<div data-ui-include="https://genielabs.github.io/zuix/app/templates/mdl_card"></div>


```
// TODO: talk about app.resourceFolder path
// TODO: and .html+.css files
```


###### Method #2

Using Swig template `include` tag

{% raw %}
```html
{% include "path/to/file" %}
```
{% endraw %}


#### Differences between the two methods

...

### Compiling Markdown

All source files with the `.md` extension will be automatically compiled to
`.html`.
{% raw %}
If the source is a `.html` file, you can use the `{% markdown %}` swig tag
to enclose the markdown text to be compiled.

```html
{% markdown %}
# This is a markdown header..

..and this is a new paragraph with a **bold text**
{% endmarkdown %}
```

or in combination with the {% include %} tag:

```html
{% markdown %}
{% include "README.txt" %}
{% endmarkdown %}
```
{% endraw %}

Alternatively to compile the markdown inside a content loaded with `data-ui-include`,
(or a component with `data-ui-load`), you can add the attribute
`data-o-markdown="true"`.


### Static-Site

// TODO: ... (insert excerpt from static-site README.md)
// TODO: .... document the source/_helpers folder


### Loading a component

`// link to zUIx docs`


### Styling with LESS

`// link to LESS docs`

### Static Site

`// link to static-site docs`
