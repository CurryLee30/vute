import inquirer from 'inquirer';
import path from 'path';
import generateTemplate from './template.cjs'
// const inquirer = require('inquirer')
const environments = ['\x1b[90mdevelopment:\x1b[0m', '\x1b[90mproduction:\x1b[0m', '\x1b[90mtesting:\x1b[0m'];

inquirer
  .prompt([
    {
      type: 'list',
      name: 'environment',
      message: '\x1b[90m请选择环境:\x1b[0m', // 设置问题字体为灰色,
      choices: environments,
    },
  ])
  .then((answers) => {
    const result = answers.environment;
    const templatePath = path.join(__dirname, 'templates', 'component.hbs');
    const outputPath = path.join(__dirname, 'output', 'MyComponent.vue');

    const data = {
      componentName: 'MyComponent',
      author: 'vute'
    };
    if (result === 'development') {
      generateTemplate(templatePath, data, outputPath);
    } else {
      console.log(`\x1b[90mYou selected ${answers.environment}\x1b[0m`);
      // 在这里可以根据用户选择的环境执行相应的操作
    }


  });