// const axios = require('axios'); // 用于发送 http 请求
const chalk = require('chalk'); // 终端输出带颜色的文本
const program = require('commander')
let 你好 = '世界你好🤔 😀 U+2600 U+E63E U+E488 U+E04A U+FE000 ㊙️ :+1:'
console.log(你好)
program.on('--help', () => {
    console.log(  `${chalk.white.bgBlue.bold('Examples:')}`);
    console.log('');
    console.log('    $ iopt --help');
    console.log('    $ iopt -h');
    console.log('    $ iopt show');
    console.log('');
});

program.parse(process.argv);

return 
function search(pkgs = []) {
  
}

module.exports = search;
