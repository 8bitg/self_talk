var gulp = require('gulp');
var del = require('del');

gulp.task('src/clean', function(cb) {
  return del([
    'src/templates/templates.js',
    'dist/src/css/*.css',
    'dist/src/js/*.js',
    'dist/src/img/*',
    'dist/src/views/*.html'
  ], cb);
});
