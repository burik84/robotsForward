"use strict";

/* параметры для gulp-autoprefixer */
var autoprefixerList = [
    'Chrome >= 45',
    'Firefox ESR',
    'Edge >= 12',
    'Explorer >= 10',
    'iOS >= 9',
    'Safari >= 9',
    'Android >= 4.4',
    'Opera >= 30'
];
/* пути к исходным файлам (src), к готовым файлам (build), а также к тем, за изменениями которых нужно наблюдать (watch) */
var path = {
    build: {
        html: 'dist/',
        js: 'dist/js/',
        css: 'dist/css/',
        img: 'dist/img/',
        fonts: 'dist/webfonts/'
    },
    src: {
        html: 'src/*.html',
        js: 'src/js/main.js',
        style: 'src/style/main.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/webfonts/**/*.*'
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        css: 'src/style/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'srs/webfonts/**/*.*'
    },
    clean: 'dist'
};
/* настройки сервера */
var config = {
    server: {
        baseDir: 'dist'
    },
    notify: false
};

var gulp = require('gulp'), // подключаем Gulp
    webserver = require('browser-sync'), // сервер для работы и автоматического обновления страниц
    del = require('del'), // плагин для удаления файлов и каталогов
    autoprefixer = require('gulp-autoprefixer'), // модуль для автоматической установки автопрефиксов
    cache = require('gulp-cache'), // модуль для кэширования
    cleanCSS = require('gulp-clean-css'), // плагин для минимизации CSS
    concat = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    cssnano = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
    imagemin = require('gulp-imagemin'), // плагин для сжатия PNG, JPEG, GIF и SVG изображений
    plumber = require('gulp-plumber'), // модуль для отслеживания ошибок
    rigger = require('gulp-rigger'), // модуль для импорта содержимого одного файла в другой
    sass = require('gulp-sass'), // модуль для компиляции SASS (SCSS) в CSS
    sourcemaps = require('gulp-sourcemaps'), // модуль для генерации карты исходных файлов
    uglify = require('gulp-uglify'), // модуль для минимизации JavaScript
    jpegrecompress = require('imagemin-jpeg-recompress'), // плагин для сжатия jpeg
    pngquant = require('imagemin-pngquant'); // плагин для сжатия png

gulp.task('clean', function() {
    return del.sync('dist'); /* удаление папки dist*/
});

gulp.task('clear', function() {
    return cache.clearAll(); /* удаление папки dist*/
});

// запуск сервера
gulp.task('webserver', function() {
    webserver(config);
});

// сбор html
gulp.task('html', function() {
    return gulp.src(path.src.html) // выбор всех html файлов по указанному пути
        .pipe(plumber()) // отслеживание ошибок
        .pipe(rigger()) // импорт вложений
        .pipe(gulp.dest(path.build.html)) // выкладывание готовых файлов
        .pipe(webserver.reload({
            stream: true
        })); // перезагрузка сервера
});

// сбор стилей
gulp.task('css', function() {
    return gulp.src(path.src.style) // получим main.scss
        .pipe(plumber()) // для отслеживания ошибок
        .pipe(sourcemaps.init()) // инициализируем sourcemap
        .pipe(sass()) // scss -> css
        .pipe(autoprefixer({ // добавим префиксы
            browsers: autoprefixerList
        }))
        .pipe(cleanCSS()) // минимизируем CSS
        .pipe(sourcemaps.write('./')) // записываем sourcemap
        .pipe(gulp.dest(path.build.css)) // выгружаем в build
        .pipe(webserver.reload({
            stream: true
        })); // перезагрузим сервер
});

// сбор js
gulp.task('js', function() {
    gulp.src(path.src.js) // получим файл main.js
        .pipe(plumber()) // для отслеживания ошибок
        .pipe(rigger()) // импортируем все указанные файлы в main.js
        .pipe(sourcemaps.init()) //инициализируем sourcemap
        .pipe(uglify()) // минимизируем js
        .pipe(sourcemaps.write('./')) //  записываем sourcemap
        .pipe(gulp.dest(path.build.js)) // положим готовый файл
        .pipe(webserver.reload({
            stream: true
        })); // перезагрузим сервер
});

// перенос шрифтов
gulp.task('fonts', function() {
    return gulp.src([path.src.fonts])
        .pipe(gulp.dest(path.build.fonts));
});

// обработка картинок
gulp.task('image', function() {
    return gulp.src(path.src.img) // путь с исходниками картинок
        .pipe(cache(imagemin({ // Сжимаем их с наилучшими настройками
            interlaced: true,
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()]
        })))
        .pipe(gulp.dest(path.build.img)); // выгрузка готовых файлов
});

// сборка
gulp.task('build', [
    'html',
    'css',
    'js',
    'fonts',
    'image'
]);

// запуск задач при изменении файлов
gulp.task('watch', function() {
    gulp.watch(path.watch.html, ['html']);
    gulp.watch(path.watch.css, ['css']);
    gulp.watch(path.watch.js, ['js']);
    gulp.watch(path.watch.img, ['image']);
    gulp.watch(path.watch.fonts, ['fonts']);
});

// задача по умолчанию
gulp.task('default', [
    'clean',
    'build',
    'webserver',
    'watch'
]);