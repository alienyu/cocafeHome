import * as React from "react";
import { withRouter } from 'react-router-dom';
import { WrapperIndexCmp } from './styled';
import { Row, Col } from 'antd';

const activityPic = require("@webCocafeHomeImgs/activityPic.jpg");
const whatPic = require("@webCocafeHomeImgs/what.png");
const developPic = require("@webCocafeHomeImgs/develop.png");
const allinPic = require("@webCocafeHomeImgs/allin.png");
const focusPic = require("@webCocafeHomeImgs/focus.png");

@(withRouter as any)
export default class Index extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            mailBoxClass: "contentFrame",
            cooperateIndex: 1
        }
    }

    componentDidMount() {
        let that = this;
        setInterval(() => {
            let curCooperateIndex = that.state.cooperateIndex;
            let newCooperateIndex = curCooperateIndex + 1 > 3 ? 1 : curCooperateIndex + 1;
            that.setState({ cooperateIndex: newCooperateIndex });
        }, 3000);
    }

    goActivityDetail = () => {
        this.props.history.push("/activityDetail");
    }

    goToQA = () => {
        this.props.history.push("/qa");
    }

    goToAbout = () => {
        this.props.history.push("/about");
    }

    showMailBox = () => {
        this.setState({ mailBoxClass: "contentFrame show" })
    }

    hideMailBox = () => {
        this.setState({ mailBoxClass: "contentFrame" })
    }

    changeCooperateIndex = cooperateIndex => {
        this.setState({ cooperateIndex });
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
                                <div className={this.state.cooperateIndex == 1 ? "tab insititution active" : "tab insititution"} onClick={this.changeCooperateIndex.bind(this, 1)}>
                                    <div className="subTitle">企业合作</div>
                                    <div className="desc">
                                        <p>助力NFT发行，焕新品牌</p>
                                        <p>链接Z时代</p>
                                    </div>
                                </div>
                                <div className={this.state.cooperateIndex == 2 ? "tab artist active" : "tab artist"} onClick={this.changeCooperateIndex.bind(this, 2)}>
                                    <div className="subTitle">艺术家合作</div>
                                    <div className="desc">
                                        <p>NFT艺术技术支持，精细定价方案设计</p>
                                        <p>加密世界品牌打造</p>
                                    </div>
                                </div>
                                <div className={this.state.cooperateIndex == 3 ? "tab ecology active" : "tab ecology"}  onClick={this.changeCooperateIndex.bind(this, 3)}>
                                    <div className="subTitle">生态伙伴合作</div>
                                    <div className="desc">
                                        <p>链接加密艺术世界</p>
                                        <p>共建数字世界精神家园</p>
                                    </div>
                                </div>
                            </Col>
                            {this.state.cooperateIndex == 1 ?
                                <Col span={14} className="detailFrame">
                                    <Row>
                                        <Col span={12}>
                                            <div className="line"></div>
                                            <ul className="content">
                                                <li><a>助力企业发行NFT艺术品</a></li>
                                                <li><a>获取新市场和新世代粉丝</a></li>
                                                <li><a>焕新品牌</a></li>
                                            </ul>
                                        </Col>
                                        <Col span={12}>
                                            <div className="line"></div>
                                            <ul className="content">
                                                <li><a>提供丰富设计资源</a></li>
                                                <li><a>和签约艺术家打造NFT的</a></li>
                                                <li><a>内容创作</a></li>
                                            </ul>
                                        </Col>
                                        <Col span={12}>
                                            <div className="line"></div>
                                            <ul className="content">
                                                <li><a>提供专业产品与技术团队</a></li>
                                                <li><a>打磨NFT的发行项目和一级售卖</a></li>
                                            </ul>
                                        </Col>
                                        <Col span={12}>
                                            <div className="line"></div>
                                            <ul className="content">
                                                <li><a>运用专业技术手段</a></li>
                                                <li><a>融合多机制玩法和人机交互</a></li>
                                                <li><a>丰富NFT项目内涵</a></li>
                                            </ul>
                                        </Col>
                                        <Col span={12}>
                                            <div className="line"></div>
                                            <ul className="content">
                                                <li><a>拥有元宇宙地产资源和开发能力</a></li>
                                                <li><a>搭建虚拟展馆并提供游戏性交互</a></li>
                                            </ul>
                                        </Col>
                                        <Col span={12}>
                                            <div className="line"></div>
                                            <ul className="content">
                                                <li><a>帮助B端企业和政府建立 NFT虚</a></li>
                                                <li><a>拟品牌馆、非遗展厅、城市形象</a></li>
                                                <li><a>馆等</a></li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </Col> : this.state.cooperateIndex == 2 ?
                                <Col span={14} className="detailFrame">
                                    <Row>
                                        <Col span={12}>
                                            <div className="line"></div>
                                            <ul className="content">
                                                <li><a>2助力企业发行NFT艺术品</a></li>
                                                <li><a>2获取新市场和新世代粉丝</a></li>
                                                <li><a>焕新品牌</a></li>
                                            </ul>
                                        </Col>
                                        <Col span={12}>
                                            <div className="line"></div>
                                            <ul className="content">
                                                <li><a>提供丰富设计资源</a></li>
                                                <li><a>和签约艺术家打造NFT的</a></li>
                                                <li><a>内容创作</a></li>
                                            </ul>
                                        </Col>
                                        <Col span={12}>
                                            <div className="line"></div>
                                            <ul className="content">
                                                <li><a>提供专业产品与技术团队</a></li>
                                                <li><a>打磨NFT的发行项目和一级售卖</a></li>
                                            </ul>
                                        </Col>
                                        <Col span={12}>
                                            <div className="line"></div>
                                            <ul className="content">
                                                <li><a>运用专业技术手段</a></li>
                                                <li><a>融合多机制玩法和人机交互</a></li>
                                                <li><a>丰富NFT项目内涵</a></li>
                                            </ul>
                                        </Col>
                                        <Col span={12}>
                                            <div className="line"></div>
                                            <ul className="content">
                                                <li><a>拥有元宇宙地产资源和开发能力</a></li>
                                                <li><a>搭建虚拟展馆并提供游戏性交互</a></li>
                                            </ul>
                                        </Col>
                                        <Col span={12}>
                                            <div className="line"></div>
                                            <ul className="content">
                                                <li><a>帮助B端企业和政府建立 NFT虚</a></li>
                                                <li><a>拟品牌馆、非遗展厅、城市形象</a></li>
                                                <li><a>馆等</a></li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </Col> :
                                <Col span={14} className="detailFrame">
                                    <Row>
                                        <Col span={12}>
                                            <div className="line"></div>
                                            <ul className="content">
                                                <li><a>3助力企业发行NFT艺术品</a></li>
                                                <li><a>3获取新市场和新世代粉丝</a></li>
                                                <li><a>焕新品牌</a></li>
                                            </ul>
                                        </Col>
                                        <Col span={12}>
                                            <div className="line"></div>
                                            <ul className="content">
                                                <li><a>提供丰富设计资源</a></li>
                                                <li><a>和签约艺术家打造NFT的</a></li>
                                                <li><a>内容创作</a></li>
                                            </ul>
                                        </Col>
                                        <Col span={12}>
                                            <div className="line"></div>
                                            <ul className="content">
                                                <li><a>提供专业产品与技术团队</a></li>
                                                <li><a>打磨NFT的发行项目和一级售卖</a></li>
                                            </ul>
                                        </Col>
                                        <Col span={12}>
                                            <div className="line"></div>
                                            <ul className="content">
                                                <li><a>运用专业技术手段</a></li>
                                                <li><a>融合多机制玩法和人机交互</a></li>
                                                <li><a>丰富NFT项目内涵</a></li>
                                            </ul>
                                        </Col>
                                        <Col span={12}>
                                            <div className="line"></div>
                                            <ul className="content">
                                                <li><a>拥有元宇宙地产资源和开发能力</a></li>
                                                <li><a>搭建虚拟展馆并提供游戏性交互</a></li>
                                            </ul>
                                        </Col>
                                        <Col span={12}>
                                            <div className="line"></div>
                                            <ul className="content">
                                                <li><a>帮助B端企业和政府建立 NFT虚</a></li>
                                                <li><a>拟品牌馆、非遗展厅、城市形象</a></li>
                                                <li><a>馆等</a></li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </Col>
                            }
                        </Row>
                    </Row>
                </Row>
                <Row className="whatFrame" justify="center" align="middle">
                    <Row className="whatBox">
                        <Col span={12}>
                            <img src={whatPic} />
                        </Col>
                        <Col span={11} offset={1}>
                            <div className="title">什么是NFT</div>
                            <div className="line"></div>
                            <div className="content">NFT(Non-Fungible Token)是基于区块链智能合约发行的，具有唯一性和不可分割性的数字资产。</div>
                            <div className="content">有唯一性和不可分割性的数字资产。 NFT可承载各类内容，如艺术品、收藏品、游戏内容、音乐、权益等，以保障内容的唯一性、稀缺性和链上的知识产权。</div>
                            <a href="javascript:;" className="btn" onClick={this.goToQA}>Q&A</a>
                        </Col>
                    </Row>
                </Row>
                <Row className="aboutFrame" justify="center" align="middle">
                    <Row className="aboutBox">
                        <div className="title">关于我们</div>
                        <div className="mainDesc">
                            <p>cocafe是国内领先的NFT数字资产服务商</p>
                            <p>致力于为创作者和企业提供领先的NFT数字资产创作发行服务，打造引领未来的数字收藏平台。</p>
                        </div>
                        <Row className="contentBox" justify="space-between">
                            <Col span={7} className="eachBox">
                                <img className="icon develop" src={developPic} />
                                完整的NFT技术开发能⼒， 成熟市场经验、丰富头部圈内外艺术家、潮流IP和藏家资源
                            </Col>
                            <Col span={7} className="eachBox">
                                <img className="icon allin" src={allinPic} />
                                为创作者和企业提供一站式NFT数字服务，包括创作发行，技术支持，展览展示到售卖
                            </Col>
                            <Col span={7} className="eachBox">
                                <img className="icon focus" src={focusPic} />
                                聚焦中国市场，完全满足中国监管要求具有开拓NFT商业模式的成功经验
                            </Col>
                        </Row>
                        <Row justify="center" className="more">
                            <a href="javascript:;" onClick={this.goToAbout}>了解更多</a>
                        </Row>
                    </Row>
                </Row>
                <div className="mailBox" onMouseEnter={this.showMailBox} onMouseLeave={this.hideMailBox}>
                    <div className={this.state.mailBoxClass}>
                        <div className="left">
                            <div className="mailAddress">联系方式：nft@cocafe.co</div>
                            <div className="btnFrame">
                                <a href="mailto: nft@cocafe.co" className="openMail">打开邮箱</a>
                            </div>
                        </div>
                        <div className="right"></div>
                    </div>
                </div>
            </WrapperIndexCmp>
        )
    }
}


