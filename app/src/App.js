import React from 'react'
import Login from './Login'
import Register from './Register'
import { HashRouter, Switch, Route } from 'react-router-dom'

const App = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
        </Switch>
    </HashRouter>
)

export default App