import {
    COLLECTION_DETAILS,
    COLOURS_DETAILS,
    SIZE_DETAILS,
    SIZE_LIST,
    COLLECTION_ADD,
    SIZE_STATUS_UPDATTE,
    SET_ACTIVE_DESIGNER,
    SET_ACTIVE_COLLECTION,
    SET_ACTIVE_COLOURS,
    SET_ACTIVE_SIZE,
    SET_ALL_ID
    
} from "../actions/types";

const initialState = {
    collection_data:[],
    collection_add:[],
    colours_data:[],
    size_data:[],
    size_list:[],
    size_satuts:[],
    active_designer: null,
    active_collection: null,
    active_colour: null,
    active_size: null,
    active_all_id: [],
}


export default (state = initialState, action) => {
    
    const { type, payload } = action;
    switch (type) {
            case   COLLECTION_DETAILS:
            return {
                ...state,
                collection_data: payload.data
            };
            case   COLLECTION_ADD:
            return {
                ...state,
                collection_add: payload.data
            };
            case    COLOURS_DETAILS:
            return {
                ...state,
                colours_data: payload.data
            };
            case SIZE_DETAILS:
            return {
                ...state,
                size_data: payload.data
            };
            case SIZE_LIST:
            return {
                ...state,
                size_list: payload.data
            };
            case SIZE_STATUS_UPDATTE:
            return {
                ...state,
                size_satuts: payload.data
            };
            case SET_ACTIVE_DESIGNER:
            return {
                ...state,
                active_designer: payload
            };
            case SET_ACTIVE_COLLECTION:
            return {
                ...state,
                active_collection: payload
            };
            case SET_ACTIVE_COLOURS:
            return {
                ...state,
                active_colour: payload
            };
            case SET_ACTIVE_SIZE:
            return {
                ...state,
                active_size: payload
            };
            case SET_ALL_ID:
            return {
                ...state,
                active_all_id: payload
            };
           default:
            return state;
    }
}
