'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing () {
    this.fs.copy(
      this.templatePath('index.js.tpl'),
      this.destinationPath('./src/index.js')
    );
  }
};
