import { logout } from "../actions/login-actions";
import { constants } from "../constants/constants";

let { LOGIN, LOGOUT, IS_ADMIN, UPDATE_USER_DETAILS } = constants;

const initialState = {

    isAdmin: false,
    isLoggedIn: false,
    user: {},

}

const loginReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                userId: action.payload.userId,
                isLoggedIn: true,
                isAdmin: true,
                user: {
                    userId: action.userId
                }
            }
        case UPDATE_USER_DETAILS:
            return {
                ...state,
                isLoggedIn: true,
                isAdmin: true,
                user: {
                    userId: action.userId
                }
            }
        default:
            return state
    }

}



export default loginReducer