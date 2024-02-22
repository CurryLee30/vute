// import fs from 'fs';
// import path from 'path';
// import handlebars from 'handlebars'
const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');

export const generateTemplate = (templatePath, data, outputPath) => {
  // 读取模板文件内容
  const templateContent = fs.readFileSync(templatePath, 'utf-8');

  // 编译模板
  const template = handlebars.compile(templateContent);

  // 根据数据生成最终内容
  const result = template(data);

  // 写入生成的文件
  fs.writeFileSync(outputPath, result, 'utf-8');

  console.log(`Generated: ${outputPath}`);
}

// 示例用法
const templatePath = path.join(__dirname, 'templates', 'component.hbs');
const outputPath = path.join(__dirname, 'output', 'MyComponent.vue');

const data = {
  componentName: 'MyComponent',
  author: 'CodeMoss'
};

// generateTemplate(templatePath, data, outputPath);