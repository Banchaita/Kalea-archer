import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Layout, Button,Table, Space, Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fileUrl } from '../../constants/const';
import toast from "../../Components/common/toast"
import { showAddModalAction } from "../../actions/modals"
import { showEidtModalAction,showDeleteModalAction } from "../../actions/modals"
import EditAdvertisment from '../../modals/EditAdvertisment';
import MyHeader from '../../Components/Header'
import Sidebar from '../../Components/Sidebar'
import DeleteModal from '../../modals/deleteModal';
import MyFooter from '../../Components/Footer';
import AddAdvertisment from '../../modals/addAdvertisment';
import { getAdvertisementData,setAdvertisementStatusAction,setActiveAdvertisementAction} from '../../actions/advertisement'


const { Content } = Layout;
const { Column } = Table;


const Advertisement = () => {
    const history = useHistory()
    const dispatch = useDispatch();

    const is_authenticated = useSelector(state => state.auth.is_authenticated)
    const advertisementData = useSelector(state => state.advertisement.advertisement_data)

    const advertisementList = () => {
        dispatch(getAdvertisementData())
    }
    useEffect(() => {
        if (!localStorage.getItem('tokenData')) {
            history.push('/')
            return false
        }
        advertisementList()
    }, [])

    const changeAdvertisemenStatus = (advertisement_id , status) => {
        let data ={
            status_on:status,
            advertisement_id:advertisement_id
        }
        toast.success(' Status change success') 
        dispatch(setAdvertisementStatusAction(data))
        if(data){
            dispatch(getAdvertisementData(data))
        }
    }
    const ActiveAdvertisement = (advertisement_id) => {
        dispatch(setActiveAdvertisementAction(advertisement_id))
        dispatch(showEidtModalAction(true))
    }
    const DeleteAdvertisement = (advertisement_id) => {
        // alert(advertisement_id)
        dispatch(setActiveAdvertisementAction(advertisement_id))
        dispatch(showDeleteModalAction(true))
    }




    return (
        <>
            <Sidebar></Sidebar>
            <MyHeader></MyHeader>
            <Layout>
                <Content style={{ minHeight: '75vh', padding: '10px', overflow: 'hidden' }}>
                    <AddAdvertisment />
                    <EditAdvertisment/>
                    <DeleteModal/>
                    <Row
                        style={{ marginLeft: '13rem' }}
                    >
                        <Col span={24} style={{ background: 'rgb(255, 255, 255)', boxShadow: 'rgb(170 170 170) 2px 2px 10px' }}>
                            <Button onClick={() => dispatch(showAddModalAction(true))} class="btn btn-md m-4 " style={{ background: '#d62537', color: '#fff', float: 'right', margin: '1rem' }}><i class="far fa-plus-square"></i> &nbsp;Add New Advertisement</Button>
                            <Table
                                dataSource={advertisementData}
                                pagination={true}
                                className="mt-2"
                            >
                                <Column className="text-center" title={"No"} render={(value, record, index) => (index + 1)} key={"index"} width={20} />
                                <Column
                                    title={"Image"}
                                    render={(record) => <img
                                        style={{ maxHeight: 50 }}
                                        className="img-fluid img-responsive"
                                        src={`${fileUrl}${record.advertisement_pic}`} />
                                    }
                                    key={"name"}
                                />
                                <Column title="Duration" dataIndex="duration" key="duration" />
                                <Column title="Start Date" dataIndex="start_date" key="start_date" />
                                <Column title="End Date" dataIndex="end_date" key="end_date" />
                                <Column title="Referred By" dataIndex="referred_by" key="referred_by" />
                                <Column
                                    title={"Staus"}
                                    dataIndex="Staus"
                                    key={"Staus"}
                                    render={(text, record ) => { 
                                        return record.status_on == 0?
                                        <Button onClick={() => changeAdvertisemenStatus(record._id,1)} type="danger">Pending Approvel</Button> :
                                        <Button onClick={() => changeAdvertisemenStatus(record._id ,0 )} type="primary">Approvel</Button>
                                  }}
                                />
                                <Column
                                    title="Action"
                                    key="action"
                                    render={(text, record) => (
                                        <Space size="middle">
                                            <Button class="btn btn-sm"  onClick={() => ActiveAdvertisement(record._id)}style={{ background: '#2DCE89', color: '#fff' }}> <i class="fas fa-user-edit"></i>  &nbsp; Edit</Button>
                                            <Button class="btn btn-sm"   onClick={() => DeleteAdvertisement(record._id)}style={{ background: ' rgb(220,20,60)', color: '#fff' }}> <i class="fas fa-ban"></i>  &nbsp; Delete</Button>
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

export default Advertisement