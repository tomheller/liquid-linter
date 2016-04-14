const assert = require('chai').assert;
const linter = require('../index.js');

describe('tags', function() {

  describe('sectiontag', function() {
    describe('hooks', function() {
      beforeEach(function() {
        linter = require('../index.js');
      });
    });

    it('should return 2 Errors when section tag is unknown', function (done) {
      linter.lintFile('./testcases/sectiontag-complete.md', function (err) {
        assert.equal(err.length, 2);
        assert.include(err[0].message, "Unknown tag \'section\'");
        assert.include(err[1].message, "Unknown tag \'endsection\'");
        done();
      });
    });

    it('should return 1 Error when section tag does not close', function (done) {
      linter.loadTags();
      linter.lintFile('./testcases/sectiontag-incomplete.md', function (err) {
        assert.equal(err.length, 1);
        assert.include(err[0].message, "section tag was never closed");
        done();
      });
    });

    it('should return 1 Error when closed section tag does not open', function (done) {
      linter.loadTags();
      linter.lintFile('./testcases/sectiontag-incomplete-02.md', function (err) {
        assert.equal(err.length, 1);
        assert.include(err[0].message, "Unknown tag \'endsection\'");
        done();
      });
    });

    it('should return no Error when bgimage parameter is good', function (done) {
      linter.loadTags();
      linter.lintFile('./testcases/sectiontag-parameter-bgimage-passing.md', function (err) {
        assert.equal(err.length, 0);
        done();
      });
    });

    it('should return 1 Error when bgimage parameter is malformed', function (done) {
      linter.loadTags();
      linter.lintFile('./testcases/sectiontag-parameter-bgimage.md', function (err) {
        assert.equal(err.length, 1);
        done();
        // assert.include(err[0].message, "Unknown tag \'endsection\'");
      });
    });
  });
});

describe('variables', function() {
  describe('hooks', function() {
    beforeEach(function() {
      linter = require('../index.js');
    });
  });

  it('Should return an error, when variable is not closed', function (done) {
    linter.lintFile('./testcases/variable-notclosing.md', function (err) {
      assert.equal(err.length, 1);
      assert.include(err[0].message, "Variable \'{{\' was not properly terminated");
      done();
    });
  });

  it('Should not return an error, when variable is not opening', function (done) {
    linter.lintFile('./testcases/variable-notopening.md', function (err) {
      assert.equal(err.length, 0);
      done();
    });
  });
});
