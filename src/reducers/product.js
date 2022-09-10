import {
    PRODUCT_DATA,
    PRODUCT_ADD,
    SET_ACTIVE_PRODUCT,
    PRODUCT_STATUS_UPDATTE
    
} from "../actions/types";

const initialState = {
    product_detail:[],
    product_data:[],
    product_satuts:[],
    active_product: null

}


export default (state = initialState, action) => {
    
    const { type, payload } = action;
    switch (type) {
            case  PRODUCT_DATA:
            return {
                ...state,
                product_detail: payload.data
            };
            case PRODUCT_ADD:
                return {
                    ...state,
                    product_data: payload.data
                };
                case PRODUCT_STATUS_UPDATTE:
                    return {
                        ...state,
                        product_satuts: payload.data
                    };
                case SET_ACTIVE_PRODUCT:
                    return {
                        ...state,
                        active_product: payload
                    }
           default:
            return state;
    }
}
