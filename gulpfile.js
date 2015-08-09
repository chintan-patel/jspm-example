var gulp = require('gulp'),
	connect = require('gulp-connect');

var files = {
	html: ['*.html', './app/**/*.html'],
	js: ['*.js', './app/*.js', './app/**/*.js'],
};

gulp.task('html', function () {
	gulp.src(files.html)
		.pipe(connect.reload());
});

gulp.task('js', function () {
	gulp.src(files.js)
		.pipe(connect.reload());
});


gulp.task('connect', function () {
	connect.server({
		livereload: true
	});
});


gulp.task('watch', function () {
	gulp.watch(files.html, ['html']);
	gulp.watch(files.js, ['js']);
});

gulp.task('default', ['connect', 'watch']);
