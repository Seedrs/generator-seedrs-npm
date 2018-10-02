'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing () {
    this.fs.copy(
      this.templatePath('index.test.js.tpl'),
      this.destinationPath('./__tests__/index.test.js')
    );
  }
};
