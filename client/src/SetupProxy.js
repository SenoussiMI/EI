const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      },
      onProxyRes: function(proxyRes, req, res) {
        const contentType = proxyRes.headers['content-type'];
        if (contentType && contentType.startsWith('application/json')) {
          proxyRes.headers['content-type'] = 'application/json';
        }
      }
    })
  );
};
