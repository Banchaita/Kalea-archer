import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fileUrl } from '../constants/const';
import toast from "../Components/common/toast"
import { Modal, Row } from 'antd';
import { showEditAdminAction } from '../actions/modals'
import { EditAdminAction, getAdminData } from '../actions/auth'

const EditAdmin = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [profile_pic, setProfile_pic] = useState('')
    const [addimage, setAddImage] = useState('')



    let showAdminEditModel = useSelector((state) => state.modals.showAdminEditModel)
    const active_admin = useSelector(state => state.auth.active_admin)
    const admindata = useSelector(state => state.auth.admin_data)




    useEffect(() => {
        if (admindata) {
            setProfile_pic(admindata.profile_pic)
            setName(admindata.name || name)
            setEmail(admindata.email || email)
        }
    }, [])



    const Adminedit = () => {
        if (email == '' || name == '') {
            toast.error("Please enter a valid email address or name to proceed")
            return false;
        }
        let data = {
            admin_id: active_admin,
            name: name,
            email: email,
            profile_pic: profile_pic
        }
        toast.success('Edit Successful')
        dispatch(EditAdminAction(data))
        if (data) {
            dispatch(getAdminData(data))
        }
    }

    return (
        <>
            <Modal
                title={'Edit Permission'}
                visible={showAdminEditModel}
                onOk={() => Adminedit()}
                onCancel={() => dispatch(showEditAdminAction(false))}
            >
                <Row>
                    <div className="col-12 pl-0 form-group mt-3 mb-3">
                        <img src={`${fileUrl}${profile_pic}`} style={{ width: '50%', marginLeft: '3rem' }}></img><br />
                        <div className="col-6 form-group mb-3">
                            <label>
                                <input type="file" accept="image/*" multiple onChange={(event) => setProfile_pic(event.target.files[0])} className="form-control" style={{ width: '29rem' }} />

                            </label>
                        </div>
                        <label>Name</label>
                        <input type={'text'} value={name} onChange={(e) => setName(e.target.value)} className={"form-control"} placeholder="Enter  Name" />
                        <label>Email</label>
                        <input type={'text'} value={email} onChange={(e) => setEmail(e.target.value)} className={"form-control"} placeholder="Enter Emial" />
                    </div>
                </Row>
            </Modal>
        </>
    )
}

export default EditAdmin
