import * as React from "react";
import { WrapperQACmp } from './styled';
import { Row, Col } from 'antd';

const expandPic = require("@webCocafeHomeImgs/expand.png")

export default class QA extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            expandList: [1]
        }
    }

    changeExpandList = index => {
        if(this.state.expandList.indexOf(index) > -1) {
            var curIndex = this.state.expandList.indexOf(index);
            this.state.expandList.splice(curIndex,1);
        } else {
            this.state.expandList.push(index);
        }
        this.setState({ expandList: this.state.expandList });
    }

    render() {
        return (
            <WrapperQACmp>
                <Row justify="center" className="qaFrame">
                    <Row className="qaBox">
                        <div className="title">Q&A</div>
                        <div className="qaList">
                            <div className="eachBox">
                                <div className="qBox">
                                    <div className="qDesc">什么是NFT？</div>
                                    <img src={expandPic} className={this.state.expandList.indexOf(1) > -1 ? "expandIcon close" : "expandIcon"} onClick={this.changeExpandList.bind(this,1)}/>
                                </div>
                                <div className={this.state.expandList.indexOf(1) > -1 ? "aBox" : "aBox hide"}>
                                    <p>
                                        NFT(Non-Fungible Token)即非同质化通证，是基于区块链智能合约（如ERC-721标准等）发行的，具有唯一性和不可分割性的数字资产。<br />
                                        NFT可作为区块链上的技术容器来承载各类内容，如艺术品、收藏品、游戏内容、音乐、权益等，使得这些内容的唯一性、稀缺性可得到保障。同时NFT也可以保护内容在链上的知识产权，防止篡改与造假。迄今，NFT已形成了区块链技术的一类场景应用。
                                    </p>
                                </div>
                            </div>
                            <div className="eachBox">
                                <div className="qBox">
                                    <div className="qDesc">NFT有什么特点？</div>
                                    <img src={expandPic} className={this.state.expandList.indexOf(2) > -1 ? "expandIcon close" : "expandIcon"} onClick={this.changeExpandList.bind(this,2)}/>
                                </div>
                                <div className={this.state.expandList.indexOf(2) > -1 ? "aBox" : "aBox hide"}>
                                    <p>
                                        NFT的三个重要特征：<br />
                                        唯一性： 不同于比特币等传统加密货币，区块链上的每一个NFT都有其独特标识，独一无二、不可拆分。<br />
                                        可确权、可交易：所有人都可以在区块链上验证它的真实性和所有权，NFT可以看成是持有者对某一资产的持有证明。 <br />
                                        数字资产：是存在于数字世界中的虚拟资产，有加密验证属性，使用分布式账本、去中心化、共识机制等特征。<br />
                                    </p>
                                </div>
                            </div>
                            <div className="eachBox">
                                <div className="qBox">
                                    <div className="qDesc">如何将作品NFT化？</div>
                                    <img src={expandPic} className={this.state.expandList.indexOf(3) > -1 ? "expandIcon close" : "expandIcon"} onClick={this.changeExpandList.bind(this,3)}/>
                                </div>
                                <div className={this.state.expandList.indexOf(3) > -1 ? "aBox" : "aBox hide"}>
                                    <p>
                                        需要在区块链发行作品系列的智能合约，来作为作品的NFT容器，另外还需要使用其他的一些分布式技术来存储作品的数据。一些成规模的NFT市场也提供了NFT生成服务，不过需要有一定的准入权限，也不能围绕内容做技术与呈现的定制化。<br />
                                        Cocafe可以提供完整的解决方案，对于各类区块链和基础设施都可以提供支持。且能围绕作品的表达形式、发行方式、社交、藏家需求提供个性化方案。<br />
                                    </p>
                                </div>
                            </div>
                            <div className="eachBox">
                                <div className="qBox">
                                    <div className="qDesc">什么是加密艺术？</div>
                                    <img src={expandPic} className={this.state.expandList.indexOf(4) > -1 ? "expandIcon close" : "expandIcon"} onClick={this.changeExpandList.bind(this,4)}/>
                                </div>
                                <div className={this.state.expandList.indexOf(4) > -1 ? "aBox oneLine" : "aBox oneLine hide"}>
                                    <p>
                                        加密艺术相比流派而言，更偏向是一种艺术与技术融合的形式。数字原生艺术+区块链技术的融合体。
                                    </p>
                                </div>
                            </div>
                            <div className="eachBox">
                                <div className="qBox">
                                    <div className="qDesc">什么是元宇宙？</div>
                                    <img src={expandPic} className={this.state.expandList.indexOf(5) > -1 ? "expandIcon close" : "expandIcon"} onClick={this.changeExpandList.bind(this,5)}/>
                                </div>
                                <div className={this.state.expandList.indexOf(5) > -1 ? "aBox" : "aBox hide"}>
                                    <p>
                                        元宇宙（Metaverse）概念起源于科幻小说，或指向互联网的“终极形态”。Metaverse 一词来源于作家 Neal Stephenson 的科幻小说《雪崩》，描述了一个人们 以虚拟形象在三维空间中与各种软件进行交互的世界。 <br />
                                        目前一些元宇宙项目，以NFT为数字资产基础，建设了一个用户定义世界的新模式。 <br />
                                        Cocafe可以协助品牌、艺术家，驻扎在元宇宙，在丰富的虚拟世界中展示不凡的艺术调性。
                                    </p>
                                </div>
                            </div>
                            <div className="eachBox">
                                <div className="qBox">
                                    <div className="qDesc">Cocafe是什么意思？</div>
                                    <img src={expandPic} className={this.state.expandList.indexOf(6) > -1 ? "expandIcon close" : "expandIcon"} onClick={this.changeExpandList.bind(this,6)}/>
                                </div>
                                <div className={this.state.expandList.indexOf(6) > -1 ? "aBox twoLine" : "aBox twoLine hide"}>
                                    <p>
                                        Cocafe是Create Our Crypto Arts Future Enlightenment之简，cocafe的愿景是为数字世界带来更大的价值，与生态和社区一起建设我们数字世界的精神家园。
                                    </p>
                                </div>
                            </div>
                            <div className="eachBox">
                                <div className="qBox">
                                    <div className="qDesc">Cocafe在NFT与艺术收藏品的赛道中是什么角色？</div>
                                    <img src={expandPic} className={this.state.expandList.indexOf(7) > -1 ? "expandIcon close" : "expandIcon"} onClick={this.changeExpandList.bind(this,7)}/>
                                </div>
                                <div className={this.state.expandList.indexOf(7) > -1 ? "aBox twoLine" : "aBox twoLine hide"}>
                                    <p>
                                        cocafe是国内领先的NFT数字资产服务商，致力于为创作者和企业提供领先的NFT数字资产创作发行服务，打造引领未来的数字收藏平台。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Row>
            </WrapperQACmp>
        )
    }
}
