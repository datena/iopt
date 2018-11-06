'use strict'
const co = require('co')
const prompt = require('co-prompt')
const chalk = require('chalk')
const fs = require('fs')
const path = require('path')
let config = require('../templates')

module.exports = () => {
 	co(function *() {
  	let tplName = yield prompt('Template name: ')
  	let gitUrl = yield prompt('Git https link: ')
  	let branch = yield prompt('Branch: ')
    tplName = tplName?tplName:'test'
    gitUrl = gitUrl?gitUrl:'https://github.com/datena/jstool.git'
    branch = branch?branch:'master'
    if (!config.tpl[tplName]) {
      config.tpl[tplName] = {}
      config.tpl[tplName]['url'] = gitUrl.replace(/[\u0000-\u0019]/g, '')
      config.tpl[tplName]['branch'] = branch
    } else {
      console.log(chalk.red('Template has already existed!'))
      process.exit()
    }
    console.log(__dirname,'__dirname')
		fs.writeFile(__dirname + '/../templates.json', JSON.stringify(config), 'utf-8', (err) => {
      console.log(err,'err')
      if (err) console.log(err)
      console.log(__dirname + '/../templates.json')

			console.log(chalk.green('New template added!\n'))
      console.log(chalk.grey('The last template list is: \n'))
      console.log(config)
      console.log('\n')
			process.exit()
		})
  })
}