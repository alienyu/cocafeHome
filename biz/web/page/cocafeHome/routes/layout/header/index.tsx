import * as React from "react";
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';
import { WrapperHeaderCmp } from './styled';

type HeaderProps = {
    history?: any;
    location?: any;
}

type HeaderState = {
    headerBG: string
}

@(withRouter as any)
export default class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props);
        this.state = {
            headerBG: "frame white"
        }
    }


    componentDidMount() {
        let that = this;
        
        if(that.props.location.pathname == "/") { 
            window.onscroll = () => {
                if(that.props.location.pathname == "/") {
                    if(window.scrollY > 600) {
                        that.setState({ headerBG: "frame black"});
                    } else {
                        that.setState({ headerBG: "frame white"});
                    }
                }
            }
        } else {
            that.setState({ headerBG: "frame black"});
        }
    }

    goLink = link => {
        this.props.history.push(link);
    }

    render() {
        return (
            <WrapperHeaderCmp>
                <Row className={this.state.headerBG}>
                    <Col span={12} className="title">cocafe</Col>
                    <Col span={12} className="menu">
                        <Row justify="space-around">
                            <Col span={4} className="link" onClick={this.goLink.bind(this, "activity")}>活动</Col>
                            <Col span={4} className="link" onClick={this.goLink.bind(this, "cooperate")}>合作</Col>
                            <Col span={4} className="link" onClick={this.goLink.bind(this, "qa")}>Q&A</Col>
                            <Col span={4} className="link" onClick={this.goLink.bind(this, "about")}>关于我们</Col>
                            <Col span={4} className="link" onClick={this.goLink.bind(this, "join")}>加入我们</Col>
                            <Col span={4} className="locale">
                                <a href="javascript:;">中文</a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </WrapperHeaderCmp>
        )
    }
}


