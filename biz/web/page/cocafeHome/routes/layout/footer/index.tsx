import * as React from "react";
import { Row, Col } from 'antd';
import { WrapperFooterCmp } from './styled';
import { withRouter } from 'react-router-dom';

const logoslogan = require("@webCocafeHomeImgs/logoslogan.png");

@(withRouter as any)
export default class Footer extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        let history = this.props.history;

        return (
            <WrapperFooterCmp>
                <Row className="footerFrame" justify="center" align="middle">
                    <Row className="footerBox">
                        <Col span={5} className="logoFrame">
                            <img src={logoslogan} />
                        </Col>
                        <Col span={17} offset={2}>
                            <Row justify="space-around">
                                <Col span={16} className="linkFrame">
                                    <Row justify="start">
                                        <Col span={12} onClick={() => history.push("/activity")}>活动</Col>
                                        <Col span={12} onClick={() => history.push("/activity")}>法律声明</Col>
                                        <Col span={12} onClick={() => history.push("/cooperate")}>合作</Col>
                                        <Col span={12}>隐私政策</Col>
                                        <Col span={12} onClick={() => history.push("/qa")}>Q&A</Col><Col span={12}></Col>
                                        <Col span={12} onClick={() => history.push("/about")}>关于我们</Col>
                                    </Row>
                                </Col>
                                <Col span={8}>
                                    <Row justify="space-around" className="mediaFrame">
                                        <Col span={4} className="ins"></Col>
                                        <Col span={4} className="twitter"></Col>
                                        <Col span={4} className="facebook"></Col>
                                        <Col span={4} className="weibo"></Col>
                                        <Col span={4} className="wx"></Col>
                                    </Row>
                                    <div className="contact">联系方式：nft@cocafe.co</div>
                                </Col>
                            </Row>
                            <div className="line"></div>
                            <Row justify="space-between" className="auth">
                                <Col span={8}>© 2020-2021 cocafe. All Rights Reserved.</Col>
                                <Col span={6} className="icp">沪ICP备00000000号</Col>
                            </Row>
                        </Col>
                    </Row>
                </Row>
            </WrapperFooterCmp>
        )
    }
}


