import React,{ useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal,Row} from 'antd';
import toast from "../Components/common/toast"
import{showEidtModalAction} from '../actions/modals'
import{EditSizeAction,getSizeList} from '../actions/collection'


const EditSize = () => {
    const dispatch = useDispatch()
    const [size, setSize] = useState('')
    const [size_id, setSizeId] = useState('')

    let showEditMode = useSelector((state) => state.modals.showEditMode)
    const  active_size = useSelector(state => state.collection.active_size)
    const size_List = useSelector(state => state.collection.size_list)
    
    useEffect(() => {
        if (size_List) {
            size_List.map((key) => {
                if(key._id == active_size){
                    setSize(key.size)
                }
            })
         
        }

    },[])
    useEffect(() => {
        if (active_size) {
            size_List.map((key) => {
                if(key._id == active_size){
                    setSize(key.size)
                }
            })
                 }
    },[active_size])
    


    const Sizeedit = () => {
        let data = {
            size_id: active_size,
            size: size,
        }
        toast.success('Edit Successful')
        dispatch(EditSizeAction(data))
        if(data){
            dispatch(getSizeList(data))
        }
    }



    return (
        <Modal
            title={'Edit Permission'}
            visible={showEditMode}
            onOk={() => Sizeedit()}
            onCancel={() => dispatch(showEidtModalAction(false))}
        >
            <Row>
                <div className="col-12 pl-0 form-group mt-3 mb-3">
                    <label>Size</label>
                    <input type={'text'}  value= {size} className={"form-control"} onChange={(e) => setSize(e.target.value)} placeholder="Enter Size" />
                </div>
            </Row>
        </Modal>
    )

}

export default EditSize