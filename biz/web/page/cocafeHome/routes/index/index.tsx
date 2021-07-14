import * as React from "react";
import { withRouter } from 'react-router-dom';
import { WrapperIndexCmp } from './styled';
import { Row, Col } from 'antd';

const activityPic = require("@webCocafeHomeImgs/activityPic.jpg");

@(withRouter as any)
export default class Index extends React.Component<any, {}> {
    constructor(props: any) {
        super(props);
    }

    goActivityDetail = () => {
        this.props.history.push("/activityDetail");
    }

    render() {
        return (
            <WrapperIndexCmp>
                <Row className="banner" justify="center" align="middle">
                    <Col>
                        <p className="text1">CRYPTO ART</p>
                        <p className="text2">FUTURE ENLIGHTENMENT</p>
                    </Col>
                </Row>
                <Row className="activityFrame" justify="center" align="middle">
                    <Row className="activityBox">
                        <Row className="titleLine" justify="space-between">
                            <Col span={6} className="title">最新活动</Col>
                            <Col span={6} className="more">
                                <a href="javasctipt:;" onClick={this.goActivityDetail}>更多</a>
                            </Col>
                        </Row>
                        <Row className="contentBox">
                            <Col className="eachBox">
                                <div className="title">咖菲科技助力中国嘉德NFT加密艺术中国首拍</div>
                                <div className="date">07.10</div>
                                <img src={activityPic} />
                            </Col>
                            <Col className="eachBox">
                                <div className="title">咖菲科技与币安中国研究院合作全球区块链数字领军课程</div>
                                <div className="date">07.10</div>
                                <img src={activityPic} />
                            </Col>
                            <Col className="eachBox">
                                <div className="title">复旦聚劲论坛对话咖菲科技共同探讨亿万数字资产市场</div>
                                <div className="date">07.10</div>
                                <img src={activityPic} />
                            </Col>
                        </Row>
                    </Row>
                </Row>
                <Row className="cooperateFrame" justify="center" align="middle">
                    <Row className="cooperateBox">
                        <Row className="title" justify="center">
                            <Col span={5}>合作</Col>
                        </Row>
                        <Row className="contentBox">
                            <Col span={10} className="tabFrame">
                                <div className="tab insititution active">
                                    <div className="subTitle">企业合作</div>
                                    <div className="desc">
                                        <p>助力NFT发行，焕新品牌</p>
                                        <p>链接Z时代</p>
                                    </div>
                                </div>
                                <div className="tab artist">
                                    <div className="subTitle">艺术家合作</div>
                                    <div className="desc">
                                        <p>NFT艺术技术支持，精细定价方案设计</p>
                                        <p>加密世界品牌打造</p>
                                    </div>
                                </div>
                                <div className="tab ecology">
                                    <div className="subTitle">生态伙伴合作</div>
                                    <div className="desc">
                                        <p>链接加密艺术世界</p>
                                        <p>共建数字世界精神家园</p>
                                    </div>
                                </div>
                            </Col>
                            <Col span={14} className="detailFrame">
                                <Row>
                                    <Col span={12}>
                                        <div className="line"></div>
                                        <ul className="content">
                                            <li>助力企业发行NFT艺术品</li>
                                            <li>获取新市场和新世代粉丝</li>
                                            <li>焕新品牌</li>
                                        </ul>
                                    </Col>
                                    <Col span={12}>dfdgdff</Col>
                                    <Col span={12}>dfdgdff</Col>
                                    <Col span={12}>dfdgdff</Col>
                                    <Col span={12}>dfdgdff</Col>
                                    <Col span={12}>dfdgdff</Col>
                                </Row>
                            </Col>
                        </Row>
                    </Row>
                </Row>
            </WrapperIndexCmp>
        )
    }
}


