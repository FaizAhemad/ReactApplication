import { constants } from "../constants/constants";

let { LOGIN, LOGOUT, IS_ADMIN, UPDATE_USER_DETAILS } = constants;

export const actions = { LOGIN, IS_ADMIN, LOGOUT, UPDATE_USER_DETAILS };

export const login = (userId) => {
    return {
        type: actions.LOGIN,
        payload: { userId }
    }
}

export const checkRole = (userId) => {
    return {
        type: actions.LOGIN,
        payload: { userId }
    }
}

export const updateUser = (obj) => {
    console.log(obj);
    return {
        type: actions.UPDATE_USER_DETAILS,
        payload: { obj }
    }
}

export const logout = (userId) => {
    return {
        type: actions.LOGOUT,
        payload: { userId }
    }
}

export const dispatchToProps = dispatch => ({

})