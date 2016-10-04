var gulp = require('gulp');
var path = require('path');
var concat = require('gulp-concat');

var Server = require('karma').Server;


/**
 * Run test once and exit
 */

gulp.task('test:run', function (done) {
  new Server({
    configFile: path.join(__dirname, '/karma.conf.js'),
    singleRun: true
  }, done).start();
});


/**
 * Watch for file changes and re-run tests on each change
 */

gulp.task('test:watch', function (done) {
  new Server({
    configFile: path.join(__dirname, '/karma.conf.js')
  }, done).start();
});


/**
 * Create dist
 */
gulp.task('dist:build', function() {

  return gulp.src(['./src/jcdl.js'])
    .pipe(gulp.dest('./dist'));

});
