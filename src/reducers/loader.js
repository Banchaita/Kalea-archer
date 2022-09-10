import {
    SHOW_LOADER,
} from "../actions/types";

const initialState = {
    loaderDisplay: false,
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SHOW_LOADER: {
            return {
                ...state,
                loaderDisplay: payload,
            };
        };
        default:
            return state;
    }
}