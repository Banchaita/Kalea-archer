import {
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    FORGOT_PASSWORD,
    CHANGE_PASSWORD,
    REMOVE_FORGOT_PASSWORD,
    REMOVE_OTP,
    VERIFY_OTP,
    RESSET_PASSWORD,
    VERIFY_EMAIL,
    REMOVE_EMAIL,
    LOGOUT,
    ADMIN_DATA,
    CUSTOMER_DETAILS,
    SET_ACTIVE_ADMIN,



} from "../actions/types";

const initialState = {
    is_authenticated: false,
    token: '',
    loginMessage: null,
    veryfyMessage: null,
    forgotStatus: null,
    otpStatus: null,
    emailCheck: null,
    ressetpasswordStatus: [],
    chage_password: null,
    save_email: null,
    active_admin: null
};

export default (state = initialState, action) => {

    const { type, payload } = action;
    switch (type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('tokenData', payload.data.token)
            return {
                ...state,
                is_authenticated: true,
                token: payload.token
            };
        case LOGIN_FAILED:
            return {
                ...state,
                loginMessage: payload.data.message
            };
        case FORGOT_PASSWORD:
            return {
                ...state,
                forgotStatus: payload.data.status,
            };
        case REMOVE_FORGOT_PASSWORD:
            return {
                ...state,
                forgotStatus: null
            };
        case CHANGE_PASSWORD:
            return {
                ...state,
                chage_password: payload
            };
        case VERIFY_OTP:
            return {
                ...state,
                otpStatus: payload.data
            };
        case REMOVE_OTP:
            return {
                ...state,
                otpStatus: payload
            };
        case RESSET_PASSWORD:
            return {
                ...state,
                ressetpasswordStatus: payload.data.data
            };
        case VERIFY_EMAIL:
            return {
                ...state,
                emailCheck: payload.data
            };
        case REMOVE_EMAIL:
            return {
                ...state,
                emailCheck: payload
            };
        case ADMIN_DATA:
            return {
                ...state,
                is_authenticated: true,
                admin_data: payload.data
            };
        case CUSTOMER_DETAILS:
            return {
                ...state,
                is_authenticated: true,
                customer_detail: payload.data
            };
        case LOGOUT:
            localStorage.removeItem('tokenData')
            return {
                ...state,
                admin_data: {},
                is_authenticated: false,
                token: ''
            };
            case SET_ACTIVE_ADMIN:
                return {
                    ...state,
                  active_admin: payload
                };
        default:
            return state;
    }
}


