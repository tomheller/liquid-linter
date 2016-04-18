const extend = require('../lib/extend.js');
const Liquid = require('liquid-node');

module.exports = (engine) => {

  hasProp = {}.hasOwnProperty;
  VideoTag = (function(superClass) {
    extend(VideoTag, superClass);

    function validateParams(markup) {

    }

    function VideoTag(template, tagname, markup) {
      validateParams(markup);
      return VideoTag.__super__.constructor.apply(this, arguments);
    }
    VideoTag.prototype.render = () => {};
    return VideoTag;
  })(Liquid.Tag);
  engine.registerTag("video", VideoTag);
};
