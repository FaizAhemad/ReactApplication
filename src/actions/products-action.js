import { constants } from "../constants/constants";

export const changeProductView = (view)=>{
    return {
        type:constants.CHANGE_PRODUCT_VIEW,
        view
    }
}

export const getAllProducts = (view)=>{
    return {
        type:constants.GET_PRODUCTS,
        view
    }
}

export const changePaginationProps = (props)=>{
    return {
        type:constants.SET_PAGINATION_PROPS,
        props
        
    }
}

