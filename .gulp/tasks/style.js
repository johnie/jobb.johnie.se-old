var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var styl         = require('gulp-stylus');
var sourcemaps   = require('gulp-sourcemaps');
var cssmin       = require('gulp-cssmin');
var handleErrors = require('../util/handleErrors');
var config       = require('../config').style;
var package      = require('../../package.json');
var header       = require('gulp-header');
var rename       = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

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

  Sass task

\*------------------------------------*/
gulp.task('style', ['images'], function () {
  return gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(styl())
    .on('error', handleErrors)
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({ browsers: ['last 2 version'] }))
    // .pipe(cssmin()) Fix for production
    .pipe(rename({ suffix: '.min' }))
    .pipe(header(banner, { package: package }))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
