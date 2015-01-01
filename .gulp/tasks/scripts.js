/**
 * Compile, concat and Uglify Javascript
 */

var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var handleErrors = require('../util/handleErrors');
var config       = require('../config');
var package      = require('../../package.json');
var uglify       = require('gulp-uglify');
var header       = require('gulp-header');
var rename       = require('gulp-rename');
var concat       = require('gulp-concat');


/*------------------------------------*\

  Banner

\*------------------------------------*/
var banner = [
    '/*!\n' +
    ' * <%= package.name %>\n' +
    ' * <%= package.description %>\n' +
    ' * <%= package.homepage %>\n' +
    ' * @author <%= package.author %>\n' +
    ' * @version <%= package.version %>\n' +
    ' * Copyright ' + new Date().getFullYear() + '. <%= package.license %> licensed.\n' +
    ' */',
    '\n'
  ].join('');


/*------------------------------------*\

  Scripts task

\*------------------------------------*/
gulp.task('scripts', function() {
  return gulp.src([
      config.bowerjs.base + 'angular/angular.js',
      config.bowerjs.base + 'angular-route/angular-route.js',
      config.bowerjs.base + 'fastclick/lib/fastclick.js',
      config.bowerjs.base + 'svgeezy/svgeezy.js',
      config.bowerjs.base + 'fancyselect/fancySelect.js',
      config.bowerjs.base + 'jquery-validation/dist/jquery.validate.js',
      config.bowerjs.base + 'fancyselect/fancySelect.js.js',
      config.scripts.src
    ])
    .pipe(concat(
      'master.js'
    ))
    .pipe(browserSync.reload({
      stream:true
    }))
    .pipe(uglify({
      mangle: false
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(header(banner, {
      package: package
    }))
    .pipe(gulp.dest(
      config.scripts.dest
    ))
});
