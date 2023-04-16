const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');

function njk() {
    // Источником файлов для рендеринга является папка src/
    return gulp.src('src/**/*.html')
        .pipe(nunjucks.compile())
        .pipe(gulp.dest('dist'))
};

// Функция для рендеринга изображений
function images() {
    return gulp.src('src/images/**/*.*')
        .pipe(gulp.dest('dist/images'))
};

// Функция для рендеринга CSS-файлов из папки style
function style() {
    return gulp.src('src/style/*.css')
        .pipe(gulp.dest('dist/style'))
};


// Функция для рендеринга CSS-файлов из папки media
function media() {
    return gulp.src('src/media/**/*.css')
        .pipe(gulp.dest('dist/media'))
};

// Функция для рендеринга PHP-файлов
function php() {
    return gulp.src('src/php/**/*.php')
        .pipe(gulp.dest('dist/php'))
};

// Функция для рендеринга JavaScript-файлов
function script() {
    return gulp.src('src/script/**/*.js')
        .pipe(gulp.dest('dist/script'))
};

// Функция для рендеринга PDF-файлов
function document() {
    return gulp.src('src/document/**/*.pdf')
        .pipe(gulp.dest('dist/document'))
};



function watch() {
    gulp.watch('src/**/*.html', njk); // отслеживаем изменения в html файлах
    gulp.watch('src/images/**/*.*', images); // отслеживаем изменения в изображениях
    gulp.watch('src/style/*.css', style); // отслеживаем изменения в CSS файлах
    gulp.watch('src/media/**/*.css', media); // отслеживаем изменения в CSS файлах в папке media
    gulp.watch('src/php/**/*.php', php); // отслеживаем изменения в php файлах
    gulp.watch('src/script/**/*.js', script); // отслеживаем изменения в JS файлах
    gulp.watch('src/document/**/*.pdf', document); // отслеживаем изменения в PDF файлах
};


// Экспортируем функции в одну основную задачу
exports.default = gulp.series(
    gulp.parallel(images, style, media, php, script, document), // Запускаем задачи параллельно
    njk,
    watch
);