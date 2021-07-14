import * as React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { loadGlobalVar } from 'webCocafeHomeGlobalConf';
// import zh_CN from 'antd/lib/locale-provider/zh_CN';
import enUs from 'antd/es/locale/en_US';

loadGlobalVar();

type AppProps = {
    history?: any
}

export default class App extends React.Component<AppProps, {}> {
    constructor(props: AppProps) {
        super(props);
    }

    componentWillMount() {
    }

    render() {
        return (
            <ConfigProvider locale={enUs}>
                <Router basename={window.deployConf.ver ? "/cocafeHome" : "/web/cocafeHome"}>
                    {webCocafeHomeRenderRoutes(webCocafeHomeConstants.routes)}
                </Router>
            </ConfigProvider>
        );
    }
}