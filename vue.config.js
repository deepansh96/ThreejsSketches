module.exports = {
  publicPath: "/",
  configureWebpack: {
    // lets debugger map the code within a compressed file back to its position in the original file
    devtool: "source-map",
    // module: {
    //   rules: [
    //     {
    //       test: /\.(png|jpe?g|gif)$/i,
    //       use: [
    //         {
    //           loader: 'file-loader',
    //         },
    //       ],
    //     },
    //   ],
    // },
  },
};
