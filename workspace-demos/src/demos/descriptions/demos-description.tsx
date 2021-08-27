import React from "react";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import './descriptions.scss';

const DemosDescription: React.FC = () => {
    return (
        <div className="flex-container flex-contained">
            <div>
                <p>
                    Demos feature various programming techniques using primarily Bootstrap, ReactJs and the Spring Framework. Clicking on a demo link will display
                    a description of the demo and  lists of various fetures incorporated in the demo.  Hovering over an item details in the features list will 
                    provide a tooltip identifying a file from which one can observe the implementation of the associated technique. 
                </p>
                <p>
                    You can download the source code from github.  Clicking the &quot;Launch ...&quot; link will navigate to the selected demo, assuming 
                    the demo is already running.
                </p>
            </div>
            <div className="flex-contained">
                <div className="row" style={{width: '100%'}}>
                    <div className="col">
                        <ul>
                            <li>
                                React
                                <ul>
                                    <li>
                                        <OverlayTrigger placement="right" trigger="hover" overlay={<Tooltip id={`sam`}>App.tsx</Tooltip>}>
                                            <span>Routes</span>
                                        </OverlayTrigger>
                                    </li>
                                    <li>
                                        <OverlayTrigger placement="right" trigger="hover" overlay={<Tooltip id={`tt`}>demos-container.tsx</Tooltip>}>
                                            <span>userParams, Nested Routes</span>
                                        </OverlayTrigger>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DemosDescription;