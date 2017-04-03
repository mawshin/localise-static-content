var gulp = require('gulp');
var i18n = require('gulp-html-i18n');
var foreach = require("gulp-foreach");
var zip = require("gulp-zip");

gulp.task('build:localize', function() {
  var dest  = 'public/';
  var index = 'app/assets/test.html';
 
  return gulp.src(index)
    .pipe(i18n({
      langDir: 'app/assets/lang/',
      trace: true,
      createLangDirs: true
    }))
    .pipe(gulp.dest(dest));
});

gulp.task("zip-dist", function(){
    var dest  = 'zipped/';

    return gulp.src("VIIV_DTG_FRANCHISE_RESISTANCE_TOOL_2017_MF1.0_V1.0_PRESENTATION/VIIV_DTG_FRANCHISE_RESISTANCE_TOOL_2017_MF1.0_V1.0_MAIN/*")
       .pipe(foreach(function(stream, file){
          var fileName = file.path.substr(file.path.lastIndexOf("/")+1);

          gulp.src(fileName+"/**")
              .pipe(zip(fileName+".zip"))
              .pipe(gulp.dest(dest));

          return stream;
       }));
});
