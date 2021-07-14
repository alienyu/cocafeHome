import * as React from "react";
import { WrapperIndexCmp } from './styled';
import { Row, Col } from 'antd';

export default class Index extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <WrapperIndexCmp>
                <Row className="banner" justify="center" align="middle">
                    <Col>
                        <p className="text1">CRYPTO ART</p>
                        <p className="text2">FUTURE ENLIGHTENMENT</p>
                    </Col>
                </Row>
                <Row className="activityFrame" justify="center" align="middle">
                    <Row className="activityBox">

                    </Row>
                </Row>
            </WrapperIndexCmp>
        )
    }
}


