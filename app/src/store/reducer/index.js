import {combineReducers} from 'redux';

import {reducer as toastrReducer} from 'react-redux-toastr'

let reducer = combineReducers({toastr: toastrReducer});

export default reducer;