import {
    ADVERTISEMENT_DETAILS,
    ADVERTISEMENT_STATUS_UPDATTE,
    SET_ACTIVE_ADVERTISEMENT

} from "../actions/types";

const initialState = {
    advertisement_data: [],
    advertisement_satuts:[],
    active_advertisement: null,
};


export default (state = initialState, action) => {
    
    const { type, payload } = action;
    switch (type) {
        case ADVERTISEMENT_DETAILS:
            return {
                ...state,
                advertisement_data: payload.data
            };
            case ADVERTISEMENT_STATUS_UPDATTE:
                return {
                    ...state,
                    advertisement_satuts: payload.data
                };
            case SET_ACTIVE_ADVERTISEMENT:
                return {
                    ...state,
                    active_advertisement: payload
                };
           default:
            return state;
    }
}
