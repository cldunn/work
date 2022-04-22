import axios from 'axios';
import {Dispatch } from 'redux';

import { commonIsLoading } from 'afw-components';
const createInterceptors = (dispatch: Dispatch): void => {
    let alertId: any;

    axios.interceptors.request.use(
        (req) => {
            // Do something before request is sent
            dispatch(commonIsLoading(true));
            console.log('interceptors.request.use success request: ', req);

            return req;
        },
        (err) => {
            // Do something with request error
            console.log('interceptors.request.use failure err: ', err);
            return Promise.reject(err);
        }
    );
    
    axios.interceptors.response.use(
        (res) => {
            // Any status code that lie within the range of 2xx cause this function to trigger, do something with response data
            // Standard codes are 200 -208, 226; any other 2xx can be used for customization
            dispatch(commonIsLoading(false));
            
            clearTimeout(alertId);

            // extract msg and data if 200-299
            console.log('interceptors.response.use success response: ', res);
            if (res.status >= 200 && res.status <= 299) {
                const jsonResp = res.data;
                
                if (jsonResp.message) {
                    if (jsonResp.message.details.length === 0) {
                        dispatch({ type: 'landing/landingOpenAlert', payload: {
                            status: 'success',
                            alertMessage : jsonResp.message.content
                        }});

                        alertId = setTimeout(() => {
                            dispatch({type: 'landing/landingCloseAlert'});
                        }, 5000);
                    }
                    else {
                        dispatch({ type: 'landing/landingOpenModal', payload: {
                            status: 'success',
                            modalMessage: jsonResp.message
                        }});
                    }
                }

                return Promise.resolve(res.data.data);
            }
            
            return res;
        },
        (err: any) => {
            // Any status codes that falls outside the range of 2xx cause this function to trigger, do something with response error
            dispatch(commonIsLoading(false));
            
            clearTimeout(alertId);

            // The AXIOS error message can actually return 3 different structure, depending from what kind of failure
            // Error in setting up the request: message,  No response – Network Error: request, Request returned with an error status: err
            if (err.response) {
                console.log('interceptors.response.use failure err: ',  err.config, err.isAxiosError, err.request, err.response, err.message);

                const jsonResp = err.response.data;
                dispatch({ type: 'landingOpenModal', payload: {
                    status: 'danger',
                    modalMessage: jsonResp.message
                }});

                // return Promise.reject(jsonResp.data);
            }
            else {
                console.log('interceptors.response.use failure err (none): ', err);
                // return Promise.reject(err);
            }

            return Promise.reject(err);
        }
    );
};

export default createInterceptors;