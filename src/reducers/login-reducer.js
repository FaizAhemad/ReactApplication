import {toastr} from 'react-redux-toastr';
import {logout} from '../actions/login-actions';
import {constants} from '../constants/constants';

const {LOGIN, LOGOUT, IS_ADMIN, UPDATE_USER_DETAILS} = constants;
const initialState = {
  user: {isLoggedIn: false, isAdmin: false},
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: {
          id: action.payload.id,
          email: action.payload.email,
          gender: action.payload.gender,
          name: action.payload.name,
          isAdmin: action.payload.isAdmin,
          isLoggedIn: action.payload.isLoggedIn,
        },
      };
    case LOGOUT:
      return {
        user: {
          ...initialState.user,
          isLoggedIn: false,
        },
      };
    default:
      return state;
  }
};

export default loginReducer;
