import { constants } from "../constants/constants";
let { SET_PAGE_NOT_FOUND,SET_LOGIN } = constants;

export const actions = { SET_PAGE_NOT_FOUND,SET_LOGIN };

export const setPageNotFoundComponent = (value) => {
    return {
        type: actions.SET_PAGE_NOT_FOUND,
        value
    }
};

export const setLoginComponent = (value) => {
    return {
        type: actions.SET_LOGIN,
        value
    }
};