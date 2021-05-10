var path = require('path');

const config = {
  entry: {
    finalistMapOsmIndex: ["./js/src/finalistMapOsmIndex.jsx"]
  },
  devtool: false,
  mode: 'development',
  output: {
    path: path.resolve(__dirname, "js/dist"),
    filename: '[name].min.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: path.join(__dirname, 'js/src'),
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
    ],
  },
};

module.exports = config;
