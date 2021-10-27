import React from "react";
import '../common/splitter/splitter.scss';
import SplitPane from "react-split-pane";

const EditableForm: React.FC = ()  => {
    return (
        <SplitPane split="horizontal" minSize="50%" defaultSize="50%">
            <div>Editable Form</div>
            <div>Editable Form Desciprtion</div>
        </SplitPane>
    )
}

export default EditableForm;