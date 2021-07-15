import * as React from "react";
import { withRouter } from 'react-router-dom';
import { WrapperActivityCmp } from './styled';
import { Row, Col } from 'antd';

const activityDemoPic = require("@webCocafeHomeImgs/activityDemoPic.jpg");

@(withRouter as any)
export default class Index extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    goToDetail = id => {
        this.props.history.push(`/activityDetail?id=${id}`);
    }

    render() {
        return (
            <WrapperActivityCmp>
                <Row justify="center" className="activityFrame">
                    <Row className="activityBox">
                        <div className="mainTitle">活动</div>
                        <div className="listFrame">
                            <div className="eachBox">
                                <div className="left">
                                    <img src={activityDemoPic} />
                                </div>
                                <div className="right">
                                    <div className="date">07.10</div>
                                    <div className="line"></div>
                                    <div className="title" onClick={this.goToDetail.bind(this, 1)}>咖菲科技助力中国嘉德NFT加密艺术中国首拍</div>
                                    <div className="desc">中国嘉德将于 2021 春季拍卖会当代艺术夜场（二）中推出在国内AI及区块链艺术领域的重要践行者、艺术家宋婷的 NFT 作品《牡丹亭..</div>
                                </div>
                            </div>
                            <div className="eachBox">
                                <div className="left">
                                    <img src={activityDemoPic} />
                                </div>
                                <div className="right">
                                    <div className="date">07.10</div>
                                    <div className="line"></div>
                                    <div className="title" onClick={this.goToDetail.bind(this, 1)}>咖菲科技助力中国嘉德NFT加密艺术中国首拍</div>
                                    <div className="desc">中国嘉德将于 2021 春季拍卖会当代艺术夜场（二）中推出在国内AI及区块链艺术领域的重要践行者、艺术家宋婷的 NFT 作品《牡丹亭..</div>
                                </div>
                            </div>
                            <div className="eachBox">
                                <div className="left">
                                    <img src={activityDemoPic} />
                                </div>
                                <div className="right">
                                    <div className="date">07.10</div>
                                    <div className="line"></div>
                                    <div className="title" onClick={this.goToDetail.bind(this, 1)}>咖菲科技助力中国嘉德NFT加密艺术中国首拍</div>
                                    <div className="desc">中国嘉德将于 2021 春季拍卖会当代艺术夜场（二）中推出在国内AI及区块链艺术领域的重要践行者、艺术家宋婷的 NFT 作品《牡丹亭..</div>
                                </div>
                            </div>
                            <div className="eachBox">
                                <div className="left">
                                    <img src={activityDemoPic} />
                                </div>
                                <div className="right">
                                    <div className="date">07.10</div>
                                    <div className="line"></div>
                                    <div className="title" onClick={this.goToDetail.bind(this, 1)}>咖菲科技助力中国嘉德NFT加密艺术中国首拍</div>
                                    <div className="desc">中国嘉德将于 2021 春季拍卖会当代艺术夜场（二）中推出在国内AI及区块链艺术领域的重要践行者、艺术家宋婷的 NFT 作品《牡丹亭..</div>
                                </div>
                            </div>
                            <div className="eachBox">
                                <div className="left">
                                    <img src={activityDemoPic} />
                                </div>
                                <div className="right">
                                    <div className="date">07.10</div>
                                    <div className="line"></div>
                                    <div className="title" onClick={this.goToDetail.bind(this, 1)}>咖菲科技助力中国嘉德NFT加密艺术中国首拍</div>
                                    <div className="desc">中国嘉德将于 2021 春季拍卖会当代艺术夜场（二）中推出在国内AI及区块链艺术领域的重要践行者、艺术家宋婷的 NFT 作品《牡丹亭..</div>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Row>
            </WrapperActivityCmp>
        )
    }
}