'use strict';
var yeoman = require('yeoman-generator');
var cremasay = require('../lib/cremasay');
var mkdirp = require('mkdirp');
var chalk = require('chalk');
var globfsConfig = { globOptions: { dot: true }}

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.

    this.log(
      cremasay(
        'Welcome to the ' +
        chalk.magenta('Crema') + ' ' +
        chalk.cyan('React') +
        ' generator!'
      )
    );

    var prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        required: true,
        default: this.appname
      },
      {
        type: 'input',
        name: 'description',
        message: 'Your project description',
        required: true
      }
    ];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('static/**/*'),
      this.destinationPath(),
      this.props, {}, globfsConfig
    );
  },

  install: function () {
    this.installDependencies({
      bower: false,
      npm: true
    });
  }
});
