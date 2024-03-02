import React from 'react'
import Sidebar from '../public/components/Sidebar'
// import Navbar from '../share/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return <>
        <Sidebar />
        {/* <Navbar /> */}
        <div className='ml-72'>
            <Outlet />
        </div>
    </>
}

export default Layout