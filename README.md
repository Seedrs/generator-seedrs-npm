# generator-seedrs-npm 

[![npm version](https://badge.fury.io/js/%40seedrs%2Fgenerator-seedrs-npm.svg)](https://badge.fury.io/js/%40seedrs%2Fgenerator-seedrs-npm) [![Dependency Status][daviddm-image]][daviddm-url] [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

> Bootstraps an NPM package

## Installation

First, install [Yeoman](http://yeoman.io) and @seedrs/generator-seedrs-npm using [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g @seedrs/generator-seedrs-npm
```

With yarn

```bash
yarn global add yo @seedrs/generator-seedrs-npm
```

Then create your directory and move into it

```bash
mkdir <app_name> && cd $_
```

Then generate your new project:

```bash
yo @seedrs/seedrs-npm
```

### Prompts

Yeoman will prompt you for three things:

*name* - This is the name of your application. Choose it wisely!

*description* - This the the description for your NPM module. (Optional)

*private* - Answering yes will setup the project as a private module.

## Folder structure

Running the generator will scaffold your project in the following
structure. It will also create a git repository.

```
__tests__
  │
  └─ index.test.js
.buildkite/
  │
  ├── steps/
  │   │
  │   ├── lint.sh
  │   │
  │   └── publish.sh
  │   │
  │   └── test.sh
  │
  └── pipeline.yml
scripts/
  │
  └─── test.js
src/
  │
  └─ index.js
._npmrc
.babelrc
.eslintrc.js
.gitignore
docker-compose.yml
Dockerfile
package.json
README.md
```

### __tests__

Contains the tests for your NPM module.

### .buildkite/

Contains a pipeline.yml which defines three tasks:

* one for linting the project
* one for running the tests
* one for publishing the package to NPM

### Scripts

Contains scripts used in development e.g. test

### Src

Your module code goes in here!

### Dockerfile

A base Dockerfile used for development, testing and building the
application bundle.

### docker-compose.yml

A docker-compose config to help you get started.

### package.json

Contains modules that will help you get started with a new react
project.

## Getting started

To get started with development run

```
docker-compose up
```

This will create a docker container and install the packages in
package.json.

## Contributing

To contribute please follow the guidelines below. We will not accept PRs
that do not conform to these simple rules.

### linting

Make sure your changes pass the linter.

### tests

Please write tests for any generators you add or templates you make
changes to.

### commitizen

Create structured git commits using ``yarn commit``. Follow the prompts
and push these changes to your branch.

Let's discuss your changes in the PR.

## License

Apache-2.0 © [tech@seedrs.com](www.seedrs.com)

[daviddm-image]: https://david-dm.org/seedrs/generator-seedrs-npm.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/seedrs/generator-seedrs-npm
