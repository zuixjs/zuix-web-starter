const fs = require('fs');
const path = require('path');
const {chalk, render, mkdirp, highlight, classNameFromHyphens} = require('zuix-cli/common/utils');

const pageTemplatesPath = './templates/pages/';
// TODO: read from config/default
const outputFolder = './source/pages/';

function addPage(args) {
  const template = args.layout;
  let outputFile = args.name;
  const pageName = classNameFromHyphens(path.basename(outputFile));
  console.log(
    chalk.cyanBright('*') + ' Generating',
    chalk.yellow.bold(template),
    template, '→',
    outputFile
  );
  let componentTemplate = `${pageTemplatesPath}${template}.liquid`;
  if (!fs.existsSync(componentTemplate)) {
    componentTemplate = `${pageTemplatesPath}${template}.md`;
  }
  if (fs.existsSync(componentTemplate)) {
    const frontMatter = args.frontMatter.join('\n') + '\n';
    let pageTemplate = fs.readFileSync(componentTemplate).toString('utf8');
    pageTemplate = render(pageTemplate, {name: pageName, frontMatter});
    const outputPath = path.join(outputFolder, outputFile, '..');
    outputFile = path.join(outputFolder, outputFile + '.md');
    if (!fs.existsSync(outputFile)) {
      mkdirp.sync(outputPath);
      fs.writeFileSync(outputFile, pageTemplate);
      console.log(chalk.cyanBright('*') + ' NEW page:', chalk.green.bold(outputFile));
    } else {
      console.error(
        chalk.red.bold('A file with that name already exists.')
      );
    }
  } else {
    console.error(
      chalk.red.bold('Invalid page template:', componentTemplate)
    );
  }
}

function collect(value, previous) {
  return previous.concat([value]);
}

module.exports = (program) => {
  program
    .command('add')
    .alias('a')
    .description('Add new page')
    .requiredOption('-l, --layout <layout_template>', 'Layout template name')
    .requiredOption('-n, --name <page_name>', 'Page path/name')
    .option('-fm, --front-matter "<field>: <value>"', 'Set a front matter field value', collect, [])
    .action(addPage);
};
