import React,{ useEffect, useState } from 'react'
import { Layout, Button, Table, Space, Row, PageHeader,Col } from 'antd';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getOrderData,setActivOrderAction,getOrderList } from '../../actions/orderlist'
import MyFooter from '../../Components/Footer'
import MyHeader from '../../Components/Header'
import Sidebar from '../../Components/Sidebar'


const { Content } = Layout;
const { Column } = Table;

const Orderlistviwe = () => {
    const history = useHistory()
    const dispatch = useDispatch();

    const order_Data = useSelector(state => state.orderlist.order_data)
    
    const orderList = () => {
        dispatch(getOrderData())
    }
    // useEffect(() => {
    //     if (!localStorage.getItem('tokenData')) {
    //         history.push('/')
    //         return false
    //     }
    //     orderList()
    // }, [])

    const setActiveOrder = (order_id) => {
        dispatch(setActivOrderAction(order_id))
        dispatch(getOrderList(order_id))
    }

   




    return (
        <>
            <Sidebar />
            <MyHeader />

            <Layout>
                <Content style={{ minHeight: '75vh', padding: '10px', overflow: 'hidden' }}>
                    <PageHeader
                        ghost={false}
                        onBack={() => history.goBack()}
                        title={`Order List`}
                        style={{ marginLeft: '14rem', background: "#f0f0f0" }}
                    >
                    </PageHeader>
                    <Row
                        style={{ marginLeft: '13rem' }}
                    >
                        <Col span={24} style={{ background: 'rgb(255, 255, 255)', boxShadow: 'rgb(170 170 170) 2px 2px 10px' }}>
                       
                        <Table
                            dataSource={order_Data}
                            pagination={false}
                            className="mt-2"
                        >
                            <Column className="text-center" title={"No"} render={(value, record, index) => (index + 1)} key={"index"} width={20} />
                            <Column title="Order Id" dataIndex="order_number"  key={"order_id"} />
                            <Column title="Payment Type" dataIndex="payment_type" key={"payment_type"} />
                            <Column title="Designer Phone" render={(record) => `${record.designer_id.phone}`} key={"phone"} />
                            <Column title="Total Price" dataIndex="total_price" key={"total_price"} />
                            <Column title="Order Status" dataIndex="order_status" key={"order_status"} />

                            <Column
                                title="Action"
                                key="action"
                                render={(text, record) => (
                                    <Space size="middle">
                                        <NavLink to={`/Orderdetail/${record._id}`}>
                                            <Button class="btn btn-sm" onClick={() => setActiveOrder(record._id)} style={{ background: '#2DCE89', color: '#fff' }}><i class="fas fa-info"></i>  &nbsp; Details </Button>
                                        </NavLink>

                                    </Space>
                                )}
                            />
                        </Table>
                        </Col>
                    </Row>
                </Content>
            </Layout>
            <MyFooter />

        </>
    )
}

export default Orderlistviwe
