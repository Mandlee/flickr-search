module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: ['dist'],

        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: '',
                        src: ['**', '!node_modules/**', '!Gruntfile.js', '!package.json', '!build.*'],
                        dest: 'dist/'
                    }
                ]
            }
        },

        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'sass/',
                    src: ['*.scss'],
                    dest: 'css/',
                    ext: '.css'
                }]
            }
        },

        rev: {
            files: {
                src: [
                    'dist/**/*.{js,css}',
                    '!dist/bower_components/animate.css',
                    'dist/bower_components/animate.css/*.css'
                ]
            }
        },

        useminPrepare: {
            html: 'index.html'
        },

        usemin: {
            html: ['dist/index.html']
        },

        uglify: {
            options: {
                report: 'min',
                mangle: false,
                preserveComments: false,
                banner: '/* flickr */\n'
            }
        },


        imagemin: {
            png: {
                options: {
                    optimizationLevel: 7
                },
                files: [
                    {
                        // Set to true to enable the following options…
                        expand: true,
                        // cwd is 'current working directory'
                        cwd: 'img/',
                        src: ['**/*.png'],
                        // Could also match cwd line above. i.e. project-directory/img/
                        dest: 'dist/img/',
                        ext: '.png'
                    }
                ]
            },
            jpg: {
                options: {
                    progressive: true
                },
                files: [
                    {
                        // Set to true to enable the following options…
                        expand: true,
                        // cwd is 'current working directory'
                        cwd: 'img/',
                        src: ['**/*.jpg'],
                        // Could also match cwd line above. i.e. project-directory/img/
                        dest: 'dist/img/',
                        ext: '.jpg'
                    }
                ]
            }
        }


    });

    // Load all required grunt module
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Tell Grunt what to do when we type "grunt" into the terminal
    grunt.registerTask('default', [
        'clean', 'sass', 'copy', 'useminPrepare', 'concat', 'cssmin', 'uglify', 'rev', 'usemin'
    ]);

};