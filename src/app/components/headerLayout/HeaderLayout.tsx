import React from 'react'
import Header from '../layout/header/header'
import Footer from '../layout/footer/footer'

const HeaderLayout = ({children}:any) => {
  return (

   <>
   <Header/>
    {children}
    <Footer/>
   </>
  )
}

export default HeaderLayout