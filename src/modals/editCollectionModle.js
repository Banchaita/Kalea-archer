import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Row } from 'antd';
import { showEidtModalAction } from '../actions/modals'


const EditCollectionModel = () => {
    const dispatch = useDispatch()
    let showEditMode = useSelector((state) => state.modals.showEditMode)



    return (
        <Modal
            title={'Edit Collection'}
            visible={showEditMode}
            onOk={() => dispatch(showEidtModalAction(false))}
            onCancel={() => dispatch(showEidtModalAction(false))}

        >
            <div className="row">
                <div className="col-12 form-group">
                    <label>Add Image</label>
                </div>
                <div className="col-6 form-group mb-3">
                    <label>
                        <input type="file" accept=".png,.jpeg" style={{ display: 'none', visibility: 'hidden' }} />
                        <img style={{ width: '100px', height: '100px', border: '1px solid #000000' }}/>
                    </label>
                </div>
                <div className="col-12 form-group mb-2">
                    <label>Product Name</label>
                    <input type={"text"} className={"form-control"} placeholder={"Enter Product Name"} />
                </div>
                <div className="col-12 form-group ">
                    <label>Product Price</label>
                    <input type={"text"} className={"form-control"} placeholder={"Enter Product Price"} />
                </div>
            </div>
        </Modal>
    )

}

export default EditCollectionModel