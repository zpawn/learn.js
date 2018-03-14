import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.interceptors.request.use(req => {
    // edit request config
    console.log('<<< reqInterceptor:', req);
    return req;
}, err => {
    // if not connect, etc...
    console.log('<<< reqErrInterceptor:', err);
    return Promise.reject(err);
});

axios.interceptors.response.use(res => {
    console.log('>>> resInterceptor:', res);
    return res;
}, err => {
    console.log('>>> resErrInterceptor:', err);
    return Promise.reject(err);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
