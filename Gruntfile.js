module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'dist/js/main.min.js': ['src/js/**/*.js']
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'src/index.html'
                }
            }
        },
        watch: {
            styles: {
                files: ['src/styles/**/*.less'],
                tasks: ['less:development'],
                options: {
                    spawn: false
                }
            },
            scripts: {
                files: ['src/js/**/*.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false
                }
            }
        },
        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                            match: 'ESTILOS_DE_CSS',
                            replacement: './styles/main.css'
                        },
                        {
                            match: 'SCRIPTS_DO_JS',
                            replacement: '../dist/js/main.min.js'
                        }
                    ]
                },
                files: [
                    {expand: true, flatten: true, src: ['src/index.html'], dest: 'dev/'}
                ]
            },
            prod: {
                options: {
                    patterns: [
                        {
                            match: 'ESTILOS_DE_CSS',
                            replacement: './styles/main.min.css'
                        },
                        {
                            match: 'SCRIPTS_DO_JS',
                            replacement: '../dist/js/main.min.js'
                        }
                    ]
                },
                files: [
                    {expand: true, flatten: true, src: ['src/index.html'], dest: 'dist/'}
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production', 'uglify', 'replace:prod', 'htmlmin:dist']);
    grunt.registerTask('dev', ['less:development', 'replace:dev']);
};
