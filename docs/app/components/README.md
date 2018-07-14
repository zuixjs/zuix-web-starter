# components

Place components here.

Example `gallery` component structure:

```
app/
├── components/         # Shared or generic UI components
│   ├── gallery.js      #   controller
│   ├── gallery.html    #   view
│   ├── gallery.css     #   [optional] style
│   └── /gallery/       #   [optional] component assets folder
```

### Component loading

To load a component in the main page use the following tag attribute:

```html
<div data-ui-load="components/gallery" ...></div>
```
