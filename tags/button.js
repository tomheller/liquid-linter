const extend = require('../lib/extend.js');
const Liquid = require('liquid-node');

module.exports = (engine) => {

  hasProp = {}.hasOwnProperty;
  ButtonTag = (function(superClass) {
    extend(ButtonTag, superClass);

    function validateParams(markup) {

    }

    function ButtonTag(template, tagname, markup) {
      validateParams(markup);
      return ButtonTag.__super__.constructor.apply(this, arguments);
    }
    ButtonTag.prototype.render = () => {};
    return ButtonTag;
  })(Liquid.Tag);
  engine.registerTag("button", ButtonTag);
};
