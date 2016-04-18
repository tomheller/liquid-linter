const extend = require('../lib/extend.js');
const Liquid = require('liquid-node');

module.exports = (engine) => {

  hasProp = {}.hasOwnProperty;
  DeviceFrameTag = (function(superClass) {
    extend(DeviceFrameTag, superClass);

    function validateParams(markup) {

    }

    function DeviceFrameTag(template, tagname, markup) {
      validateParams(markup);
      return DeviceFrameTag.__super__.constructor.apply(this, arguments);
    }
    DeviceFrameTag.prototype.render = () => {};
    return DeviceFrameTag;
  })(Liquid.Block);
  engine.registerTag("deviceframe", DeviceFrameTag);
};
