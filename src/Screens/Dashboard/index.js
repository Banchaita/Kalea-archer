import React, { useEffect, useState } from 'react';
import { Layout, Button, Table, Space, Row,Col } from 'antd';
import { NavLink,useHistory } from 'react-router-dom';
import './dashbord.css'
import { useDispatch, useSelector } from 'react-redux';
import { showAddSizeModalAction } from '../../actions/modals';
import { showEidtModalAction } from "../../actions/modals"
import { getSizeList,setActiveSizeAction,setSizeStatusAction} from '../../actions/collection'
import{getDashboardounntData} from '../../actions/dashboard'
import MyFooter from '../../Components/Footer';
import MyHeader from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';
import AddSize from '../../modals/addSize';
import EditSize from '../../modals/editSize';

const { Content } = Layout;
const { Column } = Table;


const Dashboard = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const size_List = useSelector(state => state.collection.size_list)

    const dashboard_count = useSelector(state => state.dashboard.dashboard_count)


    const sizeList = () => {
       
        dispatch(getSizeList())
    }

    const CustomerCount =() =>{
        dispatch(getDashboardounntData())
    }
    const saveSize= (size_id) => {
        dispatch(setActiveSizeAction(size_id))
        dispatch(showEidtModalAction(true))
    }

    const changeSizeStatus = (size_id , status) => {
        let data ={
            status_on:status,
            size_id:size_id
        }
        dispatch(setSizeStatusAction(data))
        if(data){
            dispatch(getSizeList(data))
        }
    }

    useEffect(() => {
        if (!localStorage.getItem('tokenData')) {
            //   localStorage.removeItem('tokenData')
            history.push('/')
            return false
        }
        sizeList()
        CustomerCount()
    },[])



    return (

        <>
            <Sidebar></Sidebar>
            <MyHeader></MyHeader>
            <AddSize />
            <EditSize />
            <Layout>
                <Content style={{ minHeight: '75vh', padding: '10px', overflow: 'hidden' }}>
                    <Row>
                        <div className="card mb-5 mt-5" style={{ width: '350px', marginLeft: '14rem', borderRadius: '1rem', background: '#6D7FE6' }} >
                            <div className="row g-0">
                                <div className="col-md-8">
                                    <NavLink to='/customer' style={{ textDecoration: 'none' }}>
                                        <div className="card-body" style={{ margin: '1rem' }}>
                                            <h5 className="card-title text-white">Total Customer</h5>
                                            <p className="card-subtitle text-white">{dashboard_count.customer_total}</p>
                                        </div>
                                    </NavLink>
                                </div>
                                <div class="col-md-4" style={{ fontSize: '4rem', marginTop: '0.5rem', color: '#fff' }}>
                                    <NavLink to='/customer' style={{ color: '#fff' }}>
                                        <i class="fas fa-users"></i>
                                    </NavLink>
                                </div>
                            </div>
                        </div>


                        <div className="card mb-5 mt-5" style={{ width: '350px', marginLeft: '2rem', borderRadius: '1rem', background: '#FA7252' }} >
                            <div className="row g-0">
                                <div className="col-md-8">
                                    <NavLink to='/customer' style={{ textDecoration: 'none' }}>
                                        <div className="card-body" style={{ margin: '1rem' }}>
                                            <h5 className="card-title text-white">Total Designer</h5>
                                            <p className="card-subtitle text-white">{dashboard_count.customer_total}</p>
                                        </div>
                                    </NavLink>
                                </div>
                                <div class="col-md-4" style={{ fontSize: '4rem', marginTop: '0.5rem', color: '#fff' }}>
                                    <NavLink to='/designer' style={{ color: '#fff' }}>
                                        <i class="fas fa-users"></i>
                                    </NavLink>
                                </div>
                            </div>
                        </div>


                        <div className="card mb-5 mt-5" style={{ width: '350px', marginLeft: '2rem', borderRadius: '1rem', background: '#41D294' }} >
                            <div className="row g-0">
                                <div className="col-md-8">
                                    <NavLink to='/category' style={{ textDecoration: 'none' }}>
                                        <div className="card-body" style={{ margin: '1rem' }}>
                                            <h5 className="card-title text-white">Total Categories</h5>
                                            <p className="card-subtitle text-white">{dashboard_count.category_total}</p>
                                        </div>
                                    </NavLink>
                                </div>
                                <div class="col-md-4" style={{ fontSize: '4rem', marginTop: '0.5rem', color: '#fff' }}>
                                    <NavLink to='/category' style={{ color: '#fff' }}>
                                        <i class="fas fa-cubes"></i>
                                    </NavLink>
                                </div>
                            </div>
                        </div>


                        <div className="card mb-5 mt-5" style={{ width: '350px', marginLeft: '2rem', borderRadius: '1rem', background: '#F5496C' }} >
                            <div className="row g-0">
                                <div className="col-md-8">
                                    <NavLink to='/designer' style={{ textDecoration: 'none' }}>
                                        <div className="card-body" style={{ margin: '1rem' }}>
                                            <h5 className="card-title text-white">Total Order</h5>
                                            <p className="card-subtitle text-white">{dashboard_count.designerorder_total}</p>
                                        </div>
                                    </NavLink>
                                </div>
                                <div class="col-md-4" style={{ fontSize: '4rem', marginTop: '0.5rem', color: '#fff' }}>
                                    <NavLink to='/designer' style={{ color: '#fff' }}>
                                        <i class="fas fa-certificate"></i>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <Row
                        style={{ marginLeft: '13rem' }}
                    >
                        <Col span={24} style={{ background: 'rgb(255, 255, 255)', boxShadow: 'rgb(170 170 170) 2px 2px 10px' }}>
                            <Button class="btn btn-md m-4 " style={{ background: '#d62537', color: '#fff', float: 'right', margin: '1rem' }} onClick={() => dispatch(showAddSizeModalAction(true))}><i class="far fa-plus-square"></i> &nbsp; Add Size</Button>
                            <Table
                                dataSource={size_List}
                                pagination={true}
                                className="mt-2"
                            >
                                <Column className="text-center" title={"No"} render={(value, record, index) => (index + 1)} key={"index"} width={20} />
                                <Column  className="text-center" title="Title" dataIndex="size" key="size" />
                                <Column
                                    className="text-center"
                                    title={"Staus"}
                                    dataIndex="Staus"
                                    key={"Staus"}
                                    render={(text, record ) => { 
                                        return record.status_on == 0?
                                        <Button onClick={() => changeSizeStatus(record._id,1)} type="danger">Disable</Button>:
                                        <Button onClick={() => changeSizeStatus(record._id ,0 )} type="primary">Active</Button>
                                  }}
                                />
                                <Column
                                    className="text-center"
                                    title="Action"
                                    key="action"
                                    render={(text, record) => (
                                        <Space size="middle">
                                            <Button class="btn btn-sm" onClick={() => saveSize(record._id)}style={{ background: '#2DCE89', color: '#fff' }}> <i class="fas fa-user-edit"></i>  &nbsp; Edit</Button>
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

export default Dashboard