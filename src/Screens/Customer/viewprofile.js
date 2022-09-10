import React, { useState, useEffect } from 'react'
import { Layout, PageHeader, Row, Col } from 'antd';
import { useHistory } from 'react-router';
import toast from "../../Components/common/toast"
import { fileUrl } from '../../constants/const';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomerDetails } from '../../actions/customer'
import Sidebar from '../../Components/Sidebar';
import MyFooter from '../../Components/Footer';
import MyHeader from '../../Components/Header';


const { Content } = Layout;

const Viewprofile = () => {
    const history = useHistory()
    const [customer_pic, setCustomer_pic] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [zip_code, setZipCode] = useState('')
    const dispatch = useDispatch();

    const customer_detail = useSelector(state => state.customer.customer_detail)


    useEffect(() => {
        if (!localStorage.getItem('tokenData')) {
            history.push('/')
            return false
        }
        toast.success(' Successful')
        dispatch(getCustomerDetails()) 
    }, [])

    useEffect(() => {
        if (customer_detail) {
            setCustomer_pic(customer_detail.customer_pic)
            setName(customer_detail.name)
            setEmail(customer_detail.email)
            setPhone(customer_detail.phone)
            setAddress(customer_detail.address)
            setZipCode(customer_detail.zip_code)
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
                            title={`Customer Profile`}
                            style={{ marginLeft: '16rem', background: "#f0f0f0" }}

                        >
                        </PageHeader>

                        <Row
                            style={{ marginLeft: '14rem', background: '#fff' }}>
                            <Row gutter={16}>
                                <Col>
                                    <label className="mt-4 ml-5" style={{ marginLeft: '15rem' }}>Name</label>
                                    <input className="form-control" type="text" value={name} placeholder="Enetr Name" style={{ width: '600px', marginLeft: '15rem' }} />
                                </Col>
                                <Col>
                                    <label className="mt-4" style={{ marginLeft: '4rem' }}>Email</label>
                                    <input className="form-control" type="email" value={email} placeholder="Enetr Email" style={{ width: '600px', marginLeft: '4rem' }} />
                                </Col>
                                <Col >
                                    <label className="" style={{ marginLeft: '15rem' }}>Phone</label>
                                    <input className="form-control" type="text" value={phone} placeholder="Enetr Phone" style={{ width: '600px', marginLeft: '15rem' }} />
                                </Col>
                                <Col >
                                    <label className="" style={{ marginLeft: '4rem' }}>Address</label>
                                    <input className="form-control" type="text" value={address} placeholder="Enetr Address" style={{ width: '600px', marginLeft: '4rem' }} />
                                </Col>
                                <Col >
                                    <label className="" style={{ marginLeft: '15rem' }}>Zip Code</label>
                                    <input className="form-control" type="text" value={zip_code} placeholder="Enetr Zip code" style={{ width: '600px', marginLeft: '15rem' }} />
                                </Col>
                            </Row>
                            <img src={`${fileUrl}${customer_pic}`} style={{ width: '20%',marginLeft:'3rem' }}></img>
                        </Row>
                    </div>

                </Content>
            </Layout>

            <MyFooter />

        </>
    )
}

export default Viewprofile
