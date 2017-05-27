const gulp = require("gulp");
const $ = require("gulp-load-plugins")();
const browserSync = require("browser-sync").create();

gulp.task("html-min",function(){
    
    const src = "./src/views/*.html"
    const dest = "./public/views";
    return gulp.src(src)
        .pipe($.htmlmin({collapseWhitespace : true}))
        .pipe(gulp.dest(dest))
        .pipe(browserSync.reload({stream:true}));
    
});

gulp.task("css-min",function(){
    
    const src="./src/css/main.css";
    const dest = "./public/css"
    return gulp.src(src)
        .pipe($.sourcemaps.init())  
        .pipe($.autoprefixer())
        .pipe($.cssmin())
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(dest))
        .pipe(browserSync.reload({stream:true}));
    
});

gulp.task('ng-min', function () {
    
    const src = "./src/js/**/*.js";
    const dest = "./public/js";
    return gulp.src(src)
        .pipe($.sourcemaps.init()) 
        .pipe($.ngmin())
        .pipe($.uglify())
        .pipe($.concat('angular.js'))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(dest))
        .pipe(browserSync.reload({stream:true}));
    
});
gulp.task('image-min', function () {
          
    const src = "./src/img/*.jpg";
    const dest = "./build/img";
    return  gulp.src(src)
        .pipe($.imagemin())
        .pipe(gulp.dest(dest));

});

gulp.task("nodemon", function(){
    return $.nodemon({
        script : "server.js"
    });
});

gulp.task("watch-all", ["nodemon"], function () {
    
    browserSync.init({
        proxy: "localhost:3000"
        , port: 5000
        , notify: true
        , open: false
    });     
    gulp.watch("./views/*.html",["html-min"]);
    gulp.watch("./src/css/*.css",["css-min"]);
    gulp.watch("./src/js/*.js",["ng-min"]);
     
});