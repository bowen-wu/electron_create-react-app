module.exports = function override(config, env) {
  // handle node global vars
  config.node = {
    __dirname: false,
    __filename: false
  };

  //change compile target to electron-renderer
  config.target = 'electron-renderer';
  return config;
};
