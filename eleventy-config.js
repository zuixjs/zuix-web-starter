/**
 * @param eleventyConfig
 */
const fs = require('fs');
const render = require('template-file').render;
const normalizeMarkup = (s) => s.trim().split('\n').filter((l) => {
  if (l.trim().length > 0) {
    return l;
  }
}).join('\n');

module.exports = function(eleventyConfig) {
  // TODO: add custom 11ty config here

  // # Additional watch targets

  eleventyConfig.addWatchTarget('./templates/tags/');
  eleventyConfig.addWatchTarget('./source/app/');

  // # Add data collections

  eleventyConfig.addCollection('posts_blog', function(collection) {
    return collection.getFilteredByGlob('./source/pages/blog/*.md')
        .slice().sort((a, b) => +a.data.order > +b.data.order ? 1 : -1);
  });
  eleventyConfig.addCollection('posts_docs', function(collection) {
    return collection.getFilteredByGlob('./source/pages/docs/*.md')
        .slice().sort((a, b) => +a.data.order > +b.data.order ? 1 : -1);
  });

  // this is used by the searchFilter
  eleventyConfig.addCollection('posts_searchIndex', (collection) => {
    return [...collection.getFilteredByGlob('./source/pages/**/*.md')];
  });

  // # Add custom data filters

  eleventyConfig.addFilter(
      'search',
      require('./source/_filters/searchFilter')
  );
  eleventyConfig.addFilter(
      'startsWith',
      require('./source/_filters/startsWith')
  );
  eleventyConfig.addFilter(
      'dateFormat',
      require('./source/_filters/dateFormat')
  );
  eleventyConfig.addFilter(
      'getCollection',
      require('./source/_filters/getCollection')
  );

  // TODO: describe the following
  eleventyConfig.addPairedShortcode('unpre', function(content) {
    content = content.substring(content.indexOf('```') + 3);
    content = content.substring(content.indexOf('\n') + 1);
    content = content.substring(0, content.lastIndexOf('```'));
    return normalizeMarkup(content);
  });
  eleventyConfig.addPairedShortcode('zx', function(content, template, ...args) {
    const p = `./templates/tags/${template}.js`;
    if (fs.existsSync(p)) {
      delete require.cache[require.resolve(p)];
      return normalizeMarkup(require(p)(render, content, ...args));
    }
    return ''; // 'Not implemented! (' + content + ') [' + args + ']';
  });
  eleventyConfig.addPairedShortcode('layout', function(content, ...args) {
    return `<div layout="${args[0]}" class="${args[1]}">${normalizeMarkup(content)}</div>`;
  });
};
