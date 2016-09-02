'use strict';
var yeoman = require('yeoman-generator');
var cremasay = require('../lib/cremasay');

module.exports = yeoman.Base.extend({
  prompting: function () {

    var prompts = [
      {
        type    : 'input',
        name    : 'name',
        message : 'Component name',
        required: true,
        default : 'Button'
      }
    ];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    var componentPath = this.destinationPath() + '/src/components/' + this.props.name + '.js';
    this.fs.copyTpl(this.templatePath('component.js'), componentPath, this.props);
  }

});
