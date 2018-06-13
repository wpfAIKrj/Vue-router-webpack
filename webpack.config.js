const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/static/',
    filename:'build.js'
  },
  module: {
    rules: [
        {
            test: /\.vue$/,
            use: ["vue-loader"]
        },
        {
            test: /\.css$/,
            use: ["vue-style-loader", "css-loader"]
        },
        // less
        {
            test: /\.less$/,
            use: ["vue-style-loader", "css-loader", "less-loader"]
        },

        // sass
        {
            test: /\.s[ac]ss$/,
            use: ["vue-style-loader", "css-loader", "sass-loader"]
        },

        // stylus
        {
            test: /\.styl$/,
            use: ["vue-style-loader", "css-loader", "stylus-loader"]
        },
        {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            use: [{
                loader: "url-loader",
                options: {
                    limit: 10000,
                    name: 'images/[name].[hash:7].[ext]'    // 将图片都放入 images 文件夹下，[hash:7]防缓存
                }
            }]
        },
        {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            use: [{
                loader: "url-loader",
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[hash:7].[ext]'    // 将字体放入 fonts 文件夹下
                }
            }]
        }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
