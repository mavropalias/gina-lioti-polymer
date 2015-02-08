//Gruntfile
module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // =========================================================================
    // Task config
    // =========================================================================

    // Vulcanize
    // -------------------------------------------------------------------------
    vulcanize: {
      options: {
        csp: true,
        strip: true,
        excludes: {
          imports: [
            "polymer.html"
          ]
        }
      },
      files: {
        src: 'index.html',
        dest: 'indexv.html'
      },
    },

    // Uglify
    // -------------------------------------------------------------------------
    uglify: {
      options: {
        mangle: true
      },
      files: {
        'index.html': 'index.html',
      }
    }
  });





  // =========================================================================
  // Load tasks
  // =========================================================================
  grunt.loadNpmTasks('grunt-vulcanize');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-processhtml');





  // =========================================================================
  // Define tasks
  // =========================================================================
  grunt.registerTask('default', ['vulcanize']);

};