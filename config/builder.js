module.exports = {
  asar: false,
  extends: null, // fix bug https://github.com/electron-userland/electron-builder/issues/2030
  publish: {
    provider: 'generic',
    url: ''
  },
  files: [
    {
      from: './build',
      to: './build'
    }, {
      from: './.electron-main',
      to: './electron'
    },
    {},
    '!node_modules',
    'package.json'
  ]
};
