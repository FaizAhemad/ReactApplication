import {constants} from '../constants/constants';

const {SHOW_SIDEBAR, HIDE_SIDEBAR} = constants;

export const actions = {SHOW_SIDEBAR, HIDE_SIDEBAR};

export const showSidebar = () => {
  return {
    type: actions.SHOW_SIDEBAR,
  };
};

export const hideSidebar = () => {
  return {
    type: actions.HIDE_SIDEBAR,
  };
};
