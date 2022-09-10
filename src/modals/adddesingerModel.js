import React from "react";
import { Modal, Row } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import{showAddModalAction} from '../actions/modals'




const AddDesinger = () => {

    const dispatch = useDispatch()
    let showAddModel = useSelector((state) => state.modals.showAddModel)

    return (
        <Modal
            title={'Add New Designer'}
            visible={showAddModel}
            onOk={() => dispatch(showAddModalAction(false))}
            onCancel={() =>  dispatch(showAddModalAction(false))}
            
        >
            <Row>
                <div className="col-12 pl-0 form-group mt-3 mb-3">
                    <label>Name</label>
                    <input type={'text'} className={"form-control"} placeholder="Enter Name" />
                </div>
                <div className="col-12 pl-0 form-group mt-3 mb-3">
                    <label>Email</label>
                    <input type={'email'} className={"form-control"} placeholder="Enter Email" />
                </div>
                <div className="col-12 pl-0 form-group mt-3 mb-3">
                    <label>Phone</label>
                    <input type={'text'} className={"form-control"} placeholder="Enter Phone" />
                </div>
                <div className="col-12 pl-0 form-group mt-3 mb-3">
                    <label>Address</label>
                    <input type={'text'} className={"form-control"} placeholder="Enter Address" />
                </div>
                <div className="col-12 pl-0 form-group mt-3 mb-3">
                    <label>Password</label>
                    <input type={'password'} className={"form-control"} placeholder="Enter Password" />
                </div>
                <div className="col-12 pl-0 form-group mt-3 mb-3">
                    <label>Comfired Password</label>
                    <input type={'password'} className={"form-control"} placeholder="Enter Comfired Password" />
                </div>
            </Row>
        </Modal>

    )

}
export default AddDesinger