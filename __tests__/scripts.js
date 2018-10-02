'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-seedrs-npm:scripts', () => {
  beforeAll(() => (
    helpers
    .run(path.join(__dirname, '../generators/scripts'))
  ));

  it('creates files', () => {
    assert.file([
      './scripts/test.js'
    ]);
  });
});
