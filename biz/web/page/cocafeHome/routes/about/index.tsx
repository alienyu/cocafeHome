import * as React from "react";
import { withRouter } from 'react-router-dom';
import { WrapperAboutCmp } from './styled';
import { Row, Col } from 'antd';

const sloganPic = require("@webCocafeHomeImgs/sloganAbout.png");
const resultPicOne = require("@webCocafeHomeImgs/resultPicOne.jpg");
const resultPicTwo = require("@webCocafeHomeImgs/resultPicTwo.jpg");

@(withRouter as any)
export default class About extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <WrapperAboutCmp>
                <Row className="firstBlock" justify="center" align="middle">
                    <Row className="contentBox">
                        <Col span={12}>
                            <div className="title">关于cocafe</div>
                            <div className="desc">
                                cocafe是国内领先的NFT数字资产服务商<br />致力于为创作者和企业提供领先的NFT数字资产创作发行服务<br />打造引领未来的数字收藏平台。
                            </div>
                        </Col>
                        <Col span={12}>
                            <img src={sloganPic} className="slogan" />
                        </Col>
                    </Row>
                </Row>
                <Row className="secondBlock" justify="center" align="middle">
                    <Row className="contentBox">
                        <div className="title">
                            cocafe的优势<br />对NFT创作发⾏的独特洞察
                        </div>
                        <Row className="advanceList" justify="space-between" gutter={[40, 0]}>
                            <Col span={8}>
                                <div className="eachBox">
                                    <div className="indexBox">
                                        <div className="indexNum">1</div>
                                    </div>
                                    <div className="desc">cacoafe 团队拥有专业的艺术素养和能力对艺术作品和素材进⾏NFT创作，联合艺术家和创作者共同创建新的数字艺术形式，引领新的艺术风尚。</div>
                                </div>
                            </Col>
                            <Col span={8}>
                                <div className="eachBox">
                                    <div className="indexBox">
                                        <div className="indexNum">2</div>
                                    </div>
                                    <div className="desc">cocafe 提供多样化的NFT创作方式（可编程、可交互、3D, 游戏化设计、盲盒等) 和展⽰形态（JPEG、动图、⼩视频、⾳乐等）来充分满⾜⽤户偏好</div>
                                </div>
                            </Col>
                            <Col span={8}>
                                <div className="eachBox">
                                    <div className="indexBox">
                                        <div className="indexNum">3</div>
                                    </div>
                                    <div className="desc">cocafe 提供专业的技术服务在智能合约设计、开发，IPFS存储，交互等方面支持NFT的创作</div>
                                </div>
                            </Col>
                            <Col span={8}>
                                <div className="eachBox">
                                    <div className="indexBox">
                                        <div className="indexNum">4</div>
                                    </div>
                                    <div className="desc">cocafe提供丰富的线上线下资源助力作品发⾏，链接藏家粉丝群体、传统拍卖⾏， 组织线下活动，帮助选择和平衡海内外线上加密艺术市场</div>
                                </div>
                            </Col>
                            <Col span={8}>
                                <div className="eachBox">
                                    <div className="indexBox">
                                        <div className="indexNum">5</div>
                                    </div>
                                    <div className="desc">cocoafe 帮助企业和艺术家个人打造专属的NFT品牌影响力，协助运营新社交媒体，微信视频号、微博、B站、抖⾳、⼩红书、知乎、社群运营、元宇宙，私域流量等等 ，帮助企业、政府和个人打造专属的NFT数字艺术馆，非遗馆等</div>
                                </div>
                            </Col>
                            <Col span={8}>
                                <div className="eachBox">
                                    <div className="indexBox">
                                        <div className="indexNum">6</div>
                                    </div>
                                    <div className="desc">cocafe提供精细化的定价方案、发行方案，品牌焕新方案，合规咨询和服务等一站式服务。</div>
                                </div>
                            </Col>
                        </Row>
                    </Row>
                </Row>
                <Row className="thirdBlock" justify="center" align="middle">
                    <Row className="contentBox">
                        <div className="firstLine">
                            <div className="left">
                                <div className="title">关于作品创作</div>
                                <ul>
                                    <li className="first"><a href="javascript:;">选择哪些作品进行NFT创作：</a></li>
                                    <li className="last"><a href="javascript:;">艺术家和创作者风格，作品形态，摄影、视频、雕塑、装置、新媒体艺术、文字作品等等</a></li>
                                    <li className="first"><a href="javascript:;">需要如何进行NFT创作：</a></li>
                                    <li className="last"><a href="javascript:;">展示形态（JPEG、动图、小视频、音乐等）、时长、是否可编程、可交互、游戏化设计、盲盒、如何满足用户偏好等等</a></li>
                                    <li className="first"><a href="javascript:;">技术问题：</a></li>
                                    <li className="last"><a href="javascript:;">智能合约设计、开发，IPFS存储，交互设计等</a></li>
                                </ul>
                            </div>
                            <div className="right">
                                <img src={resultPicOne} />
                            </div>
                        </div>
                        <div className="secondLine">
                            <div className="left">
                                <img src={resultPicTwo} />
                            </div>
                            <div className="right">
                                <div className="title">关于作品发行</div>
                                <ul>
                                    <li className="first"><a href="javascript:;">在什么平台发行及发行节奏：</a></li>
                                    <li className="last"><a href="javascript:;">现有藏家粉丝群体、线下活动、线上加密艺术市场、传统拍卖行、自建NFT馆等</a></li>
                                    <li className="first"><a href="javascript:;">线上加密艺术市场选择：</a></li>
                                    <li className="last"><a href="javascript:;">海外市场、国内市场选择及平衡，监管与政府合作等</a></li>
                                    <li className="first"><a href="javascript:;">如何满足平台要求（社交媒体粉丝数/拍卖价格/售价等）</a></li>
                                    <li className="middle"><a href="javascript:;">如何打造NFT品牌影响力，社交媒体如何运营：微信视频号、微博、B站、抖音、小红书、知乎、社群运营、私域流量等等</a></li>
                                    <li className="last"><a href="javascript:;">如何定价、如何发行，首发活动、合规和监管等</a></li>
                                </ul>
                            </div>
                        </div>
                    </Row>
                </Row>
                <Row className="fourthBlock" justify="center" align="middle">
                    <div className="contentBox">
                        <div className="title">
                            聚焦中国市场<br />完全合规
                        </div>
                        <div className="desc">
                            成熟团队、丰富头部圈内外艺术家、潮流IP和藏家资源<br />
                            能够为创作者和企业提供NFT创意制作、一级售卖到展览展示的完整服务<br />
                            聚焦中国市场，完全满足中国监管要求，具有开拓NFT商业模式的成功经
                        </div>
                        <Row className="list" justify="space-between" gutter={[40, 0]}>
                            <Col span={8}>
                                <div className="subTitle">客户端</div>
                                <div className="detail">艺术家、创作者<br />潮流IP<br />音乐娱乐<br />体育游戏<br />消费品B端</div>
                            </Col>
                            <Col span={8}>
                                <div className="subTitle">cocafe NFT服务</div>
                                <div className="detail">NFT艺术画廊<br />NFT项目发行<br />NFT展览展示<br />元宇宙展馆</div>
                            </Col>
                            <Col span={8}>
                                <div className="subTitle">用户端</div>
                                <div className="detail">藏家<br />玩家<br />文娱潮玩消费者<br />新世代<br />B端企业和G端政府</div>
                            </Col>
                        </Row>
                    </div>
                </Row>
            </WrapperAboutCmp>
        )
    }
}
