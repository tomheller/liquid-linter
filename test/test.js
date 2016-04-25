const assert = require('chai').assert;
const linter = require('../index.js');

const tags = {
  blocks: ["column", "deviceframe", "productcard", "section", "slider"],
  tags: ["button", "customerquote", "snippet", "video", "vidyard"]
};

describe('tags', function() {

  describe('sectiontag', function() {
    describe('hooks', function() {
      beforeEach(function() {
        linter = require('../index.js');
      });
    });
    it('should return 2 Errors when section tag is unknown', function (done) {
      linter.lintFile('./testcases/sectiontag/sectiontag-complete.md', function (err) {
        assert.equal(err.length, 2);
        assert.include(err[0].message, "Unknown tag \'endsection\'");
        assert.include(err[1].message, "Unknown tag \'section\'");
        done();
      });
    });

    it('should return 1 Error when section tag does not close', function (done) {
      linter.loadTags(tags);
      linter.lintFile('./testcases/sectiontag/sectiontag-incomplete.md', function (err) {
        assert.equal(err.length, 1);
        assert.include(err[0].message, "section tag was never closed");
        done();
      });
    });

    it('should return 1 Error when closed section tag does not open', function (done) {
      linter.loadTags(tags);
      linter.lintFile('./testcases/sectiontag/sectiontag-incomplete-02.md', function (err) {
        assert.equal(err.length, 1);
        assert.include(err[0].message, "Unknown tag \'endsection\'");
        done();
      });
    });

    it('should return no Error when bgimage parameter is good', function (done) {
      linter.loadTags(tags);
      linter.lintFile('./testcases/sectiontag/sectiontag-parameter-bgimage-passing.md', function (err) {
        assert.equal(err.length, 0);
        done();
      });
    });

    it('should return 1 Error when bgimage parameter is malformed', function (done) {
      linter.loadTags(tags);
      linter.lintFile('./testcases/sectiontag/sectiontag-parameter-bgimage.md', function (err) {
        assert.equal(err.length, 1);
        done();
      });
    });
  });

  describe('iftag', function() {
    describe('hooks', function() {
      beforeEach(function() {
        linter = require('../index.js');
      });
    });

    it('should return no Error when if tag is complete', function (done) {
      linter.lintFile('./testcases/ifstatement/ifstatement-complete.md', function (err) {
        assert.equal(err.length, 0);
        done();
      });
    });
    it('should return 1 Error when if tag is not closed', function (done) {
      linter.lintFile('./testcases/ifstatement/ifstatement-incomplete.md', function (err) {
        assert.equal(err.length, 1);
        done();
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

  it('Should return 1 Error, when variable is not closed', function (done) {
    linter.lintFile('./testcases/variable/variable-notclosing.md', function (err) {
      assert.equal(err.length, 1);
      assert.include(err[0].message, "Variable \'{{\' was not properly terminated");
      done();
    });
  });

  it('Should return no Error, when variable is not opening', function (done) {
    linter.lintFile('./testcases/variable/variable-notopening.md', function (err) {
      assert.equal(err.length, 0);
      done();
    });
  });
});

describe('fullpages', function() {
  describe('hooks', function() {
    beforeEach(function() {
      linter = require('../index.js');
      linter.loadTags(tags);
    });
  });

  it('Should return no Error when parsing well formed document', function (done) {
    linter.lintFile('./testcases/fulldocuments/wellformed.md', function (err) {
      assert.equal(err.length, 0);
      done();
    });
  });

  it('Should return 2 Error when parsing malformed document', function (done) {
    linter.lintFile('./testcases/fulldocuments/malformed.md', function (err) {
      assert.equal(err.length, 2);
      done();
    });
  });
});

describe('promisify', function() {
  describe('hooks', function() {
    beforeEach(function() {
      linter = require('../index.js');
      linter.loadTags(tags);
    });
  });

  it('Should return 2 Error when parsing malformed document in promise mode', function (done) {
    linter.lintFilePromise('./testcases/fulldocuments/malformed.md')
      .then(function(err) {
        assert.equal(err.length, 2);
        done();
      });
  });
});
