var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', ['clean:before'], function (cb) {
  runSequence(['browserSync'], 'markup', 'style', 'scripts', 'images', cb);
});
