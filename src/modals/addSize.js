import React, { useEffect, useState } from "react";
import { Modal, Row } from 'antd';
import toast from "../Components/common/toast"
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { showAddSizeModalAction } from '../actions/modals'
import { AddSizeAction ,getSizeData} from '../actions/collection'

const AddSize = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const [size, setSize] = useState('')
    const [colour_id, setColoursId] = useState('')
    const [category_id, setCategoryId] = useState('')
    const [product_id, setProductId] = useState('')
   
    let showAddSizeModel = useSelector((state) => state.modals.showAddSizeModel)
    const active_all_id = useSelector(state => state.collection.active_all_id)
    const  active_colour = useSelector(state => state.collection. active_colour)
    const  size_data = useSelector(state => state.collection. size_data)

    // console.log('7777777',size_data)



    const params = useParams()

    // console.log(params)

    const Sizeadd = (params) => {
        let data = {
            size: size,
            colour_id: params._id,
            category_id: active_all_id.category_id,
            product_id: active_all_id.product_id,

        }
        toast.success(' Successful')
        dispatch(AddSizeAction(data))
        // if (data) {
        //     alert('tttt')
        //     // history.push('/SizeView')
        //     dispatch(getSizeData(active_colour))
        // }
    }
    useEffect(() => {
        if (size_data) {
            console.log('++++++++++++++++',size_data)
            // alert('yyy')
            dispatch(getSizeData(active_colour))
        }
    },[])



    return (
        <Modal
            title={'Add New Size'}
            visible={showAddSizeModel}
            onOk={() => Sizeadd(params)}
            onCancel={() => dispatch(showAddSizeModalAction(false))}

        >
            <Row>
                <div className="col-12 pl-0 form-group mt-3 mb-3">
                    <label hidden>Category Type</label>
                    <input type={'text'} value={category_id} onChange={(e) => setCategoryId(e.target.value)} className={"form-control"} placeholder="Enter CategoryId" hidden />
                    <label hidden>Product Type</label>
                    <input type={'text'} value={product_id} onChange={(e) => setProductId(e.target.value)} className={"form-control"} placeholder="Enter ProductId" hidden />
                    <label>Size</label>
                    <input type={'text'} onChange={(e) => setSize(e.target.value)} className={"form-control"} placeholder="Enter Size" />
                </div>
            </Row>
        </Modal>

    )

}
export default AddSize