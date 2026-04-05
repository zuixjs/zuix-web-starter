const template = `
<div z-load="components/media-browser" z-lazy class="visible-on-ready animate__animated animate__fadeIn animate__faster" style="width: 100%; height: 100%; aspect-ratio: auto!important; overflow: hidden"
     {% for s in config.settings -%}
     z-{{ s.name }}="{{ s.value }}"
     {%- endfor -%}
     {% for o in config.options -%}
     :{{ o.name }}="'{{ o.value }}'"
     {%- endfor -%}>
    <div #media>
    {%- for media in config['media'] %}
      <article data-type="{{ media.type }}" slide-interval="{{ media.interval }}" loop="{{ media.loop }}">
        <h1 #title>{{ media.title | striptags }}</h1>
        <h2 #description>{{ media.description | striptags }}</h2>
        <img #preview src="{{ media.preview }}" alt="{{ media.alt }}" loading="lazy"><br>
        <a #url href="{{ media.url }}">Open media</a>
      </article>
    {%- endfor %}
    </div>
</div>
`;

const YAML = require('yaml');
module.exports = (render, config) => {
  config = YAML.parse(config);
  return render(template, {config});
};
