const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://127.0.0.1:8080',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/', // ここでターゲットへの path の書き換え
      },
      onProxyRes: function (proxyRes, req, res) {
        // 少なとも `Access-Control-Allow-Origin` を設定しないと CORS エラーが発生する
        proxyRes.headers['Access-Control-Allow-Origin'] = '*'
        proxyRes.headers['Access-Control-Allow-Methods'] =
          'POST, PUT, DELETE, PATCH, GET, OPTIONS'
        proxyRes.headers['Access-Control-Allow-Headers'] =
          'Origin, Authorization, Accept, Content-Type'
        proxyRes.headers['Access-Control-Allow-Credentials'] = true
      },
    })
  )
}
