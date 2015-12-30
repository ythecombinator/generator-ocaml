'use strict';

var yeoman     = require('yeoman-generator')
    ,chalk     = require('chalk')
    ,greetings = require('./greetings')
    ,parser    = require('iniparser');
    ,fs        = require('fs');
    ,path      = require('path');
    ,_         = require('lodash');
    ,_s        = require('underscore.string');

module.exports = yeoman.generators.Base.extend({

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(greetings)

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt')
    );
  },

  install: function () {
    this.installDependencies();
  }
});
