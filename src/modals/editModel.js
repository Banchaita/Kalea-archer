import React,{ useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "../Components/common/toast"

import { Modal,Row} from 'antd';
import{showEidtModalAction} from '../actions/modals'
import{EditCategoryAction,getCategorytData} from '../actions/category'


const EditModel = () => {
    // alert('modal alert')
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [category_id, setCategoryId] = useState('')


    let showEditMode = useSelector((state) => state.modals.showEditMode)
    const active_cat = useSelector((state) => state.category.active_cat)
    const categoryData = useSelector(state => state.category.category_data)

    useEffect(() => {
        if (categoryData) {
            categoryData.map((key) => {
                if(key._id == categoryData){
                    setName(key.name)
                }
            })
        }
    },[])
    useEffect(() => {
        if (active_cat) {
            categoryData.map((key) => {
                if(key._id == active_cat){
                    setName(key.name)
                }
            })
           
        }
    },[active_cat])
    



    const Categoryedit = () => {
        let data = {
            category_id: active_cat,
            name
        }
        toast.success(' Successful') 
        dispatch(EditCategoryAction(data))
        if(data)
        {
            dispatch(getCategorytData(data))
        }  
    }


    return (
        <Modal
            title={'Edit Permission'}
            visible={showEditMode}
            onOk={() => Categoryedit()}
            onCancel={() =>  dispatch(showEidtModalAction(false))}
        >
            <Row>
                <div className="col-12 pl-0 form-group mt-3 mb-3">
                    <label>Category Name</label>
                    <input type={'text'}  value ={name} onChange={(e) => setName(e.target.value)} className={"form-control"} placeholder="Enter Category Name" />
                </div>
            </Row>
        </Modal>
    )

}

export default EditModel