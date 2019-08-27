const sass = require("node-sass");

module.exports = function(grunt) {
  //Configuration
  grunt.initConfig({
    concat: {
      js: {
        src: ["js/*.js"],
        dest: "build/scripts.js"
      },
      css: {
        src: ["css/*.css"],
        dest: "build/styles.css"
      }
    },

    sass: {
      options: {
        implementation: sass,
        sourceMap: false
      },
      build: {
        files: [
          {
            src: "css/sass/style.scss",
            dest: "build/styles.css"
          }
        ]
      }
    },

    uglify: {
        build: {
            files: [
                {
                  src: "build/scripts.js",
                  dest: "build/scripts.js"
                }
              ]
        }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'build',
          src: ['*.css', '!*.min.css'],
          dest: 'build',
          ext: '.min.css'
        }]
      }
    }
  });

  //Load plugins
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-cssmin");

  //Register tasks
  grunt.registerTask('default', ['concat', 'sass', 'uglify', 'cssmin']);
};
