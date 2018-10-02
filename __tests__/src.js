'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-seedrs-npm:src', () => {
  beforeEach(() => (
    helpers
    .run(path.join(__dirname, '../generators/src'))
  ));

  it('creates files', () => {
    assert.file([
      './src/index.js'
    ]);
  });
});
