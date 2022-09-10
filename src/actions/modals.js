import {
  EDIT_MODAL,
  ADD_MODAL,
  ADD_SIZE_MODAL,
  CHANGE_PASSWORD_MODAL,
  ADD_CATEGORY_MODAL,
  ADD_PRODUCT_MODAL,
  EDIT_ADMIN_MODAL,
  DELETE_MODAL,
  SIGNUP_MODAL,
  ADD_COLOURS_MODAL
} from './types';



export const showEidtModalAction = (show) => async dispatch => {
    dispatch({
        type: EDIT_MODAL,
        payload: show
    })
}
export const showAddModalAction = (show) => async dispatch => {
    dispatch({
        type: ADD_MODAL,
        payload: show
    })
}
export const showAddSizeModalAction = (show) => async dispatch => {
    dispatch({
        type: ADD_SIZE_MODAL,
        payload: show
    })
}
export const showDeleteModalAction = (show) => async dispatch => {
    dispatch({
        type: DELETE_MODAL,
        payload: show
    })
}
export const showChangePasswordModalAction = (show) => async dispatch => {
    dispatch({
        type: CHANGE_PASSWORD_MODAL,
        payload: show
    })
}
export const showAddCategoryModalAction = (show) => async dispatch => {
    dispatch({
        type: ADD_CATEGORY_MODAL,
        payload: show
    })
}
export const showAddProductModalAction = (show) => async dispatch => {
    dispatch({
        type: ADD_PRODUCT_MODAL,
        payload: show
    })
}
export const showEditAdminAction = (show) => async dispatch => {
    dispatch({
        type: EDIT_ADMIN_MODAL,
        payload: show
    })
}
export const showSignupAdminAction = (show) => async dispatch => {
    dispatch({
        type: SIGNUP_MODAL,
        payload: show
    })
}
export const showAddColoursModalAction = (show) => async dispatch => {
    dispatch({
        type: ADD_COLOURS_MODAL,
        payload: show
    })
}
