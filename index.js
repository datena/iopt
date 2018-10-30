// index.js
const axios = require('axios'); // 用于发送 http 请求
const chalk = require('chalk'); // 终端输出带颜色的文本

// search方法的参数是一个数组，存放着需要查询的包的名字
// 比如我们要查询 react和react-dom，那么search(['react', 'react-dom'])
function search(pkgs = []) {
  if (!Array.isArray(pkgs)) {
    throw 'Param should be an array.';
  }

  console.log(pkg,'pkg');
  pkgs.forEach((pkg) => {
    axios.get(`https://registry.npmjs.org/${pkg}`)
      .then((res) => {
        // 如果请求成功，说明包存在，那么名字被占用。
        console.log(`${chalk.cyan(pkg)}: ${chalk.red('Used ❌')}`);
      })
      .catch((err) => {
        // 如果请求失败，并且是因为404报错，那么证明包不存在，名字可用。
        if (err.stack && /Request failed with status code 404/.test(err.stack)) {
          console.log(`${chalk.cyan(pkg)}: ${chalk.green('Unused ✅')}`);
        } else {
          // 处理未知情况
          console.log(`${chalk.cyan(pkg)}: ${chalk.gray('Unknown 🤔')}`)
        }
      });
  });
}

module.exports = search;
