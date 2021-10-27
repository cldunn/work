import React from "react";
import '../common/splitter/splitter.scss';
import SplitPane from "react-split-pane";

const CardStack: React.FC = ()  => {
    return (
        <SplitPane split="horizontal" minSize="50%" defaultSize="50%">
            <div>Card Stack</div>
            <div>Card Stack Desciprtion</div>
        </SplitPane>
    )
}

export default CardStack;