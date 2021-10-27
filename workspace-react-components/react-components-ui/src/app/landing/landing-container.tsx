import React, { useState, useContext, useEffect } from "react";

import {
    Link,
    Route,
    Switch
  } from 'react-router-dom'

import { useSelector } from 'react-redux'

// selector functions and a thunk
import { selectIsLoading, selectShowAlert, selectAlertMessage, selectShowModal, initApp } from '../common/response/common-slice';

import { Navbar, Form, OverlayTrigger, Tooltip, Spinner, Alert } from 'react-bootstrap';
import { Tv } from "react-bootstrap-icons";

import { useAppDispatch } from "../store";
import GlobalContext from '../common/global-content';
import AfwModal from "../common/response/modal/afw-modal";
import AfwMessage from "../common/response/modal/afw-message/afw-message";

import { ROOT_DEMOS } from '../../../environment';

import SplitPane from "react-split-pane";
import PageableGrid from "../grid/pageable-grid/pageable-grid-container";
import TreeGrid from "../grid/tree-grid-container";
import EditableGrid from "../grid/editable-grid-container";
import FixedColGrid from "../grid/fixed-col-grid-container";
import EditableForm from "../form/editable-form-container";
import TabStrip from "../layout/tab-strip-container";
import CardStack from "../layout/card-stack-container";

import './landing.scss';
import '../common/splitter/splitter.scss';

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

    useEffect(() => {
        async function initPage() {
            const data = await dispatch(initApp()).unwrap();
            gCtx.addI18n(data.i18n);
            setInit(true);
        }

        initPage();
    }, [gCtx, dispatch]);

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
                
				<SplitPane split="vertical" defaultSize="15%" allowResize={false}>
					<div>
                        <ul className="no-bullets">
                            <li key={'grid-pageable'}>
                                <Link to={'/landing/grid/pageable'}>{'Pageable Grid'}</Link>
                            </li>
                            <li key={'grid-edit'}>
                                <Link to={'/landing/grid/editable'}>{'Editable Grid'}</Link>
                            </li>
                            <li key={'grid-tree'}>
                                <Link to={'/landing/grid/tree'}>{'Tree Grid'}</Link>
                            </li>
                            <li key={'grid-fixed'}>
                                <Link to={'/landing/grid/fixed'}>{'Fixed Column Grid'}</Link>
                            </li>
                            <li key={'form-editable'}>
                                <Link to={'/landing/form/editable'}>{'Edtiable Form'}</Link>
                            </li>
                            <li key={'layout-tabs'}>
                                <Link to={'/landing/layout/tabs'}>{'Tab Strip Layout'}</Link>
                            </li>
                            <li key={'layout-cards'}>
                                <Link to={'/landing/layout/cards'}>{'Card Stack Layout'}</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Switch>
                            <Route path="/landing/grid/pageable" component={PageableGrid} />
                            <Route path="/landing/grid/editable" component={EditableGrid} />
                            <Route path="/landing/grid/tree" component={TreeGrid} />
                            <Route path="/landing/grid/fixed" component={FixedColGrid} />
                            <Route path="/landing/form/editable" component={EditableForm} />
                            <Route path="/landing/layout/tabs" component={TabStrip} />
                            <Route path="/landing/layout/cards" component={CardStack} />
                            <Route path="/landing" component={PageableGrid} />
                        </Switch>
                    </div>
				</SplitPane>
            </div>
            {/* 
                Will be opened via redux actions 'common/commonOpenModal' that is launched from the axios-intercptor 
                handling the response and must be closed manually.
            */}
            <AfwModal show={showModal} dialogClassName={'danger'} closeModal={true}>
                <AfwMessage/>
            </AfwModal>
        </div>
    ))
}

export default Landing; 