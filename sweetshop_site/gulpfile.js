var gulp = require('gulp'),
    bower = require('gulp-bower');

var config = {
    bowerDir: './bower_components',
    scriptDir: './static_contrib/scripts',
    cssDir: './static_contrib/content',
    fontDir: './static_contrib/fonts'
};

gulp.task('default', ['copy']);

gulp.task('bower', function () {
    return bower().pipe(gulp.dest(config.bowerDir));
});

gulp.task('copy', ['bower'], function () {

    gulp.src([
        config.bowerDir + '/jquery/dist/*',
        config.bowerDir + '/bootstrap/dist/js/bootstrap*'
    ]).pipe(gulp.dest(config.scriptDir));

    gulp.src([
        config.bowerDir + '/bootstrap/dist/css/*',
        config.bowerDir + '/fontawesome/css/*'
    ]).pipe(gulp.dest(config.cssDir));

    gulp.src([
        config.bowerDir + '/bootstrap/dist/fonts/*',
        config.bowerDir + '/fontawesome/fonts/*'
    ]).pipe(gulp.dest(config.fontDir));
});

