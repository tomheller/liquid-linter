const assert = require('chai').assert;
const linter = require('../index.js');

describe('tags', function() {

  describe('sectiontag', function() {
    describe('hooks', function() {
      beforeEach(function() {
        linter = require('../index.js');
      });
    });

    it('should return [].length 2 when section tag is unknown', function (done) {
      linter.lintFile('./testcases/sectiontag-complete.md', function (err) {
        assert.equal(err.length, 2);
        done();
      });
    });

    it('should return [].length 1 when blocktag does not close', function (done) {
      linter.loadTags();
      linter.lintFile('./testcases/sectiontag-incomplete.md', function (err) {
        assert.equal(err.length, 1);
        done();
      });
    });

    it('should return [].length 1 when closed blocktag does not open', function (done) {
      linter.loadTags();
      linter.lintFile('./testcases/sectiontag-incomplete-02.md', function (err) {
        assert.equal(err.length, 1);
        console.log(err);
        done();
      });
    })
  });
});
