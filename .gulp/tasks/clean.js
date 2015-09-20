var gulp   = require('gulp');
var del    = require('del');
var config = require('../config').basePaths;

gulp.task('clean:before', function(cb) {
  del([ './build/**' ], {
    read: false,
    dot: true,
    force: true
  }, cb());
});
