import {
    PRODUCT_DATA,
    ADD_MODAL,
    EDIT_MODAL,
    SET_ACTIVE_PRODUCT,
    PRODUCT_STATUS_UPDATTE

} from './types';

import { apiCall } from "../api";
import { baseUrl } from '../constants/const';

export const getProductDetails = ( category_id ) => async dispatch => {
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${localStorage.getItem("tokenData")}`},
        url: `${baseUrl}product/get_productlsit`,
        data:{ category_id}
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: PRODUCT_DATA,
        payload: response.data
    })
}


export const AddProductAction = (data) => async dispatch => {
    let config = {
        method: 'POST',
        headers: {Authorization: `Bearer ${localStorage.getItem("tokenData")}`},
        url: `${baseUrl}product/add_product`,
        data:data
    }
    
    let response = await apiCall(config, dispatch)
    console.log(response)
    dispatch({
        type:  ADD_MODAL,
        payload: false
    })
}

export const EditProductAction = (data) => async dispatch => {
    let config = {
        method: 'POST',
        headers: {Authorization: `Bearer ${localStorage.getItem("tokenData")}`},
        url: `${baseUrl}product/product_update`,
        data
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type:EDIT_MODAL,
        payload: false
    })
}


export const setProductStatusAction = (data) => async dispatch => {
    let config = {
        method: 'POST',
        headers: {Authorization: `Bearer ${localStorage.getItem("tokenData")}`},
        url: `${baseUrl}product/update_status`,
        data
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: PRODUCT_STATUS_UPDATTE,
        payload: response.data
    })
}

export const setActiveProcutAction = (product_id) => async dispatch => {
    dispatch({
        type: SET_ACTIVE_PRODUCT,
        payload: product_id
    })
}

