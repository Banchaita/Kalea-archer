import React, { useEffect, useState } from 'react'
import { Layout, Button, Table, Space, Row, Col } from 'antd';
import Column from 'antd/lib/table/Column';
import { useHistory, NavLink } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar';
import MyHeader from '../../Components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { fileUrl } from '../../constants/const';
import MyFooter from '../../Components/Footer';
import DeleteModal from '../../modals/deleteModal';
import { getDesignerData, getDesignerDetails,setDesignerStatusAction } from '../../actions/designer'
import { setActiveDesignerAction } from '../../actions/collection'
import { getCollectiontData } from '../../actions/collection'
import { getDesignerOrderData } from '../../actions/orderlist'
import { getDesignerTransactionList } from '../../actions/transaction'









const { Content } = Layout;

const Designer = () => {
    const history = useHistory()
    const [designer, setDesinger] = useState([])
    const dispatch = useDispatch();

    const designData = useSelector(state => state.designer.designer_data)

    const designerList = () => {
        dispatch(getDesignerData())
    }
    useEffect(() => {
        if (!localStorage.getItem('tokenData')) {
            history.push('/')
            return false
        }
        designerList()
    }, [])


    const setActiveDesigner = (designer_id) => {
        // alert(designer_id)
        dispatch(setActiveDesignerAction(designer_id))
        dispatch(getCollectiontData(designer_id))
    }
    const setDesigner = (designer_id) => {
        dispatch(setActiveDesignerAction(designer_id))
        dispatch(getDesignerOrderData(designer_id))
    }
    const ActiveDesigner = (designer_id) => {
        dispatch(setActiveDesignerAction(designer_id))
        dispatch(getDesignerTransactionList(designer_id))
    }
   
    const changeDesignerStatus = (designer_id , status) => {
        let data ={
            status_on:status,
            designer_id:designer_id
        }
        dispatch(setDesignerStatusAction(data))
        if(data){
            dispatch(getDesignerData(data))
        }
    }

    const EditDesigner = (designer_id) => {
        // alert(designer_id)
        dispatch(setActiveDesignerAction(designer_id))
        dispatch(getDesignerDetails(designer_id))    }




    return (
        <>
            <Sidebar></Sidebar>
            <MyHeader></MyHeader>

            <Layout>
                <Content style={{ minHeight: '75vh', padding: '10px', overflow: 'hidden' }}>
                    <DeleteModal />
                  
                    <Row
                        style={{ marginLeft: '13rem' }}
                    >
                        <Col span={24} style={{ background: 'rgb(255, 255, 255)', boxShadow: 'rgb(170 170 170) 2px 2px 10px' }}>
                            <Table
                                dataSource={designData}
                                pagination={true}
                                className="mt-2"
                            >
                                <Column className="text-center" title={"No"} render={(value, record, index) => (index + 1)} key={"index"} width={20} />
                                <Column
                                    title={"Image"}
                                    className="text-center"
                                    render={(record) => <img
                                        style={{ maxHeight: 50 }}
                                        className="img-fluid img-responsive"
                                        src={`${fileUrl}${record.designer_pic}`} />
                                    }
                                    key={"image"}
                                />
                                <Column className="text-center" title="Name" dataIndex={"name"} key={"name"} />
                                <Column className="text-center" title={"Email"} dataIndex="email" key={"email"} />
                                <Column
                                    title={"Staus"}
                                    className="text-center"
                                    dataIndex="Staus"
                                    key={"Staus"}
                                    render={(text, record ) => { 
                                        return record.status_on == 0?
                                        <Button onClick={() => changeDesignerStatus(record._id,1)} type="danger">Disable</Button>:
                                        <Button onClick={() => changeDesignerStatus(record._id ,0 )} type="primary">Active</Button>
                                  }}
                                />
                                <Column
                                    title="Action"
                                    className="text-center"
                                    key="action"
                                    render={(text, record) => (
                                        <Space size="middle">
                                            <NavLink to={`/desingerDeatils`}>
                                                <Button class="btn btn-sm" onClick={() => dispatch(getDesignerDetails(`${record._id}`))} style={{ background: '#242424', color: '#fff' }} ><i class="fas fa-eye"></i> &nbsp; View</Button>
                                            </NavLink>
                                            <NavLink to={`/EditDesigner/${record._id}`}>
                                                <Button class="btn btn-sm"  onClick={() => EditDesigner(record._id)} style={{background: '#2DCE89', color: '#fff' }} ><i class="fas fa-user-edit"></i> &nbsp; Edit</Button>
                                            </NavLink>
                                          
                                            <NavLink to={`/Designerorder/${record._id}`}>
                                                <Button class="btn btn-sm" onClick={() => setDesigner
                                                    (record._id)} style={{ background: '#FB6340', color: '#fff' }}><i class="fab fa-first-order"></i> &nbsp; Order</Button>
                                            </NavLink >

                                            <NavLink to={`/DesignerTransaction/${record._id}`} >
                                                <Button class="btn btn-sm" onClick={() => ActiveDesigner(record._id)} style={{ background: 'rgb(181 91 227)', color: '#fff' }}><i class="fas fa-money-bill-wave-alt"></i> &nbsp;Transation</Button>
                                            </NavLink>
                                            <NavLink to={`/viewCollection/${record._id}`}>
                                                <Button class="btn btn-sm" onClick={() => setActiveDesigner(record._id)} style={{ background: '#8AE6F7', color: '#fff' }}><i class="fas fa-folder"></i> &nbsp;Collection </Button>
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

export default Designer