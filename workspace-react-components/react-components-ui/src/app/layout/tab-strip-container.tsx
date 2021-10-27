import React from "react";
import '../common/splitter/splitter.scss';
import SplitPane from "react-split-pane";

const TabStrip: React.FC = ()  => {
    return (
        <SplitPane split="horizontal" minSize="50%" defaultSize="50%">
            <div>Tab Strip</div>
            <div>Tab Strip Desciprtion</div>
        </SplitPane>
    )
}

export default TabStrip;