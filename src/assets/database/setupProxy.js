/*eslint no-undef: "error"*/
/*eslint-env node*/
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://kifayatidb.onrender.com",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "", // This will remove /api from the URL.
      },
    })
  );
};
