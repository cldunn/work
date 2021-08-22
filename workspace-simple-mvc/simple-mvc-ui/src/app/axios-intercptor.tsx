import axios from 'axios';
import {Dispatch } from 'redux';

import { commonIsLoading } from './common/common-slice';

const createInterceptors = (dispatch: Dispatch): void => {
    let alertId: any;

    axios.interceptors.request.use(
        (req) => {
            dispatch(commonIsLoading(true));
            console.log('interceptors.request.use success request: ', req);

            return req;
        },
        (err) => {
            console.log('interceptors.request.use failure err: ', err);
            return Promise.reject(err);
        }
    );
    
    // For POST requests
    axios.interceptors.response.use(
        (res) => {
            dispatch(commonIsLoading(false));
            
            clearTimeout(alertId);

            // extract msg and data if 200-299, do 300s show up here?
            console.log('interceptors.response.use success response: ', res);
            if (res.status >= 200 && res.status <= 299) {
                const jsonResp = res.data;
                
                if (jsonResp.message) {
                    if (jsonResp.message.details.length === 0) {
                        dispatch({ type: 'common/commonOpenAlert', payload: {
                            status: 'success',
                            alertMessage : jsonResp.message.content
                        }});

                        alertId = setTimeout(() => {
                            dispatch({type: 'common/commonCloseAlert'});
                        }, 5000);
                    }
                    else {
                        dispatch({ type: 'common/commonOpenModal', payload: {
                            status: 'success',
                            modalMessage: jsonResp.message
                        }});
                    }
                }

                // return res.data.data;
                return Promise.resolve(res.data.data);
            }
            return res;
        },
        (err: any) => {
            dispatch(commonIsLoading(false));
            
            clearTimeout(alertId);

            // The AXIOS error message can actually return 3 different structure, depending from what kind of failure
            // Error in setting up the request: message,  No response – Network Error: request, Request returned with an error status: err
            if (err.response) {
                console.log('interceptors.response.use failure err: ',  err.config, err.isAxiosError, err.request, err.response, err.message);

                const jsonResp = err.response.data;
                dispatch({ type: 'common/commonOpenModal', payload: {
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