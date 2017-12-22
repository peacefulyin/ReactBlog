import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import App from 'src/main';
import configureStore from './store/configureStore';

import 'static/css/reset.css'
import 'static/css/base.scss'


const store = configureStore();


render(
    <MuiThemeProvider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </MuiThemeProvider>,
    document.getElementById('root')
);



