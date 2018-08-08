'use strict';

const	gulp = require('gulp'),
		fileinclude = require('gulp-file-include'),
		htmlbeautify = require('gulp-html-beautify'),
		cleancss = require('gulp-clean-css'),
		htmlmin = require('gulp-htmlmin'),
		jsmin = require('gulp-jsmin'),
		rename = require('gulp-rename');

gulp.task("html",function(){
	gulp.src('src/html/*.html')
		.pipe(fileinclude({
			context:{
				detailPage: false
			}
		}))
		.pipe(htmlbeautify({
			"indent_size": 1,
			"indent_char": "	",
		}))
		.pipe(gulp.dest('build'));
});

gulp.task('cssmin', function () {
	return gulp.src('src/css/*.css')
		.pipe(cleancss())
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest('build/css'));
});

gulp.task('jsmin', function () {
	return gulp.src('src/js/*.js')
		.pipe(jsmin())
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest('build/js'));
});

gulp.task("htmlmin",function(){
	gulp.src('src/html/*.html')
		.pipe(fileinclude({
			context:{
				detailPage: false
			}
		}))
		.pipe(htmlmin({
			collapseWhitespace: true,
			minifyJS: true,
			removeComments: true
		}))
		.pipe(gulp.dest('build'));
});

gulp.task('portfolio', ['htmlmin', 'cssmin','jsmin']);
