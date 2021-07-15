import styled from 'styled-components';

const insititutionBG = require("@webCocafeHomeImgs/insititutionBG.png");
const artistBG = require("@webCocafeHomeImgs/artistBG.png");
const ecologyBG = require("@webCocafeHomeImgs/ecologyBG.png");

const WrapperCooperateCmp = styled.div`
    .cooperateFrame {
        padding-top: 128px;
        width: 100%;
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
            .btnFrame {
                margin-top: 80px;
                width: 100%;
                .btnBox {
                    text-align: center;
                    a {
                        font-size: 24px;
                        font-weight: 500;
                        display: inline-block;
                        background: #333;
                        color: #fff;
                        height: 75px;
                        line-height: 75px;
                        width: 394px;
                        text-align: center;
                        margin-bottom: 120px;
                    }
                }
            }
        }
    }
`;

export { WrapperCooperateCmp }