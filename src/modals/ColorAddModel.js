import React from 'react'
import { Modal, Row } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import{showAddModalAction} from '../actions/modals'


const AddColour = () =>{
    const dispatch = useDispatch()
    let showAddModel = useSelector((state) => state.modals.showAddModel)

    return(
        <Modal
            title={'Add Coloures & Sizes'}
            visible={showAddModel}
            onOk={() => dispatch(showAddModalAction(false))}
            onCancel={() =>  dispatch(showAddModalAction(false))}
        >
            <Row>
                <div className="col-12 pl-0 form-group mt-3 mb-3">
                    <label>Enter Product Colours</label>
                    <input type={'text'} className={"form-control"} placeholder="Enter Colours" />
                </div>
                <div className="col-12 pl-0 form-group mt-3 mb-3">
                    <label>Enter Product Sizes</label>
                    <input type={'text'} className={"form-control"} placeholder="Enter Sizes" />
                </div>
            </Row>
        </Modal>

    )
}
export default AddColour 
