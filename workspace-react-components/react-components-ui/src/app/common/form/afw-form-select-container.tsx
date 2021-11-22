import React, { useState } from "react";
import { Field } from "react-final-form";

import {Form, Row, Col, InputGroup, FormControl} from 'react-bootstrap'

import './afw-form-input.scss';

const AfwFormSelect: React.FC<any> = (props: any)  => {
    const { name, type, label, lblWidth, placeholder, options, value, validators, ...rest } = props;

    const lblSize = lblWidth ? lblWidth - 0 : -1;
    const fldSize = lblWidth ? 12 - lblWidth : 12;
    const [isDirty, setIsDrity] = useState(false);
    const processValidation = (validators: any) => (val: any) => {
        // return validators && validators.reduce((err: any, validator: any) => err || validator(val), undefined);
        if (isDirty) {
            return validators && validators.reduce((errMsgs: any, validator: any) => {
                const errMsg = validator(val);
                return errMsg ? errMsgs ? errMsgs + ", " + errMsg : errMsg : errMsgs;
            }, undefined);
        }
        else {
            return undefined;
        }
    }

    return (
        <Field name={name} initialValue={value} validate={processValidation(validators)}>
            {({ input, meta }) => {
                setIsDrity(meta.dirty);
                return (
                    <div>
                        {console.log(input, meta)}
                        <Form.Group as={Row} className="afw-form-select" controlId="formGroupSelect">
                            <Form.Label column sm={lblSize}>{label}</Form.Label>
                            <Col sm={fldSize}>
                                <InputGroup hasValidation>
                                    <Form.Select  {...rest}
                                        name={input.name} 
                                        placeholder={placeholder} 
                                        value={input.value}  
                                        onChange={input.onChange}
                                        onBlur={input.onBlur}
                                        onFocus={input.onFocus}
                                        className="p-2"
                                        style={{borderColor: meta.dirty && meta.error ? 'red' : ''}} >
                                            {options.map((lvb: any) => <option key={lvb.val} value={lvb.val}>{lvb.lbl}</option>)}
                                    </Form.Select>
                                    <FormControl.Feedback className='errSpace' type={meta.dirty && meta.error ? 'invalid' : 'valid'}>
                                        {meta.dirty ? <span>{meta.error || <div>&nbsp;</div>}</span> : <span>{<div>&nbsp;</div>}</span>}
                                    </FormControl.Feedback>
                                </InputGroup>
                            </Col>
                        </Form.Group>
                    </div>
                )
            }}
        </Field>
    )
}

export default AfwFormSelect;