'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-crema-react:component', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/component'))
      .withPrompts({
        name: 'Nav'
      })
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      'src/components/Nav/index.js',
      'src/components/Nav/Nav.js',
      'src/components/Nav/Nav.test.js'
    ]);
  });
});
