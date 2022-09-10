import React from 'react'
import { Modal,Row } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import{showAddModalAction} from '../actions/modals'



const AddCustomer = () => {
    const dispatch = useDispatch()
    let showAddModel = useSelector((state) => state.modals.showAddModel)

    return (
        <Modal
            title={'Add New Customer'}
            visible={showAddModel}
            onOk={() => dispatch(showAddModalAction(false))}
            onCancel={() =>  dispatch(showAddModalAction(false))}
        >
            <Row>
                <div className="col-12 pl-0 form-group mt-3 mb-3">
                    <label>Enter Name</label>
                    <input type={'text'} className={"form-control"} placeholder="Enter Name" />
                </div>
                <div className="col-12 pl-0 form-group  mt-3 mb-3">
                    <label>Enter Email</label>
                    <input type={'text'} className={"form-control"} placeholder="Enter Email" />
                </div>
                <div className="col-12 pl-0 form-group  mt-3 mb-3">
                    <label>Enter Password</label>
                    <input type={'password'} className={"form-control"} placeholder="Enter Password" />
                </div>
                <div className="col-12 pl-0 form-group  mt-3 mb-3">
                    <label>Enter Confirm Password</label>
                    <input type={'password'} className={"form-control"} placeholder="Enter Confirm Password" />
                </div>
            </Row>
        </Modal>
    )


}

export default AddCustomer