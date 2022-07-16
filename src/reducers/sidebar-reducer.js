import { constants } from "../constants/constants";

let { SHOW_SIDEBAR, HIDE_SIDEBAR } = constants;

const initialState = { isSideBarVisible: false };

const sidebarReducer = (state = initialState, action) => {

    switch (action.type) {
        case SHOW_SIDEBAR:
            return {
                ...state,
                isSideBarVisible: true
            }
        case HIDE_SIDEBAR:
            return {
                ...state,
                isSideBarVisible: !state.isSideBarVisible
            }
        default:
            return state;
    }
};

export default sidebarReducer;