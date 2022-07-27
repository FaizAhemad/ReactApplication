import { constants } from "../constants/constants";
let { SET_PAGE_NOT_FOUND, SET_LOGIN, DETECT_SCREEN_RESOLUTION, CHECK_ADMIN, OPEN_IMAGE_FOR_PREVIEW } = constants;

export const actions = { SET_PAGE_NOT_FOUND, SET_LOGIN, DETECT_SCREEN_RESOLUTION, CHECK_ADMIN, OPEN_IMAGE_FOR_PREVIEW };

export const setPageNotFoundComponent = (value) => {
    return {
        type: actions.SET_PAGE_NOT_FOUND,
        value
    }
};

export const detectScreenResolution = (height, width) => {
    return {
        type: actions.DETECT_SCREEN_RESOLUTION,
        screen: {
            height: height,
            width: width
        }
    }
};

export const setLoginComponent = (value) => {
    return {
        type: actions.SET_LOGIN,
        value
    }
};

export const isAdminRegistered = (value) => {
    return {
        type: actions.CHECK_ADMIN,
        value
    }
};

export const openImagePreviewModal = (src, modalState, File) => {
    return {
        type: actions.OPEN_IMAGE_FOR_PREVIEW,
        src,
        modalState,
        File
    }
};