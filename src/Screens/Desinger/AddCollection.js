import React, { useState, useEffect } from 'react'
import { Layout, PageHeader, Row, Col, Button } from 'antd';
import { useHistory } from 'react-router';
import toast from "../../Components/common/toast"
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCategorytData } from '../../actions/category'
import { getProductDetails} from '../../actions/product'
import { AddColletionAction,getCollectiontData } from '../../actions/collection'
import MyFooter from '../../Components/Footer'
import MyHeader from '../../Components/Header'
import Sidebar from '../../Components/Sidebar'

const { Content } = Layout;


const AddCollection = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const [category_id, setCategoryId] = useState('')
    const [product_id, setProductId] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [name, setName] = useState('')
    const [product_name, setProductName] = useState('')


    const categoryData = useSelector(state => state.category.category_data)
    const product_Detail = useSelector(state => state.product.product_detail)

    
    useEffect (() => {
        dispatch(getCategorytData())
    }, [])

    useEffect(() => {
        dispatch(getProductDetails(category_id))
    }, [category_id])
    useEffect(() => {
        if (categoryData) {
            categoryData.map((key) => {
                if(key._id == categoryData){
                    setName(key.name)
                }
            })
        }
        if (product_Detail) {
            product_Detail.map((key) => {
                if(key._id == product_Detail){
                    setProductName(key.product_type)
                    setProductId(key._id)
                }
            })
        }
    },[categoryData,product_Detail])


    const params = useParams()



      const Collectionadd = (params) => {
          
        let data = {
            category_id: category_id,
            designer_id:params._id,
            price: price,
            product_id:product_id,
            product_name:product_name,
            description: description
        }
        toast.success(' Successful')
        dispatch(AddColletionAction(data))
        history.push('/designer')
      
    }

    return (
        <>
            <Sidebar />
            <MyHeader />
            <Layout>
                <Content style={{ minHeight: '75vh', padding: '10px', overflow: 'hidden' }}>
                    <div className="site-page-header-ghost-wrapper">
                        <PageHeader
                            ghost={false}
                            onBack={() => history.goBack()}
                            title={`Add Collection`}
                            style={{ marginLeft: '16rem', background: "#f0f0f0" }}

                        >
                        </PageHeader>

                        <Row
                            style={{ marginLeft: '14rem', background: '#fff' }}>

                            <Row gutter={16}>
                                <Col>
                                    <label className="mt-4" style={{ marginLeft: '15rem' }}>Category Type</label>
                                    <select placeholder='enter category type' onChange={(e) => setCategoryId(e.target.value)} className='form-control mt-3' style={{ width: '600px', marginLeft: '15rem' }}>
                                        {categoryData.map(key => (
                                            <option value='select'>Select</option>,
                                            <option value={key._id}>{key.category_id}</option>,
                                            <option value={key._id}>{key.name}</option>
                                        ))}
                                    </select>
                                </Col>
                                <Col>
                                    <label className="mt-4">Product Type</label>
                                    <select placeholder='enter product type' onChange={(e) => setProductId(e.target.value)} className='form-control mt-3' style={{ width: '600px'}}>
                                        {product_Detail && product_Detail.map(key => (
                                            <option value='select'>Select</option>,
                                            <option value={key._id}>{key.product_id}</option>,
                                            <option value={key._id}>{key.product_type}</option>                                        
                                        ))}
                                    </select>

                                   
                                </Col>
                                <Col >
                                    <label className="mt-4" style={{ marginLeft: '15rem' }}>Product Name</label>
                                    <input className="form-control" type="text" onChange={(e) => setProductName(e.target.value)} placeholder="Enetr Product Name" style={{ width: '600px', marginLeft: '15rem' }} />
                                </Col>
                                <Col >
                                    <label className="mt-4">Price</label>
                                    <input className="form-control" type="text" onChange={(e) => setPrice(e.target.value)} placeholder="Enetr Product Price" style={{ width: '600px' }} />
                                </Col>


                                <Col >
                                    <label className="mt-4" style={{ marginLeft: '15rem' }}>Description</label>
                                    <textarea rows="4" cols="50" name="comment" onChange={(e) => setDescription(e.target.value)} form="usrform" className="form-control" style={{ marginLeft: '15rem' }}>
                                   
                                    </textarea>
                                </Col>
                                <Button class="btn btn-sm" onClick={() => Collectionadd(params)} style={{ background: '#8AE6F7', color: '#fff', marginTop: '2rem', marginLeft: '61%' }}><i class="fas fa-folder"></i> &nbsp; Add collection </Button>
                              
                            </Row>
                        </Row>
                    </div>

                </Content>
            </Layout>
            <MyFooter />

        </>
    )
}

export default AddCollection
