let path = require('path');
let webpack = require('webpack');
let merge = require("webpack-merge");
let devConf = require("../config/devConfig.json");
const { projectName, mode } = devConf;
let HtmlWebpackPlugin = require('html-webpack-plugin');
let projectConf = require(`${process.cwd()}/biz/webpack.project.js`)(devConf);
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const apiMocker = require("mocker-api");
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

console.log("this is dev")

const renderDevServerConf = () => {
    const baseConf = {
        contentBase: './',
        host: "localhost",
        port: devConf.port || 7777, //默认8080
        inline: true, //可以监控js变化```
        hot: true, //热启动
        historyApiFallback: {
            disableDotRule: true,
            rewrites: []
        }
    }
    var conf;
    /* mode的取值有三种：
            local: 直接返回本地文件，不触发http请求；
            mock: 触发正常http请求，但由本地Server Mock数据返回；
            proxy: 触发正常http请求，并且由代理服务器返回;
        默认值为local
    */
   if(mode == "proxy") {
        //线上代理
        conf = {
            proxy: [{
                context: ['/api/exchange', '/api/operation', '/exchange', '/api', '/trisa'],
                target: devConf.localDevServer,
                changeOrigin: true,
                secure: false
            }]
        }
   } else if(mode == "mock") {
        //本地mock
        conf = {
            before(app) {
                apiMocker(app, `${process.cwd()}/server/mock/index.ts`)
            }
        }
   } else { conf = {}}
    return { devServer: Object.assign(baseConf, conf )};
}

let envConf = merge(projectConf, {
    mode: 'development',
    output: {
        path: process.cwd(), //输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
        publicPath: "/" //模板、样式、脚本、图片等资源对应的server上的路径
    },
    devtool: "source-map",
    plugins: [
        // new OpenBrowserPlugin({ url: `http://localhost:${devConf.port || 7777}/web/overview` }),
        // new BundleAnalyzerPlugin({ analyzerPort: 8919 })
    ]
}, renderDevServerConf());



function runtime(conf) {
    let platform = conf.platform;
    let page = conf.page; //带路径的页面名称(pagePathA/pagePathB/pageName)
    let pageArr = page.split("/"); //["pagePathA", "pagePathB", "pageName"]
    let htmlName = pageArr.pop(); //实际单页文件入口html(pageName)
    let pagePath = pageArr.length > 0 ? pageArr.join("/") : ""; //页面路径(pagePathA/pagePathB)
    var entryID = `${platform}/${pagePath}${htmlName}/${htmlName}`; // projectName/platform/pagePath/pageName
    var fileRoute = `${process.cwd()}/biz/${platform}/page/${pagePath}${htmlName}`; //biz/platform/page/pagePath/pageName
    envConf.entry[entryID] = [`${fileRoute}/${htmlName}.tsx`]
    //biz/platform/page/pagePath/pageName.js
    //提取各页面公共模块,并生成splitChunks
    // genSplitChunksConf(getPageVendorConf(conf), conf);
    envConf.plugins.push(new HtmlWebpackPlugin({
        //根据模板插入css/js等生成最终HTML
        filename: `${platform}/${pagePath}${htmlName}/index.html`,
        //生成的html存放路径，相对于path
        template: `${fileRoute}/${htmlName}.ejs`,
        deployConf: {
            platform,
            page,
            tvLoadPath: '/common/assets/js/vendor',
            mode: devConf.mode
        },
        //js插入的位置，true/'head'/'body'/false
        inject: 'body',
        hash: true, //为静态资源生成hash值
        chunks: [entryID], //需要引入的chunk，不配置就会引入所有页面的资源
        minify: {
            removeComments: true, //移除HTML中的注释
            collapseWhitespace: false //删除空白符与换行符
        }
    }));

    //load historyApiFallback rewrites
    let rewriteItem = {
        from: new RegExp(`${platform}\/${page}`),
        to: `/${platform}/${page}/index.html`
    };
    envConf.devServer.historyApiFallback.rewrites.push(rewriteItem);
}

genSplitChunksConf = (vendors, conf) => {
    const { platform, page } = conf;
    const regText = vendors.join("|");
    const testReg = new RegExp(regText);
    const fileName = `${platform}-${page}-common`
    envConf.optimization.splitChunks.cacheGroups[fileName] = {
        name: `${platform}/${page}/common/${fileName}`,
        chunks: "all",
        test: testReg,
        priority: 10
    }
}

function getPageVendorConf(conf) {
    let platform = conf.platform;
    let page = conf.page;
    let projectConf = require(`${process.cwd()}/biz/projectConf.json`)["vendorConf"] ? require(`${process.cwd()}/biz/projectConf.json`)["vendorConf"] : [];  //项目公共模块
    let platformConf = require(`${process.cwd()}/biz/${platform}/platformConf.json`)["vendorConf"] ? require(`${process.cwd()}/biz/${platform}/platformConf.json`)["vendorConf"] : [];  //平台公共模块
    let pageConf = require(`${process.cwd()}/biz/${platform}/page/${page}/pageConf.json`)["vendorConf"] ? require(`${process.cwd()}/biz/${platform}/page/${page}/pageConf.json`)["vendorConf"] : []; //页面公共模块
    return [].concat(projectConf, platformConf, pageConf);
}

function loadConfig() {
    //解析需要构建的页面
    let deployContent = devConf.deployContent;
    let platformList = Object.keys(deployContent);
    platformList.map(platform => {
        let pageList = deployContent[platform].length > 0 ? deployContent[platform] : require(`${process.cwd()}/biz/${platform}/platformConf.json`)["pageList"];
        pageList.map(page => {
            runtime({
                platform,
                page
            })
        })
    })
}

loadConfig();
module.exports = envConf;