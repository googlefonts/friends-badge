import path from 'path';
import webpack from 'webpack';

const PROD = (process.env.NODE_ENV === 'production');

const entryDevelopment = [
  'webpack-dev-server/client?http://localhost:8080/',
];

module.exports = {
  entry : {
    app : [PROD ? './src/googlefontsbadge.js' : './src/index.js'].concat(PROD ? [] : entryDevelopment),
  },
  output : {
    path          : path.resolve('./dist'),
    filename      : 'googlefontsbadge.js',
    library       : 'gfBadge',
    libraryTarget : 'umd',
  },
  devtool   : PROD ? undefined : '#eval-source-map',
  devServer : {
    contentBase : path.resolve('./src'),
    host        : '0.0.0.0',
  },
  plugins : [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV' : JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
  ].concat(PROD ? [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress : {
        warnings     : false,
        drop_console : true,
        unused       : true,
      },
      mangle : {
        except : ['DevTools'],
      },
    }),
  ] : [
    new webpack.NamedModulesPlugin(),
  ]),
  module : {
    loaders : [
      {
        test    : [/\.js$/, /\.es6$/],
        exclude : /node_modules/,
        loader  : 'babel-loader',
        query   : {
          presets : ['es2015', 'stage-0'],
        },
      },
    ],
  },
  resolve : {
    extensions : ['', '.js', '.es6'],
  },
};
