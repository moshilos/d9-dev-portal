/**
 * Created by Moshi.los on 10/2/2015.
 */
module.exports = {
    entry: {
        app: ['./src/index.js']
    },
    output: {
        path: './../public/js',
        filename: "app.js"
    },
    module: {
        loaders: [
            {
                // HTML LOADER
                // Reference: https://github.com/webpack/raw-loader
                // Allow loading html through js
                test: /\.html$/,
                loader: 'raw'
            },,
            {
                test: /\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader'
            },
            {
                test: /\.css$/,
                loader: "style!css"
            }
        ]
    },
    'html-minify-loader': {
        empty: true,        // KEEP empty attributes
        cdata: true,        // KEEP CDATA from scripts
        comments: true     // KEEP comments
    }
};