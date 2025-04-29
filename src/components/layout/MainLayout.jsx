import React from 'react'
import Navbar from '../shared/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../shared/Footer/Footer'

const MainLayout = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout