var gulp = require('gulp');
var minifyhtml = require('gulp-minify-html');
var preprocess = require('gulp-preprocess');

gulp.task('src/minify-html', function() {
  return gulp.src([
    'src/views/*.html'
  ])
  .pipe(preprocess())
  .pipe(minifyhtml())
  .pipe(gulp.dest('dist/src/views'));
});
