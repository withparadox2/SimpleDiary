import React from 'react'
import Login from './Login'
import Register from './Register'
import { HashRouter, Switch, Route } from 'react-router-dom'

const App = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/register" component={Register} />
      <Route path="/" component={Login} />
    </Switch>
  </HashRouter>
)

export default App
