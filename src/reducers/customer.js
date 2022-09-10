import {
    CUSTOMER_DATA,
    CUSTOMER_DETAILS,
    CUSTOMER_STATUS_UPDATTE,
    CUSTOMER_PROFILE_UPDATE
} from "../actions/types";

const initialState = {
    is_authenticated: false,
    customer_detail:[],
    customer_data: [],
    customer_satuts:[],
    customer_profile:[]

};


export default (state = initialState, action) => {
    
    const { type, payload } = action;
    switch (type) {
        case CUSTOMER_DATA:
            // localStorage.setItem('tokenData', payload.data.token)
            return {
                ...state,
                customer_data: payload.data,
                // token: payload.token
            };
            case CUSTOMER_DETAILS:
            return {
                ...state,
                is_authenticated: true,
                customer_detail: payload.data
            };
            case CUSTOMER_STATUS_UPDATTE:
                return {
                    ...state,
                    customer_satuts: payload.data
                };
                case CUSTOMER_PROFILE_UPDATE:
                    return {
                        ...state,
                        customer_profile: payload.data
                    };
           default:
            return state;
    }
}
