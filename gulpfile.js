var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sourcemaps = require("gulp-sourcemaps"),
    babel = require("gulp-babel"),
    rename = require('gulp-rename'),
    mocha = require('gulp-mocha'),
    nodemon = require('gulp-nodemon'),
    process = require('child_process');

var files = {
    html: ['*.html', './app/**/*.html'],
    es6: ['./app/*.es6', './app/**/*.es6', './app/bootstrap.es6'],
    js: ['./app/*.js', './app/**/*.js'],
    testJs: ['./app/*.spec.js', './app/**/*.spec.js'],
    server: ['./server.js']
};

gulp.task('babel', function () {
    return gulp.src(files.es6)
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(rename({extname: '.js'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./app'))
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(files.html, ['html']);
    gulp.watch(files.es6, ['babel']);
});

gulp.task('html', function () {
    gulp.src(files.html)
        .pipe(connect.reload());
});

gulp.task('test', ['babel'], function () {
    return gulp.src(files.testJs)
        .pipe(mocha({reporter: 'spec', ui: 'bdd'}));
});

gulp.task('connect', function () {
    connect.server({
        root: '.',
        livereload: true
    });
});

gulp.task('default', ['babel','connect', 'watch']);
