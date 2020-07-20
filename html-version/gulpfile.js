var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// Compile Scss
gulp.task('sass', function () {
  return gulp.src('./css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename(function (path) {
      path.basename = path.basename + '.scss';
    }))
    .pipe(gulp.dest('./css'));
});

// Auto reload
gulp.task('reload', function (done) {
  browserSync.reload();
  done();
});

// Static server
gulp.task('server', function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  gulp.watch("./css/*.css", gulp.series('reload'));
  gulp.watch("./css/*.scss", gulp.series('sass', 'reload'));
  gulp.watch("./js/*.js",  gulp.series('reload'));
  gulp.watch("./*.html",  gulp.series('reload'));
});

// Entry point
gulp.task('default', gulp.series('sass', 'server'));
