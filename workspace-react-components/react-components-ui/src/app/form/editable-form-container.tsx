import React from "react";
import { useSelector  } from 'react-redux'

import { Container, Col, Row, Button } from "react-bootstrap";

import SplitPane from "react-split-pane";
import '../common/splitter/splitter.scss';

import AfwForm from "../common/form/afw-form-container";
import AfwFormInput from "../common/form/afw-form-input-container";
import AfwFormSelect from "../common/form/afw-form-select-container";
import AfwFormCurrency from "../common/form/afw-form-currency-container";
import { required, minLen, isEmail, regEx } from "../common/form/afw-form-validators";

import store, { useAppDispatch } from "../store";
import { selectCriteria, selectForm, findRecord, saveRecord } from './editable-form-slice';

const EditableForm: React.FC = ()  => {
    // dispatch function from the Redux store derived from store with thunk access
    const dispatch = useAppDispatch ();

    const criteria = useSelector(selectCriteria);
    const form = useSelector(selectForm);

    const genderLvbs = [{
        lbl: 'Male',
        val: 'M'
    }, {
        lbl: 'Female',
        val: 'F'
    }];

    /*
    const [criteria, setCriteria] = useState({
        id: null
    });
    
    onChange = {(e: any) => { updateCriteria('name', e.target.value)}}
    const updateCriteria = ( e: any ) => {
        setCriteria((currentValues: any) => ({
            ...currentValues,
            [e.target.name]: e.target.value
        }))
    };
    */

    const onSearch = async(values: any) => {
        try {
            // will return the jsonResp.data via fulfilled action.payload
            await dispatch(findRecord({
                url: '/editable-form/findRecord/' + values.id || 0
            })).unwrap();
        }
        catch(err) {
            console.error('findRecord catch: ', err)
        }

    }
    
    const onSubmit = async (values: any) => {
        try {
            // will return the jsonResp.data via fulfilled action.payload
            const resultAction = await dispatch(saveRecord({
                url: '/editable-form/saveRecord',
                params: {
                    ...values
                }
            })).unwrap();
            
            // in order to access any changes in state immeadiately, must directly access store
            // selectors will eventullay change and cause re-render, but not immeadiately
            const savedForm = store.getState().editableForm.form;
            
            console.log('saveRecord try: ', resultAction, savedForm);
        }
        catch(err) {
            console.error('saveRecord catch: ', err)
        }
    };

    return (
        <SplitPane split="horizontal" minSize="50%" defaultSize="50%">
            <div className='fluid' style={{width:'100%'}}>
                <AfwForm formData={criteria} onSubmit={onSearch} >
                    <Container fluid>
                        <Row>
                            <Col xs={12} sm={6}>
                                <AfwFormInput name='id' type='number' label='ID' lblWidth='2' />
                            </Col>
                            <Col xs={12} sm={6}>
                                <Button variant="primary" type="submit">Search</Button>
                            </Col>
                        </Row>
                    </Container>
                </AfwForm>
                <hr/>
                <AfwForm formData={form} onSubmit={onSubmit} >
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
                                    options={genderLvbs} validators={[required()]} />
                            </Col>
                            <Col xs={12} sm={6}>
                                <AfwFormInput name='email' type='email' 
                                    label='Email' lblWidth='2' placeholder='Email' 
                                    validators={[required(), isEmail('Invalid email format')]} />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={6}>
                                <AfwFormCurrency name='currency' sym='&#x20AC;' grp='.' sep=',' pre='2'
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