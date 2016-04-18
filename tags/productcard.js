const extend = require('../lib/extend.js');
const Liquid = require('liquid-node');

module.exports = (engine) => {

  hasProp = {}.hasOwnProperty;
  ProductCardTag = (function(superClass) {
    extend(ProductCardTag, superClass);

    function validateParams(markup) {

    }

    function ProductCardTag(template, tagname, markup) {
      validateParams(markup);
      return ProductCardTag.__super__.constructor.apply(this, arguments);
    }
    ProductCardTag.prototype.render = () => {};
    return ProductCardTag;
  })(Liquid.Block);
  engine.registerTag("productcard", ProductCardTag);
};
