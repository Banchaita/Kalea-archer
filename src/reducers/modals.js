import {
    EDIT_MODAL,
    ADD_MODAL,
    CHANGE_PASSWORD_MODAL, 
    ADD_SIZE_MODAL,
    ADD_CATEGORY_MODAL,
    ADD_PRODUCT_MODAL,
    ADD_COLOURS_MODAL,
    EDIT_ADMIN_MODAL,
    DELETE_MODAL,
    
} from "../actions/types";

const initialState = {
    showaDeleteModal:false,
    showEditMode:false,
    showAddModel:false,
    showAddSizeModel:false,
    showAddcoloursModel:false,
    showAddCategoryModel:false,
    showAddProductModel:false,
    showChangePasswordModel:false,
    showAdminEditModel:false,
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case EDIT_MODAL:
            return {
                ...state,
                showEditMode: payload,
            };
        case ADD_MODAL:
            return {
                ...state,
                showAddModel: payload,
            };
        case  ADD_SIZE_MODAL:
            return {
                ...state,
                showAddSizeModel: payload,
            };
        case  ADD_COLOURS_MODAL:
            return {
                ...state,
                showAddcoloursModel: payload,
            };
        case  ADD_CATEGORY_MODAL:
            return {
                ...state,
                showAddCategoryModel: payload,
            };
        case  ADD_PRODUCT_MODAL:
            return {
                ...state,
                showAddProductModel: payload,
            };
        case CHANGE_PASSWORD_MODAL:
            return {
                ...state,
                showChangePasswordModel: payload,
            };
        case  EDIT_ADMIN_MODAL:
            return {
                ...state,
                showAdminEditModel:payload,

            };
        case  DELETE_MODAL:
            return {
                ...state,
                showaDeleteModal:payload,

            };
        default:
            return state;
    }
}