import axios from 'axios';
import Storage from './storage.service';
import { COMMON_REQUEST, COMMON_SUCCESS, COMMON_CANCEL } from '../utils/constants';

class HttpServiceSingleton {
    constructor() {
        axios.defaults.headers.post["Content-Type"] = "application/json";
        axios.defaults.headers.put["Accept"] = "application/json";
        this.count = 0; // This will store API requests
        this.complete = 0; // This will store API Success/errors        
    }

    set reduxStore(store) {
        this.store = store;
    }

    fetch(payload, noAuth) {
        const cancelToken = axios.CancelToken;
        this.cancelSource = cancelToken.source();
        let config = {};
        if (!noAuth) {
            let token = Storage.get("token");
            config.headers = {
                'Authirization': `Bearer ${token}`
            };
        }

        config.method = payload.method ? payload.method : 'get';
        config.url = payload.url ? payload.url : '';
        config.cancelToken = this.cancelSource.token;
        if (payload.data) config.data = JSON.stringify(payload.data);

        return axios(config).catch((thrown) => {
            if (axios.isCancel(thrown)) {
                this.count = 0;
                this.complete = 0;
                this.store.dispatch({
                    type: COMMON_CANCEL
                });
                console.log('Request canceled', thrown.message);
            } else {
                // handle error
            }
        });
    }

    httpInterceptor() {
        axios.interceptors.request.use((config) => {
            this.count++;
            this.checkApiComplete(this.store);
            return config;
        }, (error) => {
            this.complete++;
            this.checkApiComplete(this.store);
            return Promise.reject(error);
        });

        axios.interceptors.response.use((response) => {
            this.complete++;
            this.checkApiComplete(this.store);
            return response;
        }, (error) => {
            this.complete++;
            this.checkApiComplete(this.store);
            return Promise.reject(error);
        });
    }

    cancelRequest() {
        this.cancelSource.cancel();
    }

    //Fallback to cancel all API loaders in case of multiple API call occuts
    checkApiComplete(store) {
        if (this.count == this.complete) { // Cancel API loader when all requests are completed
            store.dispatch({
                type: COMMON_SUCCESS
            });
        } else {
            store.dispatch({
                type: COMMON_REQUEST
            });
        }
    }
}

const HttpService = new HttpServiceSingleton();
// Object.freeze(HttpService); // Singleton Http Service

export default HttpService;