import {
    TRANSACTION_DETAILS,
    DESIGNER_TRANSACTION_DETAILS

} from './types';

import { apiCall } from "../api";
import { baseUrl } from '../constants/const';


export const getTransactionList = (customer_id) => async dispatch => {
    let config = {
        method: 'POST',
        headers: {Authorization: `Bearer ${localStorage.getItem("tokenData")}`},
        url: `${baseUrl}transaction/get_list`,
        data:{ customer_id }
    }
   
    let response = await apiCall(config, dispatch)
    dispatch({
        type:TRANSACTION_DETAILS,
        payload: response.data
    })
}
export const getDesignerTransactionList = (designer_id) => async dispatch => {
    let config = {
        method: 'POST',
        headers: {Authorization: `Bearer ${localStorage.getItem("tokenData")}`},
        url: `${baseUrl}transaction/get_transactionlist`,
        data:{ designer_id }
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type:DESIGNER_TRANSACTION_DETAILS,
        payload: response.data
    })
}