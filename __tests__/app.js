'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-seedrs-npm:app', () => {
  describe('when the package is not private', () => {
    beforeAll(() => (
      helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        name: 'seedrs-npm-project',
        isPrivate: false
      })
    ));

    it('creates files', () => {
      assert.file([
        'package.json',
        '._npmrc',
        '.babelrc',
        '.eslintrc.js',
        '.gitignore',
        'docker-compose.yml',
        'Dockerfile',
        'README.md'
      ]);
    });

    it('creates package.json', () => {
      assert.JSONFileContent('package.json', {
        name: '@seedrs/seedrs-npm-project',
        version: '1.0.0',
        main: 'lib/index.js',
        author: 'tech@seedrs.com',
        scripts: {
          build: 'babel src --presets babel-preset-env --out-dir lib',
          commit: 'git-cz',
          lint: 'eslint ./src/*',
          test: 'node scripts/test.js',
          'semantic-release': 'semantic-release --no-ci -b $BUILDKITE_JOB_ID'
        },
        devDependencies: {
          '@seedrs/eslint-config-seedrs-base': '^1.1.1',
          'babel-cli': '^6.26.0',
          'babel-core': '^6.26.3',
          'babel-plugin-transform-object-rest-spread': '^6.26.0',
          'babel-preset-env': '^1.7.0',
          'cz-conventional-changelog': '^2.1.0',
          eslint: '^5.6.0',
          'eslint-plugin-import': '^2.14.0',
          'eslint-plugin-jest': '^21.22.0',
          jest: '^23.6.0',
          'semantic-release': '^15.9.15'
        },
        config: {
          commitizen: {
            path: './node_modules/cz-conventional-changelog'
          }
        },
        jest: {
          testMatch: [
            '<rootDir>__tests__/**/*.{js}'
          ],
          testEnvironment: 'node',
          testURL: 'http://localhost',
          transform: {
            '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest'
          },
          transformIgnorePatterns: [
            '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$'
          ],
          moduleNameMapper: {},
          moduleFileExtensions: [
            'js'
          ]
        }
      });
    });

    it('creates docker-compose.yml', () => {
      assert.fileContent('docker-compose.yml', 'seedrs_npm_project');
    });

    it('creates README.md', () => {
      assert.fileContent([
        ['README.md', '# seedrs-npm-project'],
        ['README.md', 'docker-compose run seedrs_npm_project bash']
      ]);
    });
  });

  describe('when the package is private', () => {
    beforeEach(() => (
      helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        name: 'seedrs-npm-project',
        isPrivate: true
      })
    ));

    it('creates package.json', () => {
      assert.JSONFileContent('package.json', {
        publishConfig: {
          access: 'restricted'
        }
      });
    });
  });

  describe('then the package has a desription', () => {
    beforeEach(() => (
      helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        name: 'seedrs-npm-project',
        description: 'An NPM package'
      })
    ));

    it('creates package.json', () => {
      assert.JSONFileContent('package.json', {
        description: 'An NPM package'
      });
    });
  });
});
