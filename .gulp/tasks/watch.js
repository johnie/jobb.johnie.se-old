/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp  = require('gulp');
var config= require('../config');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
  gulp.watch(config.style.watch,  ['style']);
  gulp.watch(config.scripts.src,  ['scripts']);
  gulp.watch(config.images.src,   ['images']);
  gulp.watch(config.markup.src,   ['markup']);
});
