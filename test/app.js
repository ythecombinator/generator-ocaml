'use strict';

var path     = require('path')
    ,assert  = require('yeoman-assert')
    ,helpers = require('yeoman-generator').test
    ,os      = require('os');

describe('generator-ocaml:app', function () {
  before(function (done) {
    var prompts = {
      pkgName: 'an-awesome-ocaml-module',
      pkgDescription: 'An awesome OCaml module.',
      pkgVersion: '0.1.0',
      authorName: 'Matheus Brasil',
      authorEmail: 'matheus.brasil10@gmail.com',
      userName: 'mabrasil',
      license: 'MIT',
      confirm: true
    };
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({someOption: true})
      .withPrompts({someAnswer: true})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'dummyfile.txt'
    ]);
  });
});
