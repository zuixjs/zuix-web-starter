const template = `
<div view z-load="templates/mdl_card{{ type }}">
  <h1 #title>{{ title }}</h1>
  <img #image src="{{ image }}" alt="Cover image" role="presentation">
  <p #text>{{ content }}</p>
  <a #link.url href="{{ linkUrl }}">
    <span #link.title>{{ linkTitle }}</span>
  </a>
</div>
`;

module.exports = (render, content, title, image, linkTitle, linkUrl, type) => {
  if (type) {
    type = '_' + type;
  }
  console.log('\n\n' + type + '\n\n');
  return render(template, {content, title, image, linkTitle, linkUrl, type});
};
