import axios from 'axios';

import { ROOT_APP_API } from '../../environment';

// request calls are synchronous ...
// TODO: add asyncRequest that returns the promise

const restService = {
    // All axios request config options
    // url, method, baseURL, transformRequest, transformResponse, headers, params, paramsSerializer, data, timeout, withCredentials, adapter, auth, 
    // responseType, responseEncoding, xsrfCookieName, xsrfHeaderName, onUploadProgress, onDownloadProgress, maxContentLength, maxBodyLength, 
    // validateStatus, maxRedirects, socketPath, httpAgent, httpsAgent, proxy, cancelToken, decompress
    request(
        url: string,
        method: string,
        params?: any,
        postData?: any,
        requestHeaders?: any,
        responseType?: string
    ): Promise<any> {
        const config: any = {
            url: ROOT_APP_API + url,
            method: method,
            params: params,
            data: postData,
            headers: {
                'content-type': 'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin': '*',
                ...requestHeaders
            },
            responseType: responseType  || 'json'
        }

        return axios.request(config)
            .then((msgAndData: any) => {
                // handle message if it exists and return data
                console.log('rest service success, config & msgAndData: ', config, msgAndData);
                return Promise.resolve(msgAndData);
            })
            .catch((msg: any) => {
                // handle message
                console.log('rest service failure, config & msg: ', config, msg);
                return Promise.reject(msg);
            })
    },

    // TODO: parametrize async access that returns the promise
    get(url: string, params?: any, requestHeaders?: any, responseType?: string): Promise<any> {
        return this.request(url, 'get', params, null, requestHeaders, responseType);
    },

    post(url: string, postData?: any, requestHeaders?: any, responseType?: string): Promise<any> {
        return this.request(url, 'post', null, postData, requestHeaders, responseType);
    },

    put(url: string, postData?: any, requestHeaders?: any, responseType?: string): Promise<any> {
        return this.request(url, 'put', null, postData, requestHeaders, responseType);
    },

    patch(url: string, postData?: any, requestHeaders?: any, responseType?: string): Promise<any> {
        return this.request(url, 'patch', null, postData, requestHeaders, responseType);
    },

    delete(url: string, requestHeaders?: any, responseType?: string): Promise<any> {
        return this.request(url, 'delete', null, null, requestHeaders, responseType);
    },

    deleteByIds(url: string, ids: string[],  requestHeaders?: any, responseType?: string): Promise<any> {
        return this.request(url, 'post', null, {ids: ids}, requestHeaders, responseType);
    }

}

export default restService;