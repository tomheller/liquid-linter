const extend = require('../lib/extend.js');
const Liquid = require('liquid-node');

module.exports = (engine) => {

  hasProp = {}.hasOwnProperty;
  SnippetTag = (function(superClass) {
    extend(SnippetTag, superClass);

    function validateParams(markup) {

    }

    function SnippetTag(template, tagname, markup) {
      validateParams(markup);
      return SnippetTag.__super__.constructor.apply(this, arguments);
    }
    SnippetTag.prototype.render = () => {};
    return SnippetTag;
  })(Liquid.Tag);
  engine.registerTag("snippet", SnippetTag);
};
