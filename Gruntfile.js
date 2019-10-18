module.exports = grunt => {
    grunt.loadNpmTasks('grunt-shell');
    grunt.initConfig({
        shell: {
            greet: {
                command: name => `echo Hi ${name || "Anonymous"} !`
            }
        }
    });
    let nameFromCLI = grunt.option("name") || "Anonymous";
    grunt.registerTask('echoFromArgs', [`shell:greet:${nameFromCLI}`]);
}