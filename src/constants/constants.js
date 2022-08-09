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
    MY_CART: 'My cart',
    PAGES: 'Pages',
    PAGE: 'Page',
    SET_PAGE_NOT_FOUND: 'SET_PAGE_NOT_FOUND',
    SET_LOGIN: 'SET_LOGIN',
    DETECT_SCREEN_RESOLUTION: 'DETECT_SCREEN_RESOLUTION',
    CHECK_ADMIN: 'CHECK_ADMIN',
    OPEN_IMAGE_FOR_PREVIEW: 'OPEN_IMAGE_FOR_PREVIEW'
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
    REMEMBER_ME: 'Remember Me',
    ENTER_YOUR_ADDRESS: 'Enter Your Address',
    IMAGE: 'Image',
    MOBILE_NUMBER: 'Mobile Number'
};

export const ProductStrings = {
    TODAYS_DEAL: 'Today\'s Deal'
};

export const navLinks = {
    HOME: 'Home',
    NEW_ARRIVALS: 'New Arrivals',
    ALL_PRODUCTS: 'All Products',
    CATEGORIES: 'Categories',
    SIGN_IN: 'Sign In',
    LOGIN: 'Login',
    REGISTER: 'Register',
    RETURNS_AND_ORDERS: 'Returns & Orders'
};

export const title = {
    CLOSE: 'Close'
};

export const defaultBrandName = { name: 'The Mall' };

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

export const checkForAdminAccount = 'http://localhost:5000/api/admin/checkForAdminAccount';

export const fetchcategories = 'http://localhost:5000/api/categories/fetchcategories';

export const login_API_URL = 'http://localhost:5000/api/login';

export const openInNewTab = url => window.open(url, '_blank', 'noopener,noreferrer');

export const responsive1 = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 7
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export const defaultScrollPosition = (x = 0, y = 0) => window.scrollTo(x, y);

export const footerHeaderAndListVariables = {
    GET_TO_KNOW_US: 'Get to Know Us',
    ABOUT_US: 'About Us',
    PRESS_RELEASES: 'Press Releases',
    OUR_CARES: 'Our Cares',
    GIFT_A_SMILE: 'Gift a Smile',
    MAKE_MONEY_WITH_US: 'Make Money with Us',
    SELL_ON_THIS_WEBSITE: 'Sell on this website',
    SELL_UNDER_OUR_ACCELERATOR: 'Sell under Our Accelerator',
    OUR_GLOBAL_SELLING: 'Our Global Selling',
    BECOME_AN_AFFILIATE: 'Become an Affiliate',
    FULFILMENT_BY_US: 'Fulfilment by Us',
    ADVERTISE_YOUR_PRODUCT: 'Advertise Your Products',
    LET_US_HELP_YOU: 'Let Us Help You',
    COVID_19_AND_US: 'COVID-19 and US',
    YOUR_ACCOUNT: 'Your Account',
    RETURNS_CENTER: 'Returns Centre',
    HUNDERED_PERCENT_PURCHACE_PROTECTION: '100% Purchase Protection',
    APP_DOWNLOAD: 'App Download',
    ASSISTANT_DOWNLOAD: 'Assistant Download',
    HELP: 'Help',
    BACK_TO_TOP: 'Back to top'
};

export const goToHome = (pathname = '', navigate = () => { }) => !(pathname === '/home' || pathname === '/') && navigate('/home');

export const setObjectValues = (objToSet, currentObject) => {
    let obj = {};
    Object.keys(objToSet).forEach(propKey => {
        Object.keys(currentObject).forEach(stateKey => {
            if (propKey === stateKey) {
                if (objToSet[propKey] != currentObject[stateKey]) {
                    currentObject[stateKey] = objToSet[propKey]
                }
            }
        });
    });
    return currentObject;
};


export const nameRangeValidatorRegex = () => new RegExp(/^.{4,20}$/);

export const passwordRangeValidatorRegex = () => new RegExp(/^.{8,20}$/);

export const regexForValidation = {
    CHAR_LIMIT_0_10: new RegExp(/^.{1,10}$/),
    REPLACE_EXTRA_SPACES_WITH_SINGLE_SPACE: new RegExp(/\s\s+/g),
    EMAIL: new RegExp(/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/),
    NAME: new RegExp(/^[a-zA-Z ]*$/),
    PASSWORD: new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/),
    IND_MOBILE: new RegExp(/^[7-9][0-9]{9}$/),
    IMAGE: /[\/.](gif|jpg|jpeg|tiff|png)$/i
};