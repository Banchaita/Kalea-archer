import {
    SHOW_LOADER,
} from './types';

export const showLoaderAction = (show) => async dispatch => {
    dispatch({
        type: SHOW_LOADER,
        payload: show
    })
}