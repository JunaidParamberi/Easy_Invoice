import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
    <div className='flex w-full h-[100vh]'>
       <Sidebar/> 
      <Navbar/>



    </div>
    </div>
  )
}

export default Layout
