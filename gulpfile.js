var gulp = require('gulp'),
    apidoc = require('gulp-apidoc'),
    phpunit = require('gulp-phpunit'),
    run = require('gulp-run'),
    guppy = require('git-guppy')(gulp),
    prompt = require('gulp-prompt');

/**
 *
 */
gulp.task('apidocs', function (done) {
    return apidoc({
        src: "app/Http/Controllers",
        dest: "public/docs/api",
        config: './'
    }, done);
});

/**
 *
 */
gulp.task('sami-docs', function () {

    var binPath = '.\\vendor\\bin\\sami.php.bat';

    if (process.platform == 'linux') {
        binPath = './vendor/bin/sami.php';
    }
    return run(binPath + ' update config/sami.php').exec();
});

/**
 *
 */
gulp.task('phpunit', function () {

    var binPath = '.\\vendor\\bin\\phpunit.bat';

    if (process.platform == 'linux') {
        binPath = './vendor/bin/phpunit';
    }

    gulp.src('')
        .pipe(phpunit(binPath)).on('error', function (a, b) {

    });
});


gulp.task('bluenote', function () {
    process.chdir('public/admin/app/modules');

    return gulp.src('')
        .pipe(prompt.prompt({
            type: 'input',
            name: 'moduleName',
            message: 'Como será o nome do módulo (lowerCamelCase) ?'
        }, function (r) {
            run('yo bluenote ' + r.moduleName + ' --skip-install').exec();
            return r;
        }));
});

/**
 *
 */
gulp.task('docs', ['apidocs', 'sami-docs']);

/**
 *
 */
gulp.task('pre-commit', ['phpunit', 'docs']);
