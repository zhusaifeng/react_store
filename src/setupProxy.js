const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports=function(app){
    app.use(
        createProxyMiddleware(
            '/api',
            {
                target: 'https://fang.transfigure.cn:1852/',
                changeOrigin: true,
                ws:true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        )
    )
}