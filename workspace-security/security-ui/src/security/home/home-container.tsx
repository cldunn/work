import React, { useState, useRef, useEffect, useContext, ChangeEvent } from "react";
import { useSelector } from 'react-redux';

import { useHistory } from "react-router-dom";

import { Container, Col, Row, Button } from "react-bootstrap";

import { useAppDispatch } from "../store";
import restService from '../rest-service';
import { AfwModal, AfwForm, AfwFormInput, AfwFormSelect, required, GlobalContext, IGlobalContext } from "afw-components";

// selector functions and a thunk
import { selectIsLoading } from '../common-slice';
import { getPageConfig, getPerson, getPersons, updPerson, selectForm } from './home-slice';

import './home.scss';

const HomeContainer = (): JSX.Element => {
    const history = useHistory();

    // useSelector allows you to extract data from the Redux store state, using a selector function.
    const isLoading = useSelector(selectIsLoading);
    const form = useSelector(selectForm);

    // dispatch function from the Redux store derived from store with thunk access
    const dispatch = useAppDispatch();

    // useContext accepts a context object (returned from React.createContext) 
    // and returns the current context value for that context.
    const gCtx: typeof IGlobalContext = useContext(GlobalContext);

    // useState returns a stateful value, and a function to update it. 
    // Flag indicating module is initialized and ready to render 
    const [isInit, setInit] = useState(false);
    // gender lvbs
    const [genderLvbs, setGenderLvbs] = useState(null);

    // Flag indicating whether to show logout warning popup
    const [showPopup, setShowPopup] = useState(false);
    // String representing time left till auto logout
    const [timeDisplay, setTimeDisplay] = useState(null);

    const [formValues, setFormValues] = useState(form);
    const updateFormValues = (fieldId: string, fieldValue: any): void => {
        setFormValues((prevState: any) => ({
            ...prevState,
            [fieldId]: fieldValue
        }));
    };

    const pollerTimeout = useRef(null);
    const popupInterval = useRef(null);
    
    const POLLER_TIMEOUT = 12 * 60;
    const POPUP_INTERVAL = 2 * 60;
    
    const handleLogout = () => {
        removeTimers();
        setShowPopup(false);
        sessionStorage.removeItem("Authorization");
        history.push(`/landing`);

        console.log('handleLogout');
    }

    const remainingTime = (secLeft: number) => {
        const h = Math.floor(secLeft / 3600);
        const m = Math.floor((secLeft % 3600) / 60);
        const s = Math.floor((secLeft % 3600) % 60);
        return `${('0' + h).slice(-2)}:${('0' + m).slice(-2)}:${('0' + s).slice(-2)}`;
    }

    const removeTimers = () => {
        if (popupInterval) {
            clearInterval(popupInterval.current);
            popupInterval.current = null;
        }
        
        if (pollerTimeout) {
            clearTimeout(pollerTimeout.current);
            pollerTimeout.current = null;
        }
    }

    const initPopup = () => {
        if (popupInterval && popupInterval.current) {
            return;
        }
        console.log('initPopup');
        setTimeDisplay(remainingTime(POPUP_INTERVAL));
        let secLeft = POPUP_INTERVAL;
        setShowPopup(true);

        popupInterval.current = setInterval(() => {
            if (secLeft > 0) {
                secLeft--;
                setTimeDisplay(remainingTime(secLeft));
            }
            else {
                handleLogout();
            }
        }, 1000);
    }

    const initPoller = () => {
        removeTimers();
        setShowPopup(false);
        
        pollerTimeout.current = setTimeout(() => {
            initPopup();
        }, POLLER_TIMEOUT * 1000);
    }

    useEffect(() => {
        initPoller();
    }, [isLoading]);

    useEffect(() => {
        const pageConfig = async function initPage() {
            const data = await dispatch(getPageConfig({
                url: '/home/pageConfig'
            })).unwrap();
            setGenderLvbs(data.lvbMap.gender)
            gCtx.addI18n(data.i18n);
            setInit(true);
        }

        pageConfig();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setFormValues(form);
    }, [form]);

    const doGetPerson = async () => {
        console.log('form: ', form);
        const data = await dispatch(getPerson({
            url: '/home/getPerson/1'
        })).unwrap();
    }

    const doGetPersons = async () => {
        console.log('form: ', form);
        const data = await dispatch(getPersons({
            url: '/home/getPersons',
            params: {
                fname: formValues.fname,
                lname: formValues.lname
            }
        })).unwrap();
    }

    const doUpdPersons = async () => {
        const data = await dispatch(updPerson({
            url: '/home/updPerson',
            params: {
                fname: formValues.fname,
                lname: formValues.lname,
                gender: formValues.gender
            }
        })).unwrap();
    }

    const onTest = () => {
        restService.post('/doTest');
    }

    const doOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
        updateFormValues(e.target.id, e.target.value);
    }

    return (
        <>
            {isInit && 
                <div className="center">
                    <Container className="home-form-container">
                        <div>
                            <Row>
                                <Col xs={12} style={{textAlign: 'center'}}>
                                    <h1><b>{gCtx.getI18n('home.heading')}</b></h1>
                                </Col>
                            </Row>
                            <div style={{marginBottom: "20px"}} />
                            <Row>
                                <AfwForm formData={formValues} onSubmit={onTest} >
                                    <Col xs={6} style={{display: 'inline-block'}}>
                                        <AfwFormInput id='fname' name='fname' type='text' value={formValues.fname} 
                                        label='First Name' placeholder='First Name' validators={[required()]}
                                        onChange={doOnChange} />
                                    </Col>
                                    <Col xs={6} style={{display: 'inline-block'}}>
                                        <AfwFormInput id='lname' name='lname' type='text' value={formValues.lname} 
                                        label='Last Name' placeholder='Last Name' validators={[required()]} 
                                        onChange={(e: ChangeEvent<HTMLInputElement>): void => {
                                            updateFormValues(e.target.id, e.target.value);
                                        }} />
                                    </Col>
                                    <Col xs={12}>
                                        <AfwFormSelect id='gender' name='gender' value={formValues.gender} options={genderLvbs}
                                        label='Gender' placeholder='Gender' validators={[required()]}
                                        onChange={(e: ChangeEvent<HTMLInputElement>): void => {
                                            updateFormValues(e.target.id, e.target.value);
                                        }} />
                                    </Col>
                                </AfwForm>    
                            </Row>
                            <div style={{marginBottom: "20px"}} />
                            <Row>
                                <Col xs={12}>
                                    <Button className="btn-width" variant="primary" type="button" onClick={() => {
                                        doGetPerson();
                                    }}>Get Person</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <Button className="btn-width" variant="primary" type="button" onClick={() => {
                                        doGetPersons();
                                    }}>Get Persons</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <Button className="btn-width" variant="primary" type="button" onClick={() => {
                                        doUpdPersons();
                                    }}>Update Person</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <Button className="btn-width" variant="primary" type="button" onClick={() => {
                                        handleLogout();
                                    }}>Logout</Button>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            }
            <AfwModal dialogClassName={'warn'} show={showPopup} closeModal={false}>
                <div className="full flex-container">
                    <div className="flex-contained">
                        <div className="container">
                            <div className="box center-placed">
                                <div>Time remaining until logout:{timeDisplay}</div>
                            </div>
                        </div>
                    </div>
                    <div style={{width: "100%", textAlign: "center"}}>
                        <Button type="button" variant="primary" style={{width: "30%", margin: "0px 5px"}} onClick={() => {initPoller()}}>
                            Continue
                        </Button>
                        <Button style={{width: "30%", margin: "0px 5px"}} variant="primary" type="button" onClick={() => {handleLogout()}}>
                            Logout
                        </Button>
                    </div>
                </div>
            </AfwModal>
        </>
    )
}

export default HomeContainer;