'use strict';

const Liquid = require('liquid-node');

class ButtonTag extends Liquid.Tag {
  constructor(template, tag, params) {
    super(template, tag, params);
  }

  render(context) {
    return super.render(context);
  }
}

module.exports = (engine) => {
  engine.registerTag('button', ButtonTag);
}
