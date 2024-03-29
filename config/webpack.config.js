const webpack = require('webpack');

module.exports = {
    target: 'web',
    mode: 'production',
    entry: './main.js',
    output: {
        path: __dirname,
        filename: '../bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                },
            },
        ],
    },
};
