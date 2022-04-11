const template = `
<a class="button" href="{{ linkUrl | safe }}">{{ content }}</a>`;

module.exports = (render, content, linkUrl) => {
  return render(template, {content, linkUrl});
};
