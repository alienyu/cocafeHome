import styled from 'styled-components';

const WrapperQACmp = styled.div`
    .qaFrame {
        width: 100%;
        padding-top: 128px;
        background: #fff;
        .qaBox {
            width: 860px;
            .title {
                margin-bottom: 48px;
                font-size: 40px;
                font-weight: 500;
                color: 333;
                text-align: center;
                width: 100%;
            }
            .qaList {
                width: 100%;
                .eachBox {
                    width: 100%;
                    margin-bottom: 48px;
                    .qBox {
                        width: 100%;
                        height: 96px;
                        padding: 32px;
                        background: #333;
                        .qDesc {
                            float: left;
                            font-size: 24px;
                            font-weight: 500;
                            color: #fff;
                            width: 775px;
                        }
                        .expandIcon {
                            float: left;
                            width 20px;
                            height: 20px;
                            margin-top: 5px;
                            cursor: pointer;
                            transform: rotate(0deg);
                            transition: 1s;
                            &.close {
                                transform: rotate(45deg);
                                transition: 1s;
                            }
                        }
                    }
                    .aBox {
                        background: #fafafa;
                        overflow: hidden;
                        height: 160px;
                        transition: height 0.5s;
                        &.oneLine { height: 88px; }
                        &.twoLine { height: 107px; }
                        p { 
                            margin: 32px;
                            color: #666; 
                        }
                        &.hide {
                            height: 0px !important;
                            transition: height 0.5s;
                        }
                    }
                }
            }
        }
    }
`;

export { WrapperQACmp }