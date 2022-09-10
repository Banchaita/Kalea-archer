import React,{ useEffect, useState } from 'react'
import { Layout, Button, Table, Space, Row, PageHeader, Col } from 'antd';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getColourData, setActiveColourAction, getSizeData,setAllId } from '../../actions/collection'
import { fileUrl } from '../../constants/const';
import{showAddModalAction} from '../../actions/modals'
import MyFooter from '../../Components/Footer'
import MyHeader from '../../Components/Header'
import Sidebar from '../../Components/Sidebar'
import AddColours from '../../modals/AddColours';
import AddSize from '../../modals/addSize';


const { Content } = Layout;
const { Column } = Table;

const ColourView = () => {
    const history = useHistory()
    const dispatch = useDispatch();
    const [category_id, setCategoryId] = useState('')
    const [product_id, setProductId] = useState('')

    const colours_Data = useSelector(state => state.collection.colours_data)
    const active_all_id = useSelector(state => state.collection.active_all_id)

    const coloursList = () => {
        dispatch(getColourData())
    }

    const setActiveSize = (colour_id,category_id,product_id) => {
        // alert(colour_id)
        //  console.log('category_id',category_id)
        // console.log('product_id',product_id)
        dispatch(setActiveColourAction(colour_id))
        dispatch(getSizeData(colour_id,category_id,product_id))
        dispatch(setAllId(product_id,category_id))

    }

    const setAllIdAction =(product_id,category_id)=>{      
        dispatch(showAddModalAction(true))
    }


    return (
        <>
            <Sidebar />
            <MyHeader />
            <Layout>
                <Content style={{ minHeight: '75vh', padding: '10px', overflow: 'hidden' }}>
                    <AddSize/>
                    <AddColours/>
                    <PageHeader
                        ghost={false}
                        onBack={() => history.goBack()}
                        title={`Colours List`}
                        style={{ marginLeft: '14rem', background: "#f0f0f0" }}
                    >
                    </PageHeader>
                    <Row
                        style={{ marginLeft: '13rem' }}
                    >
                        <Col span={24} style={{ background: 'rgb(255, 255, 255)', boxShadow: 'rgb(170 170 170) 2px 2px 10px' }}>
                            <Button class="btn btn-md m-4 " style={{ background: '#d62537', color: '#fff', float: 'right', margin: '1rem' }} onClick={() =>setAllIdAction()}><i class="far fa-plus-square"></i> &nbsp; Add Colours</Button>
                            <Table
                                dataSource={colours_Data}
                                pagination={false}
                                className="mt-2"
                            >
                                <Column className="text-center" title={"No"} render={(value, record, index) => (index + 1)} key={"index"} width={20} />
                                <Column
                                    title={"Image"}
                                    render={(record) => <img
                                        style={{ maxHeight: 80 }}
                                        className="img-fluid img-responsive"
                                        src={`${fileUrl}${record.product_image}`}
                                    />
                                    }
                                    key={"image"}
                                />
                                <Column title="Category" render={(record) => `${record.category_id.name}`} key={"name"} />
                                <Column title="Product Type" render={(record) => `${record.product_id.product_type}`} key={"product_type"} />
                                <Column title="Product Name" render={(record) => `${record.collection_id.product_name}`} key={"product_type"} />
                                <Column title="Colour Name" dataIndex="colour" key="colour" />

                                <Column
                                    title="Action"
                                    key="action"
                                    render={(text, record) => (
                                        <Space size="middle">
                                            <NavLink to={`/SizeView/${record._id}`}>
                                                <Button class="btn btn-sm" onClick={() => setActiveSize(record._id,record.category_id._id,record.product_id._id)} style={{ background: '#11CDEF', color: '#fff' }}><i class="fas fa-tint"></i>  &nbsp; Size List</Button>
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

export default ColourView
