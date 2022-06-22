import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header'
import Navbar from '../../Navbar/Navbar'
import "./StudentAdd.scss";
import { useDispatch, useSelector } from 'react-redux';
import { addStudent } from '../../../store/StudentContext/StudentSlice';

function StudentAdd() {
  const dispatch = useDispatch();

  const arr = useSelector(state => state.students);

  let [tempObj, setTempObj] = useState({
    id : arr.length + 1,
    name : "",
    group : [],
    number : "",
    groupNum : 1
  });

  const addHandler = () => {
    dispatch(
      addStudent({obj : tempObj})
    )
  }

  const nameHandler = (e) => {
    setTempObj({...tempObj, name : e.target.value})
  }

  const phoneHandler = (e) => {
    setTempObj({...tempObj, number : e.target.value});
  }

  const groupHandler = (e) => {
    setTempObj({...tempObj, group : [+e.target.value]})
  }

  return (
    <div className='main d-flex position-relative'>
      <Navbar />
      <div className='main__data col-9'>
        <Header />
        <div className='student'>
          <h2 className='student__title'>
            O'quvchi qo'shish
          </h2>
          <div className='student-add'>
            <div className='d-flex'>
              <div className='student-add__img-box col-6'>
                <h3 className='student-add__title'>
                  O'quvchining rasmi
                </h3>
                <div className='student-add__inner-img-box'>
                  <div className='student-add__borders'>
                    <i className='bx bxs-up-arrow-circle'></i>
                  </div>
                  <div className='student-add__inner-text'>
                    Rasmni tanlang
                  </div>
                </div>
              </div>
              <ul className='student-add__lists'>
                <li className="student-add__item">
                  <div className='student-add__input-box'>
                    <input 
                      type="text" 
                      name='name' 
                      className='student-edit__input student-add__input' 
                      required
                      id='name'
                      placeholder='Ismi'
                      onChange={nameHandler}
                    />
                    <label htmlFor="name" className='student-edit__label'>
                      O'quvchining ismini kiriting
                    </label>
                  </div>
                </li>
                <li className="student-edit__item">
                  <div className='student-add__input-box'>
                    <input 
                      type="tel" 
                      name='tel' 
                      className='student-edit__input student-add__input' 
                      required
                      id='tel'
                      placeholder='Telefon raqam'
                      pattern="[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                      onChange={phoneHandler}
                    />
                    <label htmlFor="tel" className='student-edit__label'>
                      O'quvchining telefon raqamini kiriting
                    </label>
                  </div>
                </li>
                <li className="student-add__item">
                  <div className='student-add__input-box'>
                    <input 
                      type="text" 
                      name='subject' 
                      className='student-edit__input student-add__input'
                      id='subject'
                      placeholder='Fanlar'
                    />
                    <label htmlFor="subject" className='student-edit__label'>
                      O'quvchining o'tgan fanlarini kiriting
                    </label>
                  </div>
                </li>
                <li className="student-add__item">
                  <div className='student-add__input-box'>
                    <select name="stats" id="stats" className='student-add__input student-edit__input'>
                      <option value="Holar">
                        Holat
                      </option>
                      <option value="Holar">
                        A'lo
                      </option>
                      <option value="Holar">
                        Yaxshi
                      </option>
                      <option value="Holar">
                        Yomon
                      </option>
                    </select>
                    <label htmlFor="stats" className='student-edit__label'>
                      O'quvchi holatini tanlang
                    </label>
                  </div>
                </li>
                <li className="student-add__item">
                  <div className='student-add__input-box'>
                    <input 
                      type="number" 
                      name='group' 
                      className='student-edit__input student-add__input' 
                      required
                      id='group'
                      placeholder='Guruhi'
                      onChange={groupHandler}
                    />
                    <label htmlFor="group" className='student-edit__label'>
                      O'quvchining guruhini kiriting
                    </label>
                  </div>
                </li>
              </ul>
            </div>
            <div className='student-edit__btns d-flex justify-content-center'>
              <Link to={"/students"}>
                <button 
                  type="button" 
                  className="btn btn-outline-primary me-3"
                >
                  Bekor qilish
                </button>
              </Link>
              <Link to={"/students"}>
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={addHandler}
                >
                  Qo'shish
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentAdd
