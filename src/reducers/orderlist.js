import {
    CUSTOMER_ORDER,
    ORDER_DETAILS,
    DESIGNER_ORDER_DETAILS,
    DESIGNER_ORDER_LIST,
    SET_ACTIVE_CUSTOMER,
    SET_ACTIVE_ORDER,
    SET_ACTIVE_DESIGNER_ORDER
    
} from "../actions/types";

const initialState = {
    order_data:[],
    order_detail:[],
    designerorder_detail:[],
    designerorder_data:[],
    active_customer: null,
    active_order: null,
    active_designerorder: null,
}

export default (state = initialState, action) => {
    
    const { type, payload } = action;
    switch (type) {
            case    CUSTOMER_ORDER:
            return {
                ...state,
                order_data: payload.data
            };
            case ORDER_DETAILS:
            return {
                ...state,
                order_detail: payload.data
            };
            case DESIGNER_ORDER_DETAILS:
            return {
                ...state,
                designerorder_detail: payload.data
            };
            case DESIGNER_ORDER_LIST:
            return {
                ...state,
                designerorder_data: payload.data
            };
            case  SET_ACTIVE_CUSTOMER:
            return {
                ...state,
                active_customer: payload
            };
            case  SET_ACTIVE_CUSTOMER:
            return {
                ...state,
                active_customer: payload
            };
            case SET_ACTIVE_ORDER:
            return {
                ...state,
                active_order: payload
            };
            case  SET_ACTIVE_DESIGNER_ORDER:
            return {
                ...state,
                active_designerorder: payload
            };
           default:
            return state;
    }
}
