import {
    TRANSACTION_DETAILS,
    DESIGNER_TRANSACTION_DETAILS
    
} from "../actions/types";

const initialState = {
    transaction_detail:[],
    designertransaction_data:[],
}

export default (state = initialState, action) => {
    
    const { type, payload } = action;
    switch (type) {
            case TRANSACTION_DETAILS:
            return {
                ...state,
                transaction_detail: payload.data
            };
            case DESIGNER_TRANSACTION_DETAILS:
            return {
                ...state,
                designertransaction_data: payload.data
            };
           default:
            return state;
    }
}
