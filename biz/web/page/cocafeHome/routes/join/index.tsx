import * as React from "react";
import { WrapperJoinCmp } from './styled';
import { Row, Col } from 'antd';

export default class Join extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            front: 0,
            contract: 0,
            product: 0,
            ui: 0
        }
    }

    showFrontName = () => {
        this.setState({ front: 0 });
    }

    showFrontDetail = () => {
        this.setState({ front: 1 });
    }

    showContractName = () => {
        this.setState({ contract: 0 });
    }

    showContractDetail = () => {
        this.setState({ contract: 1 });
    }

    showProductName = () => {
        this.setState({ product: 0 });
    }

    showProductDetail = () => {
        this.setState({ product: 1 });
    }

    showUIName = () => {
        this.setState({ ui: 0 });
    }

    showUIDetail = () => {
        this.setState({ ui: 1 });
    }

    render() {
        return (
            <WrapperJoinCmp>
                <Row className="joinFrame" justify="center" align="middle">
                    <Row className="joinBox">
                        <div className="title">加入我们</div>
                        <div className="desc">
                            cocafe是国内领先的NFT数字资产服务商，为所有内容创作者和消费者创造数字世界的精神家园。<br />欢迎技术极客、艺术怪咖、创意小能手和区块链玩家加入我们，参加元宇宙上不眠不休的Party～
                        </div>
                        <Row className="hcBox" justify="space-between" gutter={[3, 4]}>
                            <Col span={12} className="eachBox" onMouseEnter={this.showFrontDetail} onMouseLeave={this.showFrontName}>
                                {this.state.front == 0 ?
                                    <div className="nameBox">
                                        <div className="icon front"></div>
                                        <div className="positionName">前端工程师</div>
                                    </div> :
                                    <div className="detailBox">
                                        <div className="poBox front">
                                            <div className="positionName">前端工程师</div>
                                            <div className="line"></div>
                                        </div>
                                        <ul className="content">
                                            <li>负责区块链NFT项目和元宇宙交互层的开发；</li>
                                            <li>聪慧，敬畏技术，对于新事物有好奇心，勇于探索，敢于质疑与实践；</li>
                                            <li>精通HTML5/JS/CSS3等网页技术，熟悉主流框架（如React、Vue 等）中的一种或多种并拥有实战开发经验；</li>
                                            <li>了解区块链技术优先，985、211及名校背景优先；</li>
                                        </ul>
                                        <div className="btn">简历投递至：recruiter@cocafe.co</div>
                                    </div>
                                }
                            </Col>
                            <Col span={12} className="eachBox" onMouseEnter={this.showContractDetail} onMouseLeave={this.showContractName}>
                                {this.state.contract == 0 ?
                                    <div className="nameBox">
                                        <div className="icon contract"></div>
                                        <div className="positionName">智能合约工程师</div>
                                    </div> :
                                    <div className="detailBox">
                                        <div className="poBox contract">
                                            <div className="positionName">智能合约工程师</div>
                                            <div className="line"></div>
                                        </div>
                                        <ul className="content">
                                            <li>负责根据实际业务需求编写合约代码，实现智能合约设计、开发、部署、测试；</li>
                                            <li>聪慧，敬畏技术，对于新事物有好奇心，勇于探索，敢于质疑与实践；热爱区块链并对于新的技术进展有持续性的关注；</li>
                                            <li>有DApp开发经验，精通Solidity智能合约，熟悉ERC标准，有较复杂智能合约的设计、代码开发和安全测试的工作经验；</li>
                                            <li>有前端开发的经验，熟悉Typescript优先，985、211及名校背景优先；</li>
                                        </ul>
                                        <div className="btn">简历投递至：recruiter@cocafe.co</div>
                                    </div>
                                }

                            </Col>
                            <Col span={12} className="eachBox" onMouseEnter={this.showProductDetail} onMouseLeave={this.showProductName}>
                                {this.state.product == 0 ?
                                    <div className="nameBox">
                                        <div className="icon product"></div>
                                        <div className="positionName">产品经理</div>
                                    </div> :
                                    <div className="detailBox">
                                        <div className="poBox product">
                                            <div className="positionName">产品经理</div>
                                            <div className="line"></div>
                                        </div>
                                        <ul className="content">
                                            <li>负责NFT项目的规划与产品设计，对产品整体负责；</li>
                                            <li>逻辑思维清晰，脑洞大，学习能力强，自我驱动，良好的协作和沟通能力；</li>
                                            <li>具有独立产品设计和复杂业务实施的经验，擅长在新技术或新业务中寻找切入点，提供高质量的产品原型、流程图或其他相关解决方案；</li>
                                            <li>对区块链有浓厚的兴趣，有使用过区块链应用；</li>
                                        </ul>
                                        <div className="btn">简历投递至：recruiter@cocafe.co</div>
                                    </div>
                                }
                            </Col>
                            <Col span={12} className="eachBox" onMouseEnter={this.showUIDetail} onMouseLeave={this.showUIName}>
                                {this.state.ui == 0 ?
                                    <div className="nameBox">
                                        <div className="icon ui"></div>
                                        <div className="positionName">元宇宙设计工程师（实习）</div>
                                    </div> :
                                    <div className="detailBox">
                                        <div className="poBox ui">
                                            <div className="positionName">元宇宙设计工程师（实习）</div>
                                            <div className="line"></div>
                                        </div>
                                        <ul className="content">
                                            <li>负责元宇宙的视觉与工程建设；</li>
                                            <li>对于NFT有深厚兴趣，曾经使用过或接触区块链或NFT项目；有基础的对于区块链的了解；</li>
                                            <li>有很好的设计思路和审美能力； 有志向从事设计、游戏或区块链产品工作；</li>
                                            <li>设计类、艺术类、游戏类、金融类或计算机技术类专业在校学生；985、211及名校背景优先；</li>
                                        </ul>
                                        <div className="btn">简历投递至：recruiter@cocafe.co</div>
                                    </div>
                                }
                            </Col>
                        </Row>
                    </Row>
                </Row>
            </WrapperJoinCmp>
        )
    }
}