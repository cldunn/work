import React from "react";

import { useSelector, useDispatch } from 'react-redux'
import { selectShowModal, selectModalMessage } from '../commonSlice';

import './message.scss';

const Message: React.FC = (props: any)  => {
    const showModal = useSelector(selectShowModal);
    const msg = useSelector(selectModalMessage);
    const dispatch = useDispatch();

    return (
        <>
            {showModal && msg.details.length == 0 && (
                <div className="container">
                    <div className="box center-placed">
                        <div>{msg.content}</div>
                    </div>
                </div>
                
            )}
            {showModal && msg.details.length > 0 && (
                <div className="container">
                    <div className="list-title">
                        {msg.content}
                    </div>
                    <div className="d-flex justify-content-center list-body ">
                        <ul>
                            {msg.details.map((d: string) => <li key={d}>{d}</li>)}
                        </ul>
                    </div>
                </div>
            )}
        </>
    )
}

export default Message; 