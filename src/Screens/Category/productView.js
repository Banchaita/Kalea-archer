import React, { useEffect, useState } from 'react'
import { Layout, Button, Table, Space, Row, PageHeader, Col } from 'antd';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showAddModalAction } from "../../actions/modals"
import { showEidtModalAction } from "../../actions/modals"
import MyFooter from '../../Components/Footer'
import MyHeader from '../../Components/Header'
import Sidebar from '../../Components/Sidebar'
import { getProductDetails,setActiveProcutAction,setProductStatusAction } from '../../actions/product'
import AddProduct from '../../modals/AddProduct';
import EditProduct from '../../modals/EditProduct';


const { Content } = Layout;
const { Column } = Table;

const ProductView = () => {
    const history = useHistory()
    const dispatch = useDispatch();

    const product_Detail = useSelector(state => state.product.product_detail)
    const active_product = useSelector(state => state.product.active_product)
    const active_cat = useSelector(state => state.category.active_cat)




    const productList = () => {
        dispatch(getProductDetails())
    }
    const saveProduct = (product_id) => {
        dispatch(setActiveProcutAction(product_id))
        dispatch(showEidtModalAction(true))
    }
    const changeProductStatus = (product_id , status) => {
        let data ={
            status_on:status,
            product_id:product_id
        }
        dispatch(setProductStatusAction(data))
        if(data){
            dispatch(getProductDetails(active_cat))
        }
    }


    return (
        <>
            <Sidebar />
            <MyHeader />
            <Layout>
                <Content style={{ minHeight: '75vh', padding: '10px', overflow: 'hidden' }}>
                    <AddProduct />
                    <EditProduct/>
                    <PageHeader
                            ghost={false}
                            onBack={() => history.goBack()}
                            title={`Product List`}
                            style={{ marginLeft: '16rem', background: "#f0f0f0" }}
                        >
                        </PageHeader>

                    <Row
                        style={{ marginLeft: '13rem' }}
                    >
                        <Col span={24} style={{ background: 'rgb(255, 255, 255)', boxShadow: 'rgb(170 170 170) 2px 2px 10px' }}>
                            <Button class="btn btn-sm m-5" style={{ background: '#d62537', color: '#fff', float: 'right' }} onClick={() => dispatch(showAddModalAction(true))}><i class="far fa-plus-square"></i> &nbsp; Add Product</Button>
                            <Table
                                dataSource={product_Detail}
                                pagination={false}
                                className="mt-2"
                            >
                                <Column className="text-center" title={"No"} render={(value, record, index) => (index + 1)} key={"index"} width={20} />
                                <Column className="text-center" title="Product Type" dataIndex="product_type" key="product_type" />
                                <Column
                                  className="text-center"
                                    title={"Staus"}
                                    dataIndex="Staus"
                                    key={"Staus"}
                                    render={(text, record ) => { 
                                        return record.status_on == 0?
                                        <Button onClick={() => changeProductStatus(record._id,1)} type="danger">Disable</Button>:
                                        <Button onClick={() => changeProductStatus(record._id ,0 )} type="primary">Active</Button>
                                  }}
                                />
                                <Column
                                    className="text-center"
                                    title="Action"
                                    key="action"
                                    render={(text, record) => (
                                        <Space size="middle">
                                            <Button class="btn btn-sm" onClick={() => saveProduct(record._id)} style={{ background: '#2DCE89', color: '#fff' }}><i class="fas fa-user-edit"></i>  &nbsp; Edit</Button>
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

export default ProductView
