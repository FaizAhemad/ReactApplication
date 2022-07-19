import { constants, setObjectValues } from "../constants/constants";

let initialState = {
    productView: 'column',
    products: [],
    pagination: {
        size: 'md',
        data: [],
        currentPage: 1,
        pageLimit: 10,
        totalPages: 0,
        offset: 0
    }
};




const productsReducer = (state = initialState, action) => {
    const { CHANGE_PRODUCT_VIEW, FETCH_PAGINATION, SET_PAGINATION_PROPS } = constants;
    switch (action.type) {
        case CHANGE_PRODUCT_VIEW:
            return {
                ...state,
                productView: action.view
            };
        case CHANGE_PRODUCT_VIEW:
            return {
                ...state,
                products: action.products
            };
        case SET_PAGINATION_PROPS:
            return {
                ...state,
                pagination: setObjectValues(action.props, state.pagination)
            };
        default:
            return state;
    };
};

export default productsReducer;