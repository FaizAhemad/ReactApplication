import { constants } from '../constants/constants';

let { SET_PAGE_NOT_FOUND, SET_LOGIN } = constants;

const initialState = { isPageNotFoundComponent: false, isLoginComponent: false };

const generalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PAGE_NOT_FOUND:
            return {
                ...state,
                isPageNotFoundComponent: action.value
            };
        case SET_LOGIN:
            return {
                ...state,
                isLoginComponent: action.value
            };
        default: return state;
    }
};

export default generalReducer;