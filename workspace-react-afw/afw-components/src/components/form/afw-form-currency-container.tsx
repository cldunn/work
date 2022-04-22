import React, {useState} from "react";
import { Field } from "react-final-form";

import {Form, Row, Col, InputGroup, FormControl} from 'react-bootstrap'

import './afw-form-input.scss';

export const AfwFormCurrency: React.FC<any> = (props: any)  => {
    const { name, label, lblWidth, placeholder, value, validators, ...rest } = props;

    const lblSize = lblWidth ? lblWidth - 0 : -1;
    const fldSize = lblWidth ? 12 - lblWidth : 12;
    const [hasFocus, setHasFocus ] = useState(false);
    
    const processValidation = (validators: any) => (val: any) => {
        return validators && validators.reduce((errMsgs: any, validator: any) => {
            const errMsg = validator(val);
            return errMsg ? errMsgs ? errMsgs + ", " + errMsg : errMsg : errMsgs;
        }, undefined);
    }

    return (
        <Field name={name} validate={processValidation(validators)}>
            {({ input, meta }) => {
                const doFocus = (event: any) => {
                    event.target.value = input.value;
                    
                    setTimeout(() => event.target.select(), 0);
                    setHasFocus(true);

                    input.onFocus(event);
                }
                const doKeyPress = (event: any) => {
                    const posAt = event.target.selectionStart;
                    const newValue = input.value.slice(0, posAt) + event.key + input.value.slice(posAt);
                    const regex = new RegExp("^\\d+(\\" + props.sep + "(\\d{0," + props.pre + "})?)?$");

                    if (!isTextSelected(event.target) && !regex.test(newValue)) {
                        event.preventDefault();
                    }
                }
                const doBlur = (event: any) => {
                    setHasFocus(false);

                    input.onBlur(event);
                }
                function isTextSelected(target: any) {
                    return target.value.length > 0 && target.selectionStart == 0 && target.selectionEnd == target.value.length;
                }
                const formatCurrency = (value: any) => {
                    const parts = value.split(props.sep);
                    
                    let wholeNbr = '';
                    parts[0] = parts[0].length >  0 ? parseInt(parts[0], 10) + '' : '';
                    parts[0].split("").reverse().forEach((nbr:any, ndx: any) => {
                        wholeNbr = ndx > 0 && ndx % 3 === 0 ? nbr + props.grp + wholeNbr : nbr + wholeNbr
                    });
            
                    let fracNbr = '';
                    if (wholeNbr.length > 0) {
                        const decParts = parts.length > 1 ? parts[1] : '00';
                        for (let i = 0; i < props.pre; i++) {
                            fracNbr += (i + 1 > decParts.split("").length) ? 0 : decParts.split("")[i];
                        }
            
                        input.onChange(parts[0] + props.sep + fracNbr);
                        return wholeNbr + props.sep + fracNbr;
                    }
            
                    return '';
                }
            
                return (
                    <div>
                        {console.log(input, meta)}
                        <Form.Group as={Row} className="afw-form-input" controlId="formGroupEmail">
                            <Form.Label column sm={lblSize}>{label}</Form.Label>
                            <Col sm={fldSize}>
                                <InputGroup hasValidation>
                                    <InputGroup.Text>{props.sym}</InputGroup.Text>
                                    <Form.Control {...rest}
                                        name={input.name} 
                                        type='text' 
                                        placeholder={placeholder} 
                                        value={hasFocus ? input.value : formatCurrency(input.value)}  
                                        onChange={input.onChange}
                                        onKeyPress={doKeyPress}
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

AfwFormCurrency.defaultProps = {
    sym: "$",
    grp: ",",
    sep: ".",
    pre: 2
}
