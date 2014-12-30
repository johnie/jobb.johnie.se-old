var gulp   = require('gulp');
var rimraf = require('gulp-rimraf');
var config = require('../config').basePaths;

gulp.task('clean:before', function() {
  return gulp.src(config.dest, { read: false })
    .pipe(rimraf({ force: true }));
});
