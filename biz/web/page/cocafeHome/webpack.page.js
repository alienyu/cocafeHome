let webpack = require('webpack');
let path =require("path");
console.log("this is Trisa page")
module.exports = {
    resolve: {
        alias: {
            '@webCocafeHomeRoutes': `${path.resolve(__dirname, 'routes')}`,
            '@webCocafeHomeHoc': `${path.resolve(__dirname, 'hoc')}`,
            '@webCocafeHomeImgs': `${path.resolve(__dirname, 'static/imgs')}`,
            'webCocafeHomeConstants': `${path.resolve(__dirname, 'static/module/config/index.ts')}`,
            'webCocafeHomeGlobalConf': `${path.resolve(__dirname, 'static/global/index.ts')}`,
            'webCocafeHomeAjax': `${path.resolve(__dirname, process.env.NODE_ENV == "production" ? 'static/module/ajax/prod.ts' : 'static/module/ajax/dev.ts')}`,
            'webCocafeHomeRenderRoutes': `${path.resolve(__dirname, 'static/module/renderRoutes.tsx')}`
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            webCocafeHomeConstants: ['webCocafeHomeConstants', 'default'],
            webCocafeHomeAjax: ['webCocafeHomeAjax', 'default'],
            webCocafeHomeRenderRoutes: ['webCocafeHomeRenderRoutes', 'default']
        })
    ]
}