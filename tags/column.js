const extend = require('../lib/extend.js');
const Liquid = require('liquid-node');

module.exports = (engine) => {

  hasProp = {}.hasOwnProperty;
  ColumnTag = (function(superClass) {
    extend(ColumnTag, superClass);

    function validateParams(markup) {

    }

    function ColumnTag(template, tagname, markup) {
      validateParams(markup);
      return ColumnTag.__super__.constructor.apply(this, arguments);
    }
    ColumnTag.prototype.render = () => {};
    return ColumnTag;
  })(Liquid.Block);
  engine.registerTag("column", ColumnTag);
};
