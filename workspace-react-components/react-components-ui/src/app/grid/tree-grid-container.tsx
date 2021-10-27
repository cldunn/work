import React from "react";
import '../common/splitter/splitter.scss';
import SplitPane from "react-split-pane";

const TreeGrid: React.FC = ()  => {
    return (
        <SplitPane split="horizontal" minSize="50%" defaultSize="50%">
            <div>Tree Grid</div>
            <div>Tree Grid Desciprtion</div>
        </SplitPane>
    )
}

export default TreeGrid;