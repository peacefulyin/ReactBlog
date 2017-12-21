import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

const store = configureStore()

render(
    <Provider store={store}>
        <h1>haha</h1>
    </Provider>,
    document.getElementById('root')
)



