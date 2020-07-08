module.exports = {
    devServer:{
        proxy:{
            '/api': {
                target: 'https://new.oks.ltd',
                // ws: true,
                changeOrigin: true,
                pathRewrite:{
                    "^/api":'/api'
                }
              },
        }
    }
}