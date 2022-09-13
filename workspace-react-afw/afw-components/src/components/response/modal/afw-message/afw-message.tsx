import React from "react";

import './afw-message.scss';

export const AfwMessage: React.FC = (props: any) => {
    const { msg, showModal } = props;

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
