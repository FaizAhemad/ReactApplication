import { combineReducers } from "redux";
import productsReducer from './products-reducer';
import loginReducer from './login-reducer';
import sidebarReducer from './sidebar-reducer';
import generalReducer from './general-reducer';
import { reducer as toastrReducer } from 'react-redux-toastr';

export default combineReducers({
    productsReducer,
    loginReducer,
    sidebarReducer,
    generalReducer,
    toastr: toastrReducer
});