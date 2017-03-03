var webpack = require('webpack');
var user = 'jjp222';
var config = {
    entry: [__dirname + '/app/'+user+'/src/index.js'],
    output: {
      path: __dirname + '/app/'+user+'/build',
      filename: user + ".bundle.js"
    },
    module: {
        loaders: [
          {
            test: /\.css$/,
            loader: 'style!css'
          },
          {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /(node_modules|bower_components)/,
            query: {
                presets: ['es2015']
            }
          }
        ]
    },
    devtool: 'source-map',
    devServer: {
        port: 9000,
        contentBase: __dirname + "/app/"+user+"/",
        hot:true,
        historyApiFallback: true,
        inline: true
    }    
}

/*
 * If bundling for production, optimize output
 */
//if (process.env.NODE_ENV === 'production') {
  config.devtool = false;
  config.plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({comments: false}),
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify('production')}
    })
  ];
//};

module.exports = config;
