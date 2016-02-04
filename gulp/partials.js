var gulp = require('gulp');
var minifyhtml = require('gulp-minify-html');
var preprocess = require('gulp-preprocess');

gulp.task('src/partials', function() {
  return gulp.src([
    'src/features/**/*.html'
  ])
  .pipe(preprocess())
  .pipe(minifyhtml())
  .pipe(gulp.dest('dist/src/features'));
});
