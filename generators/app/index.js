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

    var homeDir;
    var osUserName;
    var configFile;
    var workingDirName = path.basename(process.cwd());

    if (process.platform === 'win32') {
      homeDir = process.env.USERPROFILE;
      osUserName = process.env.USERNAME || path.basename(homeDir).toLowerCase();
    }

    else {
      homeDir = process.env.HOME || process.env.HOMEPATH;
      osUserName = homeDir && homeDir.split('/').pop() || 'root';
    }

    var prompts = [
      {
        name: 'pkgName',
        message: 'What\'s the package name?',
        default: workingDirName
      },
      {
        name: 'pkgDescription',
        message: 'What\'s your package all about?'
      },
      {
        name: 'pkgVersion',
        message: 'What\'s the package version?',
        default: '0.1.0'
      },
      {
        name: 'authorName',
        message: 'What\'s your name?',
        default: 'Matheus'
      },
      {
        name: 'authorEmail',
        message: 'What\'s your email?',
        default: 'matheus.brasil10@gmail.com'
      },
      {
        name: 'userName',
        message: 'What\'s your Github username?',
        default: 'mabrasil'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose your license type',
        choices: ['APACHE', 'BSD', 'GPLv3', 'MIT'],
        default: 'MIT'
      },
      {
        type: 'confirm',
        name: 'confirm',
        message: 'Continue?',
        default: false
      }
    ];

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
