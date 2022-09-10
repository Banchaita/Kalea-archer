import React, { useEffect, useState } from 'react';
import { Button, Layout, Menu } from 'antd'
import NavItems from "../../constants/navitems";
import { useHistory } from 'react-router-dom'
import logoImg from '../../assets/img/logo.png'
import'./side.css'
const { Sider } = Layout;

const Sidebar = () => {

    const history = useHistory()
    const location = useHistory()
    const [page, setPage] = useState('')
    // const [logout, logout] = useState('')

    // useEffect(()=>{
    //     console.log('logut')
    // })

    return (
        <Layout>
        <Sider className='silder' theme='light'>
            <div className="logo text-center" >
                <img
                    alt="logo"
                    src={logoImg}
                    className="img-fluid"
                />
            </div>
            <Menu className="mt-3 menu" theme="light"selectable={true}>
                {NavItems.map((menuItem) =>
                    <>
                        {(menuItem.subMenu && !menuItem.subMenu.length) ?
                            <Menu.Item className='menu-item'
                                key={menuItem.name}
                                icon={menuItem.icon}
                                onClick={() => {
                                    setPage(menuItem.link)
                                    history.push(menuItem.link)
                                }}
                            >
                                {menuItem.name}
                            </Menu.Item> :
                            null
                        }
                    </>
                )}
            </Menu>
        </Sider>
    </Layout>
    )
}
export default Sidebar;