var gulp = require('gulp');
var config = require('../config').basePaths;

gulp.task('copyfonts', function() {
  gulp.src('./vendor/ionicons/fonts/**/*.{ttf,woff,eof,svg}')
  .pipe(gulp.dest(config.dest + '/fonts'));
});
