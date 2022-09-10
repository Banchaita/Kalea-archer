import {
    DESIGNER_DATA,
    DESIGNER_DETAILS,
    DESIGNER_PROFILE_UPDATE ,
    DESIGNER_STATUS_UPDATTE

} from './types';

import { apiCall } from "../api";
import { baseUrl } from '../constants/const';


export const getDesignerData = () => async dispatch => {
    let config = {
        method: 'POST',
        headers: {Authorization: `Bearer ${localStorage.getItem("tokenData")}`},
        url: `${baseUrl}designer/get_designer_list`
    }
   
    let response = await apiCall(config, dispatch)
    dispatch({
        type: DESIGNER_DATA,
        payload: response.data
    })
}

export const getDesignerDetails = ( designer_id ) => async dispatch => {
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${localStorage.getItem("tokenData")}`},
        url: `${baseUrl}designer/get_designer_data`,
        data:{designer_id}
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: DESIGNER_DETAILS,
        payload: response.data
    })
}

export const EditDesignerAction = (data) => async dispatch => {
    let formdata = new FormData();
    formdata.append('name',data.name)
    formdata.append('designer_id',data.designer_id)
    formdata.append('designer_pic',data.designer_pic)
    formdata.append('email',data.email)
    formdata.append('address',data.address)
    formdata.append('country',data.country)
    formdata.append('states',data.states)
    formdata.append('city',data.city)
    formdata.append('zip_code',data.zip_code)
    formdata.append('phone',data.phone)
    formdata.append('about',data.about)
    let config = {
        method: 'POST',
        headers: {Authorization: `Bearer ${localStorage.getItem("tokenData")}`},
        url: `${baseUrl}designer/designer_image`,
        data: formdata
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: DESIGNER_PROFILE_UPDATE,
        payload: response.data
    })
}

export const setDesignerStatusAction = (data) => async dispatch => {
    let config = {
        method: 'POST',
        headers: {Authorization: `Bearer ${localStorage.getItem("tokenData")}`},
        url: `${baseUrl}designer/update_status`,
        data
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: DESIGNER_STATUS_UPDATTE,
        payload: response.data
    })
}


