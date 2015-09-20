var browserSync = require('browser-sync');
var gulp        = require('gulp');
var config      = require('../config');
var reload      = browserSync.reload;

gulp.task('browserSync', ['build'], function() {
  browserSync(config.browserSync);

  gulp.watch(config.style.watch,  ['style', reload]);
  gulp.watch(config.scripts.src,  ['scripts', reload]);
  gulp.watch(config.images.src,   ['images', reload]);
  gulp.watch(config.markup.src,   ['markup', reload]);
});
