const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const requireDir = require('require-dir');

const Liquid = require("liquid-node");
const engine = new Liquid.Engine;

var errors = [];
var allchecks = [];

const replaceProblemWithSpace = (chunk, err) => {
  const problemReg = /at (.*) /;
  const replacer = err.message.match(problemReg)[1];
  const replacee = replacer.replace(/.*/g, ' ');
  var replacedstring = chunk.split(/\n/g);
  var newlinestring = replacedstring[err.location.line-1];
  newlinestring = newlinestring.substring(0, err.location.col-1) + replacee + newlinestring.substring(err.location.col-1 + replacer.length, newlinestring.length);
  replacedstring[err.location.line-1] = newlinestring;
  // console.log(`replaced ${replacer} with '${replacee}' in ${err.location.line} : ${err.location.col}`);
  return replacedstring.join('\n');
};

const parseChunk = (chunk) => {
  return engine
    .parse(chunk)
    .catch((err) => {
      errors.push(err);
      chunk = replaceProblemWithSpace(chunk, err);
      return parseChunk(chunk);
    });
};


const linter = {
  lintFile: (filepath, callback) => {
    errors = [];
    const testString = fs.readFileSync(filepath).toString();
    allchecks.push(parseChunk(testString));
    Promise.all(allchecks)
      .then(() => callback(errors.reverse()));
  },
  lintFilePromise: (filepath) => {
    errors = [];
    return fs.readFileAsync(filepath)
      .then((buffer) => {
        allchecks.push(parseChunk(buffer.toString()));
        return Promise.all(allchecks)
          .then(() => errors.reverse());
      });
  },
  lintString: (string, callback) => {
    errors = [];
    allchecks.push(parseChunk(string));
    Promise.all(allchecks)
      .then(() => callback(errors.reverse()));
  },
  lintStringPromise: (string) => {
    errors = [];
    allchecks.push(parseChunk(string));
    return Promise.all(allchecks)
      .then(() => errors.reverse());
  },
  loadTags: (dirpath) => {
    const tags = requireDir(dirpath);
    for(tag in tags) {
      tags[tag](engine);
    }
  },

};

module.exports = linter;
