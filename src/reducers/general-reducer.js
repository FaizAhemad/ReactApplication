import { constants } from '../constants/constants';

let { SET_PAGE_NOT_FOUND } = constants;

const initialState = { isPageNotFoundComponent: false };

const generalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PAGE_NOT_FOUND:
            return {
                ...state,
                isPageNotFoundComponent: action.value
            };

        default: return state;
    }
};

export default generalReducer;