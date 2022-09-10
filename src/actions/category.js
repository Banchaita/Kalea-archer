import {
    CATEGORY_DETAILS,
    ADD_CATEGORY_MODAL,
    EDIT_MODAL,
    CATEGORY_STATUS_UPDATTE,
    SET_ACTIVE_CAT

} from './types';

import { apiCall } from "../api";
import { baseUrl } from '../constants/const';


export const getCategorytData = () => async dispatch => {
    let config = {
        method: 'POST',
        headers: {Authorization: `Bearer ${localStorage.getItem("tokenData")}`},
        url: `${baseUrl}category/get_catogerylist`
    }
   
    let response = await apiCall(config, dispatch)
    dispatch({
        type:CATEGORY_DETAILS,
        payload: response.data
    })
}
export const EditCategoryAction = (data) => async dispatch => {
    let config = {
        method: 'POST',
        headers: {Authorization: `Bearer ${localStorage.getItem("tokenData")}`},
        url: `${baseUrl}category/catogory_update`,
        data
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type:EDIT_MODAL,
        payload: false
    })
}
export const AddCategoryImage = (data) => async dispatch => {
    let formdata = new FormData();
    formdata.append('name',data.name)
    formdata.append('category_pic',data.category_pic)
    let config = {
        method: 'POST',
        headers: {},
        url: `${baseUrl}category/add_category`,
        data: formdata
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type:  ADD_CATEGORY_MODAL,
        payload: false
    })
}

export const setStatusAction = (data) => async dispatch => {
    let config = {
        method: 'POST',
        headers: {Authorization: `Bearer ${localStorage.getItem("tokenData")}`},
        url: `${baseUrl}category/update_status`,
        data
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: CATEGORY_STATUS_UPDATTE,
        payload: response.data
    })
}



export const setActiveCategoryAction = (cat_id) => async dispatch => {
    dispatch({
        type: SET_ACTIVE_CAT,
        payload: cat_id
    })
}




