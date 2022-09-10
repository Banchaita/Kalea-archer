import React, { useEffect, useState } from 'react'
import { Modal,Row } from 'antd';
import toast from "../Components/common/toast"
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import{showChangePasswordModalAction} from '../actions/modals'
import{changePassword,getAdminData} from '../actions/auth'


const Changepassword = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [old_password, setOldPassword] = useState('')
    const [password, setPassword] = useState('')
    const [new_password, setNewPassword] = useState('')
    const [comfime_password, setComfimePassword] = useState('')
    const [admin_id, setAdminID] = useState('')

    let  showChangePasswordModel = useSelector((state) => state.modals.showChangePasswordModel)
    const admin_data = useSelector(state =>state.auth.admin_data)
    const is_authenticated = useSelector(state =>state.auth.is_authenticated)



    useEffect(() => {
      if (is_authenticated) {
          dispatch(getAdminData())  
      }
  }, [is_authenticated])

    useEffect(() => {
      if(admin_data){
        setAdminID(admin_data._id)
        // setPassword(admin_data.password)
        // console.log(admin_data.password)
      }
  },)


    const handlechangePassword =(admin_id) => {
      if(old_password !== old_password){
          toast.error("Old Password not some")
        return false
      }
    if (old_password === "" || new_password === "" || comfime_password === "") {
      toast.error("Please Fill Password & Confirm Password to Proceed...")
      return false
    }
    if (new_password !== comfime_password) {
      toast.error("Password & Confirm Password Should Be Same")
      return false
    }
    let data = {
      old_password: old_password,
      new_password: new_password,
      admin_id:admin_id
    }
    dispatch(changePassword(data))
    history.push('/')
    toast.success("Password has been changed")


  }

    return (
        <>
            <Modal
            title={'Change Password'}
            visible={showChangePasswordModel}
            onOk={() => handlechangePassword(admin_id)}
            onCancel={() =>  dispatch(showChangePasswordModalAction(false))}
        >
            <Row>
                <div className="col-12 pl-0 form-group mt-3 mb-3">
                    <label>Old Password</label>
                    <input type={'password'} className={"form-control"} onChange={(e) => setOldPassword(e.target.value)}  placeholder="Enter old password" />
                </div>
                <div className="col-12 pl-0 form-group  mt-3 mb-3">
                    <label>New Password</label>
                    <input type={'password'} className={"form-control"} onChange={(e) => setNewPassword(e.target.value)} placeholder="Enter new password" />
                </div>
                <div className="col-12 pl-0 form-group  mt-3 mb-3">
                    <label>Confime Password</label>
                    <input type={'password'} className={"form-control"} onChange={(e) => setComfimePassword(e.target.value)}  placeholder="Enter Confirm password" />
                </div>
            </Row>
        </Modal>
        </>
    )
}

export default Changepassword
