const path = require('path') //Padrão do NODE CommonJS

module.exports = {
    mode: 'development',
    entry: './src/index.js', //O Padrão do webpack é procurar o index na pasta src
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename:'bundle.js'
    },
    module:{
        rules:[{
            exclude:/node_modules/,
            test:/\.js$/,
            use:{
                loader: 'babel-loader',
                options: {
                    presets:['@babel/env']
                }
            }
        }]
    },
    devtool:'source-map'
}