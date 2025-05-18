const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

// Использование динамического импорта для gulp-imagemin
async function loadImagemin() {
  const imagemin = (await import('gulp-imagemin')).default;
  return imagemin;
}

// Пути к файлам
const paths = {
  scss: 'src/scss/**/*.scss',
  js: 'src/js/**/*.js',
  images: 'src/images/**/**/*',
  html: 'src/**/*.html', // Добавлено
  dist: 'dist/'
};

// Компиляция SCSS в CSS
function styles() {
  return src(paths.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest(paths.dist + 'css'))
    .pipe(browserSync.stream());
}

// Сборка и минификация JS
function scripts() {
  return src(paths.js)
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(uglify())
    .pipe(dest(paths.dist + 'js'))
    .pipe(browserSync.stream());
}

// Оптимизация изображений
async function images() {
  const imagemin = await loadImagemin();
  return src(paths.images)
    .pipe(imagemin())
    .pipe(dest(paths.dist + 'images'));
}

// Копирование HTML
function html() {
  return src(paths.html)
    .pipe(dest(paths.dist))
    .pipe(browserSync.stream());
}

// Запуск сервера и слежение за изменениями
function serve() {
  browserSync.init({ server: { baseDir: paths.dist } });
  watch(paths.scss, styles);
  watch(paths.js, scripts);
  watch(paths.images, images);
  watch(paths.html, html); // Добавлено
  watch(paths.dist + '**/*').on('change', browserSync.reload);
}

// Экспорт задач
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.html = html; // Добавлено
exports.serve = series(parallel(styles, scripts, images, html), serve);
exports.default = series(parallel(styles, scripts, images, html), serve);
