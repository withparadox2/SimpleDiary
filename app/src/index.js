import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import ReduxToastr from "react-redux-toastr";
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import {Provider} from 'react-redux';
import store from './store'

ReactDOM.render(
    <Provider store={store}>
    <App></App>
    <ReduxToastr
        position="bottom-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"/></Provider>, document.getElementById('root'))
