import styled from 'styled-components';

const bannerImg = require("@webCocafeHomeImgs/bg.png");
const moreImg = require("@webCocafeHomeImgs/more.png");
const insititutionBG = require("@webCocafeHomeImgs/insititutionBG.png");
const artistBG = require("@webCocafeHomeImgs/artistBG.png");
const ecologyBG = require("@webCocafeHomeImgs/ecologyBG.png");
const mailPic = require("@webCocafeHomeImgs/mail.png");

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
                            &.active, &:hover {
                                background-color: rgba(250,250,250,1);
                            }
                        }
                        &.artist {
                            background: url(${artistBG}) rgba(250, 250, 250, 0) no-repeat 38px 40px;
                            &.active, &:hover {
                                background-color: rgba(250,250,250,1);
                            }
                        }
                        &.ecology {
                            background: url(${ecologyBG}) rgba(250, 250, 250, 0) no-repeat 38px 40px;
                            &.active, &:hover {
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
                    padding: 64px 44px 0px 44px;
                    height: 516px;
                    &.cooperate {
                        .line {
                            border-top: 1px solid #333;
                            margin-bottom: 16px;
                            width: 231px;
                        }
                        .content {
                            padding-left: 15px;
                            margin-bottom: 74px;
                            li {
                                font-size: 25px;
                                height: 22px;
                                line-height: 22px;
                                list-style: none; 
                                &:first-child { 
                                    list-style: square; 
                                }
                                a {
                                    display: inline-block;
                                    font-size: 14px;
                                    color: #000;
                                    cursor: default;
                                }
                            }
                        }
                    }
                    &.artist {
                        li {
                            font-size: 25px;
                            height: 22px;
                            line-height: 22px;
                            list-style: square; 
                            margin-bottom: 24px;
                            a {
                                display: inline-block;
                                font-size: 14px;
                                color: #000;
                                cursor: default;
                            }
                        }
                    }
                    &.ecology {
                        .partOne {
                            padding-left: 20px;
                        }
                        .line {
                            width: 100%;
                            border-top: 1px solid #333;
                            margin: 96px 0px 48px 0px;
                        }
                        .list {
                            padding-left: 20px;
                            margin-bottom: 16px;
                            li {
                                width: 50%;
                                float: left;
                            }
                        }
                        li {
                            font-size: 25px;
                            height: 22px;
                            line-height: 22px;
                            list-style: square; 
                            margin-bottom: 16px;
                            a {
                                display: inline-block;
                                font-size: 14px;
                                color: #000;
                                cursor: default;
                            }
                        }
                    }
                }
            }
        }
    }
    .whatFrame {
        width: 100%;
        height: 620px;
        background: #fff;
        .whatBox {
            width: 1040px;
            img {
                width: 500px;
                height: 420px;
            }
            .title {
                font-size: 40px;
                color: #333;
                margin-bottom: 32px;
            }
            .line {
                border-bottom: 1px solid #000;
                margin-bottom: 32px;
            }
            .content {
                font-size: 16px;
                margin-bottom: 32px;
                color: #666;
            }
            .btn {
                display: inline-block;
                background: #333;
                color: #fff;
                height: 48px;
                line-height: 48px;
                width: 230px;
                text-align: center;
                margin-top: 32px;
            }
        }
    }
    .aboutFrame {
        width: 100%;
        height: 704px;
        background: #fff;
        .aboutBox {
            width: 1040px;
            .title {
                width 100%;
                text-align: center;
                font-size: 40px;
                color: #333;
                margin-bottom: 48px;
            }
            .mainDesc {
                width: 100%;
                text-align: center;
                font-size: 16px;
                color: #666;
                margin-bottom: 88px;
                p { margin-bottom: 0px; }
            }
            .contentBox {
                .eachBox {
                    position: relative;
                    width: 320px;
                    height: 176px;
                    padding: 64px 40px 0px 40px;
                    border: 1px solid #000;
                    margin-right: 40px;
                    font-size: 14px;
                    color: #666;
                    &:last-child { margin-right: 0px; }
                    .icon {
                        position: absolute;
                        top: -42px;
                        left: 100px;
                        width: 106px;
                        height: 83px;
                        background: #fff;
                    }
                }
            }
            .more {
                width: 100%;
                margin-top: 48px;
                a {
                    display: inline-block;
                    background: #333;
                    color: #fff;
                    height: 48px;
                    line-height: 48px;
                    width: 230px;
                    text-align: center;
                    margin-top: 32px;
                }
            }
        }
    }
    .mailBox {
        position: fixed;
        right: 10px;
        top: 50%;
        width: 60px;
        height: 60px;
        background: url(${mailPic}) no-repeat;
        cursor: pointer;
        .contentFrame {
            position: absolute;
            display: none;
            top: -35px;
            right: 60px;
            width: 267px;
            height: 134px;
            &.show {
                display: block;
            }
            .left {
                float: left;
                width: 257px;
                height: 134px;
                border-top: 3px solid #333;
                box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.12);
                .mailAddress {
                    color: #333;
                    font-size: 16px;
                    margin-bottom: 16px;
                    text-align: center;
                    margin-top: 30px;
                }
                .btnFrame {
                    width: 100%;
                    margin-left: 135px;
                    a {
                        display: inline-block;
                        background: #333;
                        color: #fff;
                        height: 32px;
                        line-height: 32px;
                        width: 80px;
                        text-align: center;
                    }
                }
            }
            .right {
                float: left;
                width: 10px;
                height: 134px;
            }
        }
    }
`;

export { WrapperIndexCmp }