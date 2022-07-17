import { constants } from "../constants/constants";
let { SET_PAGE_NOT_FOUND } = constants;

export const actions = { SET_PAGE_NOT_FOUND };

export const setPageNotFoundComponent = (value) => {
    return {
        type: actions.SET_PAGE_NOT_FOUND,
        value
    }
};