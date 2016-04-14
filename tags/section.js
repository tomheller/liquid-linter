const extend = require('../lib/extend.js');
const Liquid = require('liquid-node');

module.exports = (engine) => {

  hasProp = {}.hasOwnProperty;
  SectionTag = (function(superClass) {
    extend(SectionTag, superClass);

    function SectionTag() {
      return SectionTag.__super__.constructor.apply(this, arguments);
    }
    SectionTag.prototype.render = () => {};
    return SectionTag;
  })(Liquid.Block);
  engine.registerTag("section", SectionTag);
};
