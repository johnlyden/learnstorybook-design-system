const webpack = require('webpack');
const path = require('path');

module.exports = function({ config }) {
  config.plugins.push(
    new webpack.DefinePlugin({
      SC_DISABLE_SPEEDY: true,
    }),
  );

  config.module.rules.push({
    test: /\.(png|woff|woff2|eot|ttf|svg|otf)$/,
    use: [
      {
        loader: 'file-loader',
        query: {
          name: '[name].[ext]',
        },
      },
    ],
    include: path.resolve(__dirname, '../src/shared/fonts'),
  });

  return config;
};
