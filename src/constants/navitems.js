import React from 'react'
import { HomeOutlined,GlobalOutlined, MailOutlined, UserOutlined ,LogoutOutlined,BarChartOutlined} from '@ant-design/icons';
import { logout } from '../actions/auth';

const NavItems = [
    {
        name: `Dashboard`,
        link: '/dashboard',
        icon: <HomeOutlined />,
        badge: 1,
        subMenu: [],
    },
    {
        name: `Advertisement`,
        link: '/advertisement',
        icon: <GlobalOutlined />,
        badge: 1,
        subMenu: [],
    },
    {
        name: `Customer`,
        link: '/customer',
        icon: <UserOutlined />,
        badge: 1,
        subMenu: [],
    },
    {
        name: `Designer`,
        link: '/designer',
        icon: <BarChartOutlined />,
        badge: 1,
        subMenu: [],
    },
    {
        name: `Category`,
        link: '/category',
        icon:<MailOutlined />,
        badge: 1,
        subMenu: [],
    },
    {
        name: `Profile`,
        link: '/admin',
        icon:<HomeOutlined />,
        badge: 1,
        subMenu: [],
    },
    // {
    //     name: `Logout`,
    //     link: '/',
    //     icon:<LogoutOutlined />,
    //     badge: 1,
    //    subMenu:[],
    // },

]

export default NavItems;