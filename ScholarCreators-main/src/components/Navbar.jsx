import React from 'react'
import "@fontsource/poppins/400-italic.css";

const Navbar = () => {
  return (
    <>
    <div className='navbar' style={{height: "60px", background: "#f5ab22"}}>
      <a href='/' rel=''><img style={{height: "45px", paddingLeft: "1rem"}} src='/logo.png' alt='' /></a>
      <div className='nav' style={{display: "flex", flexDirection: "row"}}>
      <a href='/login'><img style={{height: "45px"}} src='/log.png' alt='' /></a>
      <a href='/profile'><img style={{height: "45px"}} src='/prof.png' alt='' /></a>
      </div>
    </div>
    </>
  )
}

export default Navbar
