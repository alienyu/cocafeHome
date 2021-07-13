let path = require("path");

function loadPlatformConf(envConf) {
    let webpack = require('webpack');
    let merge = require("webpack-merge");
    let platformConf = {};
    //获取待编译的页面列表
    let pageList = envConf['deployContent']['web'].length > 0 ? envConf['deployContent']['web'] : require(`./platformConf.json`)["pageList"];
    let pageConf = {};
    pageList.map(pageName => {
        pageConf = merge(pageConf, require(`./page/${pageName}/webpack.page.js`));
    })
    platformConf = merge({
        resolve: {
            alias: {
                'webDeclare': `${path.resolve(__dirname, 'page/common/static/declare.ts')}`
            }
        },
        plugins: [

        ]
    }, pageConf);
    console.log("this is platform")
    return platformConf;
}

module.exports = loadPlatformConf;