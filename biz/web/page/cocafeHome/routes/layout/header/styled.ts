import styled from 'styled-components';

const WrapperHeaderCmp = styled.div`
    .frame {
        height: 80px;
        background: rgba(0,0,0,0);
        &.white {
            .title {
                font-size: 32px;
                color: #fff
                line-height: 80px;
                cursor: pointer;
            }
            .menu {
                .link {
                    color: #fff;
                    font-size: 16px;
                    line-height: 80px;
                    cursor: pointer;
                    text-align: center;
                }
                .locale {
                    text-align: right;
                    a {
                        display: inline-block;
                        margin-top: 24px;
                        text-align: center;
                        width: 52px;
                        height: 32px;
                        line-height: 26px;
                        font-size: 14px;
                        color: #fff;
                        border: 1px solid #999;
                    }
                }
            }
        }
        &.black {
            .title {
                font-size: 32px;
                color: #333
                line-height: 80px;
                cursor: pointer;
            }
            .menu {
                .link {
                    color: #666;
                    font-size: 16px;
                    line-height: 80px;
                    cursor: pointer;
                    text-align: center;
                }
                .locale {
                    text-align: right;
                    a {
                        display: inline-block;
                        margin-top: 24px;
                        text-align: center;
                        width: 52px;
                        height: 32px;
                        line-height: 26px;
                        font-size: 14px;
                        color: #666;
                        border: 1px solid #999;
                    }
                }
            }
        }
    }
`;

export { WrapperHeaderCmp }