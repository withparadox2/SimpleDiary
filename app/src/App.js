import React from 'react'
import {HashRouter, Switch, Route} from 'react-router-dom';
import Layout from './views/layout/index';
import routes from './routes'

const App = (props) => (
    <div>
    <HashRouter>
        <Layout>
            <Switch>
                {routes.map((route,index) => (
                    <Route exact key={index} path={route.path} component={route.component}/>
                ))}
            </Switch>
        </Layout>
    </HashRouter>
    {props.children}
    </div>
    
)

export default App
