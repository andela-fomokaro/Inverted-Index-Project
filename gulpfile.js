const gulp = require('gulp');
const MinifyCSS = require('gulp-clean-css');
const eslint = require('gulp-eslint');
const browserSync = require('browser-sync');

gulp.task('browserSync', () => {
  browserSync({
    server: {
      baseDir: './',
      index: 'public/index.html',
    },
    port: process.env.PORT || 3000,
    files: ['Model/**', 'public/**/*.*', 'spec/**/*.*'],
    open: false,
  });
});


gulp.task('default', ['MinifyCSS', 'browserSync'], () => {});

gulp.task('MinifyCSS', () => gulp.src('style.css')
  .pipe(MinifyCSS())
  .pipe(gulp.dest('style.min.css')));


gulp.task('lint', () =>
    // Otherwise, the task may end before the stream has finished.
   gulp.src(['src/*.js', '!node_modules/**'])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError()));

