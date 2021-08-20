import React, { useContext } from "react";
import { useSelector  } from 'react-redux'

import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap';

import store, { useAppDispatch } from "../store";
import { selectPresident, findWashington, findAdams, findJefferson, findLincoln, findWilson, 
         findTruman, findEisenhower, findKennedy, findJohnson, findReagan } from './home-slice';
import GlobalContext from "../common/global-content";

import './home.scss';

const Home: React.FC = ()  => {
    const president = useSelector(selectPresident);
    const dispatch = useAppDispatch ();
    
    const gCtx = useContext(GlobalContext);
    
    
    const triggerButton = async (evt: any, action: any) => {
        switch(action) {
            // Passes in no parameters, 
            // returns simple message triggering UI alert, returns data and status OK 
            case 'noParams':
                try {
                    // will return the jsonResp.data via fulfilled action.payload
                    const resultAction = await dispatch(findWashington({
                        url: 'v1/simpleMvc/findWashington'
                    })).unwrap();
                    
                    // in order to access any changes in state immeadiately, must directly access store
                    // selectors will eventullay change and cause re-render, but not immeadiately
                    const selectedPresident = store.getState().home.president;
                    
                    console.log('findWashington try: ', resultAction, selectedPresident);
                }
                catch(err) {
                    console.error('findWashington catch: ', err)
                }
                break;
            // Passes path variable parameter, 
            // returns simple message triggering UI alert, returns data and status OK 
            case 'pathVar': 
                try {
                    // will return the jsonResp.data via fulfilled action.payload
                    const resultAction = await dispatch(findAdams({
                        url: 'v1/simpleMvc/findAdams/2'
                    })).unwrap();
                    
                    // in order to access any changes in state immeadiately, must directly access store
                    // selectors will eventullay change and cause re-render, but not immeadiately
                    const selectedPresident = store.getState().home.president;
                    
                    console.log('findAdams try: ', resultAction, selectedPresident);
                }
                catch(err) {
                    console.error('findAdams catch: ', err)
                }
                break;
            // Passes in query string parameter, 
            // returns detailed message triggering UI modal, returns data and status OK 
            case 'qryStr':  
                try {
                    // will return the jsonResp.data via fulfilled action.payload
                    const resultAction = await dispatch(findJefferson({
                        url: 'v1/simpleMvc/findJefferson',
                        params: {
                            year: 1801
                        }
                    })).unwrap();
                    
                    // in order to access any changes in state immeadiately, must directly access store
                    // selectors will eventullay change and cause re-render, but not immeadiately
                    const selectedPresident = store.getState().home.president;
                    
                    console.log('findJefferson try: ', resultAction, selectedPresident);
                }
                catch(err) {
                    console.error('findJefferson catch: ', err);
                }
                break;
            // Passes in path variable and query string parameter, 
            // returns simple message triggering UI modal, returns data and status UNAUTHORIZED 
            case 'pathVarAndQryStr': 
                try {
                    // will return the jsonResp.data via fulfilled action.payload
                    const resultAction = await dispatch(findLincoln({
                        url: 'v1/simpleMvc/findLincoln/4',
                        params: {
                            year: 1861
                        }
                    })).unwrap();
                    
                    // in order to access any changes in state immeadiately, must directly access store
                    // selectors will eventullay change and cause re-render, but not immeadiately
                    const selectedPresident = store.getState().home.president;
                    
                    console.log('findLincoln try: ', resultAction, selectedPresident);
                }
                catch(err) {
                    console.error('findLincoln catch: ', err);
                }
                break;
            // Passes in query string parameter into dto, 
            // returns detailed message triggering UI modal, returns data and status UNAUTHORIZED 
            case 'qryStrDto': 
                try {
                    // will return the jsonResp.data via fulfilled action.payload
                    const resultAction = await dispatch(findWilson({
                        url: 'v1/simpleMvc/findWilson',
                        params: {
                            year: 1913
                        }
                    })).unwrap();
                    
                    // in order to access any changes in state immeadiately, must directly access store
                    // selectors will eventullay change and cause re-render, but not immeadiately
                    const selectedPresident = store.getState().home.president;
                    
                    console.log('findWilson try: ', resultAction, selectedPresident);
                }
                catch(err) {
                    console.error('findWilson catch: ', err);
                }
                break;
            // Passes in path variable and query string parameter into dto, 
            // throws application exception with simple message triggering UI alert, 
            // returns data and status OK 
            case 'pathVarAndQryStrDto': 
                try {
                    // will return the jsonResp.data via fulfilled action.payload
                    const resultAction = await dispatch(findTruman({
                        url: 'v1/simpleMvc/findTruman/6',
                        params: {
                            year: 1945
                        }
                    })).unwrap();
                    
                    // in order to access any changes in state immeadiately, must directly access store
                    // selectors will eventullay change and cause re-render, but not immeadiately
                    const selectedPresident = store.getState().home.president;
                    
                    console.log('findTruman try: ', resultAction, selectedPresident);
                }
                catch(err) {
                    console.error('findTruman catch: ', err);
                }
                break;
            // Passes body parameter, 
            // throws application exception with detail message triggering UI modal, 
            // returns data and status OK 
            case 'body':  
                try {
                    // will return the jsonResp.data via fulfilled action.payload
                    const resultAction = await dispatch(findEisenhower({
                        url: 'v1/simpleMvc/findEisenhower',
                        params: {
                            year: 1953
                        }
                    })).unwrap();
                    
                    // in order to access any changes in state immeadiately, must directly access store
                    // selectors will eventullay change and cause re-render, but not immeadiately
                    const selectedPresident = store.getState().home.president;
                    
                    console.log('findEisenhower try: ', resultAction, selectedPresident);
                }
                catch(err) {
                    console.error('findEisenhower catch: ', err);
                }
                break;
            // Passes path variable and body parameter, 
            // throws application exception with simple message triggering UI modal, 
            // returns data and status UNAUTHORIZED 
            case 'pathVarAndBody':  
                try {
                    // will return the jsonResp.data via fulfilled action.payload
                    const resultAction = await dispatch(findKennedy({
                        url: 'v1/simpleMvc/findKennedy/8',
                        params: {
                            year: 1961
                        }
                    })).unwrap();
                    
                    // in order to access any changes in state immeadiately, must directly access store
                    // selectors will eventullay change and cause re-render, but not immeadiately
                    const selectedPresident = store.getState().home.president;
                    
                    console.log('findKennedy try: ', resultAction, selectedPresident);
                }
                catch(err) {
                    console.error('findKennedy catch: ', err);
                }
                break;
            // Passes body parameter into dto, 
            // throws application exception with detail message triggering UI modal, 
            // returns data and status UNAUTHORIZED 
            case 'bodyDto':
                try {
                    // will return the jsonResp.data via fulfilled action.payload
                    const resultAction = await dispatch(findJohnson({
                        url: 'v1/simpleMvc/findJohnson',
                        params: {
                            year: 1963
                        }
                    })).unwrap();
                    
                    // in order to access any changes in state immeadiately, must directly access store
                    // selectors will eventullay change and cause re-render, but not immeadiately
                    const selectedPresident = store.getState().home.president;
                    
                    console.log('findJohnson try: ', resultAction, selectedPresident);
                }
                catch(err) {
                    console.error('findJohnson catch: ', err);
                }
                break;
            // Passes path variable and body parameter into dto, 
            // throws null pointer exception with simple message triggering UI modal, 
            // returns no data and status INTERNAL_SERVER_ERROR
            case 'pathVarAndBodyDto':
                try {
                    // will return the jsonResp.data via fulfilled action.payload
                    const resultAction = await dispatch(findReagan({
                        url: 'v1/simpleMvc/findReagan/10',
                        params: {
                            year: 1981
                        }
                    })).unwrap();
                    
                    // in order to access any changes in state immeadiately, must directly access store
                    // selectors will eventullay change and cause re-render, but not immeadiately
                    const selectedPresident = store.getState().home.president;
                    
                    console.log('findReagan try: ', resultAction, selectedPresident);
                }
                catch(err) {
                    console.error('findReagan catch: ', err);
                }
                break;
        }
    } 

    return (
        <div className="home-container">
            <div className="center-filled">
                <h2>Simple-Mvc</h2>
            </div>
            <div className='person row' style={{visibility: president == null ? 'hidden' : 'visible'}}>
                <div className="n1 col">
                    {gCtx.getI18n('lbl.firstName')}: {president?.firstName}
                </div>
                <div className="n2 col">
                    {gCtx.getI18n('lbl.lastName')}: {president?.lastName}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="center-filled">
                        <OverlayTrigger placement="left" trigger="hover" overlay={<Tooltip id={`tooltip-washinton`}>{gCtx.getI18n('msg.washington')}</Tooltip>}>
                            <Button variant="primary" size="sm" onClick={(evt) => triggerButton(evt, 'noParams')}>
                                {gCtx.getI18n('btn.washington')}
                            </Button>
                        </OverlayTrigger>
                    </div>
                    <div className="center-filled">
                        <OverlayTrigger placement="left" trigger="hover" overlay={<Tooltip id={`tooltip-adams`}>{gCtx.getI18n('msg.adams')}</Tooltip>}>
                            <Button variant="primary" size="sm" onClick={(evt) => triggerButton(evt, 'pathVar')}>
                                {gCtx.getI18n('btn.adams')}
                            </Button>
                        </OverlayTrigger>
                    </div>
                    <div className="center-filled">
                        <OverlayTrigger placement="left" trigger="hover" overlay={<Tooltip id={`tooltip-jefferson`}>{gCtx.getI18n('msg.jefferson')}</Tooltip>}>
                            <Button variant="primary" size="sm" onClick={(evt) => triggerButton(evt, 'qryStr')}>
                                {gCtx.getI18n('btn.jefferson')}
                            </Button>
                        </OverlayTrigger>
                    </div>
                    <div className="center-filled">
                        <OverlayTrigger placement="left" trigger="hover" overlay={<Tooltip id={`tooltip-lincoln`}>{gCtx.getI18n('msg.lincoln')}</Tooltip>}>
                            <Button variant="primary" size="sm" onClick={(evt) => triggerButton(evt, 'pathVarAndQryStr')}>
                                {gCtx.getI18n('btn.lincoln')}
                            </Button>
                        </OverlayTrigger>
                    </div>
                    <div className="center-filled">
                        <OverlayTrigger placement="left" trigger="hover" overlay={<Tooltip id={`tooltip-wilson`}>{gCtx.getI18n('msg.wilson')}</Tooltip>}>
                            <Button variant="primary" size="sm" onClick={(evt) => triggerButton(evt, 'qryStrDto')}>
                                {gCtx.getI18n('btn.wilson')}
                            </Button>
                        </OverlayTrigger>
                    </div>
                </div>
                <div className="col">
                    <div className="center-filled">
                        <OverlayTrigger placement="right" overlay={<Tooltip id={`tooltip-truman`}>{gCtx.getI18n('msg.truman')}</Tooltip>}>
                            <Button variant="primary" size="sm" onClick={(evt) => triggerButton(evt, 'pathVarAndQryStrDto')}>
                                {gCtx.getI18n('btn.truman')}
                            </Button>
                        </OverlayTrigger>
                    </div>
                    <div className="center-filled">
                        <OverlayTrigger placement="right" trigger="hover" overlay={<Tooltip id={`tooltip-eisenhower`}>{gCtx.getI18n('msg.eisenhower')}</Tooltip>}>
                            <Button variant="primary" size="sm" onClick={(evt) => triggerButton(evt, 'body')}>
                                {gCtx.getI18n('btn.eisenhower')}
                            </Button>
                        </OverlayTrigger>
                    </div>
                    <div className="center-filled">
                        <OverlayTrigger placement="right" trigger="hover" overlay={<Tooltip id={`tooltip-kennedy`}>{gCtx.getI18n('msg.kennedy')}</Tooltip>}>
                            <Button variant="primary" size="sm" onClick={(evt) => triggerButton(evt, 'pathVarAndBody')}>
                                {gCtx.getI18n('btn.kennedy')}
                            </Button>
                        </OverlayTrigger>
                    </div>
                    <div className="center-filled">
                        <OverlayTrigger placement="right" trigger="hover" overlay={<Tooltip id={`tooltip-johnson`}>{gCtx.getI18n('msg.johnson')}</Tooltip>}>
                            <Button variant="primary" size="sm" onClick={(evt) => triggerButton(evt, 'bodyDto')}>
                                {gCtx.getI18n('btn.johnson')}
                            </Button>
                        </OverlayTrigger>
                    </div>
                    <div className="center-filled">
                        <OverlayTrigger placement="right" trigger="hover" overlay={<Tooltip id={`tooltip-reagan`}>{gCtx.getI18n('msg.reagan')}</Tooltip>}>
                            <Button variant="primary" size="sm" onClick={(evt) => triggerButton(evt, 'pathVarAndBodyDto')}>
                                {gCtx.getI18n('btn.reagan')}
                            </Button>
                        </OverlayTrigger>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home; 