import React, { useState, useEffect } from 'react'
import { Layout, PageHeader, Row, Col } from 'antd';
import { useHistory } from 'react-router';
import toast from "../../Components/common/toast"
import { fileUrl } from '../../constants/const';
import { useDispatch, useSelector } from 'react-redux';
import { getDesignerDetails } from '../../actions/designer'
import Sidebar from '../../Components/Sidebar';
import MyFooter from '../../Components/Footer';
import MyHeader from '../../Components/Header';


const { Content } = Layout;

const DesingerDeatils = () => {
    const history = useHistory()
    const [designer_pic, setDesignerPic] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [country, setCountry] = useState('')
    const [states, setStates] = useState('')
    const [city, setcity] = useState('')
    const [about, setAbout] = useState('')
    const [zip_code, setZipCode] = useState('')
    const dispatch = useDispatch();

    const is_authenticated = useSelector(state => state.auth.is_authenticated)
    const designer_detail = useSelector(state => state.designer.designer_detail)


    useEffect(() => {
        if (!localStorage.getItem('tokenData')) {
            history.push('/')
            return false
        }
        toast.success(' Successful')
        dispatch(getDesignerDetails())   
    }, [])

    useEffect(() => {
        if (designer_detail) {
            setDesignerPic(designer_detail.designer_pic)
            setName(designer_detail.name)
            setEmail(designer_detail.email)
            setPhone(designer_detail.phone)
            setAddress(designer_detail.address)
            setCountry(designer_detail.country)
            setStates(designer_detail.states)
            setcity(designer_detail.city)
            setZipCode(designer_detail.zip_code)
            setAbout(designer_detail.about)
        }
    })



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
                            title={`Designer Profile`}
                            style={{ marginLeft: '16rem', background: "#f0f0f0" }}

                        >
                        </PageHeader>

                        <Row
                            style={{ marginLeft: '14rem', background: '#fff' }}>

                            <Row gutter={16}>

                                <Col>
                                    <label className="mt-4" style={{ marginLeft: '15rem' }}>Name</label>
                                    <input className="form-control" type="text" value={name} placeholder="Enetr Name" style={{ width: '600px', marginLeft: '15rem' }} />
                                </Col>
                                <Col>
                                    <label className="mt-4">Email</label>
                                    <input className="form-control" type="email" value={email} placeholder="Enetr Email" style={{ width: '600px' }} />
                                </Col>
                                <Col >
                                    <label className="mt-4" style={{ marginLeft: '15rem' }}>Phone</label>
                                    <input className="form-control" type="text" value={phone} placeholder="Enetr Phone" style={{ width: '600px', marginLeft: '15rem' }} />
                                </Col>
                                <Col >
                                    <label className="mt-4" >Address</label>
                                    <input className="form-control" type="text" value={address} placeholder="Enetr Address" style={{ width: '600px' }} />
                                </Col>
                                <Col>
                                    <label className="mt-4" style={{ marginLeft: '15rem' }}>Country</label>
                                    <input className="form-control" type="text" value={country} placeholder="Enetr Address" style={{ width: '600px', marginLeft: '15rem' }} />
                                </Col>
                                <Col>
                                    <label className="mt-4" >States</label>
                                    <input className="form-control" type="text" value={states} placeholder="Enetr Address" style={{ width: '600px' }} />
                                </Col>
                                <Col>
                                    <label className="mt-4" style={{marginLeft: '15rem'}}>City</label>
                                    <input className="form-control" type="text" value={city} placeholder="Enetr Address" style={{ width: '600px',marginLeft: '15rem' }} />
                                </Col>
                                <Col >
                                    <label className="mt-4">Zip Code</label>
                                    <input className="form-control" type="text" value={zip_code} placeholder="Enetr Zip code" style={{ width: '600px' }} />
                                </Col>
                                <Col >
                                    <label className="mt-4" style={{marginLeft: '15rem'}}>About</label>
                                    <input className="form-control" type="text" value={about} placeholder="Enetr your about" style={{ width: '600px', marginLeft: '15rem'}} />
                                </Col>
                            </Row>
                            <img src={`${fileUrl}${designer_pic}`} style={{width:'15%',marginLeft:'3rem' }}></img>
                        </Row>
                    </div>

                </Content>
            </Layout>

            <MyFooter />

        </>
    )
}

export default DesingerDeatils
