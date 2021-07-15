import * as React from "react";
import { withRouter } from 'react-router-dom';
import { WrapperActivityDetailCmp } from './styled';
import { Row, Col } from 'antd';

const activityDemoPic = require("@webCocafeHomeImgs/activityDemoPic.jpg");

@(withRouter as any)
export default class Index extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    back = () => {
        this.props.history.push("/activity");
    }

    render() {
        return (
            <WrapperActivityDetailCmp>
                <Row justify="center" className="activityDetailFrame">
                    <Row className="activityDetailBox">
                        <div className="back" onClick={this.back}>返回活动列表</div>
                        <div className="line"></div>
                        <Row className="contentBox" justify="space-between">
                            <Col span={7}>
                                <div className="date">07.10</div>
                                <div className="title">咖菲科技助力中国嘉德NFT加密艺术中国首拍</div>
                            </Col>
                            <Col span={16}>
                                <img src={activityDemoPic} />
                                <div className="desc">
                                    <p>中国嘉德将于 2021 春季拍卖会当代艺术夜场（二）中推出在国内AI及区块链艺术领域的重要践行者、艺术家宋婷的 NFT 作品《牡丹亭 Rêve 之标目蝶恋花——信息科技穿透了我》。</p>
                                    <p>作为嘉德首拍 NFT 艺术的推动者，cocafe 创始人、加密艺术藏家和策展人石岚女士表示，「真正的加密艺术不止把加密当作储存方式，更应有信息科技原生哲学。《牡丹亭 Rêve 之标目蝶恋花——信息科技穿透了我》不仅取材不朽的昆曲经典，还应用了区块链上 AI 模型的技术绘制图层，其协作反映了新时代的人机关系，是其中的卓越代表。艺术为人类提供永恒之思，技术则日新月异不断更迭。</p>
                                    <p>在艺术史上，人类技术发展的每一步都会让艺术语言和词汇更丰富。我之前在任佳士得中国高级顾问，而此刻，我看到发源于互联网和区块链技术革命的加密艺术创造了新的可能。很荣幸数字内容发行与收藏平台 cocafe 咖菲科技和我能够推动 NFT 艺术在中国的发展。」</p>
                                    <p>cocafe咖菲科技致力于成为全球领先的数字内容资产创作、发行、交易和投资机构，为所有内容创作者和消费者创造数字世界的精神家园。cocafe连接全球数字艺术创作者，为其提供经纪、培育和数字化服务；并为潮流IP和机构提供数字创意制作和衍生品创意服务。</p>
                                </div>
                            </Col>
                        </Row>
                    </Row>
                </Row>
            </WrapperActivityDetailCmp>
        )
    }
}