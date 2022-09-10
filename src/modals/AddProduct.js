import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Modal, Row } from 'antd';
import toast from "../Components/common/toast"
import { useDispatch, useSelector } from "react-redux";
import { showAddModalAction } from '../actions/modals'
import { AddProductAction,getProductDetails } from '../actions/product'




const AddProduct = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    let showAddModel = useSelector((state) => state.modals.showAddModel)
    const productData = useSelector(state => state.product.product_data)
    const active_cat = useSelector(state => state.category.active_cat)


    const params = useParams()
    
    const AddProduct = ( params ) => {
        let data = {
            product_type: name,
            category_id:params._id
        } 
        toast.success(' Successful')
        dispatch(AddProductAction(data))

       if(data){
            dispatch(getProductDetails(active_cat))
        }
    }


    return (
        <Modal
            title={'Add New Product'}
            visible={showAddModel}
            onOk={() =>AddProduct(params)}
            onCancel={() => dispatch(showAddModalAction(false))}
        >
            <Row>
                <div className="col-12 pl-0 form-group mt-3 mb-3">
                    <label>Enter Product Name</label>
                    <input type={'text'} className={"form-control"} onChange={(e) => setName(e.target.value)} placeholder="Enter Product Name" />
                </div>

            </Row>
        </Modal>
    )


}

export default AddProduct