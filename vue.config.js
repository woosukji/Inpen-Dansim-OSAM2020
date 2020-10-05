module.exports = {
  lintOnSave: true,
  devServer: {
    disableHostCheck: true
  },
  publicPath:
    process.env.NODE_ENV === "production" ? "/Inpen-Dansim-OSAM2020/" : "/",
  outputDir: "docs"
};
