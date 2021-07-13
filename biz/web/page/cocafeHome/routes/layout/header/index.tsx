import * as React from "react";
import { WrapperHeaderCmp } from './styled';

type HeaderProps = {
}

type HeaderState = {
}

export default class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props);
    }

    render() {
        return (
            <WrapperHeaderCmp>
                VASP Management
            </WrapperHeaderCmp>
        )
    }
}


