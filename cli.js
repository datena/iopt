// cli.js

const path = require('path');
const program = require('commander'); // 命令行参数解析
const chalk = require('chalk');
const search = require('.');
const pkg = require('./package.json');

program
  .version(pkg.version, '-v, --version')
  .usage('[names]')
  .option('-c, --config [config]', 'use config files')
  .on('--help', () => {
    console.log('\n  Examples:\n');
    console.log(`    ${chalk.green('$')} unn react,react-dom,react-router`);
    console.log('');
  })
  .parse(process.argv);

// program.args是所有解析直接传入的参数
// 比如 unn react react-dom --hehe
// 那么program.args是['react', 'react-dom']
let pkgs = program.args;

// 如果指定js文件的话，pkgs从文件中读取
if (program.config && typeof program.config === 'string') {
  // process.cwd() 是当前程序运行的目录
  const files = path.resolve(process.cwd(), program.config);

  try {
    pkgs = require(files);
    search(pkgs);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
} else {
  if (pkgs.length > 0) {
    search(pkgs);
  } else {
    program.outputHelp();
  }
}
