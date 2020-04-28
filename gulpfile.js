// ver 2.0 robotsForward
/* пути к исходным файлам (src), 
к готовым файлам (build), 
за изменениями которых нужно наблюдать (watch) */
var paths = {
    build: {
        html: 'dist/',
        js: 'dist/js/',
        css: 'dist/css/',
        img: 'dist/img/',
        fonts: 'dist/webfonts/',
        service: 'dist/'
    },
    src: {
        html: 'src/html/*.html',
        js: ['src/js/lib/*.js','src/js/*.js'],
        style: 'src/style/main.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/webfonts/**/*.*',
        service: 'src/service/**/*.*'
    },
    watch: {
        html: 'src/html/**/*.html',
        js: 'src/js/**/*.js',
        css: 'src/style/**/*.scss'
    },
    clean: 'dist',
    baseDir: 'dist'
};
/* настройки сервера */
var config = {
    server: {
        baseDir: './dist'
    },
    notify: false
};

const gulp = require('gulp'), // подключаем Gulp
    del = require('del'), // плагин для удаления файлов и каталогов
    cache = require('gulp-cache'), // модуль для кэширования
    browserSync = require('browser-sync').create(), // сервер для работы и автоматического обновления страниц
    htmlmin = require('gulp-htmlmin'), // плагин для минификации html
    plumber = require('gulp-plumber'), // модуль для отслеживания ошибок
    rigger = require('gulp-rigger'), // модуль для импорта содержимого одного файла в другой
    concat = require('gulp-concat'); // модуль для импорта содержимого одного файла в другой

const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const tildeImporter = require('node-sass-tilde-importer');
const sourcemaps = require('gulp-sourcemaps');

const imagemin = require('gulp-imagemin'); // плагин для сжатия PNG, JPEG, GIF и SVG изображений
const pngquant = require('imagemin-pngquant'); // плагин для сжатия png

sass.compiler = require('node-sass');

// удаление папки сборки
function clean() {
    return del(paths.clean);
}

function clear() {
    return cache.clearAll();
}
// запуск сервера
gulp.task('webserver', function () {
    webserver(config);
});
// Инкрементальная сборка - пересборка если изменился файлы
function watch() {
    browserSync.init({
        server: paths.baseDir
    });
    gulp.watch(paths.watch.html, html);
}
// сборка html
function html() {
    return gulp.src(paths.src.html)
        .pipe(plumber()) // отслеживание ошибок
        .pipe(rigger()) //Прогоним через rigger
        .pipe(gulp.dest(paths.build.html)) // выкладывание готовых файлов
        .pipe(browserSync.stream()); // перезагрузка сервера
}
// Если у нас на входе несколько файлов scss, то plumber и concat я не использую.
function styles() {
    return gulp.src(paths.src.style) // получим main.scss
        .pipe(sass({
            importer: tildeImporter
        }).on('error', sass.logError)) // scss -> css + импорт из nodemodules c использованием ~
        // .pipe(concat('all.css'))
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({ // добавим префиксы
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.build.css)) // выгружаем в build
        .pipe(browserSync.stream()); // перезагрузим сервер
}


// минификация html для production
function htmlMin() {
    return gulp.src(paths.src.html)
        .pipe(rigger()) //Прогоним через rigger
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest(paths.build.html)); // выкладывание готовых файлов
}

// Если у нас на входе несколько файлов scss, то plumber и concat я не использую.
function stylesMin() {
    return gulp.src(paths.src.style) // получим main.scss
        // .pipe(plumber())
        .pipe(sass({
            importer: tildeImporter
        }).on('error', sass.logError)) // scss -> css + импорт из nodemodules c использованием ~
        // .pipe(concat('all.css'))
        .pipe(autoprefixer({ // добавим префиксы
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 1
        }))
        .pipe(gulp.dest(paths.build.css)); // выгружаем в build
}

function script() {
    return gulp.src(paths.src.js)
        // .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.build.js)) // выкладывание готовых файлов
        .pipe(browserSync.stream()); // перезагрузим сервер
}

// Инкрементальная сборка - пересборка если изменился файлы
function watch() {
    browserSync.init({
        server: paths.baseDir
    });
    gulp.watch(paths.watch.html, html);
    gulp.watch(paths.watch.css, styles);
    gulp.watch(paths.watch.js, script);
}

// обработка картинок
function image() {
    return gulp.src(paths.src.img) // путь с исходниками картинок
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            optimizationLevel: 5,
            svgoPlugins: [{
                removeViewBox: true
            }],
            use: [pngquant()]
        })))
        .pipe(gulp.dest(paths.build.img)) // выкладывание готовых файлов
}

// перенос служебных файлов из папки service в корень
function copyService() {
    return gulp.src(paths.src.service)
        .pipe(gulp.dest(paths.build.service));
}
// копирование шрифтов
function copyFonts() {
    return gulp.src(paths.src.fonts)
        .pipe(gulp.dest(paths.build.fonts));
}

exports.clean = clean;
exports.clear = clear;
exports.image = image;
exports.copyService=copyService;
exports.copyFonts=copyFonts;
exports.watch = watch;
exports.html = html;
exports.styles = styles;
exports.script = script;
exports.htmlMin = htmlMin;
exports.stylesMin = stylesMin;

// сборка
gulp.task('build',
    gulp.series(clean, clear, image, copyFonts, script,
        gulp.parallel(
        html, styles
    ))
);

gulp.task('prod',
    gulp.series(clean, clear, image, copyService,copyFonts,
        gulp.parallel(
            htmlMin, stylesMin, script
        )
    )
);

// Сборка заданий в одно общее -задача по умолчанию
gulp.task('default', gulp.series('build', watch));