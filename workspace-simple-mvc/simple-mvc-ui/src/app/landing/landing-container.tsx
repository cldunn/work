import React, { useState, useContext, useCallback, useEffect } from "react";
import { useParams } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectIsLoading, selectShowAlert, selectAlertMessage, selectShowModal, initApp } from '../common/common-slice';

import { Navbar, Form, Spinner, Alert } from 'react-bootstrap';
import { Tv, BoxArrowLeft } from "react-bootstrap-icons";

import { useAppDispatch } from "../store";
import GlobalContext from '../common/global-content';
import AfwModal from "../common/modal/afw-modal";
import Message from "../common/modal/message";

import Home from "../home/home-container";

import './landing.scss';

const Landing: React.FC = (props: any)  => {
    const { demo } = useParams<{demo: string}>();
    const isLoading = useSelector(selectIsLoading);
    const showAlert = useSelector(selectShowAlert);
    const alertMessage = useSelector(selectAlertMessage);
    const showModal = useSelector(selectShowModal);
    const dispatch = useAppDispatch();

    const gCtx = useContext(GlobalContext);

    const [isInit, setInit] = useState(false);

    const closeAlert = () => {
        dispatch({type: 'common/commonCloseAlert'});
    }

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

    useEffect(() => {
        init();
    }, [init])

    return (isInit && (
        <div className='landing-container'>
            <Navbar bg="light" variant="light">
                <Form inline>
                    <div>
                        <a href="http://localhost:3000">
                            <Tv color="royalblue" size={48} />
                        </a>
                    </div>
                </Form>
            </Navbar>
            <div className="alert-div">
                {/* 
                    Will be opened and closed (using a timer) via redux actions 'common/commonOpenAlert' and 'common/commonCloseAlert' that are
                    launched from the axios-intercptor handling the request's response.  The Alert may also be closed manually.
                */}
                <Alert variant='primary' show={showAlert} onClose={() => closeAlert()} dismissible>
                    {alertMessage}
                </Alert>
            </div>
            <div className="container">
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
                handling the request's response and must be closed manually.
            */}
            <AfwModal show={showModal} dialogClassName={'danger'} closeModal={true}>
                <Message/>
            </AfwModal>
        </div>
    ))
}

export default Landing; 