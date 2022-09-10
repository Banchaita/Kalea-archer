import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Modal, Row } from 'antd';
import toast from "../Components/common/toast"
import { useDispatch, useSelector } from "react-redux"
import 'image-upload-react/dist/index.css'
import { showAddCategoryModalAction } from '../actions/modals'
import {  AddCategoryImage, getCategorytData } from '../actions/category'
import Loader from '../Components/loader'

const AddCategory = () => {
    const history = useHistory();
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [addimage, setAddImage] = useState('')

    let showAddCategoryModel = useSelector((state) => state.modals.showAddCategoryModel)
    const categoryData = useSelector(state => state.category.category_data)


   
    const AddCategory = async () => {
        let data = {
            name: name,
            category_pic: addimage
        }
        toast.success(' Successful')
        dispatch(AddCategoryImage(data))
        if (data) {
            history.push('/category')
         dispatch(getCategorytData(data))
        }
    }

    



    return (
        <>
        <Loader/>
        <Modal
        title={'Add New Category'}
        visible={showAddCategoryModel}
        onOk={() => AddCategory()}
        onCancel={() => dispatch(showAddCategoryModalAction(false))}
        >
            <Row>
                <div className="col-12 pl-0 form-group mt-3 mb-3">
                    <label>Category Name</label>
                    <input type={'text'} className={"form-control"} onChange={(e) => setName(e.target.value)} placeholder="Enter category Name" />
                    <label>Category Image</label>
                    <input type="file" accept="image/*" multiple onChange={(event) => setAddImage(event.target.files[0])} className={"form-control"} />

                </div>
            </Row>
        </Modal>

    </>
    )


}

export default AddCategory