module.exports = function(grunt) {

  var pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({

    VERSION: pkg.version,
    pkg: pkg,

    browserify: {
      dist: {
        files: {
          'build/<%= pkg.name %>.js': ['src/router.js', 'src/baked.js', 'src/browser.js'],
        },
        options: {
          alias: ['./src/fake:canvas']
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-browserify');

  // Default task.
  grunt.registerTask('default', ['browserify']);

};