const gulp        = require('gulp'); // здесь и ниже импортируем установленные пакеты
const browserSync = require('browser-sync');
const sass        = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');

gulp.task('server', function() {     // прописываем задачу по автообновлению ,hfepth

    browserSync({
        server: {
            baseDir: "dist"  // запуск сервера из чистовой папки dist
        }
    });

    gulp.watch("src/*.html").on('change', browserSync.reload); // следим за файлами html, которые находятся в папке src
});

gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(scss|sass|css)") // задача по компиляции sass кода, указываем путь откуда компилироват
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)) // указываем что стиль кода будет сжатый
        .pipe(rename({suffix: '.min', prefix: ''})) // переименовываем файлы 
        // .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("dist/css")) // показываем куда нужно ложить фаилы
        .pipe(browserSync.stream()); // после изменения файла опять обновляем страниц
});

gulp.task('watch', function() {  // задача, которая следит за обновлениями
    gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel('styles')); // когда происходят измененич  этих фацлах, то происходит запуск задачи styles
    gulp.watch("src/*.html").on('change', gulp.parallel('html'));
})

gulp.task('html', function () {
    return gulp.src("src/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("dist/"));
});

gulp.task('scripts', function () {
    return gulp.src("src/js/**/*")
        .pipe(gulp.dest("dist/js"));
});

gulp.task('fonts', function () {
    return gulp.src("src/fonts/**/*")
        .pipe(gulp.dest("dist/fonts"));
});


gulp.task('mailer', function () {
    return gulp.src("src/mailer/**/*")
        .pipe(gulp.dest("dist/mailer"));
});

gulp.task('images', function () {
    return gulp.src("src/img/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/img"));
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'scripts', 'fonts', 'mailer', 'images', 'html')); // parallel позволяет параллельно зпускать задчи