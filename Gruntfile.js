module.exports = function(grunt) {
  // Gruntの設定
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  // 各タスクの設定
  grunt.initConfig({
    // Webサーバの設定
    connect: {
      server: {
        options:{
          port:8000,
          base:'/Users/ryuichi.murata/github/jade-sample-with-grunt/dist',
          keepalive:true,
          hostname:'localhost' 
        }
      }
    },
    // clean
    clean: {
      options: {
        force: true
      },
      publish: {
        src: 'dist'
      }
    },
    // copy
    copy: {
      source: {
        expand: true,
        cwd: 'src',
        src: ['**/*', '!**/*.coffee', '!**/*.jade', '!**/*.jst', '!**/*.less', '!**/*.litcoffee', '!**/*.sass', '!**/*.scss', '!**/*.styl'],
        dest: 'dist'
      }
    },
    // jade
    jade: {
      options: {
        pretty: true,
        data: grunt.file.readJSON('package.json')
      },
      source: {
        expand: true,
        cwd: 'src',
        src: '**/!(_)*.jade',
        dest: 'dist',
        ext: '.html'
      }
    } 
  });

  // プラグインの読み込み
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jade');

  // defaultタスクの設定
  grunt.registerTask('default', ['jade', 'connect', 'copy:source']);
};






