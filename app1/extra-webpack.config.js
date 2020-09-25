const singleSpaAngularWebpack = require("single-spa-angular/lib/webpack")
  .default;

module.exports = (angularWebpackConfig, options) => {
  let singleSpaWebpackConfig = singleSpaAngularWebpack(angularWebpackConfig, options);
  singleSpaWebpackConfig.devServer.headers = {
    "Access-Control-Allow-Origin": "*",
  };
  singleSpaWebpackConfig.devServer.disableHostCheck = true;
  // singleSpaWebpackConfig.devServer.sockPort = 8503;
  singleSpaWebpackConfig.devServer.sockHost = "localhost";
  singleSpaWebpackConfig.devServer.https = true;
  // singleSpaWebpackConfig.devServer.port = 8503;

  singleSpaWebpackConfig.externals.push("entry", "entry-router", /^@app1\/.+/, "@app1/entry");

  // singleSpaWebpackConfig.filenameHashing = false;

  // singleSpaWebpackConfig.externals = ["vue", "vue-router", /^@vue-mf\/.+/];
  // singleSpaWebpackConfig.externals = ["/^(entry|\$)$/i"];

  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig;
};
