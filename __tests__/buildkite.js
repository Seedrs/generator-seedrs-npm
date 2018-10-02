'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-seedrs-npm:buildkite', () => {
  beforeEach(() => (
    helpers
    .run(path.join(__dirname, '../generators/buildkite'))
    .withOptions({
      kebabCaseName: 'seedrs-npm-project',
      snakeCaseName: 'seedrs_npm_project'
    })
  ));

  it('creates files', () => {
    assert.file([
      './.buildkite/pipeline.yml',
      './.buildkite/steps/lint.sh',
      './.buildkite/steps/test.sh',
      './.buildkite/steps/publish.sh'
    ]);
  });

  it('creates pipeline.yml', () => {
    const pipelinePath = './.buildkite/pipeline.yml';
    assert.fileContent([
      [pipelinePath, 'run: seedrs_npm_project'],
      [pipelinePath, 'concurrency_group: \'seedrs-npm-project/publish\'']
    ]);
  });
});
