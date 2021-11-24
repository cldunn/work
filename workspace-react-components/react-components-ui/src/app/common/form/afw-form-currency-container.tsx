import React, {useState} from "react";
import { Field } from "react-final-form";

import {Form, Row, Col, InputGroup, FormControl} from 'react-bootstrap'

import './afw-form-input.scss';

const AfwFormCurrency: React.FC<any> = (props: any)  => {
    const { name, label, lblWidth, placeholder, value, validators, ...rest } = props;

    const lblSize = lblWidth ? lblWidth - 0 : -1;
    const fldSize = lblWidth ? 12 - lblWidth : 12;
    const [hasFocus, setHasFocus ] = useState(false);
    const [displayValue, setDisplayValue ] = useState(value);
    const processValidation = (validators: any) => (val: any) => {
        // return validators && validators.reduce((err: any, validator: any) => err || validator(val), undefined);
        return validators && validators.reduce((errMsgs: any, validator: any) => {
            const errMsg = validator(val);
            return errMsg ? errMsgs ? errMsgs + ", " + errMsg : errMsg : errMsgs;
        }, undefined);
    }

    return (
        <Field name={name} validate={processValidation(validators)}>
            {({ input, meta }) => {
                const doFocus = (event: any) => {
                    console.log('doFocus', event);
                    setHasFocus(true);
                    event.target.value = input.value;
                    input.onFocus(event);
                }
                const doBlur = (event: any) => {
                    console.log('doBlur', event);
                    setHasFocus(false);
                    setDisplayValue('A' + input.value);

                    input.onBlur(event);
                }
                return (
                    <div>
                        {console.log(input, meta)}
                        <Form.Group as={Row} className="afw-form-input" controlId="formGroupEmail">
                            <Form.Label column sm={lblSize}>{label}</Form.Label>
                            <Col sm={fldSize}>
                                <InputGroup hasValidation>
                                    <Form.Control {...rest}
                                        name={input.name} 
                                        type='text' 
                                        placeholder={placeholder} 
                                        value={hasFocus ? input.value : displayValue}  
                                        onChange={input.onChange}
                                        onFocus={doFocus}
                                        onBlur={doBlur}
                                        className="p-2"
                                        style={{borderColor: meta.touched && meta.error ? 'red' : ''}} />
                                    <FormControl.Feedback className='errSpace' type={meta.touched && meta.error ? 'invalid' : 'valid'}>
                                        {meta.touched ? <span>{meta.error || <div>&nbsp;</div>}</span> : <span>{<div>&nbsp;</div>}</span>}
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

export default AfwFormCurrency;