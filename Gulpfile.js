const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function compiles() {
    return gulp.src("./src/styles/*.scss")
    .pipe(sass(
        { outputStyle: "compressed" }
    ))
    .pipe(gulp.dest("./dist"))
}


exports.default = compiles;