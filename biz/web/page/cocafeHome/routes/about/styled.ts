import styled from 'styled-components';

const WrapperAboutCmp = styled.div`
    .firstBlock {
        width: 100%;
        height: 500px;
        background: #fff;
        .contentBox {
            width: 1040px;
            .title {
                font-size: 40px;
                font-weight: 500;
                color: #333;
                margin-bottom: 24px;
            }
            .desc {
                font-size: 14px;
                font-weight: 400;
                color: #666;
            }
            .slogan {
                width: 407px;
                height: 145px;
            }
        }
    }
    .secondBlock {
        width: 100%;
        height: 776px;
        background: #fafafa;
        .contentBox {
            width: 1040px;
            .title {
                font-size: 40px;
                font-weight: 500;
                color: #333;
                line-height: 48px;
            }
            .advanceList {
                margin-top: 65px;
                width 100%;
                .eachBox {
                    position: relative;
                    margin-bottom: 65px;
                    border-top: 1px solid #333;
                    .indexBox {
                        position: absolute;
                        top: -32px;
                        left: 105px;
                        width: 100px;
                        height: 64px;
                        background: #fafafa;
                        .indexNum {
                            width: 64px;
                            height: 64px;
                            text-indent: 16px;
                            font-size: 48px;
                            font-weight: 600;
                            font-style: italic;
                            color: #fff;
                            line-height: 60px;
                            margin-left: 18px;
                            border-radius: 50%;
                            background: #333
                        }
                    }
                    .desc {
                        margin-top: 56px;
                        font-size: 14px;
                        font-weight: 400;
                        color: #666;
                    }
                }
            }
        }
    }
    .thirdBlock {
        width: 100%;
        background: #fff;
        .contentBox {
            margin-top: 96px;
            margin-bottom: 120px;
            width: 1040px;
            .firstLine {
                width: 100%;
                height: 320px;
                margin-bottom: 80px;
                .left {
                    float: left;
                    width: 500px;
                    height: 320px;
                    margin-right: 40px;
                    .title {
                        font-size: 40px;
                        font-weight: 500;
                        line-height: 40px;
                        color: #333;
                        margin-bottom: 48px;
                    }
                    ul {
                        padding-left: 20px;
                        li {
                            font-size: 25px;
                            height: 26px;
                            line-height: 24px;
                            &.first {
                                list-style: square; 
                            }
                            &.last {
                                height: 40px;
                                list-style: none; 
                                margin-bottom: 24px;
                            }
                            a {
                                display: inline-block;
                                font-size: 14px;
                                color: #666;
                                cursor: default;
                            }
                        }
                    }
                }
                .right {
                    float: left;
                    width: 500px;
                    height: 320px;
                    img {
                        width: 500px;
                        height: 320px;
                    }
                }
            }
            .secondLine {
                width: 100%;
                height: 342px;
                .left {
                    float: left;
                    width: 500px;
                    height: 342px;
                    margin-right: 40px;
                    img {
                        width: 500px;
                        height: 342px;
                    }
                }
                .right {
                    float: left;
                    width: 500px;
                    height: 342px;
                    .title {
                        font-size: 40px;
                        font-weight: 500;
                        line-height: 40px;
                        color: #333;
                        margin-bottom: 25px;
                    }
                    ul {
                        padding-left: 20px;
                        li {
                            font-size: 25px;
                            line-height: 24px;
                            &.first {
                                list-style: square; 
                            }
                            &.middle {
                                list-style: none; 
                            }
                            &.last {
                                height: 40px;
                                list-style: none; 
                                margin-bottom: 24px;
                            }
                            a {
                                display: inline-block;
                                font-size: 14px;
                                color: #666;
                                cursor: default;
                            }
                        }
                    }
                }
            }
        }
    }
    .fourthBlock {
        width: 100%;
        background: #fafafa;
        .contentBox {
            margin-top: 85px;
            margin-bottom: 120px;
            width: 1040px;
            .title {
                font-size: 40px;
                line-height: 40px;
                font-weight: 500;
                color: #333;
                margin-bottom: 24px;
            }
            .desc {
                font-size: 14px;
                font-weight: 400;
                color: #666;
                margin-bottom: 48px;
            }
            .list {
                .subTitle {
                    background: #333;
                    color: #fff;
                    font-size: 24px;
                    font-weight: 500;
                    text-align: center;
                    height: 64px;
                    line-height: 64px;
                }
                .detail {
                    font-family: Source Han Sans SC;
                    height: 232px;
                    background: #fff;
                    padding: 40px;
                    color: #666;
                    font-size: 16px;
                    font-weight: 400;
                    text-align: center;
                    line-height: 30px;
                }
            }
        }
    }   
`;

export { WrapperAboutCmp }