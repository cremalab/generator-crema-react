'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-crema-react:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        name: 'Crema',
        description: 'Crema project'
      })
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      'Procfile',
      '.env-sample',
      '.babelrc',
      '.editorconfig',
      '.eslintrc',
      '.gitignore',
      '.npmrc',
      '.nvmrc',
      'package.json',
      'tools/server.js',
      'src/components/.gitkeep'
    ]);
  });
});
