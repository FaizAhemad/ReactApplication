import { constants } from '../constants/constants';

let { SET_PAGE_NOT_FOUND, SET_LOGIN, DETECT_SCREEN_RESOLUTION } = constants;

const initialState = {
    isPageNotFoundComponent: false, isLoginComponent: false, screen: {
        height: 0,
        width: 0
    }
};

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
        case DETECT_SCREEN_RESOLUTION:
            return {
                ...state,
                screen: action.screen
            };
        default: return state;
    }
};

export default generalReducer;