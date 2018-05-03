# content

Place content includes here.

Example structure:

```
app/
├── content/            # Content files
│   ├── about.html      #   view
│   ├── about.css       #   [optional] style
│   │.. ...
│   ├── /portfolio/     #   folder with more content files and subfolders
│   └── /shop/          #   same as above
```

### Content inclusion

To include content in the main page use the following tag attribute:

```html
<div data-ui-include="content/about" ...></div>
```
