/*
    gulp.src()读文件
    gulp.dest()写文件
    gulp.task()任务
    gulp.watch监听
    series()按顺序执行
    parallel()以最大并发来运行的任务
*/
var gulp = require('gulp');
const { src,dest,parallel, series } = require('gulp');

var webserver = require('gulp-webserver'); //服务器插件
var imagemin = require('gulp-imagemin');//压缩图片插件
var htmlclean = require('gulp-htmlclean'); //压缩html插件
var uglify = require('gulp-uglify');//压缩js插件
var strip = require("gulp-strip-debug");//将js中的调试语句移除插件
var concat = require('gulp-concat');//多个js文件合并插件
var less = require("gulp-less"); //将less转换css插件
var cssnano = require('gulp-cssnano');//压缩css代码
var autoprefixer  =  require('gulp-autoprefixer');//自动添加css样式前缀
var postcss = require("gulp-postcss");//搭配 autoprefixer 使用



// 储存统一文件路径
var folder = {
    src:'src/',
    build:'build/'
}



//压缩图片配置
images=(done)=>{
    src(folder.src + 'images/*')
        .pipe(imagemin())
        .pipe(dest(folder.build + 'images/'));
        done();
}

//压缩html配置
html=(done)=>{
    src(folder.src + 'html/*')
    .pipe(htmlclean())
    .pipe(dest(folder.build + 'html/'));
    src('src/index.html')
    .pipe(htmlclean())
    .pipe(dest('build/'));
    done();
};


//压缩js配置
js=(done)=>{
    src(folder.src + 'js/home/*')
        .pipe(strip())
        .pipe(concat("main.js"))//合并后最终的名字
        .pipe(uglify())
        .pipe(dest(folder.build + 'js/'));
        done();
}

//将less转换css
css=(done)=>{
    src(folder.src + 'css/*')
        .pipe(less())
        .pipe(cssnano())
        .pipe(dest(folder.build + 'css/'));
        done();
}

exports.default = parallel(html,js,css,images)




// 服务器配置   //gulp webserver 开启服务器
gulp.task('webserver',function(){
    gulp.src('src')
        .pipe(webserver({
            livereload:true,
            port:8080,
            open:true,
        }))
})