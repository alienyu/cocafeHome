import styled from 'styled-components';

const WrapperActivityCmp = styled.div`
    .activityFrame {
        width: 100%;
        margin-top: 128px;
        .activityBox {
            width 1040px;
            .mainTitle {
                font-weight: 500;
                font-size: 40px;
                color: #333;
                width: 100%;
                text-align: center;
                margin-bottom: 48px;
            }
            .listFrame {
                width: 100%;
                .eachBox {
                    height: 382px;
                    margin-bottom: 48px;
                    .left {
                        width: 680px;
                        height: 382px;
                        margin-right: 40px;
                        float: left;
                        img {
                            width 100%;
                        }
                    }
                    .right {
                        float: left;
                        width: 320px;
                        .date {
                            line-height: 30px;
                            font-size: 40px;
                            font-weight: 500;
                            color: #333;
                        }
                        .line {
                            width: 100%;
                            border-top: 2px solid #333;
                            margin: 72px 0px 40px 0px;
                        }
                        .title {
                            font-size: 24px;
                            font-weight: 500;
                            color: #333;
                            cursor: pointer;
                        }
                        .desc {
                            margin-top: 40px;
                            font-size: 16px;
                            font-weight: 400;
                            color: #666;
                        }
                    }
                }
            }
        }
    }
`;

export { WrapperActivityCmp }