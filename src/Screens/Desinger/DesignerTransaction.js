import React from 'react'
import { Layout,Table,Row, PageHeader,Col } from 'antd';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getDesignerTransactionList } from '../../actions/transaction'
import MyFooter from '../../Components/Footer'
import MyHeader from '../../Components/Header'
import Sidebar from '../../Components/Sidebar'

const { Content } = Layout;
const { Column } = Table;

const DesignerTransaction = () => {
    const history = useHistory()
    const dispatch = useDispatch();



    const designertransactionData = useSelector(state => state.transaction.designertransaction_data)

    const transctionList = () => {
        dispatch(getDesignerTransactionList())
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
                        title={`Transaction List`}
                        style={{ marginLeft: '16rem', background: "#f0f0f0" }}
                    >
                    </PageHeader>
                    <Row
                        style={{ marginLeft: '13rem' }}
                    >
                        <Col span={24} style={{ background: 'rgb(255, 255, 255)', boxShadow: 'rgb(170 170 170) 2px 2px 10px' }}>
                        <Table
                            dataSource={designertransactionData}
                            pagination={false}
                            className="mt-2"
                        >
                            <Column className="text-center" title={"No"} render={(value, record, index) => (index + 1)} key={"index"} width={20} />
                            <Column title="Order Number" render={(record) => `${record.order_id.order_number}`} key={"order_number"} />
                            <Column title="Payment Type" render={(record) => `${record.order_id.payment_type}`} key={"payment_type"} />
                            <Column title="User Name" render={(record) => `${record.customer_id.name}`} key={"name"} />
                            <Column title="User Email" render={(record) => `${record.customer_id.email}`} key={"email"} />
                            <Column title="Total Price" render={(record) => `${record.order_id.total_price}`} key={"total_price"} />

                        </Table>
                        </Col>
                    </Row>
                </Content>
            </Layout>

            <MyFooter />
        </>
    )
}

export default DesignerTransaction
