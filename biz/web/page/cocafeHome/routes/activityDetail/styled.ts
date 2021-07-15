import styled from 'styled-components';

const backBG = require("@webCocafeHomeImgs/back.png");

const WrapperActivityDetailCmp = styled.div`
    .activityDetailFrame {
        width: 100%;
        background: #fff;
        padding-top: 104px;
        .activityDetailBox {
            width: 1040px;
            .back {
                font-size: 16px;
                font-weight: 500;
                color: #333;
                padding-left: 30px;
                background: url(${backBG}) no-repeat;
                cursor: pointer;
            }
            .line {
                width: 100%;
                margin-top: 24px;
                margin-bottom: 48px;
                border-top: 1px solid #000;
            }
            .contentBox {
                width: 100%;
                margin-bottom: 120px;
                .date, .title {
                    font-size: 40px;
                    font-weight: 500;
                    color: #333;
                    margin-bottom: 24px;
                }
                img {
                    width: 100%;
                    height: 382px;
                    margin-bottom: 40px;
                }
                .desc {
                    font-size: 16px;
                    font-weight: 400;
                    color: #666;
                }
            }
        }
    }
`;

export { WrapperActivityDetailCmp }