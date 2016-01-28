var gulp = require('gulp');
var runsync = require('run-sequence');
var requireDir = require('require-dir');
var watch = require('gulp-watch');

requireDir('./gulp', {
  recurse: true
});


gulp.task('default', function() {
  runsync('src/clean',
          'src/minify-html',
          'src/styles',
          'src/scripts');
});


gulp.task('watch', function() {
  watch(['src/scss/*.scss', 'src/features/**/scss/*.scss'], function() {
    runsync('src/styles');
  });

  watch('src/views/*.html', function() {
    runsync('src/minify-html');
  });

  watch(['src/*.js', 'src/features/**/*.js'], function() {
    runsync('src/scripts');
  });
});
