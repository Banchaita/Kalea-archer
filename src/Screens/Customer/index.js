import React, { useEffect, useState } from 'react'
import { Layout, Button, Table, Space, Row, Col } from 'antd';
import Column from 'antd/lib/table/Column';
import { useHistory, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MyFooter from '../../Components/Footer'
import MyHeader from '../../Components/Header'
import Sidebar from '../../Components/Sidebar'
import { fileUrl } from '../../constants/const';
import { getCustomerData, getCustomerDetails,setCustomerStatusAction } from '../../actions/customer'
import { getOrderData, setActiveCustomerAction } from '../../actions/orderlist'
import { getTransactionList } from '../../actions/transaction'



const { Content } = Layout;


const Customer = () => {
    const history = useHistory();
    const [customer, setCustomer] = useState([])
    const dispatch = useDispatch();

    const is_authenticated = useSelector(state => state.auth.is_authenticated)
    const customerData = useSelector(state => state.customer.customer_data)

    const customerList = () => {
        dispatch(getCustomerData())
    }
    useEffect(() => {
        if (!localStorage.getItem('tokenData')) {
            history.push('/')
            return false
        }
        customerList()
    }, [])


    const setActiveCustomer = (customer_id) => {
        // alert(customer_id)
        dispatch(setActiveCustomerAction(customer_id))
        dispatch(getOrderData(customer_id))
    }

    const SetCustomer = (customer_id) => {
        dispatch(setActiveCustomerAction(customer_id))
        dispatch(getTransactionList(customer_id))
    }
    const EditCustomer = (customer_id) => {
        // alert(customer_id)
        dispatch(setActiveCustomerAction(customer_id))
        dispatch(getCustomerDetails(customer_id))    }

    const changeCustomerStatus = (customer_id , status) => {
        let data ={
            status_on:status,
            customer_id:customer_id
        }
        dispatch(setCustomerStatusAction(data))
        if(data){
            dispatch(getCustomerData(data));
        }
    }



    return (
        <>
            <Sidebar></Sidebar>
            <MyHeader></MyHeader>
            <Layout>

                <Content style={{ minHeight: '75vh', padding: '10px', overflow: 'hidden' }}>
                    <Row
                        style={{ marginLeft: '13rem' }}
                    >
                        <Col span={24} style={{ background: 'rgb(255, 255, 255)', boxShadow: 'rgb(170 170 170) 2px 2px 10px' }}>
                            <Table
                                dataSource={customerData}
                                pagination={false}
                                className="mt-2"
                            >
                                <Column
                                    className="text-center"
                                    title={"No"}
                                    render={(value, record, index) => (index + 1)}
                                    key={"index"}
                                />
                                <Column
                                    title={"Image"}
                                    render={(record) => <img
                                        style={{ maxHeight: 50 }}
                                        className="img-fluid img-responsive"
                                        src={`${fileUrl}${record.customer_pic}`} />
                                    }
                                    key={"name"}
                                />
                                <Column  className="text-center" title="Name" dataIndex={"name"} key={"name"} />
                                <Column  className="text-center" title="Email" dataIndex={"email"} key={"email"} />
                                <Column  className="text-center" title="Phone" dataIndex={"phone"} key={"phone"} />
                                <Column  className="text-center" title="Zip_Code" dataIndex={"zip_code"} key={"zip_Code"} />
                                <Column
                                    title={"Staus"}
                                    dataIndex="Staus"
                                    className="text-center"
                                    key={"Staus"}
                                    render={(text, record ) => { 
                                        return record.status_on == 0?
                                        <Button onClick={() => changeCustomerStatus(record._id,1)} type="danger">Disable</Button>:
                                        <Button onClick={() => changeCustomerStatus(record._id ,0 )} type="primary">Active</Button>
                                  }}
                                />
                                <Column
                                    title="Action"
                                    key="action"
                                    className="text-center"
                                    render={(text, record) => (
                                        <Space size="middle">
                                            <NavLink to={`/viewprofile`}>
                                                <Button class="btn btn-sm" onClick={() => dispatch(getCustomerDetails(`${record._id}`))} style={{ background: '#242424', color: '#fff' }} ><i class="fas fa-eye"></i> &nbsp; View</Button>
                                            </NavLink>
                                            <NavLink to={`/CustomerEdit/${record._id}`}>
                                                <Button class="btn btn-sm" onClick={() => EditCustomer(record._id)}  style={{ background: '#2DCE89', color: '#fff' }} ><i class="fas fa-eye"></i> &nbsp; Edit Customer </Button>
                                            </NavLink>                                            
                                            <NavLink to={`/Orderlistviwe/${record._id}`}>
                                                <Button class="btn btn-sm" onClick={() => setActiveCustomer(record._id)} style={{ background: '#FB6340', color: '#fff' }}><i class="fab fa-first-order"></i> &nbsp; Order</Button>
                                            </NavLink>

                                            <NavLink to={`/TransactionView/${record._id}`}>
                                                <Button class="btn btn-sm" onClick={() => SetCustomer(record._id)} style={{ background: '#8AE6F7', color: '#fff' }}><i class="fas fa-money-bill-wave-alt"></i> &nbsp;Transation</Button>
                                            </NavLink>
                                        </Space>
                                    )}
                                />
                            </Table>
                        </Col>
                    </Row>
                </Content>
            </Layout>


            <MyFooter></MyFooter>
        </>
    )

}
export default Customer