var webpack = require('webpack');
var path = require('path');

function resolve(dir) {
    return path.join(__dirname, 'src', dir)
}


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
            {test: /\.scss/, use: ['style-loader','css-loader','sass-loader']},
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
                    },
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            }
        ]
    },
    resolve: {
        extensions: [ '.js','.jsx', '.json', '.scss'],
        alias: {
            src: path.resolve('src'),
            fetch: path.resolve('src/fetch'),
            reducers: path.resolve('src/reducer'),
            store: path.resolve('src/store'),
            util: path.resolve('src/util'),
            api: path.resolve('src/api'),
            main: path.resolve('src/main')
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

};
