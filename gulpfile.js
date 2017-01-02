var gulp = require('gulp');
var jshint = require('gulp-jshint');
var babel = require('gulp-babel');
var del = require('del');

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

gulp.task('jshint', function () {
  return gulp.src('dist/**/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

gulp.task('default', ['clean','babel', 'jshint']);