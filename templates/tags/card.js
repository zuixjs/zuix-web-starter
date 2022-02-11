const template = `
<div view z-load="templates/mdl_card{{ type }}" class="visible-on-ready"
     style="min-height: {{renderSize.height}}px; max-width: {{renderSize.width}}px; margin: 12px;">
  <h1 #title style="font-size: 150%!important; position: absolute; padding: 12px" class="mdl-color-text--primary-contrast">{{ title }}</h1>
  <img #image src="{{ image }}" alt="Cover image" role="presentation">
  <p #text>{{ content }}</p>
  <a #link.url href="{{ linkUrl }}">
    <span #link.title>{{ linkTitle }}</span>
  </a>
</div>
`;

module.exports = (render, content, title, image, linkTitle, linkUrl, type) => {
  const renderSize = {width: 450, height: 356};
  switch (type) {
    case 'image':
      renderSize.width = 256;
      renderSize.height = 256;
      break;
    case 'square':
      renderSize.width = 320;
      renderSize.height = 320;
      break;
  }
  if (type) {
    type = '_' + type;
  }
  return render(template, {content, title, image, linkTitle, linkUrl, type, renderSize});
};
