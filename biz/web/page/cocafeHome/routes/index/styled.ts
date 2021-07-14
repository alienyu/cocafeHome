import styled from 'styled-components';

const bannerImg = require("@webCocafeHomeImgs/bg.png");

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
        }
    }
`;

export { WrapperIndexCmp }