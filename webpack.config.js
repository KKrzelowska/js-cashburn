const path = require('path')

module.exports = {
  entry: './src/main.tsx',
  devtool: 'eval-source-map',
  mode: 'development',
  output: {
    path: path.join(__dirname, '/public/script'),
    filename: 'bundle.js',
    publicPath: '/script/'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },
  devServer: {
    writeToDisk: true
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(css)$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: []
}
