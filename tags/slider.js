const extend = require('../lib/extend.js');
const Liquid = require('liquid-node');

module.exports = (engine) => {

  hasProp = {}.hasOwnProperty;
  SliderTag = (function(superClass) {
    extend(SliderTag, superClass);

    function validateParams(markup) {

    }

    function SliderTag(template, tagname, markup) {
      validateParams(markup);
      return SliderTag.__super__.constructor.apply(this, arguments);
    }
    SliderTag.prototype.render = () => {};
    return SliderTag;
  })(Liquid.Block);
  engine.registerTag("slider", SliderTag);
};
