const webpack = require('webpack');

module.exports = function({ config }) {
  config.plugins.push(
    new webpack.DefinePlugin({
      SC_DISABLE_SPEEDY: true,
    }),
  );

  return config;
};
