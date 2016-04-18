const extend = require('../lib/extend.js');
const Liquid = require('liquid-node');

module.exports = (engine) => {

  hasProp = {}.hasOwnProperty;
  VidyardTag = (function(superClass) {
    extend(VidyardTag, superClass);

    function validateParams(markup) {

    }

    function VidyardTag(template, tagname, markup) {
      validateParams(markup);
      return VidyardTag.__super__.constructor.apply(this, arguments);
    }
    VidyardTag.prototype.render = () => {};
    return VidyardTag;
  })(Liquid.Tag);
  engine.registerTag("vidyard", VidyardTag);
};
