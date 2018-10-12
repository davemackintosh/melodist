const {
  NamedModulesPlugin,
} = require("webpack")

const { resolve } = require("path")
const src = resolve(__dirname, "../", "src")

console.log({
  "@translations": resolve(process.cwd() + "/src/translations"),
  "@flow": resolve(process.cwd() + "/flow/declarations"),

  "@src": resolve(process.cwd() + "/src/"),
  "@constants": resolve(process.cwd() + "/src/constants"),
  "@components": resolve(process.cwd() + "/src/shared/components"),
  "@lib": resolve(process.cwd() + "/src/shared/lib"),
})

const webpackConfig = {
  context: src,
  target: "electron-renderer",
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
    alias: {
      "@translations": resolve(process.cwd() + "/src/translations"),
      "@flow": resolve(process.cwd() + "/flow/declarations"),
    
      "@src": resolve(process.cwd() + "/src/"),
      "@constants": resolve(process.cwd() + "/src/constants"),
      "@components": resolve(process.cwd() + "/src/shared/components"),
      "@lib": resolve(process.cwd() + "/src/shared/lib"),
    },    
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
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
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