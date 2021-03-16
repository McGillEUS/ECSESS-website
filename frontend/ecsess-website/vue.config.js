module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: "https://ecsess-website.herokuapp.com",
                ws: true,
                changeOrigin: true
                
            }
        }
    }
}