import React, { useEffect, useState } from 'react'
import { Layout, Button, Table, Space, Row, PageHeader, Col } from 'antd';
import { NavLink, useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCollectiontData, getColourData, setActiveCollectionAction,setAllId } from '../../actions/collection'
import MyFooter from '../../Components/Footer'
import MyHeader from '../../Components/Header'
import Sidebar from '../../Components/Sidebar'


const { Content } = Layout;
const { Column } = Table;

const ViewCollection = () => {
    const history = useHistory()
    const dispatch = useDispatch();
   


    const collection_Data = useSelector(state => state.collection.collection_data)

    const collectionList = () => {
        dispatch(getCollectiontData())
    }
    
    const setActiveColour = (collection_id,category_id,product_id) => {
        // alert(category_id)
        // console.log('category_id',category_id)
        // console.log('product_id',product_id)
        dispatch(setActiveCollectionAction(collection_id))
        dispatch(getColourData(collection_id,category_id,product_id))
        dispatch(setAllId(product_id,category_id))
    }

    const params = useParams()
    const AddCollection = (params) => {
        let data = {
            designer_id: params._id
        }
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
                        title={`Collection List`}
                        style={{ marginLeft: '16rem', background: "#f0f0f0" }}
                    >
                    </PageHeader>
                    <Row
                        style={{ marginLeft: '13rem' }}
                    >
                        <Col span={24} style={{ background: 'rgb(255, 255, 255)', boxShadow: 'rgb(170 170 170) 2px 2px 10px' }}>

                            <NavLink to={`/AddCollection/${params._id}`}>
                                <Button class="btn btn-md m-4" onClick={() => AddCollection(params)} style={{ background: '#d62537', color: '#fff', float: 'right', margin: '1rem' }}><i class="far fa-plus-square"></i> &nbsp; Add Collection</Button>
                            </NavLink>
                            <Table

                                dataSource={collection_Data}
                                pagination={false}
                                className="mt-2"

                            >
                                <Column className="text-center" title={"No"} render={(value, record, index) => (index + 1)} key={"index"} width={20}/>                               
                                <Column title="Category" render={(record) => `${record.category_id.name}`} key={"name"} />
                                <Column title="Product Type" render={(record) => `${record.product_id.product_type}`} key={"product_type"} />
                                <Column title="Product Name" dataIndex="product_name" key="product_name" />
                                <Column title="Price" dataIndex="price" key="price" />

                                <Column
                                    title="Action"
                                    key="action"
                                    render={(text, record) => (
                                        <Space size="middle">
                                            <NavLink to={`/ColourView/${record._id}`}>
                                                <Button class="btn btn-sm" onClick={() => setActiveColour(record._id,record.category_id._id,record.product_id._id)} style={{ background: '#11CDEF', color: '#fff' }}><i class="fas fa-tint"></i>  &nbsp; Colours</Button>
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

export default ViewCollection