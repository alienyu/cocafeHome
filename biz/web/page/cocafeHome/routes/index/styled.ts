import styled from 'styled-components';

const bannerImg = require("@webCocafeHomeImgs/bg.png");
const moreImg = require("@webCocafeHomeImgs/more.png");
const insititutionBG = require("@webCocafeHomeImgs/insititutionBG.png");
const artistBG = require("@webCocafeHomeImgs/artistBG.png");
const ecologyBG = require("@webCocafeHomeImgs/ecologyBG.png");

const WrapperIndexCmp = styled.div`
    .banner {
        width: 100%;
        height: 640px;
        background: url(${bannerImg}) no-repeat center center;
        .text1 {
            color: #fff;
            font-size: 100px;
            margin-bottom: 0px;
        }
        .text2 {
            color: #fff;
            font-size: 50px;
            margin-bottom: 0px;
        }
    }
    .activityFrame {
        width: 100%;
        height: 692px;
        background: #fff;
        .activityBox {
            width: 1040px;
            .titleLine {
                width: 100%;
                height: 80px;
                line-height: 80px;
                border-bottom: 1px solid #333;
                margin-bottom: 32px;
                .title {
                    color: #333;
                    font-size: 40px;
                    text-align: left;
                }
                .more {
                    text-align: right;
                    a {
                        padding-right: 30px;
                        color: #333;
                        font-size: 16px;
                        text-align: right;
                        background: url(${moreImg}) no-repeat 100% 100%;
                        background-position-y: -3px;
                    }
                }
            }
            .contentBox {
                .eachBox {
                    cursor: pointer;
                    width: 360px;
                    padding-left: 20px;
                    padding-right: 20px;
                    &:first-child {
                        width: 340px;
                        padding-left: 0px;
                        border-right: 1px solid #333;
                    }
                    &:last-child {
                        width: 340px;
                        padding-right: 0px;
                        border-left: 1px solid #333;
                    }
                    .title {
                        font-size: 24px;
                        color: #333;
                        margin-bottom: 80px;
                    }
                    .date {
                        font-size: 40px;
                        color: #333;
                        margin-bottom: 16px;
                    }
                    img {
                        width: 320px;
                        height: 180px;
                    }
                }
            }
        }
    }
    .cooperateFrame {
        marign-top: 120px;
        width: 100%;
        height: 812px;
        background: #fff;
        .cooperateBox {
            width: 1040px;
            .title {
                width: 100%; 
                text-align: center;
                font-size: 40px;
                color: #333;
                margin-bottom: 48px;
            }
            .contentBox {
                width: 100%;
                .tabFrame {
                    .tab {
                        width: 100%;
                        height: 172px;
                        cursor: pointer;
                        padding-top: 40px;
                        padding-left: 136px;
                        background-color: rgba(250,250,250,0);
                        &.insititution {
                            background: url(${insititutionBG}) rgba(250, 250, 250, 0) no-repeat 38px 40px;
                            &.active {
                                background-color: rgba(250,250,250,1);
                            }
                        }
                        .subTitle {
                            font-size: 24px;
                            color: #333;
                            margin-bottom: 12px;
                        }
                        .desc {
                            font-size: 16px;
                            color: #666;
                            p { margin-bottom: 0px; }
                        }
                    }
                }
                .detailFrame {
                    background: rgba(250, 250, 250, 1);
                    padding: 64px 44px;
                    .line {
                        border-top: 1px solid #333;
                        margin-bottom: 16px;
                    }
                    .content {
                        color: #000;
                        font-size: 14px;
                        padding-left: 15px;
                        li {
                            list-style: none;
                            &:first-child { 
                                list-style: square; 
                            }
                        }
                    }
                }
            }
        }
    }
`;

export { WrapperIndexCmp }