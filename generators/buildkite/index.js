'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing () {
    // pipeline.yml
    this.fs.copyTpl(
      this.templatePath('pipeline.yml.tpl'),
      this.destinationPath('./.buildkite/pipeline.yml'),
      {
        kebabCaseName: this.options.kebabCaseName,
        snakeCaseName: this.options.snakeCaseName
      }
    );

    // lint.sh
    this.fs.copyTpl(
      this.templatePath('lint.sh.tpl'),
      this.destinationPath('./.buildkite/steps/lint.sh')
    );

    // test.sh
    this.fs.copyTpl(
      this.templatePath('test.sh.tpl'),
      this.destinationPath('./.buildkite/steps/test.sh')
    );

    // publish.sh
    this.fs.copyTpl(
      this.templatePath('publish.sh.tpl'),
      this.destinationPath('./.buildkite/steps/publish.sh')
    );
  }
};
