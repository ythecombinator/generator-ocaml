'use strict';

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ocaml:app', function () {
  before(function (done) {
    var prompts = {
      pkgName: 'factorial',
      pkgDescription: 'Example of a Pattern Matching-based Factorial OCaml module.',
      pkgVersion: '0.1.0',
      authorName: 'Matheus Brasil',
      authorEmail: 'matheus.brasil10@gmail.com',
      userName: 'mabrasil',
      license: 'MIT',
      confirm: true
    };
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({ skipInstall: true })
      .withPrompts(prompts)
      .on('end', done);
  });

  it('Creates files', function () {
    assert.file([
      'lib/factorial.ml',
      'test/factorial_test.ml',
      '_oasis',
      'Makefile',
      '.travis.yml',
      '.gitattributes',
      '.gitignore',
      'README.md',
      'LICENSE.md',
      'CONTRIBUTING.md',
      'CHANGELOG.md'
    ]);
  });
});
