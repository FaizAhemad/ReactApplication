import {combineReducers} from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr';
import productsReducer from './products-reducer';
import loginReducer from './login-reducer';
import sidebarReducer from './sidebar-reducer';
import generalReducer from './general-reducer';

export default combineReducers({
  productsReducer,
  loginReducer,
  sidebarReducer,
  generalReducer,
  toastr: toastrReducer,
});
