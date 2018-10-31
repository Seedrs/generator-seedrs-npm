'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('lodash');

module.exports = class extends Generator {
  default () {
    const { name } = this.props;

    const kebabCaseName = _.kebabCase(name);
    const snakeCaseName = _.snakeCase(name);

    this.composeWith('generator-node/generators/git');
    this.composeWith(require.resolve('../jest'));
    this.composeWith(require.resolve('../scripts'));
    this.composeWith(require.resolve('../src'));
    this.composeWith(require.resolve('../buildkite'), { kebabCaseName, snakeCaseName });
  }

  prompting () {
    this.log(
      yosay(`Welcome to the stupendous ${chalk.red('generator-seedrs-npm')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your package?',
        default: _.kebabCase(this.appname)
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe your package',
        default: null
      },
      {
        type: 'confirm',
        name: 'isPrivate',
        message: 'Is this a private package?',
        default: false
      }
    ];

    return this.prompt(prompts).then(props => this.props = props);
  }

  writing () {
    const {
      name,
      description,
      isPrivate
    } = this.props;

    const kebabCaseName = _.kebabCase(name);
    const snakeCaseName = _.snakeCase(name);

    // package.json
    this.fs.copyTpl(
      this.templatePath('package.json.tpl'),
      this.destinationPath('package.json'),
      {
        kebabCaseName,
        description
      }
    );

    if (description) {
      this.fs.extendJSON(
        this.destinationPath('package.json'), { description }
      );
    }

    if (isPrivate) {
      this.fs.extendJSON(
        this.destinationPath('package.json'), {
          publishConfig: {
            access: 'restricted'
          }
        }
      );
    }

    // ._npmrc
    this.fs.copy(
      this.templatePath('._npmrc.tpl'),
      this.destinationPath('._npmrc')
    );

    // .babelrc
    this.fs.copy(
      this.templatePath('.babelrc.tpl'),
      this.destinationPath('.babelrc')
    );

    // .eslintrc.js
    this.fs.copy(
      this.templatePath('.eslintrc.js.tpl'),
      this.destinationPath('.eslintrc.js')
    );

    // .gitignore
    this.fs.copy(
      this.templatePath('.gitignore.tpl'),
      this.destinationPath('.gitignore')
    );

    // .npmignore
    this.fs.copy(
      this.templatePath('.npmignore.tpl'),
      this.destinationPath('.npmignore')
    );

    // docker-compose.yml
    this.fs.copyTpl(
      this.templatePath('docker-compose.yml.tpl'),
      this.destinationPath('docker-compose.yml'),
      {
        snakeCaseName
      }
    );

    // Dockerfile
    this.fs.copy(
      this.templatePath('Dockerfile.tpl'),
      this.destinationPath('Dockerfile')
    );

    // README.md
    this.fs.copyTpl(
      this.templatePath('README.md.tpl'),
      this.destinationPath('README.md'),
      {
        kebabCaseName,
        snakeCaseName
      }
    );
  }

  install () {
    this.installDependencies({
      npm: false,
      bower: false,
      yarn: true
    });
  }
};
