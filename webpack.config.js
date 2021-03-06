const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',  
  entry: './src/index.js',
  devServer: {
      contentBase: './dist'
  },
  plugins: [
      new HtmlWebpackPlugin({
          title: 'Developmenmt'
      })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
