import {
    CATEGORY_DETAILS,
    CATEGORY_ADD,
    CATEGORY_UPDATE,
    CATEGORY_STATUS_UPDATTE,
    SET_ACTIVE_CAT

} from "../actions/types";

const initialState = {
    category_data: [],
    category_detalits:[],
    category_satuts:[],
    active_cat: null
};


export default (state = initialState, action) => {
    
    const { type, payload } = action;
    switch (type) {
        case CATEGORY_DETAILS:
            return {
                ...state,
                category_data: payload.data
            };
        case CATEGORY_ADD:
            return {
                ...state,
                category_detalits: payload.data
            };
        case CATEGORY_UPDATE:
            return {
                ...state,
                category_update: payload.data
            };
        case CATEGORY_STATUS_UPDATTE:
            return {
                ...state,
                category_satuts: payload.data
            };
        case SET_ACTIVE_CAT:
            return {
                ...state,
                active_cat: payload
            }
        default:
            return state;
    }
}
