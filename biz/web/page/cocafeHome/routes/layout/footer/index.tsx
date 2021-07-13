import * as React from "react";
import { WrapperFooterCmp } from './styled';

type FooterProps = {
}

type FooterState = {
}

export default class Footer extends React.Component<FooterProps, FooterState> {
    constructor(props: FooterProps) {
        super(props);
    }

    render() {
        return (
            <WrapperFooterCmp>
                VASP Management
            </WrapperFooterCmp>
        )
    }
}


