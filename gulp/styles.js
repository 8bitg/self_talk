var gulp = require('gulp');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('src/styles', function() {
  return gulp.src('src/features/global/scss/mobile.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/src/css/'))
    .pipe(minifycss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist/src/css/'));
});
