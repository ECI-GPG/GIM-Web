module.exports = {
  entry: './src/js/main.js',
  output: {
    path: './dist',
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    https: true,
    host: '192.168.1.137',
    port: 3333,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-1', 'react'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ],
  },
};
