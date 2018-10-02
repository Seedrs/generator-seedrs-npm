'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing () {
    this.fs.copy(
      this.templatePath('test.js.tpl'),
      this.destinationPath('./scripts/test.js')
    );
  }
};
