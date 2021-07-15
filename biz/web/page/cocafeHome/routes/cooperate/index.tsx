import * as React from "react";
import { WrapperCooperateCmp } from './styled';
import { Row, Col } from 'antd';

export default class Cooperate extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
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

    changeCooperateIndex = cooperateIndex => {
        this.setState({ cooperateIndex });
    }

    render() {
        return (
            <WrapperCooperateCmp>
                <Row className="cooperateFrame" justify="center">
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
                                <div className={this.state.cooperateIndex == 3 ? "tab ecology active" : "tab ecology"} onClick={this.changeCooperateIndex.bind(this, 3)}>
                                    <div className="subTitle">生态伙伴合作</div>
                                    <div className="desc">
                                        <p>链接加密艺术世界</p>
                                        <p>共建数字世界精神家园</p>
                                    </div>
                                </div>
                            </Col>
                            {this.state.cooperateIndex == 1 ?
                                <Col span={14} className="detailFrame cooperate">
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
                                    <Col span={14} className="detailFrame artist">
                                        <ul>
                                            <li><a href="javascript:;">NFT艺术家经纪和代理，推荐拍卖行和海内外交易平台</a></li>
                                            <li><a href="javascript:;">NFT艺术品创意素材筛选和创作服务</a></li>
                                            <li><a href="javascript:;">提供人机协同创作的平台，AI算法和技术支持，形成数字作品</a></li>
                                            <li><a href="javascript:;">艺术品系统精细化定价设计</a></li>
                                            <li><a href="javascript:;">实物艺术品、收藏品的数字化</a></li>
                                            <li><a href="javascript:;">Crypto World 和海内外社交媒体品牌打造</a></li>
                                            <li><a href="javascript:;">组织线上线下活动进行NFT展示和售卖</a></li>
                                            <li><a href="javascript:;">帮助艺术家建立元宇宙上的虚拟画廊、主题展厅</a></li>
                                            <li><a href="javascript:;">NFT数字艺术人才培养</a></li>
                                        </ul>
                                    </Col> :
                                    <Col span={14} className="detailFrame ecology">
                                        <Row>
                                            <ul className="partOne">
                                                <li><a href="javascript:;">完整的生态串联能力（Ecosystem）</a></li>
                                                <li><a href="javascript:;">公链 （conflux树图 , wechain 唯链 等）</a></li>
                                            </ul>
                                            <div className="line"></div>
                                            <ul className="list">
                                                <li><a href="javascript:;">B端企业客户</a></li>
                                                <li><a href="javascript:;">拍卖行</a></li>
                                                <li><a href="javascript:;">艺术家</a></li>
                                                <li><a href="javascript:;">艺术画廊</a></li>
                                                <li><a href="javascript:;">收藏夹、玩家</a></li>
                                                <li><a href="javascript:;">线上加密艺术市场</a></li>
                                                <li><a href="javascript:;">高净值人群</a></li>
                                                <li><a href="javascript:;">元宇宙</a></li>
                                                <li><a href="javascript:;">文娱潮玩消费者</a></li>
                                            </ul>
                                        </Row>
                                    </Col>
                            }
                        </Row>
                        <Row className="btnFrame" justify="center">
                            <Col span={12} className="btnBox">
                                <a href="javascript:;">商务合作: nft@cocafe.co</a>
                            </Col>
                        </Row>
                    </Row>
                </Row>
            </WrapperCooperateCmp>
        )
    }
}