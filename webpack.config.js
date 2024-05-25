const path = require("path");

module.exports = {
  // 入口
  entry: "./src/main.js", // 要使用相对路径
  // 输出
  output: {
    // 文件的输出路径
    path: path.resolve(__dirname, "dist"), // 绝对路径
    // 输出的文件名
    filename: "js/main.js",
  },
  // 加载器
  module: {
    rules: [
      // loader的配置
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
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
          // 输出的图片名称
          filename: "static/images/[hash].[ext][query]",
        },
      },
    ],
  },
  // 插件
  plugins: [
    // 插件的配置
  ],
  // 模式 - development/production
  mode: "development",
};
