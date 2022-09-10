import {
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    FORGOT_PASSWORD,
    CHANGE_PASSWORD,
    REMOVE_FORGOT_PASSWORD,
    LOGOUT,
    ADMIN_DATA,
    VERIFY_EMAIL,
    VERIFY_OTP,
    RESSET_PASSWORD,
    REMOVE_OTP,
    REMOVE_EMAIL,
    UPDATE_ADMIN,
    SET_ACTIVE_ADMIN,
    CHANGE_PASSWORD_MODAL,
    EDIT_ADMIN_MODAL,
} from './types';

import { apiCall } from "../api";
import { baseUrl } from '../constants/const';



export const loginAction = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {},
        url: `${baseUrl}admin/login`,
        data,
    }
    let response = await apiCall(config, dispatch)
    if (response.data.status) {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: response
        })
    } else {
        dispatch({
            type: LOGIN_FAILED,
            payload: response
        })
    }
}
export const getAdminData = () => async dispatch => {
    let config = {
        method: 'post',
        headers: { Authorization: `Bearer ${localStorage.getItem("tokenData")}` },
        url: `${baseUrl}admin/get_admin_data`
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: ADMIN_DATA,
        payload: response.data
    })
}

export const forgotPassword = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {},
        url: `${baseUrl}admin/forgot_password`,
        data,
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: FORGOT_PASSWORD,
        payload: response
    })
}
export const changePassword = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${localStorage.getItem("token")}`},
        url: `${baseUrl}admin/change_password`,
        data,
    }
    console.log('====',config)
    let response = await apiCall(config, dispatch)
    dispatch({
        type: CHANGE_PASSWORD_MODAL,
        payload: false
    })
}
export const removeForgotPassword = (data) => async dispatch => {
    dispatch({
        type: REMOVE_FORGOT_PASSWORD,
        payload:data
    })
}
export const removeOpt = (data) => async dispatch => {
    dispatch({
        type: REMOVE_OTP,
        payload:data
    })
}
export const removeEmail = (data) => async dispatch => {
    dispatch({
        type: REMOVE_EMAIL,
        payload:data
    })
}

export const verifyOtp = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {},
        url: `${baseUrl}admin/verify_otp`,
        data,
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: VERIFY_OTP,
        payload: response
    })
}

export const ressetPassword = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {},
        url: `${baseUrl}admin/reset_password`,
        data,
    }
    let response = await apiCall(config, dispatch)


    dispatch({
        type: RESSET_PASSWORD,
        payload: response
    })
}

export const varifyEmail = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {},
        url: `${baseUrl}admin/validate_email`,
        data,
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: VERIFY_EMAIL,
        payload: response
    })
}
export const EditAdminAction = (data) => async dispatch => {

    let formdata = new FormData();
    formdata.append('name',data.name)
    formdata.append('email',data.email)
    formdata.append('profile_pic',data.profile_pic)
    // formdata.append('advertisement_id',data.advertisement_id)

    let config = {
        method: 'POST',
        headers: {Authorization: `Bearer ${localStorage.getItem("tokenData")}`},
        url: `${baseUrl}admin/update`,
        data:formdata
    }
    console.log("===============",formdata)
    let response = await apiCall(config, dispatch)
    dispatch({
        type:EDIT_ADMIN_MODAL,
        payload: false
    })
}
export const logout = () => async dispatch => {
    dispatch({
        type: LOGOUT,
        payload: ''
    })
}
export const changeLoginFailedStatus = (data) => async dispatch => {
    dispatch({
        type: LOGIN_FAILED,
        payload: data
    })
}

export const setActiveAdminAction = (admin_id) => async dispatch => {
    dispatch({
        type:  SET_ACTIVE_ADMIN,
        payload: admin_id
    })
}




