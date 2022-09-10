import React from 'react'
import { Layout,Table, Row, PageHeader,Col,Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getSizeData } from '../../actions/collection'
import { fileUrl } from '../../constants/const';
import{showAddSizeModalAction} from '../../actions/modals'
import MyFooter from '../../Components/Footer'
import MyHeader from '../../Components/Header'
import Sidebar from '../../Components/Sidebar'
import AddSize from '../../modals/addSize';

const { Content } = Layout;
const { Column } = Table;


const SizeView = () => {
    const history = useHistory()
    const dispatch = useDispatch();

    const size_Data = useSelector(state => state.collection.size_data)
   
    const sizeList = () => {
        dispatch(getSizeData())
    }


    return (
        <>
            <Sidebar />
            <MyHeader />
            <Layout>
                <Content style={{ minHeight: '75vh', padding: '10px', overflow: 'hidden' }}>
                    <AddSize/>
                    <PageHeader
                        ghost={false}
                        onBack={() => history.goBack()}
                        title={`Size List`}
                        style={{ marginLeft: '16rem', background: "#f0f0f0" }}
                    >
                    </PageHeader>
                    <Row
                        style={{ marginLeft: '13rem' }}
                    >
                        <Col span={24} style={{ background: 'rgb(255, 255, 255)', boxShadow: 'rgb(170 170 170) 2px 2px 10px' }}>
                        <Button class="btn btn-md m-4 " style={{ background: '#d62537', color: '#fff', float: 'right', margin: '1rem' }} onClick={() => dispatch(showAddSizeModalAction(true))}><i class="far fa-plus-square"></i> &nbsp; Add Size</Button>
                        <Table
                            dataSource={size_Data}
                            pagination={false}
                            className="mt-2"
                          >
                            <Column className="text-center" title={"No"} render={(value, record, index) => (index + 1)} key={"index"} width={20} />
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
                            <Column title="Colour Name" render={(record) => `${record.colour_id.colour}`} key={"colour"}  />
                            <Column title="Size" dataIndex="size" key="size" />
                        </Table>
                        </Col>
                    </Row>
                </Content>
            </Layout>



            <MyFooter />
        </>
    )
}

export default SizeView

