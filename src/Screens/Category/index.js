import React, { useEffect, useState } from 'react'
import { Layout, Button, Table, Space, Row,Col } from 'antd';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fileUrl } from '../../constants/const';
import { showAddCategoryModalAction } from "../../actions/modals"
import { showEidtModalAction } from "../../actions/modals"
import toast from "../../Components/common/toast"
import MyHeader from '../../Components/Header'
import Sidebar from '../../Components/Sidebar'
import MyFooter from '../../Components/Footer';
import AddCategory from '../../modals/AddCategory';
import { getCategorytData, setActiveCategoryAction,setStatusAction } from '../../actions/category'
import { getProductDetails } from '../../actions/product'
import EditModel from '../../modals/editModel';
import Loader from '../../Components/loader';



const { Content } = Layout;
const { Column } = Table;

const Category = () => {

    const history = useHistory()
    const dispatch = useDispatch();

    const is_authenticated = useSelector(state => state.auth.is_authenticated)
    const categoryData = useSelector(state => state.category.category_data)
    const category_satuts = useSelector(state => state.category.category_satuts)


    const categoryList = () => {
        dispatch(getCategorytData())
    }
    useEffect(() => {
        categoryList()
    }, [])


    const saveActiveCategory = (cat_id) => {
        dispatch(setActiveCategoryAction(cat_id))
        dispatch(getProductDetails(cat_id))
    }
    const saveCategory = (cat_id) => {
        dispatch(setActiveCategoryAction(cat_id))
        dispatch(showEidtModalAction(true))

    }
    const changeCategoryStatus = (cat_id , status) => {
        let data ={
            status_on:status,
            category_id:cat_id
        }
        toast.success(' Status change success') 
        dispatch(setStatusAction(data))

        if(data){
            dispatch(getCategorytData(data))
        }
    }



    return (
        <>

            <div>
                <Sidebar />
                <MyHeader />
                <Layout>
                    <Content style={{ minHeight: '75vh', padding: '10px', overflow: 'hidden' }}>
                        <AddCategory />
                        <EditModel />
                        <Loader/>
                        

                        <Row
                            style={{ marginLeft: '13rem' }}
                        >
                            <Col span={24} style={{ background: 'rgb(255, 255, 255)', boxShadow: 'rgb(170 170 170) 2px 2px 10px' }}>
                                <Button class="btn btn-md m-4 " style={{ background: '#d62537', color: '#fff', float: 'right',margin:'1rem' }} onClick={() => dispatch(showAddCategoryModalAction(true))}><i class="far fa-plus-square"></i> &nbsp; Add Category</Button>
                                <Table
                                    dataSource={categoryData}
                                    pagination={true}
                                    className="mt-2"
                                >
                                    <Column className="text-center" title={"No"} render={(value, record, index) => (index + 1)} key={"index"} width={20} />
                                    <Column
                                        className="text-center"
                                        title={"Image"}
                                        render={(record) => <img
                                            style={{ maxHeight: 50 }}
                                            className="img-fluid img-responsive"
                                            src={`${fileUrl}${record.category_pic}`} />
                                        }
                                        key={"name"}
                                    />
                                    <Column className="text-center" title="Category Name" dataIndex="name" key="name" />
                                    <Column
                                        className="text-center"
                                        title={"Staus"}
                                        dataIndex="Staus"
                                        key={"Staus"}
                                        render={(text, record ) => { 
                                              return record.status_on == 0?
                                              <Button onClick={() => changeCategoryStatus(record._id,1)} type="danger">Disable</Button>:
                                              <Button onClick={() => changeCategoryStatus(record._id ,0 )} type="primary">Active</Button>
                                        }}
                                        width={10}
                                    />
                                    <Column
                                        className="text-center"
                                        title="Action"
                                        key="action"
                                        render={(text, record) => (
                                            <Space size="middle">
                                                <Button class="btn btn-sm" onClick={() => saveCategory(record._id)} style={{ background: '#2DCE89', color: '#fff' }}><i class="fas fa-user-edit"></i>  &nbsp; Edit </Button>

                                                <NavLink to={`/productView/${record._id}`}>
                                                    <Button class="btn btn-sm" onClick={() => saveActiveCategory(record._id)} style={{ background: '#242424', color: '#fff' }}> <i class="fas fa-eye"></i> &nbsp; View Product Type</Button>
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
            </div>
        </>



    )
}

export default Category

