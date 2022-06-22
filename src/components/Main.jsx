import React from 'react';
import "./Main.scss";
import { groupObj, teacherObj, studentObj } from '../obj';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className='main d-flex position-relative'>
      <Navbar />
      <div className='main__data'>
        <Header />
        <div className='main__hero'>
          <h2 className='main__title'>
            Umumiy ma'lumotlar
          </h2>
          <ul className='main__list'>
            <li className='main__item'>
              <Link to={"/students"} className="main__link">
                <div className='main__item-type'>
                  O'quvchilar
                </div>
                <div className='main__item-box d-flex'>
                  <div className='main__item-num-box'>
                    <p className='main__item-num'>
                      {studentObj.length} nafar
                    </p>
                    <div className='main__item-stats d-flex align-items-center'>
                      <i className='bx bx-down-arrow-alt'></i>
                      5 nafar
                    </div>
                  </div>
                </div>
              </Link>
            </li>
            <li className='main__item'>
              <Link to={"/teachers"} className="main__link">
                <div className='main__item-type'>
                  O'qituvchilar
                </div>
                <div className='main__item-box d-flex'>
                  <div className='main__item-num-box'>
                    <p className='main__item-num'>
                      {teacherObj.length} nafar
                    </p>
                    <div className='main__item-stats green-stats d-flex align-items-center'>
                      <i className='bx bx-up-arrow-alt' ></i>
                      2 nafar
                    </div>
                  </div>
                </div>
              </Link>
            </li>
            <li className='main__item'>
              <Link to={"/groups"} className="main__link">
                <div className='main__item-type'>
                  Guruhlar
                </div>
                <div className='main__item-box d-flex'>
                  <div className='main__item-num-box'>
                    <p className='main__item-num'>
                      {groupObj.length} ta
                    </p>
                    <div className='main__item-stats d-flex align-items-center'>
                      <i className='bx bx-down-arrow-alt'></i>
                      1 ta
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Main
