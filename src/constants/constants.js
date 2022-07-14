export const constants = {
    IS_LOGGED_IN: "IS_LOGGED_IN",
    IS_ADMIN: "IS_ADMIN",
    LOGOUT: "LOGOUT",
    LOGIN: "LOGIN",
    CHANGE_PRODUCT_VIEW: "CHANGE_PRODUCT_VIEW",
    GET_PRODUCTS:"GET_PRODUCTS",
    SET_PAGINATION_PROPS:"SET_PAGINATION_PROPS",
    UPDATE_USER_DETAILS:"UPDATE_USER_DETAILS"
}

export let days = [];

export let years = [];

export const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

for (let i = 1; i <= 31; i++) {
    days = [...days, i]
};

const min_years = 1970;
const max_years = 2030;

for (let i = min_years; i <= max_years; i++) {
    years = [...years, i]
};

export const countries = [];

export const getAllCountriesUrl = 'https://restcountries.com/v3.1/all';