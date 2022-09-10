import React, { useState, useEffect } from 'react'
import { Layout, PageHeader, Row, Col, Button } from 'antd';
import { useHistory } from 'react-router';
import toast from "../../Components/common/toast"
import { fileUrl } from '../../constants/const';
import { getCustomerDetails,EditCustomerAction } from '../../actions/customer'
import { useDispatch, useSelector } from 'react-redux';

import MyFooter from '../../Components/Footer'
import MyHeader from '../../Components/Header'
import Sidebar from '../../Components/Sidebar'
const { Content } = Layout;


const CustomerEdit = () => {
    const history = useHistory()
    const [customer_pic, setCustomer_pic] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [zip_code, setZipCode] = useState('')
    const dispatch = useDispatch();
    const [addimage, setAddImage] = useState('')
    const [customer_id, setCustomerId] = useState('')

    const customer_detail = useSelector(state => state.customer.customer_detail)

    useEffect(() => {
        if (!localStorage.getItem('tokenData')) {
            history.push('/')
            return false
        }
        if (customer_detail) {
            setCustomer_pic(customer_detail.customer_pic)
            setName(customer_detail.name || name )
            setEmail(customer_detail.email || email)
            setPhone(customer_detail.phone || phone)
            setAddress(customer_detail.address || address)
            setZipCode(customer_detail.zip_code || zip_code)
            setCustomerId(customer_detail._id)

        }
    },[customer_detail])

    const Customeredit = (customer_id) => {
        // alert(customer_id)
        let data = {
            customer_id: customer_id,
            name: name,
            customer_pic: addimage,
            email: email,
            phone: phone,
            address: address,
            zip_code: zip_code,
        }
        toast.success('Edit Successful')
        dispatch(EditCustomerAction(data))
        if (data) {
            history.push('/customer')
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
                            title={`Customer Profile Edit`}
                            style={{ marginLeft: '16rem', background: "#f0f0f0" }}

                        >
                        </PageHeader>

                        <Row
                            style={{ marginLeft: '14rem', background: '#fff' }}>
                            <Row gutter={16}>
                                <Col>
                                    <label className="mt-4 ml-5" style={{ marginLeft: '15rem' }}>Name</label>
                                    <input className="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enetr Name" style={{ width: '600px', marginLeft: '15rem' }} />
                                </Col>
                                <Col>
                                    <label className="mt-4" style={{ marginLeft: '4rem' }}>Email</label>
                                    <input className="form-control" type="email" value={email}  onChange={(e) => setEmail(e.target.value)} placeholder="Enetr Email" style={{ width: '600px', marginLeft: '4rem' }} />
                                </Col>
                                <Col >
                                    <label className="" style={{ marginLeft: '15rem' }}>Phone</label>
                                    <input className="form-control" type="text" value={phone}  onChange={(e) => setPhone(e.target.value)}placeholder="Enetr Phone" style={{ width: '600px', marginLeft: '15rem' }} />
                                </Col>
                                <Col >
                                    <label className="" style={{ marginLeft: '4rem' }}>Address</label>
                                    <input className="form-control" type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enetr Address" style={{ width: '600px', marginLeft: '4rem' }} />
                                </Col>
                                <Col >
                                    <label className="" style={{ marginLeft: '15rem' }}>Zip Code</label>
                                    <input className="form-control" type="text" value={zip_code} onChange={(e) => setZipCode(e.target.value)} placeholder="Enetr Zip code" style={{ width: '600px', marginLeft: '15rem' }} />
                                </Col>
                                <Col >
                                    <label className=""  style={{ marginLeft: '4rem' }}>Profile</label>
                                    <input type="file" accept="image/*" multiple onChange={(event) => setAddImage(event.target.files[0])}  className={"form-control"} style={{ width: '600px', marginLeft: '4rem' }} />
                                </Col>
                            </Row>
                            <img src={`${fileUrl}${customer_pic}`} style={{ width: '20%', marginLeft: '3rem' }}></img>
                            <Button class="btn btn-sm"  onClick={() => Customeredit(customer_id)} style={{ background: '#8AE6F7', color: '#fff', marginTop: '5rem', marginLeft: '61%' }}><i class="fas fa-folder"></i> &nbsp; Update Profile </Button>
                        </Row>
                    </div>

                </Content>
            </Layout>

            <MyFooter />

        </>
    )
}

export default CustomerEdit
