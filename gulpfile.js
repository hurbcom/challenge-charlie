var gulp = require('gulp'),
clean = require('gulp-clean'),
less = require('gulp-less'),
concat = require('gulp-concat'),
pug = require('gulp-pug'),
LessAutoprefix = require('less-plugin-autoprefix'),
browserSync = require('browser-sync').create(),
sourcemaps = require('gulp-sourcemaps'),
src = './app',
autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });



gulp.task('clean', function () {
	return gulp.src('./dist/', {read: false})
	.pipe(clean());
});
gulp.task('image', () =>
gulp.src(src + '/images/**')
.pipe(gulp.dest('dist/images'))
);

gulp.task('fonts', () =>
gulp.src(src + '/less/fonts/**')
.pipe(gulp.dest('dist/css/fonts'))
);

gulp.task('pages', function() {	
	gulp.src(src + '/*.pug')
	.pipe(pug({
		pretty: true
	}))
	.pipe(gulp.dest('./dist/'))
	.pipe(browserSync.stream());
});

gulp.task('less', function() {
	return gulp.src(src + '/less/*.less', ['less'])
		.pipe(sourcemaps.init())
		.pipe(less({
			plugins: [autoprefix]
		  }))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./dist/css/'))
		.pipe(browserSync.stream());
});
gulp.task('scripts', function() {
	return gulp.src(src + '/js/*.js')
	.pipe(sourcemaps.init())
	.pipe(concat('main.js'))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./dist/js'))
	.pipe(browserSync.stream());
});
gulp.task('scripts_json', function() {
	return gulp.src(src + '/js/*.json')
	.pipe(gulp.dest('./dist/js'))
	.pipe(browserSync.stream());
});

gulp.task('serve', ['less', 'pages','image', 'scripts', 'fonts', 'scripts_json'], function() {
	browserSync.init({
		server: "./dist"
	});
	gulp.watch(src + "/less/**/*.less", ['less']);
	gulp.watch(src + '/**/*.pug', ['pages']);
	gulp.watch(src + '/images/', ['image']);
	gulp.watch(src + '/js/**.{js,json}', ['scripts']);
	gulp.watch(src + '/js/**.json', ['scripts_json']);
});

gulp.task('default', ['serve']);