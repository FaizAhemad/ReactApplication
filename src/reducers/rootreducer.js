import { combineReducers } from "redux";
import productsReducer from './products-reducer';
import loginReducer from './login-reducer';
import sidebarReducer from './sidebar-reducer';

export default combineReducers({
    productsReducer,
    loginReducer,
    sidebarReducer
});