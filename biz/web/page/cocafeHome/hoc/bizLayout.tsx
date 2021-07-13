import React from "react";
import { Layout } from 'antd';
import { header as CocafeHomeHeader, footer as CocafeHomeFooter} from 'webCocafeHomeLayoutCmp';

const { Header, Content } = Layout;
const bizLayout = (WrappedComponent: any) => {
    
    return (props) => {
        return (
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%'}}>
                    <CocafeHomeHeader />
                </Header>
                <Layout style={{ minHeight: `calc(100vh - 64px)`}}>
                    <Layout>
                        <Content style={{padding:'94px 30px 30px 310px',backgroundColor:"#fff"}}>
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
