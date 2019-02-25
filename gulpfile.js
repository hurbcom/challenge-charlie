var gulp = require('gulp');
var path = require('path');
var less = require('gulp-less');
var watchLess = require('gulp-watch-less');

var paths = {
  less: ["./less/**/*.less"]
};
 
gulp.task('less', function () {
  return gulp.src(paths.less)
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function() {
  gulp.watch(paths.less, gulp.series('less'));
});