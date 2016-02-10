var gulp = require('gulp');
var templatecache = require('gulp-angular-templatecache');
var preprocess = require('gulp-preprocess');

gulp.task('src/minify-partials', function() {
  return gulp.src([
    './src/features/**/*.html'
  ])
    .pipe(preprocess())
    .pipe(templatecache())
    .pipe(gulp.dest('src/templates/'));
});
