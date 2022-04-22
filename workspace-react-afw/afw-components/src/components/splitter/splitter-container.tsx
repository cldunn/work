import React, { memo } from "react";

import SplitPane from "react-split-pane";

export const AfwSplitter: React.FC<any> = (props: any)  => {
    const { children, ...rest } = props;

    return (
        <SplitPane {...rest}>
            {children}
        </SplitPane>
    )
}