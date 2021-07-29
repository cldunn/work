import React from "react";
import { useParams } from 'react-router-dom'

import { Navbar, Form, Spinner, Alert, Modal } from 'react-bootstrap';
import { Tv, BoxArrowLeft } from "react-bootstrap-icons";

import { Button } from 'react-bootstrap';

import restService from "../rest-service";

import { useSelector, useDispatch } from 'react-redux'
import { selectIsLoading, selectShowAlert, selectAlertMessage, selectShowModal, selectModalMessage } from '../common/commonSlice';

import AfwModal from "../common/modal/afw-modal";
import Message from "../common/modal/message";

import './landing.scss';

const Landing: React.FC = (props: any)  => {
    const { demo } = useParams<{demo: string}>();
    const isLoading = useSelector(selectIsLoading);
    const showAlert = useSelector(selectShowAlert);
    const alertMessage = useSelector(selectAlertMessage);
    const showModal = useSelector(selectShowModal);
    const dispatch = useDispatch();

    const gotoDemos = (evt: any) => {
        evt.preventDefault();
        props.history.push(`/`);
    }

    const handleLogout = (evt: any) => {
        evt.preventDefault();
        props.history.push(`/login/${demo}`);
    }

    const triggerButton = (evt: any, action: any) => {
        switch(action) {
            case 'getLabelsData':
                restService.get('v1/simpleMvc/getLabelsData').then((res: any) => {
                    console.log('getLabelsData: ', res);
                });
                break;
            case 'getSucessMessage':
                restService.get('v1/simpleMvc/getSucessMessage').then((res: any) => {
                    console.log('getSucessMessage: ', res);
                });
                break;
            case 'getMessageKeyAsPathVar':
                restService.get('v1/simpleMvc/getMessageKeyAsPathVar/key.asPathVar').then((res: any) => {
                    console.log('getMessageKeyAsPathVar: ', res);
                });
                break;
            case 'getMessageWithArgAsParams':
                restService.get('v1/simpleMvc/getMessageWithArgAsParams', {
                    key: 'key.asParams',
                    arg: 'MyArg'
                }).then((res: any) => {
                    console.log('getMessageWithArgAsParams: ', res);
                });
                break;
            case 'getMessageKeyAsPathVarArgAsParam':
                restService.get('v1/simpleMvc/getMessageKeyAsPathVarArgAsParam/key.asPathVarAndAsParams', {
                    arg: 'MyArg'
                }).then((res: any) => {
                    console.log('getMessageKeyAsPathVarArgAsParam: ', res);
                });
                break;
            case 'getMessageWithKeyAndArgAsDto':
                restService.get('v1/simpleMvc/getMessageWithKeyAndArgAsDto', {
                    key: 'key.asGetDtoKeyAndArgs',
                    arg: 'MyArg'
                }).then((res: any) => {
                    console.log('getMessageWithKeyAndArgAsDto: ', res);
                });
                break;
            case 'postMessageWithKeyAsDto':
                restService.post('v1/simpleMvc/postMessageWithKeyAsDto', {
                    key: 'key.asPostDtoKey'
                }).then((res: any) => {
                    console.log('postMessageWithKeyAsDto: ', res);
                });
                break;
            case 'postThrowApplicationException':
                restService.post('v1/simpleMvc/postThrowApplicationException').then((res: any) => {
                    console.log('postThrowApplicationException: ', res);
                });
                break;
            case 'postThrowApplicationExceptionWithDetails':
                restService.post('v1/simpleMvc/postThrowApplicationExceptionWithDetails')
                .then((res: any) => {
                    console.log('postThrowApplicationExceptionWithDetails: ', res);
                })
                .catch((err:any) => {
                    console.log('postThrowApplicationExceptionWithDetails: ', err.response.data);
                });
                break;
            case 'postThrowRuntimeException':
                restService.post('v1/simpleMvc/postThrowRuntimeException')
                .then((res: any) => {
                    console.log('postThrowRuntimeException: ', res);
                })
                .catch((err:any) => {
                    console.log('postThrowRuntimeException: ', err);
                });
                break;
        }
    } 

    const closeAlert = () => {
        dispatch({ type: 'common/commonCloseAlert'});
    }

    const closeModal = () => {
        dispatch({ type: 'common/commonCloseModal'});
    }
    
    return (
        <div className='landing-container'>
            <Navbar bg="light" variant="light">
                <Form inline>
                    <div>
                        <Tv color="royalblue" size={48} onClick={gotoDemos} />
                        <BoxArrowLeft color="royalblue" size={48} onClick={handleLogout} />
                    </div>
                </Form>
            </Navbar>
            <div className="alert-div">
                <Alert variant='primary' show={showAlert} onClose={() => closeAlert()} dismissible>
                    {alertMessage}
                </Alert>
            </div>
            <div className="container">
                <div className="box center-placed stack-top" style={{display: isLoading ? 'flex' : 'none'}}>
                    {<Spinner animation="border"></Spinner>}
                </div>
                <div className="box center-placed">
                    <div>
                        <div className="center-filled">
                            <h2>Landing</h2>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="center-filled">
                                    <Button variant="primary" size="sm" onClick={(evt) => triggerButton(evt, 'getLabelsData')}>
                                        Execute getLabelsData
                                    </Button>
                                </div>
                                <div className="center-filled">
                                    <Button variant="primary" size="sm" onClick={(evt) => triggerButton(evt, 'getSucessMessage')}>
                                        Execute getSucessMessage
                                    </Button>
                                </div>
                                <div className="center-filled">
                                    <Button variant="primary" size="sm" onClick={(evt) => triggerButton(evt, 'getMessageKeyAsPathVar')}>
                                        Execute getMessageKeyAsPathVar
                                    </Button>
                                </div>
                                <div className="center-filled">
                                    <Button variant="primary" size="sm" onClick={(evt) => triggerButton(evt, 'getMessageWithArgAsParams')}>
                                        Execute getMessageWithArgAsParams
                                    </Button>
                                </div>
                                <div className="center-filled">
                                    <Button variant="primary" size="sm" onClick={(evt) => triggerButton(evt, 'getMessageKeyAsPathVarArgAsParam')}>
                                        Execute getMessageKeyAsPathVarArgAsParam
                                    </Button>
                                </div>
                            </div>
                            <div className="col">
                                <div className="center-filled">
                                    <Button variant="primary" size="sm" onClick={(evt) => triggerButton(evt, 'getMessageWithKeyAndArgAsDto')}>
                                        Execute getMessageWithKeyAndArgAsDto
                                    </Button>
                                </div>
                                <div className="center-filled">
                                    <Button variant="primary" size="sm" onClick={(evt) => triggerButton(evt, 'postMessageWithKeyAsDto')}>
                                        Execute postMessageWithKeyAsDto
                                    </Button>
                                </div>
                                <div className="center-filled">
                                    <Button variant="primary" size="sm" onClick={(evt) => triggerButton(evt, 'postThrowApplicationException')}>
                                        Execute postThrowApplicationException
                                    </Button>
                                </div>
                                <div className="center-filled">
                                    <Button variant="primary" size="sm" onClick={(evt) => triggerButton(evt, 'postThrowApplicationExceptionWithDetails')}>
                                        Execute postThrowApplicationExceptionWithDetails
                                    </Button>
                                </div>
                                <div className="center-filled">
                                    <Button variant="primary" size="sm" onClick={(evt) => triggerButton(evt, 'postThrowRuntimeException')}>
                                        Execute postThrowRuntimeException
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AfwModal show={showModal} dialogClassName={'danger'} closeModal={true}>
                <Message/>
            </AfwModal>
        </div>
    )
}

export default Landing; 