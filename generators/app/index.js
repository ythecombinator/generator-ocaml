'use strict';

var yeoman = require('yeoman-generator');
var greetings = require('./greetings');
var parser = require('iniparser');
var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var s = require('underscore.string');

module.exports = yeoman.generators.Base.extend({

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(greetings);

    // `homeDir` will be used to find the `.gitconfig` file.
    var homeDir;
    // `currentDir` will be used as a default in case of user not inserting.
    // a project name
    var currentDir = path.basename(process.cwd());
    // `user` will store username and email from GIT information.
    var user;

    // Discover homeDir based on the OS
    homeDir = process.platform === 'win32'
      ? process.env.USERPROFILE
      : process.env.HOME || process.env.HOMEPATH;

    var gitConfigFile = path.join(homeDir, '.gitconfig');

    user = fs.existsSync(gitConfigFile)
      ? parser.parseSync(gitConfigFile).user
      : {
        name: 'Matheus Brasil',
        email: 'matheus.brasil10@gmail.com'
      };

    // Things that should be asked the user.
    var prompts = [
      {
        name: 'pkgName',
        message: 'What\'s the package name?',
        default: currentDir
      },
      {
        name: 'pkgDescription',
        message: 'What\'s your package all about?',
        default: 'An awesome OCaml module.'
      },
      {
        name: 'pkgVersion',
        message: 'What\'s the package version?',
        default: '0.1.0'
      },
      {
        name: 'authorName',
        message: 'What\'s your name?',
        default: user.name || ''
      },
      {
        name: 'authorEmail',
        message: 'What\'s your email?',
        default: user.email || ''
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

    // Do some work around properties (SlugName, Date etc.)
    this.prompt(prompts, function (props) {
      var d = new Date();
      this.props = props;
      this.props.pkgSlugName = s.slugify(this.props.pkgName);
      this.props.pkgCapitalizedName = s.capitalize(this.props.pkgName);
      this.props.year = d.getFullYear();
      this.props.date = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
      if (!this.props.confirm) {
        return process.exit(0);
      }
      done();
    }.bind(this));

  },

  configuring: {

    enforceFolderName: function () {
      if (this.props.pkgSlugName !== _.last(this.destinationRoot().split(path.sep))) {
        this.destinationRoot(this.props.pkgSlugName);
      }
      this.config.save();
    }
  },

  // Things that should be generated in the boilerplate
  writing: {

    // Main project files (OCaml files, testing files, OASIS spec etc.)
    app: function () {

      this.fs.copyTpl(
        this.templatePath('_oasis'),
        this.destinationPath('_oasis'),
        this.props
      );

      this.fs.copyTpl(
        this.templatePath('Makefile'),
        this.destinationPath('Makefile'),
        this.props
      );

      this.fs.copyTpl(
        this.templatePath('lib/_pkgName.ml'),
        this.destinationPath('lib/' + this.props.pkgSlugName + '.ml'),
        this.props
      );

      this.fs.copyTpl(
        this.templatePath('test/_pkgName_test.ml'),
        this.destinationPath('test/' + this.props.pkgSlugName + '_test.ml'),
        this.props
      );

    },

    // Docs-related files (README, LICENSE, CHANGELOG etc.)
    docs: function () {

      this.fs.copyTpl(
          this.templatePath('_README.md'),
          this.destinationPath('README.md'),
          this.props
      );

      this.fs.copyTpl(
        this.templatePath('_CONTRIBUTING.md'),
        this.destinationPath('CONTRIBUTING.md'),
        this.props
      );

      this.fs.copyTpl(
        this.templatePath('_CHANGELOG.md'),
        this.destinationPath('CHANGELOG.md'),
        this.props
      );

      var licenses = ['APACHE', 'BSD', 'GPLv3'];

      this.fs.copyTpl(
        this.templatePath(
          licenses.indexOf(this.props.license) !== -1
            ? '_LICENSE_' + this.props.license + '.md'
            : '_LICENSE_MIT.md'
        ),
        this.destinationPath('LICENSE.md'),
        this.props
      );
    },

    // (Git-related files and CI information)
    general: function () {

      this.fs.copyTpl(
        this.templatePath('travis.yml'),
        this.destinationPath('.travis.yml'),
        this.props
      );

      this.fs.copyTpl(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore'),
        this.props
      );

      this.fs.copyTpl(
        this.templatePath('gitattributes'),
        this.destinationPath('.gitattributes'),
        this.props
      );
    }
  }
});
