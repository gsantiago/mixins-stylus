/**
 * Script based on Rupture's test script
 * (https://github.com/jenius/rupture)
 */

var join = require('path').join;
var fs = require('fs');
var stylus = require('stylus');
var parse = require('css-parse');
var should = require('should');
var glob = require('glob');
var testPath = __dirname;

function matchExpected (file, done) {
  stylus(fs.readFileSync(join(testPath, 'styl', file), 'utf8'))
    .import(join(testPath, '../'))
    .render(function (err, css) {
      if (err) {
        return done(err);
      }
      var expected = join(testPath, 'css', file.replace('.styl', '.css'));
      console.log('testPath = ', expected);
      expected = JSON.stringify(parse(fs.readFileSync(expected, 'utf8')));

      try {
        JSON.stringify(parse(css)).should.be.equal(expected);
      } catch (e) {
        console.log('\nGenerated CSS:\n' + css);
        throw e;
      }

      done();
    });
}

var sources = glob.sync('*.styl', {cwd: join(testPath, 'styl')});

describe('Mixins', function () {

  sources.forEach(function (src) {
    it(src.replace('.styl', '()'), function (done) {
      matchExpected(src, done);
    });
  });

});
