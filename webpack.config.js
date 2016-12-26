/**
 * Created by slashhuang on 16/3/8.
 */

var path =require('path');
module.exports = {
    entry: {
        example:"./example/example.js"
    },
    output: {
        publicPath:'/dist/',
        path: path.join(__dirname,'dist'),
        filename: "[name].js"
    },
    module: {
        loaders: [
            {   test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ['react','es2015','stage-3']
                }

            },

        ],
        resolve: {
            extensions: ['', '.js', '.jsx']
        }
    }
};