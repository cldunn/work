import React, { useState, useContext, useEffect } from "react";

import {
    Route,
    Switch
  } from 'react-router-dom'

import { useSelector } from 'react-redux'

// selector functions and a thunk
import { selectIsLoading, selectShowAlert, selectAlertMessage, selectShowModal, selectStatus, selectModalMessage, initApp } from '../common-slice';

import { Navbar, Form, OverlayTrigger, Tooltip, Spinner, Alert } from 'react-bootstrap';
import { Tv } from "react-bootstrap-icons";

import { useAppDispatch } from "../store";

import { AfwModal, AfwMessage, GlobalContext, IGlobalContext } from "afw-components";

import { ROOT_DEMOS } from '../../../environment';

// import SplitPane from "react-split-pane";
import LoginContainer from "../login/login-container";
import HomeContainer from "../home/home-container";

import './landing.scss';

const Landing: React.FC = ()  => {
    // useSelector allows you to extract data from the Redux store state, using a selector function.
    const isLoading = useSelector(selectIsLoading);
    const showAlert:boolean = useSelector(selectShowAlert);
    const alertMessage = useSelector(selectAlertMessage);
    const showModal = useSelector(selectShowModal);
    const status = useSelector(selectStatus);
    const msg = useSelector(selectModalMessage);

    // dispatch function from the Redux store derived from store with thunk access
    const dispatch = useAppDispatch();

    // useContext accepts a context object (returned from React.createContext) 
    // and returns the current context value for that context.
    const gCtx: typeof IGlobalContext = useContext(GlobalContext);
    

    // useState returns a stateful value, and a function to update it. 
    // Flag indicating module is initialized and ready to render 
    const [isInit, setInit] = useState(false);

    const doHide = () => {
        dispatch({ type: 'common/commonCloseModal'});
    }

    const closeAlert = () => {
        dispatch({type: 'common/commonCloseAlert'});
    }

    useEffect(() => {
        const pageConfig = async function initPage() {
            const data = await dispatch(initApp()).unwrap();
            gCtx.addI18n(data.i18n);
            setInit(true);
        }

        pageConfig();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (isInit && (
        <div className='landing-container'>
            <Navbar bg="light" variant="light">
                <Form>
                    <div className="header">
                        {/*
                            Will display tooltip over icon anchor as defined by overlay attribute positioned  at placement attibute
                            The tooltip overlay will be triggered by trigger attribute (hover), default [hover, focus] changed due to 
                            Modal stealing focus and leaving tooltip open, restore if using mobile device.
                        */}
                        <OverlayTrigger placement="left" overlay={<Tooltip id={`tooltip-demos`}>{gCtx.getI18n('msg.demos')}</Tooltip>}>
                            <a href={ROOT_DEMOS}>
                                <Tv color="royalblue" size={24} />
                            </a>
                        </OverlayTrigger>
                    </div>
                </Form>
            </Navbar>
            <div className="alert-div">
                {/* 
                    Will be opened via axios-interceptor handling the response by using redux actions 'common/commonOpenAlert',  and closed (using a timer) 
                    via redux actions 'common/commonCloseAlert'.  The Alert may also be closed manually.
                */}
                <Alert variant='primary' show={showAlert} onClose={() => closeAlert()} dismissible>
                    {alertMessage}
                </Alert>
            </div>
			
            <div className="container-fluid container-body">
                {/*
                	Wrap spinner in div, then display div based upon boolean redux selector. 
	                In axios-interceptor, display spinner upon request via dispatch(commonIsLoading(true)), hide spinner upon response via dispatch(commonIsLoading(false))
                */}
                <div className="box center-placed stack-top" style={{display: isLoading ? 'flex' : 'none'}}>
                    {<Spinner animation="border"></Spinner>}
                </div>
                
                <Switch>
                    <Route path="/landing/home" component={HomeContainer} />
                    <Route path="/landing" component={LoginContainer} />
                </Switch>

            </div>

            {/* 
                Will be opened via redux actions 'common/commonOpenModal' that is launched from the axios-intercptor 
                handling the response and must be closed manually.
            */}
            <AfwModal dialogClassName={'danger'} show={showModal} status={status} doHide={doHide} closeModal={true}>
                <AfwMessage showModal={showModal} msg={msg} />
            </AfwModal>
        </div>
    ))
}

export default Landing; 