const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output:{
        filename:"sper.js"
    },
    module:{
        rules:[
            {
                use:[{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      esModule: true,
                    }
                  },
                  'css-loader'],
                test:/\.css$/
            }
        ]
    },
    plugins:[
        new OptimizeCssAssetsWebpackPlugin(),
        new TerserWebpackPlugin(),
        new MiniCssExtractPlugin()

    ],
    optimization:{
        minimize: true,
        minimizer:[new TerserWebpackPlugin(), new OptimizeCssAssetsWebpackPlugin()]
    }

    
}