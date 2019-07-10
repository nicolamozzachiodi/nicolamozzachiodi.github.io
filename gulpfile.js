'use strict';

var gulp = require('gulp');

gulp.task('default', function(){
  console.log('Gulp è un task manager coi fiocchi!');
});

gulp.task('default', function(){

  var input  = 'src/**/*.css';
  var output = 'build';
  return gulp.src( input )
   .pipe(gulp.dest( output ));
});