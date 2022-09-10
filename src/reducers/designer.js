import {
    DESIGNER_DATA,
    DESIGNER_DETAILS,
    DESIGNER_STATUS_UPDATTE,
    DESIGNER_PROFILE_UPDATE,
} from "../actions/types";

const initialState = {
    is_authenticated: false,
    designer_data: [],
    designer_detail:[],
    designer_satuts:[],
    designer_profile:[]
};


export default (state = initialState, action) => {
    
    const { type, payload } = action;
    switch (type) {
        case DESIGNER_DATA:
            return {
                ...state,
                designer_data: payload.data
            };
            case DESIGNER_DETAILS:
            return {
                ...state,
                is_authenticated: true,
                designer_detail: payload.data
            };
            case DESIGNER_STATUS_UPDATTE:
            return {
                ...state,
                designer_satuts: payload.data
            };
            case DESIGNER_PROFILE_UPDATE:
            return {
                ...state,
                designer_profile: payload.data
            };
           default:
            return state;
    }
}
