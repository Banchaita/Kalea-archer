import React, { useEffect, useState } from 'react'
import { Modal, Row, Col } from 'antd';
import toast from "../Components/common/toast"
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { AddColoursAction } from '../actions/collection'
import { showAddModalAction } from '../actions/modals'
import { getColourData } from '../actions/collection'


const AddColours = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [addimage, setAddImage] = useState('')
    const [colours, setColours] = useState('')
    const [category_id, setCategoryId] = useState('')
    const [product_id, setProductId] = useState('')
   


    let showAddModel = useSelector((state) => state.modals.showAddModel)
    const active_collection = useSelector(state => state.collection.active_collection)
    const active_all_id = useSelector(state => state.collection.active_all_id)
    const params = useParams()

    // console.log('7777777', active_collection)

    const ColoursAdd = (params) => {
        let data = {
            colour: colours,
            category_id: active_all_id.category_id,
            product_id: active_all_id.product_id,
            collection_id: params._id,
            product_image: addimage
        }
        // console.log(product_id)
        toast.success(' Successful')
        dispatch(AddColoursAction(data))
        if (data) {
            // alert('WWW')
            dispatch(getColourData(active_collection))
        }

    }

    return (
        <>
            <Modal
                title={'Add New Colours'}
                visible={showAddModel}
                onOk={() => ColoursAdd(params)}
                onCancel={() => dispatch(showAddModalAction(false))}

            >
                <Row>
                    <Col>
                        <label hidden>Category Type</label>
                        <input type={'text'} value={category_id} onChange={(e) => setCategoryId(e.target.value)} className={"form-control"} placeholder="Enter CategoryId" hidden/>
                        <label hidden>Product Type</label>
                        <input type={'text'}  value={product_id} onChange={(e) => setProductId(e.target.value)} className={"form-control"} placeholder="Enter ProductId" hidden/>
                        <label>Colurs</label>
                        <input type={'text'} onChange={(e) => setColours(e.target.value)} className={"form-control"} placeholder="Enter Colours" />
                        <label>Select Colours Images </label>
                        <input type="file" accept="image/*" multiple onChange={(event) => setAddImage(event.target.files[0])} placeholder='enter duration' className="form-control" style={{ width: '29rem' }} />

                    </Col>
                </Row>
            </Modal>
        </>
    )
}

export default AddColours
