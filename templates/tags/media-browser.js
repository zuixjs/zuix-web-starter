const template = `
<div z-load="@lib/components/media-browser" class="visible-on-ready" z-lazy="true"
     {% for o in config['options'] -%}
     data-o-{{ o.option }}="{{ o.value }}"
     {%- endfor -%}>
    <div #media>
    {%- for media in config['media'] %}
      <article data-type="{{ media.type }}" slide-interval="{{ media.interval }}">
        <h1 #title>{{ media.title }}</h1>
        <h2 #description>{{ media.description }}</h2>
        <img #preview src="{{ media.preview | safe }}"><br>
        <a #url href="{{ media.url | safe }}">Open media</a>
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
