import React from "react";
import '../common/splitter/splitter.scss';
import SplitPane from "react-split-pane";

const FixedColGrid: React.FC = ()  => {
    return (
        <SplitPane split="horizontal" minSize="50%" defaultSize="50%">
            <div>Fixed Column Grid</div>
            <div>Fixed Column Grid Desciprtion</div>
        </SplitPane>
    )
}

export default FixedColGrid;