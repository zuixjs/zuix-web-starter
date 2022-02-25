const section = 'world';
const slugify = require('slugify');
const data = require(`./source/app/data/news-${section}.json`);
const fs = require('fs');
const path = require('path');

data.rss.channel.item.map((i) => {
  const title = i.title['#cdata-section'];
  if (title) {

    let filename = slugify(title, {
      lowercase: true
    }).toLowerCase()
      .replaceAll('.', '')
      .replaceAll('\'', '-');

    filename = filename.substring(0, 30) + '.md';
    filename = path.join(`./source/pages/news/${section}/`, filename);
    console.log(filename);
    let content = `---
layout: side_drawer.html
options: none
icon: pages
order: 1
tags: news_${section}
title: "${i.title["#cdata-section"]}"
`;
    if (i.description && i.description["#cdata-section"]) {
      content += `description: "${i.description["#cdata-section"].replaceAll('"', '\\"')}"\n`;
    }
    if (i['media:group']) {
      content += `imagePreview: ${i["media:group"]["media:content"][3]['-url']}\n`;
    }
    if (i["pubDate"]) {
      content += `pubDate: ${i["pubDate"]}\n`;
    }
    content += '---\n';
    console.log(content);
    fs.writeFileSync(filename, content);
  }
});
