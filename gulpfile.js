
var gulp = require('gulp');
var babel = require('gulp-babel');
var del = require('del');
var runSequence = require('run-sequence');


const paths = {
  js: ['./**/*.js', '!dist/**', '!migrations/**', '!node_modules/**'],
  tests: './server/test/**/*.test.js'
};

gulp.task('clean', () => {
  return del('dist/**/*');
});

gulp.task('babel', function() {
  return gulp.src(paths.js, { base: '.' })                          
      .pipe(babel({ presets: ['es2015'] }))    
      .pipe(gulp.dest('dist'));               
});

gulp.task('default', function (cb) {
	return runSequence('clean', ['babel'], cb)
});