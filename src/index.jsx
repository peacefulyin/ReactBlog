import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import {HashRouter} from 'react-router-dom';


import App from 'src/main';
import configureStore from './store/configureStore';


import 'static/css/index.scss'



const store = configureStore();


render(
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);



