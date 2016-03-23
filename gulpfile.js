var Promise = require('es6-promise').Promise;
var path = require('path');
var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    minify = require('gulp-minify'),
    uglify = require('gulp-uglify'),
    //imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    //cache = require('gulp-cache'),
    //livereload = require('gulp-livereload'),
    del = require('del');

gulp.task('styles', function(){
	  return gulp.src(['./css/material-form.css','./css/jquery.fullPage.min.css','./libs/animate.css'])
	  //.pipe(gulp.dest(function( file ) { return path.join(path.dirname(file.path), 'dist'); } ))
	  .pipe(concat('vendors.min.css'))
	  .pipe(cssnano())
//	.pipe(rename({basename : 'style',extname : '.css', suffix: '.min' }))
	  .pipe(gulp.dest('./dist'))
	  .pipe(notify({message : 'CSS minified'}))

})

gulp.task('css', function(){
	  return gulp.src('./css/fullpage-slick.css')
	//.pipe(gulp.dest(function( file ) { return path.join(path.dirname(file.path), 'dist'); } ))
	  .pipe(cssnano())
	  .pipe(rename({basename : 'style',extname : '.css', suffix: '.min' }))
	  .pipe(gulp.dest('./dist'))
	  .pipe(notify({message : 'style.min.css generated'}))

})

gulp.task('html', function(){
	  return gulp.src('./fullpage-test.html')
	//.pipe(gulp.dest(function( file ) { return path.join(path.dirname(file.path), 'dist'); } ))

	  .pipe(rename({basename : 'index',extname : '.html' }))
	  .pipe(gulp.dest('./dist'))
	  .pipe(notify({message : 'html generated'}))

})

gulp.task('assets', function(){
	  return gulp.src('./assets/*/*')
	//.pipe(gulp.dest(function( file ) { return path.join(path.dirname(file.path), 'dist'); } ))


	  .pipe(gulp.dest('./dist/assets'))
	  .pipe(notify({message : 'assets copied'}))

})


// Scripts
gulp.task('scripts', function() {
  return gulp.src(['./libs/jquery.min.js','./libs/fullpage.min.js','./libs/global.js','./libs/forms.js','./index.js'])
//    .pipe(jshint('.jshintrc'))
//    .pipe(jshint.reporter('default'))
    .pipe(rename({ suffix: '.min' }))
	.pipe(minify())
	.pipe(concat('index.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/'),process.cwd())
    //.pipe(gulp.dest('dist/scripts'))
    .pipe(notify({ message: 'Scripts task complete' }));
});




// Default task
gulp.task('default', function() {
  gulp.start('styles','scripts','css','html','assets');
});
