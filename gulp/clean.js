var gulp = require('gulp');
var del = require('del');

gulp.task('src/clean', function(cb) {
  del([
    'dist/src/css/*.css',
    'dist/src/js/*.js',
    'dist/src/img/*',
    'dist/views/src/*.html'
  ], cb);
});
