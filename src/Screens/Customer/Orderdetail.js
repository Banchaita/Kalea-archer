import React ,{ useEffect, useState }from 'react'
import { Layout,Table,Row, PageHeader, Col } from 'antd';
import {useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fileUrl } from '../../constants/const';
import moment from "moment"
import MyFooter from '../../Components/Footer'
import MyHeader from '../../Components/Header'
import Sidebar from '../../Components/Sidebar'
import { getOrderList } from '../../actions/orderlist'


const { Content } = Layout;
const { Column } = Table;

const Orderdetail = () => {
    const history = useHistory()
    const dispatch = useDispatch();

    const orderDetail = useSelector(state => state.orderlist.order_detail)

    const orderList = () => {
        dispatch(getOrderList())
    }

    
    // useEffect(() => {
    //     if (!localStorage.getItem('tokenData')) {
    //         history.push('/')
    //         return false
    //     }
    //     orderList()
    // }, [])



    return (
        <>
            <Sidebar />
            <MyHeader />
            <Layout>
                <Content style={{ minHeight: '75vh', padding: '10px', overflow: 'hidden' }}>
                    <PageHeader
                        ghost={false}
                        onBack={() => history.goBack()}
                        title={`Order Detail`}
                        style={{ marginLeft: '14rem', background: "#f0f0f0" }}
                    >
                    </PageHeader>
                    <Row
                        style={{ marginLeft: '14rem' }}
                    >
                        <Col span={24} style={{ background: 'rgb(255, 255, 255)', boxShadow: 'rgb(170 170 170) 2px 2px 10px' }}>
                            <h3 className="m-4">Order Detail</h3>
                            <Table
                                dataSource={orderDetail}
                                pagination={false}
                                className="mt-4"
                                style={{ padding: '1rem' }}
                            >
                                <Column title="User Email" render={(record) => `${record.customer_id.email}`} key={"email"} />
                                <Column title="User Phone" render={(record) => `${record.customer_id.phone}`} key={"phone"} />
                                <Column title="Payment Type" dataIndex="payment_type" key={"payment_type"} />
                                <Column title="Placed Time" render={(record) => `${moment(record.create_on * 1000).format('DD.MM.YYYY h:mm')}`} />
                                <Column title="Total Price" dataIndex="total_price" key={"total_price"} />
                                <Column title="Order Status" dataIndex="order_status" key={"order_status"} />
                            </Table>
                        </Col>
                    </Row>


                    <Row
                        style={{ marginLeft: '14rem', marginTop: '5rem' }}
                    >
                        <Col span={24} style={{ background: 'rgb(255, 255, 255)', boxShadow: 'rgb(170 170 170) 2px 2px 10px' }}>
                            <h3 className="m-4">Order Status Progress</h3>
                            <Table
                                dataSource={orderDetail}
                                pagination={false}
                                className="mt-4"
                                style={{ padding: '1rem' }}
                            >
                                <Column title="Order Status" dataIndex="order_status" key={"order_status"} />
                                <Column title="Status Update Time" render={(record) => `${moment(record.create_on * 1000).format('DD.MM.YYYY h:mm')}`} />
                            </Table>
                        </Col>
                    </Row>


                    <Row
                        style={{ marginLeft: '14rem', marginTop: '5rem' }}
                    >
                        <Col span={24} style={{ background: 'rgb(255, 255, 255)', boxShadow: 'rgb(170 170 170) 2px 2px 10px' }}>
                            <h3 className="m-4">Order Address Detail</h3>
                            <Table
                                dataSource={orderDetail}
                                pagination={false}
                                className="mt-4"
                                style={{ padding: '1rem' }}
                            >
                                <Column title="Name" render={(record) => `${record.customer_id.name}`} key={"name"} />
                                <Column title="Phone" render={(record) => `${record.customer_id.phone}`} key={"phone"} />
                                <Column title="Address" render={(record) => `${record.customer_id.address}`} key={"address"} />
                                <Column title="Zip Code" render={(record) => `${record.customer_id.zip_code}`} key={"zip_code"} />
                            </Table>
                        </Col>
                    </Row>


                    <Row
                        style={{ marginLeft: '14rem', marginTop: '5rem' }}
                    >
                        <Col span={24} style={{ background: 'rgb(255, 255, 255)', boxShadow: 'rgb(170 170 170) 2px 2px 10px' }}>
                            <h3 className="m-4">Order Collection Items</h3>
                            <Table
                                dataSource={orderDetail}
                                pagination={false}
                                className="mt-4"
                                style={{ padding: '1rem' }}
                            >
                                <Column
                                    title={"Image"}
                                    render={(record) => <img
                                        style={{ maxHeight: 80 }}
                                        className="img-fluid img-responsive"
                                        src={`${fileUrl}${record.colour_id.product_image}`}

                                    />
                                    }
                                    key={"image"}
                                />


                                <Column title="Category" render={(record) => `${record.category_id.name}`} key={"name"} />
                                <Column title="Product Type" render={(record) => `${record.product_id.product_type}`} key={"product_type"} />
                                <Column title="Name" render={(record) => `${record.collection_id.product_name}`} key={"product_name"} />
                                {/* <Column title="Colour" render={(record) => `${record.colour_id.colour}`} key={"colour"} /> */}
                                <Column title="Price" render={(record) => `${record.collection_id.price}`} key={"price"} />
                                <Column title="Quantity" dataIndex="quantity" key={"quantity"} />
                                <Column title="Total Price" dataIndex="total_price" key={"total_price"} />
                            </Table>
                        </Col>
                    </Row>

                </Content>

            </Layout>
            <MyFooter />
        </>
    )
}

export default Orderdetail
