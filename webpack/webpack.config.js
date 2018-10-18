const {
  NamedModulesPlugin,
} = require("webpack")

const { resolve } = require("path")
const src = resolve(__dirname, "../", "src")
const cwd = process.cwd()

const alias = {
  "@translations": resolve(src + "/translations"),
  "@flow": resolve(cwd + "/flow/declarations"),

  "@src": resolve(src + "/"),
  "@constants": resolve(src + "/shared/constants"),
  "@components": resolve(src + "/shared/components"),
  "@lib": resolve(src + "/shared/lib"),
  "@reducers": resolve(src + "/shared/reducers"),
  "@middleware": resolve(src + "/shared/middleware"),
  "@less": resolve(src + "/shared/less"),
}

console.log(alias) // eslint-disable-line

const webpackConfig = {
  context: src,
  // target: "electron-renderer",
  entry: [
    resolve(src, "index.js"),
  ],
  output: {
    path: resolve(__dirname, "../electron/", "dist"),
    filename: "melodist.js",
  },
  devtool: "cheap-module-source-map",
  watch: process.env.NODE_ENV !== "production" && !process.env.NO_WEBPACK_WATCH,
  mode: process.env.NODE_ENV || "development",
  resolve: {
    alias,    
    modules: [resolve(__dirname, "../", "src"), "node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(css|less)$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              noIeCompat: true,
            }
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        loaders: ["file-loader"],
      },
    ],
  },
  plugins: [
    new NamedModulesPlugin(),
  ],
}

module.exports = webpackConfig
