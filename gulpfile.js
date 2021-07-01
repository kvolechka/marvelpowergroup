//jshint esversion: 6
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var scss = require('gulp-sass');
var minCSS = require('gulp-clean-css');

gulp.task('scss', function(done) {
    gulp.src("scss/*.scss")
        .pipe(scss())
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
    done();
});

gulp.task('min', function(done) {
    gulp.src("css/*.css")
        .pipe(minCSS())
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
    done();
});

gulp.task('serve', function(done) {
    browserSync.init({
        server: ""
    });
    gulp.watch("scss/*.scss", gulp.series('scss'));
    gulp.watch("*.html").on('change', () => {
    browserSync.reload();
    done();
    });
    done();
});

gulp.task('default', gulp.series('scss', 'serve', 'min'));