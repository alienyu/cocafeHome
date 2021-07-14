import styled from 'styled-components';

const ins = require("@webCocafeHomeImgs/ins.png");
const twitter = require("@webCocafeHomeImgs/twitter.png");
const facebook = require("@webCocafeHomeImgs/facebook.png");
const weibo = require("@webCocafeHomeImgs/weibo.png");
const wx = require("@webCocafeHomeImgs/wx.png");

const WrapperFooterCmp = styled.div`
    .footerFrame {
        width: 100%;
        height: 304px;
        color: #fff;
        background: #333;
        .footerBox {
            width: 1040px;
            .logoFrame {
                .logo {
                    font-size: 73px;
                }
                .desc {
                    font-size: 14px;
                }
            }
            .linkFrame {
                font-size: 14px;
                .ant-col { 
                    margin-bottom: 12px; 
                    cursor: pointer;
                }
            }
            .mediaFrame {
                .ant-col {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    cursor: pointer;
                    &.ins {
                        background: url(${ins}) rgba(167,167,167,0.1) no-repeat 12px 12px;
                    }
                    &.twitter {
                        background: url(${twitter}) rgba(167,167,167,0.1) no-repeat 12px 12px;
                    }
                    &.facebook {
                        background: url(${facebook}) rgba(167,167,167,0.1) no-repeat 12px 12px;
                    }
                    &.weibo {
                        background: url(${weibo}) rgba(167,167,167,0.1) no-repeat 12px 12px;
                    }
                    &.wx {
                        background: url(${wx}) rgba(167,167,167,0.1) no-repeat 12px 12px;
                    }
                }
            }
        }
    }
`;

export { WrapperFooterCmp }