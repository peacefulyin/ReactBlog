import React from 'react'
import MainRouter from './router'
import { withRouter } from 'react-router-dom';


function App() {
    return(
        <MainRouter />
    )
}


export default withRouter(App)