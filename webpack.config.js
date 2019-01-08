module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/dist',
    filename: './js/[name].js'
  },
  target: 'node',
  mode: 'development',
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  module: {
    rules: [
       {
       }
    ]
  }
};
