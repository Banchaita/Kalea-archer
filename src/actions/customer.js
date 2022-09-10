import {
    CUSTOMER_DATA,
    CUSTOMER_DETAILS,
    CUSTOMER_STATUS_UPDATTE,
    CUSTOMER_PROFILE_UPDATE

} from './types';

import { apiCall } from "../api";
import { baseUrl } from '../constants/const';


export const getCustomerData = () => async dispatch => {
    let config = {
        method: 'POST',
        headers: {Authorization: `Bearer ${localStorage.getItem("tokenData")}`},
        url: `${baseUrl}customer/get_customer_list`
    }
   
    let response = await apiCall(config, dispatch)
    dispatch({
        type: CUSTOMER_DATA,
        payload: response.data
    })
}

// 
export const getCustomerDetails = ( customer_id ) => async dispatch => {
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${localStorage.getItem("tokenData")}`},
        url: `${baseUrl}customer/get_customer_data`,
        data:{customer_id}
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type:  CUSTOMER_DETAILS,
        payload: response.data
    })
}


export const setCustomerStatusAction = (data) => async dispatch => {
    let config = {
        method: 'POST',
        headers: {Authorization: `Bearer ${localStorage.getItem("tokenData")}`},
        url: `${baseUrl}customer/update_status`,
        data
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: CUSTOMER_STATUS_UPDATTE,
        payload: response.data
    })
}

export const EditCustomerAction = (data) => async dispatch => {
    let formdata = new FormData();
    formdata.append('name',data.name)
    formdata.append('customer_id',data.customer_id)
    formdata.append('customer_pic',data.customer_pic)
    formdata.append('email',data.email)
    formdata.append('address',data.address)
    formdata.append('zip_code',data.zip_code)
    formdata.append('phone',data.phone)
    let config = {
        method: 'POST',
        headers: {Authorization: `Bearer ${localStorage.getItem("tokenData")}`},
        url: `${baseUrl}customer/customer_upload`,
        data: formdata
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: CUSTOMER_PROFILE_UPDATE,
        payload: response.data
    })
}

