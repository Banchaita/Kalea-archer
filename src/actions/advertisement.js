import {
    ADVERTISEMENT_DETAILS,
    ADD_MODAL,
    ADVERTISEMENT_STATUS_UPDATTE,
    SET_ACTIVE_ADVERTISEMENT,
    EDIT_MODAL,
    DELETE_MODAL

} from './types';

import { apiCall } from "../api";
import { baseUrl } from '../constants/const';


export const getAdvertisementData = () => async dispatch => {
    let config = {
        method: 'POST',
        headers: {Authorization: `Bearer ${localStorage.getItem("tokenData")}`},
        url: `${baseUrl}advertisement/get__advertisementlist`
    }
   
    let response = await apiCall(config, dispatch)
    dispatch({
        type:ADVERTISEMENT_DETAILS,
        payload: response.data
    })
}
export const AddAdvertisementAction = (data) => async dispatch => {
    let formdata = new FormData();
    formdata.append('duration',data.duration)
    formdata.append('start_date',data.start_date)
    formdata.append('end_date',data.end_date)
    formdata.append('referred_by',data.referred_by)
    formdata.append('advertisement_pic',data.advertisement_pic)
    let config = {
        method: 'POST',
        headers: {Authorization: `Bearer ${localStorage.getItem("tokenData")}`},
        url: `${baseUrl}advertisement/add_advertisement`,
        data:formdata
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type:  ADD_MODAL,
        payload: false
    })
}

export const setAdvertisementStatusAction = (data) => async dispatch => {
    let config = {
        method: 'POST',
        headers: {Authorization: `Bearer ${localStorage.getItem("tokenData")}`},
        url: `${baseUrl}advertisement/update_status`,
        data
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: ADVERTISEMENT_STATUS_UPDATTE,
        payload: response.data
    })
}

export const EditAdvertisemetAction = (data) => async dispatch => {
    
    let formdata = new FormData();
    formdata.append('duration',data.duration)
    formdata.append('start_date',data.start_date)
    formdata.append('end_date',data.end_date)
    formdata.append('referred_by',data.referred_by)
    formdata.append('advertisement_pic',data.advertisement_pic)
    formdata.append('advertisement_id',data.advertisement_id)

    let config = {
        method: 'POST',
        headers: {Authorization: `Bearer ${localStorage.getItem("tokenData")}`},
        url: `${baseUrl}advertisement/advertisementlist_update`,
        data:formdata
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: EDIT_MODAL,
        payload: false
    })
}

export const DeleteAdvertisemetAction = (data) => async dispatch => {
    let config = {
        method: 'POST',
        headers: {Authorization: `Bearer ${localStorage.getItem("tokenData")}`},
        url: `${baseUrl}advertisement/advertisementlist_delete`,
        data
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: DELETE_MODAL,
        payload: false
    })
}


export const setActiveAdvertisementAction = (advertisement_id) => async dispatch => {
    dispatch({
        type:  SET_ACTIVE_ADVERTISEMENT,
        payload: advertisement_id
    })
}