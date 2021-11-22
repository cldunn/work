import React from "react";
import { Form } from "react-final-form";


const AfwForm: React.FC<any> = (props: any)  => {
    // const { formData, onSubmit } = props;
    return (
        <Form
            onSubmit={props.onSubmit}
            initialValues={props.formData}
            validateOnBlur={true}
            render={({ handleSubmit }) => (
                <form noValidate onSubmit={handleSubmit}>
                    {props.children}
                </form>
            )}
        />
    )
}

export default AfwForm;