module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'libs/slick/slick/slick.min.js',
                dest: 'build/slickgruntify.min.js'
            }
        },
        compress: {
            main: {
                options: {
                    mode: 'gzip'
                },
                files: [
                    // Each of the files in the src/ folder will be output to 
                    // the dist/ folder each with the extension .gz.js 
                    {
                        expand: true,
                        src: ['/libs/slick/slick/slick.min.js' , 'slick-theme.css' ,'assets/stylesheets/main.css'],
                        dest: 'build/'
                    }
                ]
            }
        }
    });
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compress');
    // Default task(s).
    grunt.registerTask('default', ['uglify']);
    //grunt.registerTask('default', ['compress']);
};
