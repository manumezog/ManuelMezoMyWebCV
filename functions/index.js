const { onRequest } = require("firebase-functions/v2/https");
const { createProxyMiddleware } = require("http-proxy-middleware");

// Create the proxy middleware mapping to the Interactive AI test agent
const apiProxy = createProxyMiddleware({
  target: "https://test-agent-1xmcc8.interactive.ai",
  changeOrigin: true,
  ws: true, // Support websockets if used by the chat
  logLevel: "info",
  cookieDomainRewrite: {
    "*": "webcv-manuelmezo.web.app"
  },
  cookiePathRewrite: {
    "*": "/"
  }
});

// Expose the proxy as a Firebase HTTPS function
exports.iaiproxy = onRequest({ region: "us-central1" }, (req, res) => {
  return apiProxy(req, res);
});
