import { constants } from '../constants/constants';

let { SET_PAGE_NOT_FOUND, SET_LOGIN, DETECT_SCREEN_RESOLUTION, CHECK_ADMIN, OPEN_IMAGE_FOR_PREVIEW } = constants;

const initialState = {
    isPageNotFoundComponent: false, isLoginComponent: false, screen: {
        height: 0,
        width: 0
    },
    isAdminRegistered: false,
    isImagePreviewModalOpen: false,
    imageSrcForPreview: null,
    File: null
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
        case CHECK_ADMIN:
            return {
                ...state,
                isAdminRegistered: action.value
            }
        case OPEN_IMAGE_FOR_PREVIEW:
            return {
                ...state,
                imageSrcForPreview: action.src,
                isImagePreviewModalOpen: action.modalState,
                File: action.File
            }
        default: return state;
    }
};

export default generalReducer;