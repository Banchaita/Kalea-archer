import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import toast from "../Components/common/toast"

import { Modal, Row } from 'antd';
import { showEidtModalAction } from '../actions/modals'
import { EditProductAction, getProductDetails } from '../actions/product'



const EditProduct = () => {
    const dispatch = useDispatch()
    const [product_type, setProdcutType] = useState('')

    let showEditMode = useSelector((state) => state.modals.showEditMode)
    const active_product = useSelector(state => state.product.active_product)
    const active_cat = useSelector(state => state.category.active_cat)
    const product_Detail = useSelector(state => state.product.product_detail)

    useEffect(() => {
        if (product_Detail) {
            product_Detail.map((key) => {
                if(key._id == product_Detail){
                    console.log(key)
                    setProdcutType(key.product_type)
                }
            })
        }

    },[])
    useEffect(() => {
        if (active_product) {
            product_Detail.map((key) => {
                if(key._id == active_product){
                    console.log(key)
                    setProdcutType(key.product_type)
                }
            })
           
        }
    },[active_product])

    


    const Productedit = () => {

        let data = {
            product_id: active_product,
            product_type
        }
        toast.success('Edit Successful')
        dispatch(EditProductAction(data))
        if(data){
            dispatch(getProductDetails(active_cat))
        }
    }
    return (
        <>
            <Modal
                title={'Edit Permission'}
                visible={showEditMode}
                onOk={() => Productedit()}
                onCancel={() => dispatch(showEidtModalAction(false))}
            >
                <Row>
                    <div className="col-12 pl-0 form-group mt-3 mb-3">
                        <label>Product Name</label>
                        <input type={'text'} value ={product_type} onChange={(e) => setProdcutType(e.target.value)} className={"form-control"} placeholder="Enter Product Name" />
                    </div>
                </Row>
            </Modal>
        </>
    )
}

export default EditProduct
