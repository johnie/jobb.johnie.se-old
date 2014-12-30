var gulp = require('gulp');

gulp.task('build', ['clean:before'], function () {
  gulp.start(
    'style',
    'scripts',
    'images',
    'markup'
  );
});
