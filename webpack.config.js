//这个配置文件就是一个sJS 文件，通过node中的模块操作，向外暴露了一个配置对像

const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
     entry://入口，打包哪个文修的
     path.join(__dirname,'./src/main.js'),
     output:{//输出文件相关的配置
         path:path.join(__dirname,'./dist'),//输出目录
         filename:'bundle.js'//指定输出文件的目录
     },
     plugins:[//配置插件
           new htmlWebpackPlugin({
              template:path.join(__dirname,'./src/index.html'),
              filename:'index.html'
           }),
           new VueLoaderPlugin()
     ],
     module:{//这个节点，用于配置第三方模块载器
         rules:[
            {test: /\.css$/,use: ['style-loader','css-loader']} 
            //配置处理css文件第三方loader规则 ，先安装 npm i style-loader css-loader -D
           , {test: /\.vue$/,use: 'vue-loader'} ,
           {test:/\.(png|jpg|ttf|eot|svg|woff|woff2|otf)$/, use: 'url-loader'}
           ,{test:/vue-preview.src.*?js$/,loader:'babel'}
        ]

     }
}