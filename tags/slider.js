'use strict';

const Liquid = require('liquid-node');

class SliderTag extends Liquid.Block {
  constructor(template, tag, params) {
    super(template, tag, params);
  }

  render(context) {
    return super.render(context);
  }
}

module.exports = (engine) => {
  engine.registerTag('slider', SliderTag);
}
