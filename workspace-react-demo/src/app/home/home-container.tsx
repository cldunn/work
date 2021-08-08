import React, { useContext } from "react";
import { useSelector  } from 'react-redux'

import { Button } from 'react-bootstrap';

import restService from "../rest-service";
import store, { useAppDispatch } from "../store";
import { selectPerson, getPerson } from './homeSlice';
import GlobalContext from "../common/global-content";

import './home.scss';

const Home: React.FC = ()  => {
    const person = useSelector(selectPerson);
    const dispatch = useAppDispatch ();
    
    const gCtx = useContext(GlobalContext);
    
    const triggerButton = async (evt: any, action: any) => {
        switch(action) {
            case 'getPerson':
                try {
                    // will return the jsonResp.data via fulfilled action.payload
                    const resultAction = await dispatch(getPerson()).unwrap();
                    
                    // in order to access any changes in state immeadiately, must directly access store
                    // selectors will eventullay change and cause re-render, but not immeadiately
                    const currentPerson = store.getState().home.person;
                    
                    console.log('getPerson try: ', resultAction, currentPerson);
                }
                catch(err) {
                    console.error('getPerson catch: ', err)
                }
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

    return (
        <div className="home-container">
            <div className="center-filled">
                <h2>Simple-Mvc</h2>
            </div>
            <div className='person row' style={{visibility: person == null ? 'hidden' : 'visible'}}>
                <div className="n1 col">
                    {gCtx.getI18n('label.firstName')}: {person?.firstName}
                </div>
                <div className="n2 col">
                    {gCtx.getI18n('label.lastName')}: {person?.lastName}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="center-filled">
                        <Button variant="primary" size="sm" onClick={(evt) => triggerButton(evt, 'getPerson')}>
                            Execute getPerson
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
    )
}

export default Home; 