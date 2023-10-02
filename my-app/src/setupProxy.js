const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://thawing-savannah-53116-6c6cf43d1486.herokuapp.com/',
      changeOrigin: true,
    })
  );

  app.use(
    '/',
    createProxyMiddleware({
      target: 'https://thawing-savannah-53116-6c6cf43d1486.herokuapp.com/',
      changeOrigin: true,
    })
  );
};

