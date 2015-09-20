var gulp = require('gulp');
var config = require('../config').markup;
var htmlmin = require('gulp-htmlmin');
var swig = require('gulp-swig');
var marked = require('swig-marked');
var opts = {
  defaults: {
    cache: false,
    varControls: ['<%=', '%>']
  },
  setup: function(swig) {
    marked.useTag(swig, 'markdown');
  }
};

gulp.task('markup', function() {
  return gulp.src(config.src)
    .pipe(swig(opts))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(config.dest));
});
