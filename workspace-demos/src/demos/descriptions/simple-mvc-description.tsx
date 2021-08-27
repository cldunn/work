import React from "react";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import './descriptions.scss';

const SimpleMvcDescription: React.FC = () => {
    return (
        <div className="flex-container flex-contained">
            <div>
                <p>
                    Simple MVC demonstrates the interaction between a React UI and a Spring MVC Rest API.  The React UI uses the axios request service to 
                    communicate with a server side API via JSON.  An axios interceptor handles any response to display an appropriate Alert or or Modal message
                    to the user and set or clear the redux state corresponding to the http status code.  The server side provides rest endpoints and provides 
                    multiple exmples of how Spring MVC may recieve parameters as well as return data and messages as well as throw exceptions.
                </p>
                <p>
                    Clicking one of the buttons will return a former presidents name to be displayed above the buttons, if the rest endpoint is successful,
                    as well as display an Alert or Modal message describing the request.  In case of an error, an error message will display and the data display 
                    cleared,  although the data will be returned.  All responses, wether successful of not, will have the same json format 
                    (see JsonRespone.java on the servier side).
                </p>
            </div>
            <div className="flex-contained">
                <div className="row" style={{width: '100%'}}>
                    <div className="col">
                        <ul>
                            <li>
                                Bootstrap
                                <ul>
                                    <li>
                                        <OverlayTrigger placement="right" trigger="hover" overlay={<Tooltip id={`sam`}>landing-container.tsx</Tooltip>}>
                                            <span>Spinner, Alert, Modal</span>
                                        </OverlayTrigger>
                                    </li>
                                    <li>
                                        <OverlayTrigger placement="right" trigger="hover" overlay={<Tooltip id={`tt`}>home-container.tsx</Tooltip>}>
                                            <span>Tooltip</span>
                                        </OverlayTrigger>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                React
                                <ul>
                                    <li>
                                        <OverlayTrigger placement="right" trigger="hover" overlay={
                                            <Tooltip id={`useX`}>
                                                <div>landing-container.tsx,</div>
                                                <div>global-context.tsx</div>
                                            </Tooltip>}>
                                            <span>useState, useEffect, useCallback, useContext, useSelector</span>
                                        </OverlayTrigger>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Redux Toolkit
                                <ul>
                                    <li>
                                        <OverlayTrigger placement="right" trigger="hover" overlay={
                                            <Tooltip id={`store`}>
                                                store.tsx
                                            </Tooltip>}>
                                            <span>configureStore, useDispatch</span>
                                        </OverlayTrigger>
                                    </li>
                                    <li>
                                        <OverlayTrigger placement="right" trigger="hover" overlay={
                                            <Tooltip id={`slice`}>
                                                common-slice.tsx, home-slice.tsx
                                            </Tooltip>}>
                                            <span>createSlice, createAsyncThunk</span>
                                        </OverlayTrigger>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Axios
                                <ul>
                                    <li>
                                        <OverlayTrigger placement="right" trigger="hover" overlay={
                                            <Tooltip id={`rest`}>
                                                rest-service.tsx
                                            </Tooltip>}>
                                            <span>request</span>
                                        </OverlayTrigger>
                                    </li>
                                    <li>
                                        <OverlayTrigger placement="right" trigger="hover" overlay={
                                            <Tooltip id={`intercept`}>
                                                axios-interceptor.tsx
                                            </Tooltip>}>
                                            <span>interceptor.request.use, interceptor.response.use</span>
                                        </OverlayTrigger>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <li>
                                Spring MVC
                                <ul>
                                    <li>
                                        <OverlayTrigger placement="right" trigger="hover" overlay={
                                            <Tooltip id={`mvc`}>
                                                SimpleMvcController.java
                                            </Tooltip>}>
                                            <span>@RestController</span>
                                        </OverlayTrigger>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                AOP
                                <ul>
                                    <li>
                                        <OverlayTrigger placement="right" trigger="hover" overlay={
                                            <Tooltip id={`threaded`}>
                                                RequestInterceptor.java
                                            </Tooltip>}>
                                            <span>HandlerInterceptor</span>
                                        </OverlayTrigger>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Exception Handling
                                <ul>
                                    <li>
                                        <OverlayTrigger placement="right" trigger="hover" overlay={
                                            <Tooltip id={`except`}>
                                                <span>ControllerExceptionHandler .java</span>
                                            </Tooltip>}>
                                            <span>ResponseEntityExceptionHandler</span>
                                        </OverlayTrigger>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Messaging
                                <ul>
                                    <li>
                                        <OverlayTrigger placement="right" trigger="hover" overlay={
                                            <Tooltip id={`msg`}>
                                                <span>MessageSource.java</span>
                                            </Tooltip>}>
                                            <span>ReloadableResourceBundleMessageSource, @Value</span>
                                        </OverlayTrigger>
                                    </li>
                                    <li>
                                        <OverlayTrigger placement="right" trigger="hover" overlay={
                                            <Tooltip id={`prop`}>
                                                <span>ControllerExceptionHandler .java</span>
                                            </Tooltip>}>
                                            <span>@Environment</span>
                                        </OverlayTrigger>
                                    </li>
                                    <li>
                                        <OverlayTrigger placement="right" trigger="hover" overlay={
                                            <Tooltip id={`log`}>
                                                <span>application.properties, logback-spring.xml, SimpleMvcController.java</span>
                                            </Tooltip>}>
                                            <span>Logging</span>
                                        </OverlayTrigger>
                                    </li>
                                    <li>
                                        <OverlayTrigger placement="right" trigger="hover" overlay={
                                            <Tooltip id={`profile`}>
                                                <span>application.properties, application-dev.properties, ControllerExceptionHandler .java</span>
                                            </Tooltip>}>
                                            <span>Profiles</span>
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

export default SimpleMvcDescription;