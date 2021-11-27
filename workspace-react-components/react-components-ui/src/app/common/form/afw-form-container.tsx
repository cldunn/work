import React from "react";
// import { FormValues } from "types";
import { Form } from "react-final-form";


const AfwForm: React.FC<any> = (props: any)  => {
    const { formData, onSubmit, children } = props;

    const doSubmit = async (values: any, form: any) => {
        console.log('doSubmit', values, form.getFieldState('password'));
        onSubmit(values);
    };

    return (
        <Form
            onSubmit={doSubmit}
            validateOnBlur={true}
            initialValues={formData}
            render={({ handleSubmit }) => (
                <form noValidate onSubmit={handleSubmit}>
                    {children}
                </form>
            )}
        />
    )
}

export default AfwForm;