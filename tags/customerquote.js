const extend = require('../lib/extend.js');
const Liquid = require('liquid-node');

module.exports = (engine) => {

  hasProp = {}.hasOwnProperty;
  CustomerQuoteTag = (function(superClass) {
    extend(CustomerQuoteTag, superClass);

    function validateParams(markup) {

    }

    function CustomerQuoteTag(template, tagname, markup) {
      validateParams(markup);
      return CustomerQuoteTag.__super__.constructor.apply(this, arguments);
    }
    CustomerQuoteTag.prototype.render = () => {};
    return CustomerQuoteTag;
  })(Liquid.Tag);
  engine.registerTag("customerquote", CustomerQuoteTag);
};
