import React from "react";
import {  Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'

import { selectStatus } from '../common-slice';

import { AfwModalProps } from './afw-modal.types';

import './afw-modal.scss';

const AfwModal = (props: AfwModalProps): any => {
    const {
        show,
        children,
        closeModal,
        dialogClassName
    } = props;

    // useSelector allows you to extract data from the Redux store state, using a selector function.
    const status = useSelector(selectStatus);

    // useDispatch returns a reference to the dispatch function from the Redux store
    const dispatch = useDispatch();

    const headerClassName = status === 'danger' ? 'bg-danger' : 'bg-success';
    const iconClassName = status === 'danger' ? 'bi bi-exclamation-triangle' : 'bi bi-info-circle'
    
    return (
        <Modal show={show} size={'lg'} dialogClassName={dialogClassName} centered>
            {closeModal && (
                <Modal.Header className={headerClassName} onHide={() => dispatch({ type: 'common/commonCloseModal'})} closeButton>
                    <i className={iconClassName}></i>&nbsp;
                    <h5>{status === 'danger' ? 'Error' : 'Info'}</h5>
                </Modal.Header>
            )}
            <Modal.Body>
                {children}
            </Modal.Body>
        </Modal>
    )
};

export default AfwModal; 