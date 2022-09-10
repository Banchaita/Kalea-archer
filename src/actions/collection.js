import {
    COLLECTION_DETAILS,
    COLOURS_DETAILS,
    ADD_MODAL,
    COLLECTION_ADD,
    SIZE_DETAILS,
    SIZE_LIST,
    EDIT_MODAL,
    ADD_SIZE_MODAL,
    SIZE_STATUS_UPDATTE,
    SET_ACTIVE_DESIGNER,
    SET_ACTIVE_COLLECTION,
    SET_ACTIVE_COLOURS,
    SET_ACTIVE_SIZE,
    SET_ALL_ID

} from './types';

import { apiCall } from "../api";
import { baseUrl } from '../constants/const';


export const getCollectiontData = (designer_id) => async dispatch => {
    let config = {
        method: 'POST',
        headers: {Authorization: `Bearer ${localStorage.getItem("tokenData")}`},
        url: `${baseUrl}collection/get_list`,
        data:{ designer_id }
    }
   
    let response = await apiCall(config, dispatch)
    dispatch({
        type: COLLECTION_DETAILS,
        payload: response.data
    })
}

export const getColourData = (collection_id) => async dispatch => {
    let config = {
        method: 'POST',
        headers: {Authorization: `Bearer ${localStorage.getItem("tokenData")}`},
        url: `${baseUrl}collection/get_colour`,
        data:{ collection_id}
    }
   
    let response = await apiCall(config, dispatch)
    dispatch({
        type:  COLOURS_DETAILS,
        payload: response.data
    })
}
export const AddColoursAction = (data) => async dispatch => {
    let formdata = new FormData();
    formdata.append('colour',data.colour)
    formdata.append('product_image',data.product_image)
    formdata.append('collection_id',data.collection_id)
    formdata.append('product_id',data.product_id)
    formdata.append('category_id',data.category_id)
    let config = {
        method: 'POST',
        headers: {Authorization: `Bearer ${localStorage.getItem("tokenData")}`},
        url: `${baseUrl}collection/add_colour`,
        data:formdata
    }
    
    let response = await apiCall(config, dispatch)
    console.log(response)
    dispatch({
        type:  ADD_MODAL,
        payload: false
    })
}

export const getSizeData = (colour_id) => async dispatch => {
    let config = {
        method: 'POST',
        headers: {Authorization: `Bearer ${localStorage.getItem("tokenData")}`},
        url: `${baseUrl}collection/get_size`,
        data:{ colour_id }
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type:  SIZE_DETAILS,
        payload: response.data
    })
}
export const getSizeList = () => async dispatch => {
    let config = {
        method: 'POST',
        headers: {Authorization: `Bearer ${localStorage.getItem("tokenData")}`},
        url: `${baseUrl}collection/get_alllist`
    }
   
    let response = await apiCall(config, dispatch)
    dispatch({
        type: SIZE_LIST,
        payload: response.data
    })
}
export const AddSizeAction = (data) => async dispatch => {
    let config = {
        method: 'POST',
        headers: {Authorization: `Bearer ${localStorage.getItem("tokenData")}`},
        url: `${baseUrl}collection/add_size`,
        data:data
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type:  ADD_SIZE_MODAL,
        payload: false
    })
}
export const EditSizeAction = (data) => async dispatch => {
    let config = {
        method: 'POST',
        headers: {Authorization: `Bearer ${localStorage.getItem("tokenData")}`},
        url: `${baseUrl}collection/size_update`,
        data
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type:EDIT_MODAL,
        payload: false
    })
}
export const setSizeStatusAction = (data) => async dispatch => {
    let config = {
        method: 'POST',
        headers: {Authorization: `Bearer ${localStorage.getItem("tokenData")}`},
        url: `${baseUrl}collection/update_status`,
        data
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: SIZE_STATUS_UPDATTE,
        payload: response.data
    })
}

export const AddColletionAction = (data) => async dispatch => {
    let config = {
        method: 'POST',
        headers: {Authorization: `Bearer ${localStorage.getItem("tokenData")}`},
        url: `${baseUrl}collection/add_collection`,
        data:data
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type:COLLECTION_ADD,
        payload: response.data
    })
}









export const setActiveDesignerAction = (designer_id) => async dispatch => {
    dispatch({
        type: SET_ACTIVE_DESIGNER,
        payload: designer_id
    })
}
export const setActiveCollectionAction = (collection_id) => async dispatch => {
    dispatch({
        type:  SET_ACTIVE_COLLECTION,
        payload: collection_id
    })
}
export const setActiveColourAction = (colour_id) => async dispatch => {
    dispatch({
        type:  SET_ACTIVE_COLOURS,
        payload: colour_id
    })
}
export const setActiveSizeAction = (size_id) => async dispatch => {
    dispatch({
        type:  SET_ACTIVE_SIZE,
        payload: size_id
    })
}


export const setAllId = (product_id,category_id) => async dispatch => {
    let data ={
        product_id,
        category_id
    }
    dispatch({
        type:  SET_ALL_ID,
        payload: data
    })
}