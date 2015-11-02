const path = require('path');
const program = require('commander');

const render = require('./lib/render');

program
  .version('0.14.1')
  .usage('[component path]', 'Component to render path')
  .option('-p, --props [props]', 'Props to pass into the component (JSON string)')
  .option('-s, --static [static]', 'If the markup is static (without data-reactid)')
  .parse(process.argv);

const componentPath = path.resolve(process.cwd(), program.args[0]);

const data = {
  Component: require(componentPath),
  props: program.props ? JSON.parse(program.props) : {},
  isStatic: program.static || false,
};

process.stdout.write(render(data) + '\n');
