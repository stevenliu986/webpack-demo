const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // 入口
  entry: "./src/main.js", // 要使用相对路径
  // 输出
  output: {
    // 文件的输出路径
    path: path.resolve(__dirname, "dist"), // 绝对路径
    // 输出的文件名
    filename: "static/js/main.js",
    // 自动清空打包文件的输出目录
    clean: true,
  },
  // 加载器
  module: {
    rules: [
      // loader的配置
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin, "css-loader"],
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin, "css-loader", "less-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin, "css-loader", "sass-loader"],
      },
      {
        test: /\.styl$/,
        loader: "stylus-loader", // 将 Stylus 文件编译为 CSS
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
        generator: {
          // 输出的图片名称, hash后面的10表示只取前10位的哈希值
          filename: "static/images/[hash:10].[ext][query]",
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        // options: { 这个选项可以在babel.config.js中进行配置
        //   presets: ["@babel/preset-env"],
        // },
      },
    ],
  },
  // 插件
  plugins: [
    // 插件的配置
    new ESLintPlugin({
      // 检查哪些文件
      context: path.resolve(__dirname, "src"), // 检查src目录下的文件
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/[hash:10].[ext][query].css",
    }),
  ],
  // 开发服务器
  devServer: {
    host: "localhost", // 启动服务器域名
    port: 3000, // 启动服务器端口号
    open: true, // 是否自动打开浏览器
  },
  // 模式 - development/production
  mode: "development",
  devtool: "source-map",
};
