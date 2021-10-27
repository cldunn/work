import React from "react";
import '../common/splitter/splitter.scss';
import SplitPane from "react-split-pane";

const EditableGrid: React.FC = ()  => {
    return (
        <SplitPane split="horizontal" minSize="50%" defaultSize="50%">
            <div>Editable Grid</div>
            <div>Editable Grid Desciprtion</div>
        </SplitPane>
    )
}

export default EditableGrid;