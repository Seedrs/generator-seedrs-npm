'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-seedrs-npm:jest', () => {
  beforeEach(() => (
    helpers
    .run(path.join(__dirname, '../generators/jest'))
  ));

  it('creates files', () => {
    assert.file([
      './__tests__/index.test.js'
    ]);
  });
});
