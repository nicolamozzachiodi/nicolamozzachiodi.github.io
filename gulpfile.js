'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
const minify = require('gulp-minify');
var concat = require('gulp-concat');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', gulp.series('sass'));
});

gulp.task('compress', function () {
    gulp.src(['./app/script/*.js', './app/js/*.mjs'])
        .pipe(minify())
        .pipe(gulp.dest('./app/script'))
});

gulp.task('scripts', function () {
    return gulp.src('./app/js/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./app/script'));
});
 