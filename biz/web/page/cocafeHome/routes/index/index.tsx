import * as React from "react";
import { WrapperIndexCmp } from './styled';

export default class Index extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <WrapperIndexCmp>
                VASP Management
            </WrapperIndexCmp>
        )
    }
}


