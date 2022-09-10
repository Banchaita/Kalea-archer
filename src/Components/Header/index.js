import React, { useEffect, useState } from 'react';
import { Row, Col, Layout, Menu, Button,Avatar, Dropdown, Divider, Modal } from 'antd';
import { UserOutlined, CaretDownOutlined, LogoutOutlined, LockOutlined } from "@ant-design/icons"
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import toast from "../../Components/common/toast";
import Changepassword from '../../modals/Changepassword';
import { showChangePasswordModalAction } from "../../actions/modals"
import {logout} from "../../actions/auth"

import'./header.css'

const { Header } = Layout;

const MyHeader = ({
  adminData,
  // getAdminData
}) => {
  const dispatch = useDispatch()
  const history = useHistory();






  const handleLogout = () => {
    localStorage.removeItem('tokenData')
     dispatch(logout())
     toast.success('Logout success')
    history.push('/')
  }

  

  return (
    <>     
    <Changepassword/>
    <Layout>
      <div>
        <Header className="p-0 px-2" style={{
          padding: 0,
          paddingRight: 20,
          background: '#fff',
          boxShadow: '2px 2px 10px #aaa',
        }}>
          <Row justify="end">
          <Col className="" flex="auto" >
              <a> <label className='header-title'>Admin Console</label></a>
            </Col>
            <Col className="text-right" style={{ color: 'white' }}>
              <Dropdown overlay={
                <Menu className="mt-4">
                  <Divider className="m-0 p-0" />
                  <Menu.Item >
                    <label onClick={() => dispatch(showChangePasswordModalAction(true))} ><LockOutlined /> Change Password</label>
                  </Menu.Item>
                  <Menu.Item>
                    <label  onClick={handleLogout}><LogoutOutlined /> Logout</label>
                  </Menu.Item>
                </Menu>
              } trigger={['click']}>
                <a href="#" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                  <Avatar style={{ lineHeight: '27px' }} icon={<UserOutlined />} />
                  <label className="ml-2" style={{ color: 'white' }}> <CaretDownOutlined /></label>
                </a>
              </Dropdown>
            </Col>
          </Row>

        </Header>
      </div>
      </Layout>

    </>
  );
}


export default MyHeader