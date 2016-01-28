var gulp = require('gulp');
var angularFileSort = require('gulp-angular-filesort');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var preprocess = require('gulp-preprocess');

gulp.task('src/scripts', function() {
  return gulp.src([
    './src/templates/*.js',
    './src/*.js',
    './src/features/**/*.js'
  ])
    .pipe(angularFileSort())
    .pipe(concat('src.js'))
    .pipe(preprocess())
    .pipe(gulp.dest('dist/src/js'))
    .pipe(uglify({
      compress: {
        drop_console: true
      }
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist/src/js'));
});
