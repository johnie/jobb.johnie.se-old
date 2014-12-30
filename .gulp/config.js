/*-------------------------------------------------------------------

  1. Configuration

  Base paths

-------------------------------------------------------------------*/

var dest = './build';
var src = './src';

module.exports = {
  basePaths: {
    dest: dest,
    src: src
  },
  browserSync: {
    server: {
      // We're serving the src folder as well
      // for sass sourcemap linking
      baseDir: [dest, src]
    },
    port: 2276,
    notify: false,
    files: [
      dest + '/**',
      // Exclude Map files
      '!' + dest + '/**.map'
    ]
  },
  style: {
    src: src + '/style/**/style.styl',
    watch: src + '/style/**/*.styl',
    dest: dest
  },
  scripts: {
    src: src + '/js/**/*.js',
    dest: dest
  },
  bowerjs:{
    base: './vendor/'
  },
  images: {
    src: src + '/images/**',
    dest: dest + '/images'
  },
  markup: {
    src: src + '/htdocs/**',
    dest: dest
  },
  versioning: {
    package: './package.json',
    bower: './bower.json'
  }
};
