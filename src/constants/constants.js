const min_years = 1970;
const max_years = 2030;

export const constants = {
    IS_LOGGED_IN: 'IS_LOGGED_IN',
    IS_ADMIN: 'IS_ADMIN',
    LOGOUT: 'LOGOUT',
    LOGIN: 'LOGIN',
    CHANGE_PRODUCT_VIEW: 'CHANGE_PRODUCT_VIEW',
    GET_PRODUCTS: 'GET_PRODUCTS',
    SET_PAGINATION_PROPS: 'SET_PAGINATION_PROPS',
    UPDATE_USER_DETAILS: 'UPDATE_USER_DETAILS',
    SHOW_SIDEBAR: 'SHOW_SIDEBAR',
    HIDE_SIDEBAR: 'HIDE_SIDEBAR',
    LISTVIEW: 'List View',
    GRIDVIEW: 'Grid View',
    OPEN: 'Open ',
    DEVELOPED_BY: 'Developed By: ',
    FOLLOW: 'Follow',
    US: 'US',
    CHANGE_PRODUCT_VIEW_STYLE: 'Change product view style: ',
    SEARCH: 'Search',
    PAGE_NOT_FOUND: 'Page not found!',
    PLEASE_CLICK_HERE_TO_GO_TO: 'Please click here to go to ',
    SHOWING: 'Showing',
    OF: 'Of',
};

export const formVariables = {
    CONFIRM_PASSWORD: 'Confirm Password',
    GENDER: 'Gender',
    MALE: 'Male',
    FEMALE: 'Female',
    DAY: 'Day',
    MONTH: 'Month',
    YEAR: 'Year',
    COUNTRY: 'Country',
    STATE: 'State',
    CITY: 'City',
    LEAVE_A_COMMENT_HERE: 'Leave a comment here',
    CREATE_YOUR_ACCOUNT: 'Create your account',
    PASSWORD: 'Password',
    EMAIL: 'Email',
    ENTER_EMAIL: 'Enter email',
    LAST_NAME: 'Last Name',
    MIDDLE_NAME: 'Middle Name',
    FIRST_NAME: 'First Name',
    ITS_QUICK_AND_EASY: 'It\'s quick and easy.',
    LOGIN: 'Login',
    FORGOT_PASSWORD: 'Forgot password?',
    NOT_REGISTERED_YET: 'Not registered yet?',
    CLICK: 'Click',
    HERE: 'Here',
    TO: 'To',
    CREATE_A_NEW_ACCOUNT: 'Create a new account',
    ENTER_YOUR_PASSWORD: 'Enter your password',
    ENTER_YOUR_EMAIL: 'Enter your email',
    WE_WILL_NEVER_SHARE_YOUR_EMAIL_WITH_ANYONE_ELSE: 'We\'ll never share your email with anyone else.',
    ALREADY_HAVE_AN_ACCOUNT: 'Already have an account?',
    REMEMBER_ME: 'Remember Me'

};

export const navLinks = {
    HOME: 'Home',
    NEW_ARRIVALS: 'New Arrivals',
    ALL_PRODUCTS: 'All Products',
    CATEGORIES: 'Categories',
    SIGN_IN: 'Sign In',
    LOGIN: 'Login',
    REGISTER: 'Register'
};

export const title = {
    CLOSE: 'Close'
};

export const defaultBrandName = { name: 'FH India' };

export let days = [];

export let years = [];

export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

for (let i = 1; i <= 31; i++) {
    days = [...days, i];
};

for (let i = min_years; i <= max_years; i++) {
    years = [...years, i];
};

export const countries = [];

export const getAllCountriesUrl = 'https://restcountries.com/v3.1/all';

export const openInNewTab = url => window.open(url, '_blank', 'noopener,noreferrer');