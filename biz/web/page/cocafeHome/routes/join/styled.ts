import styled from 'styled-components';

const frontBG = require("@webCocafeHomeImgs/front.png");
const contractBG = require("@webCocafeHomeImgs/contract.png");
const productBG = require("@webCocafeHomeImgs/product.png");
const uiBG = require("@webCocafeHomeImgs/ui.png");

const WrapperJoinCmp = styled.div`
    .joinFrame {
        width: 100%;
        height: 1145px;
        background: #fff;
        .joinBox {
            width: 1040px;
            .title {
                width: 100%;
                font-size: 40px;
                font-weight: 500;
                color: #333;
            }
            .desc {
                width: 100%;
                font-size: 14px;
                font-weight: 400;
                color: #666;
                margin-top: 33px;
                margin-bottom: 48px;
            }
            .hcBox {
                width: 100%;
                .eachBox {
                    cursor: pointer;
                    .nameBox {
                        padding-top: 77px;
                        height: 358px;
                        background: #fafafa;
                        text-align: center;
                        .icon {
                            width: 140px;
                            height: 140px;
                            border-radius: 50%;
                            margin-bottom: 32px;
                            margin-left: 188px;
                            &.front {
                                background: url(${frontBG}) #333 no-repeat 30px 30px;
                            }
                            &.contract {
                                background: url(${contractBG}) #333 no-repeat 30px 30px;
                            }
                            &.product {
                                background: url(${productBG}) #333 no-repeat 30px 30px;
                            }
                            &.ui {
                                background: url(${uiBG}) #333 no-repeat 30px 30px;
                            }
                        }
                        .positionName {
                            font-size: 24px;
                            font-weight: 500;
                            color: #333;
                        }
                    }
                    .detailBox {
                        position: relative;
                        padding: 40px 32px;
                        height: 358px;
                        background: #333;
                        .poBox {
                            padding-left: 100px;
                            background-size: 15%;
                            margin-bottom: 39px;
                            &.front {
                                background: url(${frontBG}) no-repeat 0px -6px/15%;
                            }
                            &.contract {
                                background: url(${contractBG}) no-repeat 0px -6px/15%;
                            }
                            &.product {
                                background: url(${productBG}) no-repeat 0px -6px/15%;
                            }
                            &.ui {
                                background: url(${uiBG}) no-repeat 0px -6px/15%;
                            }
                            .positionName {
                                font-size: 24px;
                                font-weight: 500;
                                color: #fff;
                                margin-bottom: 18px;
                            }
                            .line {
                                width: 100%;
                                border-top: 1px solid #fff;
                            }
                        }
                        .content {
                            padding-left: 20px;
                            list-style: auto;
                            li { 
                                font-size: 14px;
                                font-weight: 400;
                                color: #fff;
                                line-height: 22px;
                            } 
                        }
                        .btn {
                            position: absolute;
                            bottom: 20px;
                            width: 453px;
                            height: 40px;
                            line-height: 40px;
                            border: 1px solid #fff;
                            color: #fff;
                            font-size: 16px;
                            font-weight: 400;
                            text-align: center;
                        }
                    }
                }
            }
        }
    }
`;

export { WrapperJoinCmp }