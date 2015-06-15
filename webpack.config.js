/**
 * learning-react-I18N - webpack.config.js
 * Created by mds on 15/6/15.
 */

'use strict';

module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel', exclude: /(node_modules|bower_components)/}
        ]
    }
};