var gulp = require('gulp');

gulp.task('default', ['clean:before'], function () {
  gulp.start(
    'watch',
    'style',
    'scripts',
    'images',
    'markup'
  );
});
