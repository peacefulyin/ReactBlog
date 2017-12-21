var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry : {
        main : path.resolve(__dirname,'./src/index.jsx'),
    },
    output:{
        path: path.resolve(__dirname,'./public'),
        filename: 'bundle.js'
    },
    devServer:{
        contentBase: "./public",
        inline:true,
        port:3000,
    },
    module: {
        rules: [
            {test: /\.scss/, use: ['style','css','sass']},
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }, {
                        loader: "postcss-loader"
                    }
                ]
            },
            { test: /\.(png|jpg|jpeg)$/, use: ['url']},
            {test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'],
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: [ '.js', '.json', '.scss','.less','jsonp'],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

};
