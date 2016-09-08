'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({
  prompting: function () {
    var prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Component name',
        required: true,
        default: 'Button'
      },
      {
        type: 'list',
        choices: [
          'stateless',
          'statefull'
        ],
        name: 'type',
        message: 'Stateless or stateful?',
        required: true,
        default: 0
      }
    ];
    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    const {name, type} = this.props;
    this.fs.copyTpl(
      this.templatePath('index'),
      this.destinationPath(`src/components/${name}/index.js`),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath(
        type === 'stateless' ?
          'componentStateless' :
          'componentStateful'
      ),
      this.destinationPath(`src/components/${name}/${name}.js`),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('test'),
      this.destinationPath(`src/components/${name}/${name}.test.js`),
      this.props
    );
  }

});
