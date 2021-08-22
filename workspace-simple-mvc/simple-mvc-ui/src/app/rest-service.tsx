import axios from 'axios';

const BASE_URL = 'http://localhost:8080/simple-mvc/';

const restService = {
    request(
        url: string,
        method: string,
        params?: any,
        postData?: any,
        requestHeaders?: any,
        responseType?: string
    ): Promise<any> {
        const config: any = {
            url: BASE_URL + url,
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