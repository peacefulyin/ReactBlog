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

            actions: path.resolve('src/actions'),
            components: path.resolve('src/components'),
            containers: path.resolve('src/containers'),
            constants: path.resolve('src/constants'),
            fetch: path.resolve('src/fetch'),
            reducers: path.resolve('src/reducers'),
            static: path.resolve('src/static'),
            store: path.resolve('src/store'),
            util: path.resolve('src/util'),
            api: path.resolve('src/api')
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

};
