import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from 'main/Home'

const MainRouter = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
    </Switch>
)

export default MainRouter
