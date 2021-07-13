import React from "react";
import { Layout } from 'antd';
import { header as CocafeHomeHeader, sider as TrisaSider} from 'webTrisaHeaderCmp';

const { Header, Content, Sider } = Layout;
const bizLayout = (WrappedComponent: any) => {
    
    return (props) => {
        // 用意是不要重复渲染， 但是好像没起作用
        // const MemoTrisaSider = useMemo(() => <TrisaSider {...props} />, []);
        return (
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%'}}>
                    <CocafeHomeHeader />
                </Header>
                <Layout style={{ minHeight: `calc(100vh - 64px)`}}>
                    <Sider width={ 280 } style={{ overflow: 'auto', height: `100vh`, position: 'fixed', left: 0}}>
                        {/* <MemoTrisaSider {...props} /> */}
                        <TrisaSider {...props}/>
                    </Sider>
                    <Layout>
                        <Content style={{padding:'94px 30px 30px 310px',backgroundColor:"#fff"}}>
                            <WrappedComponent {...props} />
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default bizLayout;
