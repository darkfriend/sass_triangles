var gulp = require('gulp'),
    minifyCss = require('gulp-clean-css'),
    rename = require("gulp-rename"),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

var resultDir = './',
        sourceDir = './scss/';

gulp.task('scss', function () {
    var f = gulp.src(sourceDir+'*.scss')
            .pipe(sass.sync().on('error', sass.logError))
            .pipe(autoprefixer({
                browsers: ['last 20 versions']
            }))
                .pipe(gulp.dest(resultDir+'/css'))
    var f2 = f;
    f.pipe(rename(function(path){
            path.dirname += "/min/";
            path.basename += ".min";
        }))
        .pipe(minifyCss())
        .pipe(gulp.dest(resultDir+'/css'));

    f2.pipe(concat('triangle.full.css'))
        .pipe(gulp.dest(resultDir+'/css'))
        .pipe(rename(function(path){
            path.dirname += "/min/";
            path.basename += ".min";
        }))
        .pipe(minifyCss())
        .pipe(gulp.dest(resultDir+'/css'));
});

gulp.task('watch',function(){
    gulp.watch(sourceDir+'*.scss',['scss']);
    gulp.watch('triangle-mixin.scss',['scss']);
});

gulp.task('default', ['scss', 'watch']);