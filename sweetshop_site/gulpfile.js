var gulp = require('gulp'),
    bower = require('gulp-bower'),
    less = require('gulp-less');

var config = {
    bowerDir: './bower_components',
    scriptDir: './static_contrib/scripts',
    cssDir: './static_contrib/content',
    fontDir: './static_contrib/fonts',
    lessDir: './less'
};

gulp.task('default', ['copy', 'less']);

gulp.task('bower', function () {
    return bower().pipe(gulp.dest(config.bowerDir));
});

gulp.task('less', function() {
    return gulp.src(config.lessDir + '/creative.less').pipe(less()).pipe(gulp.dest(config.cssDir));
});

gulp.task('copy', ['bower'], function () {

    gulp.src([
        config.bowerDir + '/jquery/dist/*',
        config.bowerDir + '/jquery.easing/js/*',
        config.bowerDir + '/bootstrap/dist/js/bootstrap*',
        config.bowerDir + '/wow/dist/*'
    ]).pipe(gulp.dest(config.scriptDir));

    gulp.src([
        config.bowerDir + '/bootstrap/dist/css/*',
        config.bowerDir + '/fontawesome/css/*',
        config.bowerDir + '/animate.css/*.css'
    ]).pipe(gulp.dest(config.cssDir));

    gulp.src([
        config.bowerDir + '/bootstrap/dist/fonts/*',
        config.bowerDir + '/fontawesome/fonts/*'
    ]).pipe(gulp.dest(config.fontDir));
});

