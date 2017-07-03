/**
 * Created by Administrator on 2017-07-03.
 */

// �������� = require('����̸�');
var gulp = require('gulp');
var livereload = require('gulp-livereload');
var include = require('gulp-include');

/*

gulp.task( task�̸�, �Լ�/�͸��Լ� );

 */

gulp.task('hello1', function () {
  return console.log('Hello World1!');
});

gulp.task('hello2', function () {
  return console.log('Hello World2!');
});

gulp.task('hello3', function () {
  return console.log('Hello World3!');
});

// pipe()�� ����� ����� �������ִ� �Լ�

// ���� ��ħ
gulp.task('livereload', function(){
  gulp.src(['html/*', 'css/*', 'js/*', '*'])
      .pipe( livereload() );
});

// header, footer, ���뿵�� �и�
gulp.task('include', function(){
  gulp.src("html_src/*.html")
      .pipe(include())
      .on('error', console.log)
      .pipe(gulp.dest("html/"));
});


gulp.task('default', ['livereload', 'include']);

