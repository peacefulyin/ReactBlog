import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Home from 'main/Home'
import Article from 'main/Article'
import TagPage from 'main/TagPage'

const MainRouter = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/article/:id' component={Article}/>
        <Route exact path='/blog/:tag' component={TagPage}/>
    </Switch>
)

export default MainRouter
