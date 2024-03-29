import {constants} from '../constants/constants';

const {SHOW_SIDEBAR, HIDE_SIDEBAR} = constants;
const initialState = {isSideBarVisible: false};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SIDEBAR:
      return {
        ...state,
        isSideBarVisible: true,
      };
    case HIDE_SIDEBAR:
      return {
        ...state,
        isSideBarVisible: false,
      };
    default:
      return state;
  }
};

export default sidebarReducer;
