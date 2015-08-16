var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sourcemaps = require("gulp-sourcemaps"),
    babel = require("gulp-babel"),
    rename = require('gulp-rename'),
    mocha = require('gulp-mocha'),
    process = require('child_process');

var files = {
	html: ['*.html', './app/**/*.html'],
	es6: ['./app/*.es6', './app/**/*.es6'],
	js: ['./app/*.js', './app/**/*.js'],
	testJs: ['./app/*.spec.js', './app/**/*.spec.js']
};

function spawnTests() {
    process.spawn('gulp', ['test'], { stdio: 'inherit' });
    connect.reload();
}

gulp.task('babel', function () {
    return gulp.src(['**/*.es6'])
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(rename({ extname: '.js' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('.'));
});

gulp.task('watch', function(){
    spawnTests();
	gulp.watch(files.html, ['html']);
    gulp.watch(files.es6, spawnTests);
});

gulp.task('html', function () {
	gulp.src(files.html)
		.pipe(connect.reload());
});

gulp.task('test', ['babel'], function () {
    return gulp.src(files.testJs)
    .pipe(mocha({ reporter: 'spec', ui: 'bdd' }));
});

gulp.task('connect', function () {
	connect.server({
		livereload: true
	});
});

gulp.task('default', [ 'connect', 'watch']);
