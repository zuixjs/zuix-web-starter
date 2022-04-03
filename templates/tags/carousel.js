const template = `
<div z-load="@lib/components/media-browser" class="visible-on-ready" z-lazy="true"
      style="max-height: 300px; height: 300px; overflow-y: hidden"
     data-o-slide="5000" data-o-inline="true">
    <div #media>
{% for img in images -%}
      <article>
        <img #preview src="{{ img.preview }}">
        <a #full href="{{ img.full }}">Full Image</a>
      </article>
{%- endfor %}
    </div>
</div>
`;

const YAML = require('yaml');
module.exports = (render, content) => {
  // convert markdown list to HTML
  //content = markdownIt.render(content, {});
  content = YAML.parse(content);
  console.log(content);
  const images = [];
  for (const prop in content) {
    const item = content[prop];
    if (item[0] === 'image') {
      images.push({title: item[1], description: item[2], preview: item[3], full: item[4]});
    }
  }
  return render(template, {content, images});
};
