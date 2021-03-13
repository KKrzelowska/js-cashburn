const path = require('path')

module.exports = {
  entry: './src/main.tsx',
  devtool: 'eval-source-map',
  mode: 'development',
  target: 'node', //fix node_modules  
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
        exclude:path.resolve(__dirname, "node_modules"),
        loader: 'babel-loader'
      },
      {
        test: /\.(css)$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  },
  plugins: []
}
