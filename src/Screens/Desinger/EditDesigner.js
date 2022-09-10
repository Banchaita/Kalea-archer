import React, { useState, useEffect } from 'react'
import { Layout, PageHeader, Row, Col, Button } from 'antd';
import { useHistory } from 'react-router';
import toast from "../../Components/common/toast"
import { fileUrl } from '../../constants/const';
import { useDispatch, useSelector } from 'react-redux';
import { getDesignerDetails, EditDesignerAction } from '../../actions/designer'

import MyFooter from '../../Components/Footer'
import MyHeader from '../../Components/Header'
import Sidebar from '../../Components/Sidebar'
const { Content } = Layout;



const EditDesigner = () => {
    const history = useHistory()
    const [designer_pic, setDesignerPic] = useState('')
    const [name, setName] = useState('')
    const [designer_id, setDesignerId] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [country, setCountry] = useState('')
    const [states, setStates] = useState('')
    const [city, setCity] = useState('')
    const [zip_code, setZipCode] = useState('')
    const [about, setAbout] = useState('')
    const [addimage, setAddImage] = useState('')


    const dispatch = useDispatch();
    const designer_detail = useSelector(state => state.designer.designer_detail)

    useEffect(() => {
        if (!localStorage.getItem('tokenData')) {
            history.push('/')
            return false
        }
        if (designer_detail) {
            setDesignerId(designer_detail._id)
            setDesignerPic(designer_detail.designer_pic)
            setName(designer_detail.name || name)
            setEmail(designer_detail.email || email)
            setPhone(designer_detail.phone || phone)
            setAddress(designer_detail.address || address)
            setCountry(designer_detail.country || country)
            setStates(designer_detail.states || states)
            setCity(designer_detail.city || city)
            setZipCode(designer_detail.zip_code || zip_code)
            setAbout(designer_detail.about || about)
        } 
    },[designer_detail])

    const Designeredit = (designer_id) => {
        // alert(designer_id)
        let data = {
            designer_id: designer_id,
            name: name,
            designer_pic: addimage,
            email: email,
            phone: phone,
            address: address,
            country: country,
            states: states,
            city: city,
            zip_code: zip_code,
            about:about
        }
        toast.success('Edit Successful')
        dispatch(EditDesignerAction(data))
        if (data) {
            history.push('/designer')
        }
    }


    return (
        <>
            <Sidebar />
            <MyHeader />
            <Layout>
                <Content style={{ minHeight: '75vh', padding: '10px', overflow: 'hidden' }}>
                    <div className="site-page-header-ghost-wrapper">
                        <PageHeader
                            ghost={false}
                            onBack={() => history.goBack()}
                            title={`Designer Profile Edit`}
                            style={{ marginLeft: '16rem', background: "#f0f0f0" }}

                        >
                        </PageHeader>
                        <Row
                             style={{ marginLeft: '14rem', background: '#fff' }}>
                        
                            <Col>
                                <label className="mt-4" style={{ marginLeft: '15rem' }}>Name</label>
                                <input className="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enetr Name" style={{ width: '600px', marginLeft: '15rem' }} />
                            </Col>
                            <Col>
                                <label className="mt-4">Email</label>
                                <input className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enetr Email" style={{ width: '600px' }} />
                            </Col>
                            <Col >
                                <label className="mt-4" style={{ marginLeft: '15rem' }}>Phone</label>
                                <input className="form-control" type="text"  value={phone} onChange={(e) => setPhone(e.target.value)} value={phone} placeholder="Enetr Phone" style={{ width: '600px', marginLeft: '15rem' }} />
                            </Col>
                            <Col >
                                <label className="mt-4" >Address</label>
                                <input className="form-control" type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enetr Address" style={{ width: '600px' }} />
                            </Col>
                            <Col>
                                <label className="mt-4" style={{ marginLeft: '15rem' }}>Country</label>
                                <input className="form-control" type="text"  value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Enetr Address" style={{ width: '600px', marginLeft: '15rem' }} />
                            </Col>
                            <Col>
                                <label className="mt-4" >States</label>
                                <input className="form-control" type="text" value={states} onChange={(e) => setStates(e.target.value)} placeholder="Enetr Address" style={{ width: '600px' }} />
                            </Col>
                            <Col>
                                <label className="mt-4" style={{ marginLeft: '15rem' }}>City</label>
                                <input className="form-control" type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enetr Address" style={{ width: '600px', marginLeft: '15rem' }} />
                            </Col>

                            <Col >
                                <label className="mt-4">Zip Code</label>
                                <input className="form-control" type="text" value={zip_code} onChange={(e) => setZipCode(e.target.value)} placeholder="Enetr Zip code" style={{ width: '600px' }} />
                            </Col>
                            <Col >
                                <label className="mt-4" style={{ marginLeft: '15rem' }}>About</label>
                                <input className="form-control"  value={about} type="text" onChange={(e) => setAbout(e.target.value)} value={about} placeholder="Enetr your about" style={{ width: '600px', marginLeft: '15rem' }} />
                            </Col>
                            <Col >
                                <label className="mt-4">Profile</label>
                                <input type="file" accept="image/*" multiple onChange={(event) => setAddImage(event.target.files[0])} className={"form-control"} />
                            </Col>

                            <img src={`${fileUrl}${designer_pic}`} style={{ width: '15%', marginLeft: '3rem' }}></img>

                            <Button class="btn btn-sm" onClick={() => Designeredit(designer_id)} style={{ background: '#8AE6F7', color: '#fff', marginTop: '5rem', marginLeft: '61%' }}><i class="fas fa-folder"></i> &nbsp; Update Profile </Button>

                        </Row>
                    </div>
                </Content>
            </Layout>


            <MyFooter />
        </>
    )
}

export default EditDesigner
