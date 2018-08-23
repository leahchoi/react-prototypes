import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/index.js';


ReactDOM.render(
    <Provider store={createStore(rootReducer)}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

