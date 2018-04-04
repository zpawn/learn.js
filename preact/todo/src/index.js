import { h, render } from 'preact';
import { createStore } from 'redux';
import { Provider } from 'preact-redux';

import App from './App';
import todoReducer from './store/reducers/todo';

const store = createStore(todoReducer);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('preactMountPoint')
);
