import { logout } from "../actions/login-actions";
import { constants } from "../constants/constants";

let { LOGIN, LOGOUT, IS_ADMIN, UPDATE_USER_DETAILS } = constants;
const initialState = {
    user: { isLoggedIn: true, isAdmin: false }
};
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: {
                    id: action.payload.id,
                    email: action.payload.email,
                    gender: action.payload.gender,
                    name: action.payload.name,
                    isAdmin: state.user.isAdmin,
                    isLoggedIn: action.payload.isLoggedIn
                }
            };
        case LOGOUT: return {
            user: {
                ...initialState.user,
                isLoggedIn: false
            }
        };
        default:
            return state;
    }
};

export default loginReducer;