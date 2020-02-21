import React from 'react'
import Login from './views/auth/Login'
import Register from './views/auth/Register'
import {HashRouter, Switch, Route} from 'react-router-dom';
import Layout from './views/layout/index'

const App = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Layout}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
        </Switch>
    </HashRouter>
)

export default App
