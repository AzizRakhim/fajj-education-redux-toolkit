import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.scss";

function Navbar() {
  return (
    <div className='main__navbar'>
      <div className='navbar navbar__box d-flex align-items-center justify-content-between'>
        <h2 className='navbar__title'>
          fajj education
        </h2>
        <button className='navbar__x-btn'>
          <i className='bx bx-x'></i>
        </button>
      </div>
      <ul className='navbar__list'>
        <NavLink to={"/"} className={({isActive}) => (isActive ? "navbar__tdn navbar__active" : "navbar__tdn")}>
          <li className="navbar__item">
            <i className='bx bxs-bar-chart-square'></i>
            Umumiy ma'lumotlar
          </li>
        </NavLink>
        <NavLink to={"/report"} className={({isActive}) => (isActive ? "navbar__tdn navbar__active" : "navbar__tdn")}>
          <li className="navbar__item d-flex align-items-center justify-content-between">
            <div className='d-flex align-items-center'>
              <i className='bx bx-credit-card'></i>
              Hisob holati
            </div>
            <i className='bx bx-chevron-up'></i>
          </li>
        </NavLink>
        <NavLink to={"/students"} className={({isActive}) => (isActive ? "navbar__tdn navbar__active" : "navbar__tdn")}>
          <li className="navbar__item">
            <i className='bx bxs-user-voice'></i>
            O'quvchilar
          </li>
        </NavLink>
        <NavLink to={"/groups"} className={({isActive}) => (isActive ? "navbar__tdn navbar__active" : "navbar__tdn")}>
          <li className="navbar__item">
            <i className='bx bxs-group'></i>
            Guruhlar
          </li>
        </NavLink>
        <NavLink to={"/curriculum"} className={({isActive}) => (isActive ? "navbar__tdn navbar__active" : "navbar__tdn")}>
          <li className="navbar__item">
            <i className='bx bx-calendar'></i>
            Dars jadvali
          </li>
        </NavLink>
        <NavLink to={"/reports"} className={({isActive}) => (isActive ? "navbar__tdn navbar__active" : "navbar__tdn")}>
          <li className="navbar__item">
            <i className='bx bxs-file'></i>
            Hisobotlar
          </li>
        </NavLink>
        <NavLink to={"/teachers"} className={({isActive}) => (isActive ? "navbar__tdn navbar__active" : "navbar__tdn")}>
          <li className="navbar__item">
            <i className='bx bx-user'></i>
            O'qituvchilar
          </li>
        </NavLink>
        <NavLink to={"/setting"} className={({isActive}) => (isActive ? "navbar__tdn navbar__active" : "navbar__tdn")}>
          <li className="navbar__item">
            <i className='bx bxs-cog' ></i>
            Sozlanma
          </li>
        </NavLink>
        <NavLink to={"/logout"} className={({isActive}) => (isActive ? "navbar__tdn navbar__active" : "navbar__tdn")}>
          <li className="navbar__item">
            <i className='bx bx-log-in'></i>
            Log Out
          </li>
        </NavLink>
      </ul>
    </div>
  )
}

export default Navbar
