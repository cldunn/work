import React from "react";
import '../common/splitter/splitter.scss';
import SplitPane from "react-split-pane";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AfwForm from "../common/form/afw-form-container";
import AfwFormInput from "../common/form/afw-form-input-container";
import AfwFormSelect from "../common/form/afw-form-select-container";
import AfwFormCurrency from "../common/form/afw-form-currency-container";
import { required, minLen, regEx } from "../common/form/afw-form-validators";

const EditableForm: React.FC = ()  => {
    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    const genderLvbs = [{
        lbl: 'Male',
        val: 'M'
    }, {
        lbl: 'Female',
        val: 'F'
    }];

    const onSubmit = async (values: any) => {
        await sleep(300);
        window.alert(JSON.stringify(values, undefined, 2));
    };

    return (
        <SplitPane split="horizontal" minSize="50%" defaultSize="50%">
            <div className='fluid' style={{width:'100%'}}>
                <AfwForm formData={{ name: 'Clifford', gender: 'F' }} onSubmit={onSubmit} >
                    <Container fluid>
                        <Row>
                            <Col xs={12} sm={6}>
                                <AfwFormInput name='name' type='text'
                                    label='Name' lblWidth='2' placeholder='Name' 
                                    disabled={true} validators={[required(), minLen(7), regEx(/^C/)]} />
                            </Col>
                            <Col xs={12} sm={6}>
                                <AfwFormInput name='password' type='password' 
                                    label='Password' lblWidth='2' placeholder='Password' 
                                    validators={[required(), minLen(9)]} />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={6}>
                                <AfwFormSelect name='gender' value='M'
                                    label='Gender' lblWidth='2' placeholder='Gender' 
                                    disabled={true} options={genderLvbs} validators={[required()]} />
                            </Col>
                            <Col xs={12} sm={6}>
                                <AfwFormInput name='email' type='email' 
                                    label='Email' lblWidth='2' placeholder='Email' 
                                    validators={[required(), minLen(12)]} />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={6}>
                                <AfwFormCurrency name='currency' value=''
                                    label='Currency' lblWidth='2' placeholder='Currency' 
                                    validators={[required()]} />
                            </Col>
                            <Col xs={12} sm={6}>
                                <AfwFormInput name='date' type='date'
                                    label='Date' lblWidth='2' placeholder='Date' 
                                    validators={[required()]} />
                            </Col>
                        </Row>
                    </Container>
                    <Button variant="primary" type="submit">Submit</Button>
                </AfwForm>
            </div>
            <div>Editable Form Desciprtion</div>
        </SplitPane>
    )
}

export default EditableForm;