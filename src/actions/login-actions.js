import {constants} from '../constants/constants';

const {LOGIN, LOGOUT, IS_ADMIN, UPDATE_USER_DETAILS} = constants;

export const actions = {LOGIN, IS_ADMIN, LOGOUT, UPDATE_USER_DETAILS};

export const login = ({isLoggedIn, id, name, email, gender, ...obj}) => {
  return {
    type: actions.LOGIN,
    payload: {
      isLoggedIn,
      id,
      name,
      email,
      gender,
      isAdmin: obj.isAdmin,
    },
  };
};

export const checkRole = userId => {
  return {
    type: actions.LOGIN,
    payload: {userId},
  };
};

export const updateUser = obj => {
  return {
    type: actions.UPDATE_USER_DETAILS,
    payload: {
      isLoggedIn: obj.isLoggedIn,
      userId: obj.userId,
      isAdmin: !!obj.isAdmin,
      name: obj.name,
      gender: obj.gender,
      email: obj.email,
    },
  };
};

export const logout = () => {
  return {
    type: actions.LOGOUT,
  };
};

export const dispatchToProps = dispatch => ({});
