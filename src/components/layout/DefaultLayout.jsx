import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <>
      {/* navbar  */}
      <Header/>

      {/* content  */}
      <div className='main'>
      <Outlet/>
      </div>

      {/* footer  */}
      <Footer/>
    </>
  )
}

export default DefaultLayout
