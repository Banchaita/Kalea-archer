import {
    CUSTOMER_ORDER,
    ORDER_DETAILS,
    DESIGNER_ORDER_DETAILS,
    DESIGNER_ORDER_LIST,
    SET_ACTIVE_CUSTOMER,
    SET_ACTIVE_ORDER,
    SET_ACTIVE_DESIGNER_ORDER


} from './types';

import { apiCall } from "../api";
import { baseUrl } from '../constants/const';

export const getOrderData = (customer_id) => async dispatch => {
    let config = {
        method: 'POST',
        headers: {Authorization: `Bearer ${localStorage.getItem("tokenData")}`},
        url: `${baseUrl}order/get_list`,
        data:{ customer_id }
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type:  CUSTOMER_ORDER,
        payload: response.data
    })
}
export const getOrderList = (order_id) => async dispatch => {
    let config = {
        method: 'POST',
        headers: {Authorization: `Bearer ${localStorage.getItem("tokenData")}`},
        url: `${baseUrl}order/get_orderdetails`,
        data:{ order_id }
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: ORDER_DETAILS,
        payload: response.data
    })
}


export const getDesignerOrderData = (designer_id) => async dispatch => {
    let config = {
        method: 'POST',
        headers: {Authorization: `Bearer ${localStorage.getItem("tokenData")}`},
        url: `${baseUrl}order/get_orderlist`,
        data:{ designer_id }
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type:  DESIGNER_ORDER_DETAILS,
        payload: response.data
    })
}


export const getDesignerOrderList = (order_id) => async dispatch => {
    let config = {
        method: 'POST',
        headers: {Authorization: `Bearer ${localStorage.getItem("tokenData")}`},
        url: `${baseUrl}order/get_designerorderdetails`,
        data:{ order_id }
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: DESIGNER_ORDER_LIST,
        payload: response.data
    })
}



export const setActiveCustomerAction = (customer_id) => async dispatch => {
    dispatch({
        type:   SET_ACTIVE_CUSTOMER,
        payload: customer_id
    })
}
export const setActivOrderAction = (order_id) => async dispatch => {
    dispatch({
        type:   SET_ACTIVE_ORDER,
        payload: order_id
    })
}
export const setActivDesignerOrderAction = (order_id) => async dispatch => {
    dispatch({
        type:  SET_ACTIVE_DESIGNER_ORDER,
        payload: order_id
    })
}

