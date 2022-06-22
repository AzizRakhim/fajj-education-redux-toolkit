import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar';
import error from "../../assets/images/error.png";

function LogOut() {
  return (
    <div className='main d-flex position-relative'>
      <Navbar />
      <div className='main__data col-9'>
        <Header />
        <div className='student'>
          <h2 className='student__title'>
            Log Out
          </h2>
          <div className='report__img-box'>
            <img src={error} alt="404 error" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogOut
