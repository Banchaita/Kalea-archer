import React, { useEffect, useState } from 'react';
import { Layout, Button, PageHeader, Row, Col } from 'antd';
import { useHistory } from 'react-router-dom';
import { fileUrl } from '../../constants/const';
import Sidebar from '../../Components/Sidebar';
import MyFooter from '../../Components/Footer';
import MyHeader from '../../Components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { showEditAdminAction } from "../../actions/modals"
import AdminAddModel from '../../modals/adminAddModel';
import EditAdmin from '../../modals/EditAdmin';

import { getAdminData,setActiveAdminAction} from '../../actions/auth'


const { Content } = Layout;

const Admin = () => {
    const history = useHistory()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [admin_id, setAdminID] = useState('')
    const [profile_pic, setProfile_pic] = useState('')

    const dispatch = useDispatch();

    const is_authenticated = useSelector(state =>state.auth.is_authenticated)
    const admin_data = useSelector(state =>state.auth.admin_data)
    

    
    useEffect(() => {
        if (is_authenticated) {
            dispatch(getAdminData())  
        }
    }, [is_authenticated])
    
    useEffect(() => {
        if(admin_data){
            setProfile_pic(admin_data.profile_pic)
            setName(admin_data.name)
            setEmail(admin_data.email)
            setAdminID(admin_data._id)
        }
    },)

    const saveAdmin = (admin_id) => {
        dispatch(setActiveAdminAction(admin_id))
        dispatch(showEditAdminAction(true))
    }



    return (
        <>
            <Sidebar></Sidebar>
            <MyHeader></MyHeader>
            <Layout>
                <Content style={{ minHeight: '75vh', padding: '10px', overflow: 'hidden' }}>
                    <AdminAddModel />
                    <EditAdmin/>

                    <div className="site-page-header-ghost-wrapper">
                        <PageHeader
                            ghost={false}
                            onBack={() => history.goBack()}
                            title={`Admin`}
                            style={{ marginLeft: '16rem', background: "#f0f0f0" }}
                        >
                        </PageHeader>

                        <Row justify='end'
                            style={{ marginLeft: '14rem', background: '#fff' }}>

                            <Col style={{ margin: '4rem' }}>
                                <label className="m-3">Name</label>
                                <input className="form-control" type="name" value={name} placeholder="Enetr Name" style={{ width: '600px' }} />
                            </Col>
                            <Col style={{ margin: '4rem' }}>
                                <label className="m-3" style={{ marginLeft: '6rem' }}>Email</label>
                                <input className="form-control" type="name" value={email} placeholder="Enetr Email" style={{ width: '600px' }} />
                                <img src={`${fileUrl}${profile_pic}`} style={{ width: '50%',marginLeft:'3rem' }}></img>

                            </Col>

                            <Button onClick={() => saveAdmin(admin_id)}  class="btn btn-sm" type='primary' style={{ marginTop: '2rem' }}>Update Profile</Button>

                        </Row>
                    </div>

                </Content>
            </Layout>
            <MyFooter></MyFooter>
        </>

    )

}
export default Admin