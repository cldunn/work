import React, { useState, useContext, useCallback, useEffect } from "react";

import { useSelector } from 'react-redux'

// selector functions and a thunk
import { selectIsLoading, selectShowAlert, selectAlertMessage, selectShowModal, initApp } from '../common/common-slice';

import { Navbar, Form, OverlayTrigger, Tooltip, Spinner, Alert } from 'react-bootstrap';
import { Tv } from "react-bootstrap-icons";

import { useAppDispatch } from "../store";
import GlobalContext from '../common/global-content';
import AfwModal from "../common/modal/afw-modal";
import Message from "../common/modal/message";

import Home from "../home/home-container";

import { ROOT_DEMOS } from '../../../environment';

import './landing.scss';

const Landing: React.FC = ()  => {
    // useSelector allows you to extract data from the Redux store state, using a selector function.
    const isLoading = useSelector(selectIsLoading);
    const showAlert = useSelector(selectShowAlert);
    const alertMessage = useSelector(selectAlertMessage);
    const showModal = useSelector(selectShowModal);

    // dispatch function from the Redux store derived from store with thunk access
    const dispatch = useAppDispatch();

    // useContext accepts a context object (returned from React.createContext) 
    // and returns the current context value for that context.
    const gCtx = useContext(GlobalContext);

    // useState returns a stateful value, and a function to update it. 
    // Flag indicating module is initialized and ready to render 
    const [isInit, setInit] = useState(false);

    const closeAlert = () => {
        dispatch({type: 'common/commonCloseAlert'});
    }

    // useCallback return a memoized callback that only changes if a dependency has changed
    // memoized - returning cached result when the same inputs occur again
    // Similar idea to angular's ng-init
    const init = useCallback(async () => {
        try {
            if (!isInit) {
                const data = await dispatch(initApp()).unwrap();
                gCtx.addI18n(data.i18n);
                setInit(true);
            }
        }
        catch(err) {
            console.error('initApp catch: ', err);
        }
    }, [isInit, gCtx, dispatch])

    // useEffect will run init function upon render and upon any change to init
    useEffect(() => {
        init();
    }, [init])

    return (isInit && (
        <div className='landing-container'>
            <Navbar bg="light" variant="light">
                <Form inline>
                    <div>
                        {/*
                            Will display tooltip over icon anchor as defined by overlay attribute positioned  at placement attibute
                            The tooltip overlay will be triggered by trigger attribute (hover), default [hover, focus] changed due to 
                            Modal stealing focus and leaving tooltip open, restore if using mobile device.
                        */}
                        <OverlayTrigger placement="left" trigger="hover" overlay={<Tooltip id={`tooltip-demos`}>{gCtx.getI18n('msg.demos')}</Tooltip>}>
                            <a href={ROOT_DEMOS}>
                                <Tv color="royalblue" size={48} />
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
            <div className="container">
                {/*
                	Wrap spinner in div, then display div based upon boolean redux selector. 
	                In axios-interceptor, display spinner upon request via dispatch(commonIsLoading(true)), hide spinner upon response via dispatch(commonIsLoading(false))
                */}
                <div className="box center-placed stack-top" style={{display: isLoading ? 'flex' : 'none'}}>
                    {<Spinner animation="border"></Spinner>}
                </div>
                <div className="box center-placed">
                    <div style={{width: '50%'}}>
                        <Home />
                    </div>
                </div>
            </div>
            {/* 
                Will be opened via redux actions 'common/commonOpenModal' that is launched from the axios-intercptor 
                handling the response and must be closed manually.
            */}
            <AfwModal show={showModal} dialogClassName={'danger'} closeModal={true}>
                <Message/>
            </AfwModal>
        </div>
    ))
}

export default Landing; 