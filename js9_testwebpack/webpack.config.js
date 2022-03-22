const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

const path = require('path');//поможет нам с абсолютным путем, что бы не гадать где проект она уже есть в node.js не надо устанавливать

module.exports = {
    mode: mode,//настраиваем режим сборки, код выше
    entry: {
      main: './src/index.js'// точка входа, куда заглянет вебпак в первую очередь
    },
    output: { //точка выхода , аналог bandle.js из browserify
      path: path.resolve(__dirname, 'dist'),// всегда должен быть абсолютный путь (от корневой папки) в нашем случае npm_webpack - название папки в которой лежит проект path: './dist/' - нет. сейчас вызываем методо path.resolve и передаем ему два параметра __dirname - ссылка на текущую папку, так и пишется и dist - относительный путь до папки в которую будем все сохранять
      filename: 'main.js',
      assetModuleFilename: 'assets/[hash][ext][query]',
      clean: true,
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css'
      }),
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      })
    ],
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: "html-loader",
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            (mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    ['postcss-preset-env']
                  ]
                }
              }
            },
            "sass-loader",
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
      ]
    }
    
}
