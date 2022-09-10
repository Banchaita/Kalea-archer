import React from 'react'
import { Modal, Row } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import{showAddModalAction} from '../actions/modals'

const Userrole = () => {
    const dispatch = useDispatch()
    let showAddModel = useSelector((state) => state.modals.showAddModel)

    return (
        <Modal
            title={'Update User Role'}
            visible={showAddModel}
            onOk={() => dispatch(showAddModalAction(false))}
            onCancel={() => dispatch(showAddModalAction(false))}

        >
            <Row>
                <div className="col-12 pl-0 form-group mt-3 mb-3">
                    <label>Select Role</label>
                    <select placeholder='enter duration' className='form-control'>
                        
                        <option value="student_designer">Student Designer</option>
                        <option value="designer">Designer</option>
                    </select>
                </div>
            </Row>
        </Modal>

    )
}

export default Userrole
