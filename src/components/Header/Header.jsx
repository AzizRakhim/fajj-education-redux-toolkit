import React from 'react';
import "./Header.scss";
import user from "../../assets/images/user.jpg";

function Header() {
  return (
    <header className='position-relative'>
      <div className='main__header d-flex justify-content-end align-items-center'>
        <div className='header header__ring-box position-relative d-flex align-items-center'>
          <i className='bx bxs-bell'></i>
          <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
            <span className="visually-hidden">New alerts</span>
          </span>
        </div>
        <div className='header__info d-flex align-items-center'>
          <span className='header__name'>
            berdiyev javohir
          </span>
          <i className='bx bx-chevron-down'></i>
          <div className='header__img-box'>
            <img src={user} alt="user" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
