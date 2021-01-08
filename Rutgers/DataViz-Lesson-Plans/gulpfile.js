const gulp = require("gulp");
const styleFmt = require("gulp-stylefmt");
const styleLint = require("gulp-stylelint");

const cssFiles = ["**/*.css", "!**/*.min.css",
  "!**/reset.css", "!**/normalize.css"];

gulp.task("stylefmt", () =>
  gulp.src(cssFiles)
    .pipe(styleFmt())
    .pipe(gulp.dest(""))
);

gulp.task("stylelint", () =>
  gulp
  .src(cssFiles)
  .pipe(styleLint({
    reporters: [
      {
        formatter: "string",
        console: true
      }
    ]
  }))
);

gulp.task("autofix", ["stylefmt"]);

gulp.task("lint", ["stylelint"]);
