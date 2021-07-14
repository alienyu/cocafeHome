import React from "react";
import { Layout } from 'antd';
import { header as CocafeHomeHeader, footer as CocafeHomeFooter} from 'webCocafeHomeLayoutCmp';

const { Header, Content } = Layout;
const bizLayout = (WrappedComponent: any) => {
    
    return (props) => {
        return (
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%', padding: '0 32px', height: '80px', backgroundColor: 'rgba(0,0,0,0)'}}>
                    <CocafeHomeHeader />
                </Header>
                <Layout style={{ minHeight: `100vh`}}>
                    <Layout>
                        <Content>
                            <WrappedComponent {...props} />
                        </Content>
                    </Layout>
                </Layout>
                <CocafeHomeFooter />
            </Layout>
        )
    }
}

export default bizLayout;
